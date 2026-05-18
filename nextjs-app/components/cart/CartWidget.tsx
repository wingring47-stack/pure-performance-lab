'use client'

import { useCartStore } from '@/lib/cart-store'
import Link from 'next/link'
import Image from 'next/image'

export function CartWidget() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotalCents } = useCartStore()

  if (!isOpen) return null

  const subtotal = subtotalCents() / 100
  const estimatedShipping = subtotal >= 200 ? 0 : 12
  const total = subtotal + estimatedShipping

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
      />

      {/* Cart Slide-out */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-navy">Shopping Cart</h2>
            <p className="text-sm font-mono text-text-3 mt-0.5">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center text-text-2 hover:text-navy hover:bg-bg rounded transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 4h2.5l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21.5 8H6.5" />
                </svg>
              </div>
              <p className="text-text-2 mb-4">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="text-sm text-accent font-medium hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b border-border last:border-0">
                {/* Product Image */}
                <div className="w-20 h-20 bg-gradient-to-b from-gray-50 to-gray-100 rounded flex items-center justify-center flex-shrink-0 border border-border">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.productTitle}
                      width={80}
                      height={80}
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-10 h-12 bg-gray-200 rounded-sm" />
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${item.productSlug}`}
                    onClick={closeCart}
                    className="font-medium text-navy hover:text-accent transition block truncate"
                  >
                    {item.productTitle}
                  </Link>
                  <p className="text-sm font-mono text-text-3 mt-0.5">
                    {item.variationSize}mg
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center border border-border rounded hover:border-border-strong transition text-sm"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-mono text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center border border-border rounded hover:border-border-strong transition text-sm"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-xs text-red-600 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="font-mono font-semibold text-navy">
                    ${((item.priceCents * item.quantity) / 100).toFixed(2)}
                  </div>
                  {item.quantity > 1 && (
                    <div className="text-xs font-mono text-text-3 mt-0.5">
                      ${(item.priceCents / 100).toFixed(2)} each
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {items.length > 0 && (
          <div className="border-t border-border p-6">
            {/* Subtotal */}
            <div className="flex justify-between text-sm mb-2">
              <span className="text-text-2">Subtotal</span>
              <span className="font-mono font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between text-sm mb-4 pb-4 border-b border-border">
              <span className="text-text-2">Shipping</span>
              <span className="font-mono font-semibold">
                {estimatedShipping === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  `$${estimatedShipping.toFixed(2)}`
                )}
              </span>
            </div>

            {/* Free Shipping Notice */}
            {subtotal < 200 && (
              <div className="text-xs text-text-3 mb-4 pb-4 border-b border-border">
                Add <span className="font-semibold text-navy">${(200 - subtotal).toFixed(2)}</span> more for free shipping
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-navy">Total</span>
              <span className="font-mono font-bold text-xl text-navy">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full py-3 text-center bg-navy text-white font-semibold rounded hover:bg-navy-2 transition mb-2"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={closeCart}
              className="block w-full py-3 text-center text-navy font-medium hover:bg-bg rounded transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
