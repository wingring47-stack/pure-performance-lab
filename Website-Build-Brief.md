# Pure Performant Labs — Build Brief (v1)

Research-use-only peptide D2C store. Crypto + alt-payment only. US shipping.

Design mocks for Homepage and Shop Catalog are attached as standalone HTML.
Mocks are the source of truth for visual design and information architecture.

---

## 1. Customer-facing

- **Account creation + login** (email + password). Guest checkout also allowed.
- **Cart** that persists across sessions and devices when logged in.
- **Catalog** with search and filter by category, peptide class, size/mg, price.
- **Product detail page** with variations (size/mg), quantity selector, inline COA viewer (see Section 4), RUO disclaimer in-page.
- **RUO acknowledgment gate** — modal on first visit; checkbox at checkout that must be ticked to submit order.
- **Age gate** — 21+ confirmation, single click, persisted in a cookie.
- **Order confirmation page** + emailed receipt.
- **Order tracking page** — customer can look up status with order # + email, no login required.
- **Restricted-states logic** — block shipping to a configurable list of states at checkout.

---

## 2. Admin / operations UI

- **Product management** — add/edit product, upload product photos, edit description (rich-text editor with image embedding), upload COA images, mark as out of stock, mark as draft/published.
- **Variation management** — per-SKU price, stock count, weight.
- **Order management** — list view with filter/search. Each order shows: customer, items, payment status, fulfillment status, shipping address, COA(s) sent.
- **Order actions** — mark paid, mark packed, mark shipped (with tracking # entry), refund (records a refund event against the order; refund is executed manually outside the system for crypto).
- **Inventory** — stock count per variation, low-stock threshold alerts (email to admin).
- **Discount codes** — flat $, %, free shipping. Optional minimum cart value and per-code usage limit.
- **Customer list** — search by email, view order history per customer.
- **Shipping label generation** — Pirate Ship or Shippo integration (manual export is acceptable for v1; API is preferred).

---

## 3. Payments

Three gateways on the checkout page, customer picks one. Order is created in "pending" state on submit and transitions to "paid" only after the gateway confirms.

### BTCPay Server (self-hosted)
- Coins: BTC, LTC, XMR. Lightning enabled for BTC.
- **Payment tolerance: 5%** — customer can underpay by up to 5% and the order is still marked paid (covers small rate drifts and network fees).
- **Confirmation requirements:**
  - BTC on-chain: 1 confirmation (~10 min)
  - BTC Lightning: 0-conf (instant)
  - LTC: 2 confirmations
  - XMR: 10 confirmations (XMR blocks are fast; this is ~20 min)
- **Rate lock window: 30 minutes** from invoice creation.
- **Speed policy:** "MediumSpeed" — orders settle on 1 conf, balances are spendable from your wallet immediately.
- No automatic wallet sweep — funds stay in the BTCPay-connected wallet until manually moved.

### Shkeeper (self-hosted)
- Fallback for additional altcoins (ETH, USDT, USDC, TRX, etc.) — coin list configurable in admin.
- Same 5% tolerance, 30 min rate lock.
- Confirmation: 1 for ETH-family, 20 for TRX, 12 for USDT-ERC20.

### Poof.io
- Accepts Venmo, PayPal, Cash App.
- Treat as best-effort — if Poof's upstream account gets restricted, gracefully fall back to "this method is temporarily unavailable" rather than a hard error.

### Cross-gateway requirements
- Webhook handler per gateway that updates order status atomically.
- Idempotent webhook processing (replay-safe).
- Manual "mark as paid" override in admin for edge cases.
- Underpayment beyond tolerance creates a flagged order for manual review, does not auto-cancel.
- All payment events (received, confirmed, failed) logged against the order, viewable in admin.

---

## 4. COA display

COAs are stored and displayed as **images** (JPG/PNG), not PDFs.

On every product detail page:
- COA image visible inline on the page (thumbnail or embedded preview).
- Clickable to open a fullscreen lightbox / zoom view.

**Not downloadable through the normal UX path:**
- Right-click → "Save image as" disabled (`contextmenu` blocked on the image element).
- Image dragging disabled.
- No direct download link, no "Download COA" button anywhere.
- Image served through a signed / short-lived URL (not a static public path that can be hotlinked or bookmarked).
- `Content-Disposition: inline` only — never `attachment`.
- Realistic note for dev: a determined user can still screenshot or inspect network traffic. The goal is to prevent the casual right-click-save flow and public sharing of the file, not absolute protection. Don't over-engineer DRM.

Admin upload UI: drag-and-drop or file picker, accepts JPG/PNG/WebP, auto-resizes to a max width (e.g. 2000px), strips EXIF metadata.

---

## 5. Email (transactional)

Use Postmark, Resend, or AWS SES. SPF/DKIM/DMARC configured for the sending domain.

Transactional templates required:
- Order placed (pending payment)
- Payment confirmed
- Order shipped (with tracking #)
- Order delivered (optional, if carrier provides webhook)
- Refund processed
- Password reset
- "Notify me when back in stock" trigger

No marketing email infrastructure in scope.

---

## 6. Compliance / legal pages

Static pages, editable via admin or markdown files:
- Terms of Sale (with RUO clause)
- Privacy Policy
- Shipping Policy (including restricted states and customs/seizure policy)
- Refund Policy
- Contact

RUO disclaimer text appears on:
- Every product detail page
- Cart page
- Checkout page
- Footer of every page

---

## 7. Infrastructure

- HTTPS via Let's Encrypt or Cloudflare.
- Cloudflare in front of the origin (DDoS, basic WAF, image caching).
- **Daily backups** of database and uploaded files (COA PDFs, product images). 30-day retention minimum.
- **Admin 2FA** required (TOTP).
- **Staging environment** mirroring production, separate database, separate wallet configs.
- Self-hosted services (BTCPay, Shkeeper) on the same or adjacent VPS with their own backup policies.
- Logs retained 30 days for application; indefinitely for payment events.

---

## 8. Data model

Postgres (preferred) or MySQL. Direct read access via SQL for admin/analytics.

Daily CSV export of orders to an S3 bucket or equivalent.

Core entities:
- **Customer** — id, email, password_hash, created_at, ruo_accepted_at, age_confirmed_at
- **Address** — id, customer_id, name, street, city, state, zip, country
- **Product** — id, slug, title, description_md, category, status (draft/published)
- **Variation** — id, product_id, size_mg, sku, price_cents, stock_count, weight_g
- **COA** — id, product_id (or variation_id), lot_number, image_url, uploaded_at
- **Order** — id, customer_id (nullable for guest), email, shipping_address_id, status, payment_status, fulfillment_status, subtotal_cents, shipping_cents, discount_cents, total_cents, created_at, ruo_acknowledged_at
- **OrderItem** — id, order_id, variation_id, quantity, unit_price_cents
- **Payment** — id, order_id, gateway (btcpay/shkeeper/poof), gateway_invoice_id, amount_cents, currency, status, raw_payload_json, created_at, confirmed_at
- **Shipment** — id, order_id, carrier, tracking_number, shipped_at
- **RefundLog** — id, order_id, amount_cents, reason, executed_by, executed_at
- **DiscountCode** — code, type (flat/percent/free_shipping), value, min_cart_cents, usage_limit, used_count, expires_at
- **StockNotification** — id, variation_id, email, created_at, notified_at

---

## 9. SEO basics

- Product schema (JSON-LD) on every product page.
- XML sitemap auto-generated.
- OG / Twitter card tags on all pages.
- Canonical URLs, especially for product variations.
- robots.txt configured (allow crawl; consider blocking known scrapers).

---

## 10. Deliverables expected from dev

- Working staging URL.
- Working production deployment.
- Admin handover: credentials, runbook for common ops (refund, add product, change shipping rate).
- Source code in a git repo we own.
- DB schema migration scripts.
- README covering local dev setup, env vars, and deploy process.
- 30 days of post-launch bug-fix support included.
- All AI-generated code must be reviewed by the dev before commit. Payment, auth, and webhook handlers in particular must include idempotency, replay protection, and rate limiting, with tests.

---

## 11. Out of scope for v1

- Subscriptions / auto-reorder
- B2B / wholesale pricing tier
- Customer reviews
- Affiliate / referral program
- Abandoned cart emails
- Blog / CMS for non-product content
- Customer reviews
- Native mobile app
- Live chat
- Phone support
- Multi-language
- Multi-currency display
