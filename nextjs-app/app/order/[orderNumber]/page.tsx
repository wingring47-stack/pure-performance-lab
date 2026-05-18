'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export default function OrderConfirmationPage() {
  const params = useParams()
  const orderNumber = params.orderNumber as string

  return (
    <>
      <Navigation />

      <div className="bg-bg min-h-screen py-16">
        <div className="container mx-auto px-8 max-w-2xl text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl font-semibold text-navy mb-4">
            Order Confirmed!
          </h1>

          <p className="text-lg text-text-2 mb-2">
            Thank you for your order. We've sent a confirmation email with your order details.
          </p>

          <div className="inline-flex items-center gap-2 bg-bg-surface border border-border rounded px-4 py-2 mb-8">
            <span className="text-sm text-text-3">Order Number:</span>
            <span className="font-mono font-semibold text-navy">{orderNumber}</span>
          </div>

          {/* Next Steps */}
          <div className="bg-white border border-border rounded-lg p-8 text-left mb-8">
            <h2 className="text-xl font-semibold text-navy mb-4">What's Next?</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                  1
                </div>
                <div>
                  <div className="font-medium text-navy mb-1">Complete Payment</div>
                  <div className="text-sm text-text-2">
                    You'll receive an email with payment instructions for your selected payment method.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                  2
                </div>
                <div>
                  <div className="font-medium text-navy mb-1">Order Processing</div>
                  <div className="text-sm text-text-2">
                    Once payment is confirmed, we'll process and pack your order within 24 hours.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold">
                  3
                </div>
                <div>
                  <div className="font-medium text-navy mb-1">Shipping</div>
                  <div className="text-sm text-text-2">
                    Your order will be shipped with tracking. Delivery typically takes 2-5 business days.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Track Order */}
          <div className="space-y-3">
            <Link
              href={`/track?order=${orderNumber}`}
              className="inline-block px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-2 transition"
            >
              Track Your Order
            </Link>
            
            <div>
              <Link href="/shop" className="text-accent hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-text-3">
              Questions about your order?{' '}
              <Link href="/contact" className="text-accent hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
