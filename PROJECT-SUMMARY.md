# Pure Performant Labs - Cyclicpeptide.ai E-Commerce Platform

**Domain:** Cyclicpeptide.ai (Pure Performant Labs)  
**Type:** Research-Use-Only (RUO) Peptide E-Commerce Store  
**Region:** US Shipping Only  
**Payment:** Cryptocurrency + Alternative Payments Only

## 🎯 Project Overview

一个面向研究用途的环肽（Cyclic Peptide）电商平台，支持加密货币支付（BTC, LTC, XMR, ETH, USDT等），以及替代支付方式（Venmo, PayPal, Cash App）。

## 🏗️ Tech Stack

### Frontend
- **Framework:** Next.js 14 + React 18
- **Styling:** Tailwind CSS + shadcn/ui
- **State Management:** Zustand / Redux Toolkit
- **Forms:** React Hook Form + Zod validation

### Backend
- **Runtime:** Node.js 20+
- **Framework:** Next.js API Routes (或 Express.js)
- **Database:** PostgreSQL 15+
- **ORM:** Prisma
- **Auth:** NextAuth.js + 2FA (TOTP)

### Payments
1. **BTCPay Server** (self-hosted) - BTC, LTC, XMR + Lightning
2. **Shkeeper** (self-hosted) - ETH, USDT, USDC, TRX
3. **Poof.io** - Venmo, PayPal, Cash App

### Infrastructure
- **Hosting:** VPS (Hetzner / DigitalOcean / Vultr)
- **CDN:** Cloudflare
- **Email:** Postmark / Resend / AWS SES
- **Shipping:** Pirate Ship / Shippo API
- **Backup:** Daily automated to S3

## 📋 Core Features

### Customer-Facing
- ✅ Account creation + Guest checkout
- ✅ Product catalog with filters (category, peptide class, size, price)
- ✅ Product detail pages with COA inline viewer
- ✅ Shopping cart (persists across sessions when logged in)
- ✅ RUO acknowledgment gate (modal + checkout checkbox)
- ✅ Age gate (21+, cookie-based)
- ✅ Order tracking (order # + email, no login required)
- ✅ Restricted states blocking at checkout

### Admin Panel
- ✅ Product management (CRUD, photos, descriptions, COAs)
- ✅ Variation management (SKU, price, stock, weight)
- ✅ Order management (list, filter, search, status updates)
- ✅ Order actions (mark paid, mark shipped, refund logging)
- ✅ Inventory management (stock counts, low-stock alerts)
- ✅ Discount codes (flat $, %, free shipping)
- ✅ Customer management (search, order history)
- ✅ Shipping label generation (Pirate Ship / Shippo)

### Security & Compliance
- ✅ HTTPS (Let's Encrypt via Cloudflare)
- ✅ Admin 2FA (TOTP)
- ✅ Daily backups (30-day retention)
- ✅ Idempotent webhook handlers
- ✅ Rate limiting on auth/payment endpoints
- ✅ RUO disclaimers on every page

## 💳 Payment Flow

```
Customer → Checkout → Select Gateway
    ↓
Order created (status: "pending")
    ↓
Gateway generates invoice
    ↓
Customer pays (30min rate lock window)
    ↓
Webhook received → Verify payment
    ↓
Order status → "paid" (after confirmations)
    ↓
Admin marks "packed" → "shipped"
    ↓
Customer receives tracking email
```

**Confirmation Requirements:**
- BTC on-chain: 1 conf (~10 min)
- BTC Lightning: 0-conf (instant)
- LTC: 2 confs
- XMR: 10 confs (~20 min)
- ETH/USDT: 1 conf
- TRX: 20 confs

**Payment Tolerance:** 5% underpayment allowed (covers rate drift + fees)

## 🗄️ Database Schema

### Core Tables
```
customers → addresses → orders → order_items → payments
                                ↓
                            shipments
products → variations → coas
discount_codes
stock_notifications
refund_logs
```

## 📧 Transactional Emails

1. Order placed (pending payment)
2. Payment confirmed
3. Order shipped (with tracking #)
4. Order delivered (optional webhook)
5. Refund processed
6. Password reset
7. "Notify me when back in stock" trigger

## 🚫 Out of Scope (v1)

- Subscriptions / auto-reorder
- B2B / wholesale pricing
- Customer reviews
- Affiliate / referral program
- Abandoned cart emails
- Blog / CMS
- Multi-language
- Multi-currency display
- Native mobile app
- Live chat

## 📦 Deliverables

1. ✅ Working staging environment
2. ✅ Production deployment
3. ✅ Admin credentials + runbook
4. ✅ Source code in private git repo
5. ✅ DB migration scripts
6. ✅ Local dev setup README
7. ✅ 30 days post-launch bug-fix support

## 🎨 Design Assets

- **Homepage design mock:** `Homepage-inline.html` (in Google Drive)
- **Shop Catalog design mock:** `Shop-Catalog-inline.html` (in Google Drive)
- **Source folder:** `webssite-handoff-source/` (images, assets)

## 🔐 COA Protection

COAs displayed as **images** (JPG/PNG), NOT downloadable:
- ❌ Right-click "Save image as" disabled
- ❌ No download button
- ❌ Drag-and-drop disabled
- ✅ Signed short-lived URLs
- ✅ `Content-Disposition: inline` only
- ✅ Fullscreen lightbox for viewing

**Admin upload:** Drag-drop, auto-resize to 2000px max, strip EXIF

## 📊 Next Steps

1. ✅ Read Website Build Brief
2. ⏳ Download design mocks (Homepage & Shop Catalog HTML)
3. ⏳ Set up Next.js project structure
4. ⏳ Design database schema (Prisma)
5. ⏳ Implement frontend (based on design mocks)
6. ⏳ Build admin panel
7. ⏳ Integrate payment gateways
8. ⏳ Deploy to staging
9. ⏳ Testing & QA
10. ⏳ Production launch

---

**Started:** 2026-05-17  
**Status:** Requirements gathered, design review pending  
**Domain:** Cyclicpeptide.ai (to be configured)
