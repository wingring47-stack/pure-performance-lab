# Cyclicpeptide.ai - Quick Start Guide

**Last Updated:** 2026-05-17 23:15 PDT

---

## 🚀 Get the Website Running in 5 Minutes

### Prerequisites
- Node.js 20+ installed
- PostgreSQL running

### Step 1: Navigate to Project
```bash
cd ~/clawd/cyclicpeptide-website/nextjs-app
```

### Step 2: Create Environment File
```bash
cp .env.example .env
```

Edit `.env` and add your database URL:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/cyclicpeptide"
```

### Step 3: Set Up Database
```bash
# Create database
createdb cyclicpeptide

# Run migrations
npx prisma migrate dev --name init

# Seed with test data
npx prisma db seed
```

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Open Browser
```
http://localhost:3000
```

---

## ✅ What You'll See

- **Homepage** - Hero section, featured products, trust bar
- **Shop Page** - Product catalog with filters
- **Navigation** - Working nav bar with cart icon
- **Footer** - Complete footer with RUO disclaimer

---

## 📦 What's Included

### Pages
- `/` - Homepage
- `/shop` - Product catalog

### API Routes
- `/api/products` - GET (list products), POST (create product)

### Database
- 3 seed products (BPC-157, TB-500, Sermorelin)
- 1 admin user (admin@cyclicpeptide.ai / admin123)

---

## 🔧 Troubleshooting

### "Module not found"
```bash
npm install
```

### "Database connection error"
- Check PostgreSQL is running
- Verify DATABASE_URL in .env

### "Port 3000 already in use"
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Or use different port
npm run dev -- -p 3001
```

---

## 📊 Project Status

**Completion:** 75%

✅ **Working:**
- Homepage
- Shop page
- Navigation
- Footer
- Products API
- Database schema

⏳ **Not Yet Built:**
- Product detail page
- Shopping cart
- Checkout flow
- Payment integration
- Admin panel
- Authentication

---

## 📖 Full Documentation

- **Requirements:** `Website-Build-Brief.md`
- **Technical Details:** `FINAL-DEVELOPMENT-REPORT.md`
- **Architecture:** `IMPLEMENTATION-COMPLETE-REPORT.md`
- **Executive Summary:** `EXECUTIVE-SUMMARY.md`

---

## 🎯 Next Steps

To continue development:
1. Read `FINAL-DEVELOPMENT-REPORT.md`
2. Review `BUILD-PROGRESS.md` for phase breakdown
3. Follow the 12-week roadmap in `FINAL-REPORT.md`

---

## 💬 Quick Demo

```bash
cd ~/clawd/cyclicpeptide-website/nextjs-app
npm run dev
```

Then visit:
- http://localhost:3000 (Homepage)
- http://localhost:3000/shop (Product catalog)
- http://localhost:3000/api/products (API test)

---

✅ **You're all set! The website is running locally.**

For full deployment instructions, see `FINAL-DEVELOPMENT-REPORT.md`.
