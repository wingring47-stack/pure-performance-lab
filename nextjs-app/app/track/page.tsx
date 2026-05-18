'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState<any>(null)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Mock order tracking (replace with API call in production)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setOrder({
        orderNumber,
        email,
        status: 'SHIPPED',
        paymentStatus: 'PAID',
        tracking: 'USPS-1Z999AA10123456784',
        estimatedDelivery: '2026-05-22',
        items: [
          { name: 'Phosphatidylcholine 100mg', quantity: 1, price: 48 },
        ],
        total: 60,
      })
    } catch (error) {
      alert('Order not found')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />

      <div className="bg-bg min-h-screen py-16">
        <div className="container mx-auto px-8 max-w-2xl">
          <h1 className="text-4xl font-semibold text-navy mb-2">Track Your Order</h1>
          <p className="text-text-2 mb-8">
            Enter your order number and email to track your shipment.
          </p>

          {!order ? (
            <form onSubmit={handleTrack} className="bg-white border border-border rounded-lg p-8">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Order Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="ORD-1234567890"
                    className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-navy text-white font-semibold rounded hover:bg-navy-2 transition disabled:bg-gray-300"
              >
                {loading ? 'Searching...' : 'Track Order'}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Order Status */}
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-navy">Order Status</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded">
                    {order.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-text-3 mb-1">Order Number</div>
                    <div className="font-mono font-semibold">{order.orderNumber}</div>
                  </div>
                  <div>
                    <div className="text-text-3 mb-1">Payment</div>
                    <div className="font-semibold text-green-600">{order.paymentStatus}</div>
                  </div>
                  <div>
                    <div className="text-text-3 mb-1">Tracking Number</div>
                    <div className="font-mono font-medium text-navy">{order.tracking}</div>
                  </div>
                  <div>
                    <div className="text-text-3 mb-1">Est. Delivery</div>
                    <div className="font-medium">{order.estimatedDelivery}</div>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="bg-white border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-navy mb-4">Items</h2>
                <div className="space-y-3">
                  {order.items.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-text-3">Qty: {item.quantity}</div>
                      </div>
                      <div className="font-mono font-semibold">${item.price}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-mono font-bold text-lg">${order.total}</span>
                </div>
              </div>

              <button
                onClick={() => setOrder(null)}
                className="text-accent hover:underline"
              >
                ← Track Another Order
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
