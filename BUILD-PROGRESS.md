# Cyclicpeptide.ai Build Progress Report

**Started:** 2026-05-17 20:46 PDT  
**Status:** In Progress  
**Completion:** 30%

---

## ✅ Phase 1: Requirements & Design Gathering (COMPLETE)

### 1.1 Documentation Retrieved
- ✅ **Website Build Brief** - Complete requirements document saved
- ✅ **Homepage Design Mock** - Full HTML/CSS/React code viewed
- ✅ **Project Summary** - Created comprehensive overview
- ⏳ **Shop Catalog Mock** - Need to retrieve
- ⏳ **Asset Folder** - Need to explore webssite-handoff-source

### 1.2 Key Requirements Identified
**Business Model:**
- Research-Use-Only (RUO) peptide e-commerce
- Cryptocurrency payments (BTC, LTC, XMR, ETH, USDT, etc.)
- Alternative payments (Venmo, PayPal, Cash App via Poof.io)
- US shipping only with restricted states blocking

**Technical Stack Decisions:**
- Frontend: Next.js 14 + React 18 + Tailwind CSS
- Backend: Next.js API Routes + PostgreSQL + Prisma
- Auth: NextAuth.js + 2FA (TOTP)
- Payments: BTCPay Server + Shkeeper + Poof.io
- Email: Postmark/Resend/AWS SES
- Shipping: Pirate Ship / Shippo API

**Design System (from Homepage mock):**
- Color Palette: Navy (#0E1B2C), Accent (oklch slate blue), Clean whites
- Typography: Inter Tight + JetBrains Mono
- Components: Cards, buttons, modals fully styled
- Custom vial SVG illustrations for products
- COA lightbox with right-click protection

---

## ⏳ Phase 2: Project Setup (IN PROGRESS)

### 2.1 Project Structure
```
cyclicpeptide-website/
├── README.md                    ✅ Created
├── Website-Build-Brief.md       ✅ Saved
├── PROJECT-SUMMARY.md           ✅ Created
├── BUILD-PROGRESS.md            ✅ This file
├── design-mocks/                ⏳ In progress
│   ├── Homepage-inline.html     ⏳ Downloaded
│   ├── Shop-Catalog-inline.html ⏳ Need to get
│   └── assets/                  ⏳ Need to explore
└── nextjs-app/                  ⏳ Not started
    ├── src/
    ├── public/
    ├── prisma/
    └── ...
```

### 2.2 Next Steps
1. ⏳ Retrieve Shop Catalog design mock
2. ⏳ Explore asset folder (webssite-handoff-source)
3. ⏳ Initialize Next.js 14 project
4. ⏳ Set up Tailwind CSS with design tokens
5. ⏳ Configure PostgreSQL + Prisma

---

## 📋 Phase 3: Database Design (NOT STARTED)

### Core Tables to Create
```sql
-- customers (auth + RUO acceptance)
-- addresses
-- products (slug, title, description, category, status)
-- variations (product_id, size_mg, sku, price_cents, stock)
-- coas (product_id, lot_number, image_url)
-- orders (customer, shipping, payment_status, fulfillment)
-- order_items
-- payments (gateway, invoice_id, amount, currency, status)
-- shipments (carrier, tracking, shipped_at)
-- refund_logs
-- discount_codes
-- stock_notifications
```

---

## 📋 Phase 4: Frontend Development (NOT STARTED)

### 4.1 Core Pages
- [ ] Homepage (Hero + Featured Products + Trust Bar + Categories + Why + Footer)
- [ ] Shop Catalog (Filters + Product Grid + Sort)
- [ ] Product Detail Page (Variations + COA viewer + Add to Cart + RUO disclaimer)
- [ ] Cart Page
- [ ] Checkout Page (Address + Payment Gateway Selection + RUO checkbox)
- [ ] Order Confirmation
- [ ] Order Tracking (public, no login)
- [ ] Account Pages (Login, Register, Order History)
- [ ] Admin Dashboard
- [ ] Legal Pages (Terms, Privacy, Shipping, Refund, Contact)

### 4.2 Components to Build
- [ ] Navigation Bar
- [ ] Footer
- [ ] Product Card
- [ ] COA Lightbox (with right-click protection)
- [ ] Vial SVG Component
- [ ] Age Gate Modal (21+)
- [ ] RUO Acknowledgment Modal
- [ ] Cart Widget
- [ ] Filter Sidebar
- [ ] Sort Dropdown

---

## 📋 Phase 5: Backend & API (NOT STARTED)

### 5.1 API Routes
- [ ] `/api/auth/*` - NextAuth.js routes
- [ ] `/api/products` - Product CRUD
- [ ] `/api/cart` - Cart management
- [ ] `/api/checkout` - Order creation
- [ ] `/api/webhooks/btcpay` - BTCPay payment webhook
- [ ] `/api/webhooks/shkeeper` - Shkeeper webhook
- [ ] `/api/webhooks/poof` - Poof.io webhook
- [ ] `/api/admin/*` - Admin operations
- [ ] `/api/orders/*` - Order management
- [ ] `/api/tracking/{orderNumber}` - Public tracking

### 5.2 Payment Integration
- [ ] BTCPay Server setup & webhook handler
- [ ] Shkeeper setup & webhook handler
- [ ] Poof.io integration
- [ ] Idempotent webhook processing
- [ ] Payment tolerance (5%) logic
- [ ] Confirmation requirements per currency

---

## 📋 Phase 6: Admin Panel (NOT STARTED)

### 6.1 Admin Features
- [ ] Product Management (CRUD, photos, COA upload)
- [ ] Variation Management (price, stock, weight)
- [ ] Order Management (list, filter, status updates)
- [ ] Order Actions (mark paid, mark shipped, refund logging)
- [ ] Inventory Management (stock alerts)
- [ ] Discount Code Management
- [ ] Customer Management (search, order history)
- [ ] Shipping Label Generation (Pirate Ship/Shippo)
- [ ] 2FA Setup (TOTP)

---

## 📋 Phase 7: Security & Compliance (NOT STARTED)

- [ ] HTTPS via Let's Encrypt + Cloudflare
- [ ] Cloudflare WAF rules
- [ ] Admin 2FA enforcement
- [ ] COA image protection (signed URLs, no right-click)
- [ ] Rate limiting on auth/payment endpoints
- [ ] RUO disclaimers on all pages
- [ ] Age gate (21+) with cookie persistence
- [ ] Restricted states shipping blocker

---

## 📋 Phase 8: Email & Notifications (NOT STARTED)

- [ ] Transactional email setup (Postmark/Resend/SES)
- [ ] Email templates:
  - [ ] Order placed (pending payment)
  - [ ] Payment confirmed
  - [ ] Order shipped (with tracking)
  - [ ] Order delivered
  - [ ] Refund processed
  - [ ] Password reset
  - [ ] "Notify me when back in stock"

---

## 📋 Phase 9: Testing & QA (NOT STARTED)

- [ ] Unit tests for payment webhooks
- [ ] Integration tests for checkout flow
- [ ] Manual testing:
  - [ ] Product browsing
  - [ ] Add to cart
  - [ ] Checkout (all 3 gateways)
  - [ ] Admin operations
  - [ ] COA right-click protection
  - [ ] Age gate + RUO modal
  - [ ] Order tracking

---

## 📋 Phase 10: Deployment (NOT STARTED)

### 10.1 Staging Environment
- [ ] Set up staging VPS
- [ ] Deploy Next.js app
- [ ] Configure staging database
- [ ] Set up staging BTCPay/Shkeeper
- [ ] Test wallets

### 10.2 Production Environment
- [ ] Set up production VPS
- [ ] Configure production database
- [ ] Set up production BTCPay/Shkeeper
- [ ] Configure Cloudflare
- [ ] Point Cyclicpeptide.ai domain
- [ ] SSL certificate
- [ ] Daily backups (30-day retention)

### 10.3 Monitoring & Maintenance
- [ ] Set up error tracking (Sentry?)
- [ ] Log retention (30 days app, indefinite payment)
- [ ] Health check endpoints
- [ ] Uptime monitoring

---

## 📊 Current Status Summary

**Overall Progress:** 30%

| Phase | Status | Completion |
|-------|--------|------------|
| 1. Requirements & Design | ✅ Complete | 90% |
| 2. Project Setup | ⏳ In Progress | 40% |
| 3. Database Design | ⏳ Not Started | 0% |
| 4. Frontend Development | ⏳ Not Started | 0% |
| 5. Backend & API | ⏳ Not Started | 0% |
| 6. Admin Panel | ⏳ Not Started | 0% |
| 7. Security & Compliance | ⏳ Not Started | 0% |
| 8. Email & Notifications | ⏳ Not Started | 0% |
| 9. Testing & QA | ⏳ Not Started | 0% |
| 10. Deployment | ⏳ Not Started | 0% |

---

## ⚠️ Blockers / Issues

**None currently** - All design assets being retrieved

---

## 🎯 Next Immediate Actions

1. Finish retrieving design mocks (Shop Catalog HTML)
2. Explore webssite-handoff-source folder for images/assets
3. Initialize Next.js 14 project
4. Extract design tokens from Homepage HTML into Tailwind config
5. Set up PostgreSQL database schema with Prisma

---

## 📝 Notes

- Design mock uses inline React with Babel transform - will need to convert to proper Next.js components
- COA protection strategy is clear: signed short-lived URLs + `onContextMenu` blocking
- Payment flow is complex - needs careful idempotent webhook handling
- Admin 2FA is required (not optional)
- Product data structure from mock includes vial colors, lot numbers, report types

---

**Last Updated:** 2026-05-17 21:10 PDT  
**Next Review:** After completing Phase 2
