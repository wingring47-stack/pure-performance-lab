# Pure Lipid Performance - Today's Development Plan
**Date:** 2026-05-18 (Monday)
**Start:** 00:22 PDT

---

## ✅ Phase 1: Rebranding (COMPLETE)
- [x] Rename project: Cyclicpeptide.ai → Pure Lipid Performance
- [x] Update all branding (Navigation, Footer, Homepage)
- [x] Change product focus: Peptides → Lipids
- [x] Update ProductCategory enum (Phospholipids, Ceramides, etc.)
- [x] Create new seed data with 6 lipid products
- [x] Update Shop page categories

---

## 🚀 Phase 2: Core Features (TODAY'S FOCUS)

### Priority 1: Product Detail Page (3-4 hours)
- [ ] Create `/product/[slug]/page.tsx`
- [ ] Variation selector (size dropdown)
- [ ] Add to cart button
- [ ] Product images + COA thumbnails
- [ ] Full product description
- [ ] Molecular weight + purity display
- [ ] Stock indicator
- [ ] Related products section

### Priority 2: Shopping Cart (3-4 hours)
- [ ] Zustand store for cart state
- [ ] Cart slide-out widget
- [ ] Add/remove/update quantity
- [ ] Cart persistence (localStorage)
- [ ] Cart API routes (`/api/cart`)
- [ ] Cart summary (subtotal, shipping estimate)
- [ ] Empty cart state
- [ ] Continue shopping button

### Priority 3: Checkout Flow (4-5 hours)
- [ ] `/checkout` page with steps
- [ ] Step 1: Contact info (email)
- [ ] Step 2: Shipping address form
- [ ] Step 3: Payment gateway selector
- [ ] RUO checkbox + age confirmation
- [ ] Order summary sidebar
- [ ] Form validation (Zod)
- [ ] State restriction check
- [ ] Create order API (`POST /api/orders`)

### Priority 4: Payment Integration (3-4 hours)
- [ ] BTCPay Server integration
- [ ] Shkeeper integration
- [ ] Poof.io integration
- [ ] Payment webhook handlers
- [ ] Order confirmation page
- [ ] Email notification trigger

---

## 🎯 Today's Goal
**Complete Product Detail Page + Shopping Cart** (50% of remaining work)

By end of day:
- Users can view product details
- Users can add products to cart
- Cart persists across page reloads
- Cart shows accurate totals

---

## 📊 Progress Tracker

**Start of Day:** 75% complete
**Target by EOD:** 87% complete (+12%)

### Milestones
- [ ] 8:00 AM - Product detail page functional
- [ ] 12:00 PM - Shopping cart working
- [ ] 4:00 PM - Add to cart from product page
- [ ] 8:00 PM - Cart widget polished

---

## 🛠️ Technical Tasks

### Database
- [ ] Run new migration for category changes
- [ ] Seed database with lipid products
- [ ] Test product queries

### Components to Build
1. ProductDetail (main component)
2. VariationSelector (size picker)
3. AddToCartButton (with loading state)
4. CartWidget (slide-out)
5. CartItem (cart line item)
6. CartSummary (totals)

### API Routes to Build
1. `GET /api/products/[slug]` - Single product
2. `GET /api/cart` - Get cart
3. `POST /api/cart` - Add item
4. `PATCH /api/cart/[id]` - Update quantity
5. `DELETE /api/cart/[id]` - Remove item

---

## 🎨 Design References
- Homepage: ✅ Complete
- Shop page: ✅ Complete
- Product detail: 🎯 To build (reference Website Build Brief)
- Cart widget: 🎯 To build (slide-out from right)

---

## 🚦 Status
**Current:** Rebranding complete, starting core features
**Next:** Product detail page development
**Blockers:** None

---

Let's build! 🚀
