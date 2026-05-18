'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/cart-store'

export function Navigation() {
  const { totalItems, openCart } = useCartStore()

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-ink text-text-on-dark text-center text-xs py-2.5 border-b border-black">
        <span className="font-semibold text-white">FREE SHIPPING</span> on orders over $200
        <span className="text-text-3 mx-2">•</span>
        <span className="text-text-on-dark-2">BTC, ETH, XMR accepted</span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-bg-surface border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-navy rounded flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-medium text-sm tracking-widest text-navy">
                  PURE PERFORMANCE
                </span>
                <span className="font-mono text-[9px] tracking-[0.42em] text-text-3 mt-0.5">
                  LAB
                </span>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="flex gap-1">
              <Link 
                href="/shop" 
                className="px-4 py-2 text-sm font-medium text-text-2 hover:text-navy hover:bg-bg rounded transition"
              >
                Shop
              </Link>
              <Link 
                href="/shop" 
                className="px-4 py-2 text-sm font-medium text-text-2 hover:text-navy hover:bg-bg rounded transition"
              >
                Catalog
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-text-2 hover:text-navy hover:bg-bg rounded transition"
              >
                About
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center text-text-2 hover:text-navy hover:bg-bg rounded transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              
              <button
                onClick={openCart}
                className="w-10 h-10 flex items-center justify-center text-text-2 hover:text-navy hover:bg-bg rounded transition relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 4h2.5l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21.5 8H6.5" />
                  <circle cx="10" cy="20" r="1.2" />
                  <circle cx="18" cy="20" r="1.2" />
                </svg>
                {totalItems() > 0 && (
                  <span className="absolute top-1 right-1 bg-accent text-white text-[10px] font-mono font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems()}
                  </span>
                )}
              </button>

              <Link 
                href="/account" 
                className="ml-2 px-4 py-2 text-sm font-medium bg-navy text-white rounded hover:bg-navy-2 transition"
              >
                Account
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
