'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { useCartStore } from '@/lib/cart-store'

type CheckoutStep = 'contact' | 'shipping' | 'payment' | 'review'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotalCents, clearCart } = useCartStore()
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('contact')
  const [loading, setLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    name: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    ruoAccepted: false,
    ageConfirmed: false,
    paymentGateway: 'BTCPAY' as 'BTCPAY' | 'SHKEEPER' | 'POOF',
  })

  const subtotal = subtotalCents() / 100
  const shipping = subtotal >= 200 ? 0 : 12
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-8 py-24 text-center">
          <h1 className="text-3xl font-semibold text-navy mb-4">Your cart is empty</h1>
          <Link href="/shop" className="text-accent hover:underline">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.ruoAccepted || !formData.ageConfirmed) {
      alert('Please accept RUO terms and confirm you are 21+')
      return
    }

    setLoading(true)

    try {
      // Create order
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          items: items.map(item => ({
            variationId: item.variationId,
            quantity: item.quantity,
          })),
          shippingAddress: {
            name: formData.name,
            street: formData.street,
            street2: formData.street2,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            phone: formData.phone,
          },
          paymentGateway: formData.paymentGateway,
        }),
      })

      if (res.ok) {
        const { order } = await res.json()
        clearCart()
        router.push(`/order/${order.orderNumber}`)
      } else {
        alert('Failed to create order')
      }
    } catch (error) {
      console.error('Order creation failed:', error)
      alert('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />

      <div className="bg-bg min-h-screen py-8">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="font-mono text-xs text-text-3 flex gap-2 items-center mb-6">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-navy">Shop</Link>
            <span>/</span>
            <span className="text-navy font-medium">Checkout</span>
          </nav>

          <h1 className="text-4xl font-semibold text-navy mb-8">Checkout</h1>

          <div className="grid grid-cols-3 gap-8">
            {/* Left: Form */}
            <div className="col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-navy mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Confirm Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.confirmEmail}
                        onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-navy mb-4">Shipping Address</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.street}
                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Apartment, suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        value={formData.street2}
                        onChange={(e) => setFormData({ ...formData, street2: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          State *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                          placeholder="CA"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.zip}
                          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy mb-1">
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded focus:border-navy focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-navy mb-4">Payment Method</h2>
                  
                  <div className="space-y-3">
                    {[
                      { id: 'BTCPAY', label: 'Bitcoin / Lightning / Crypto', desc: 'BTC, ETH, LTC, XMR via BTCPay' },
                      { id: 'SHKEEPER', label: 'Cryptocurrency', desc: 'ETH, USDT, USDC, TRX via Shkeeper' },
                      { id: 'POOF', label: 'Cash App / Venmo / PayPal', desc: 'Via Poof.io' },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-start gap-3 p-4 border rounded cursor-pointer transition ${
                          formData.paymentGateway === method.id
                            ? 'border-navy bg-navy/5'
                            : 'border-border hover:border-border-strong'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={formData.paymentGateway === method.id}
                          onChange={(e) => setFormData({ ...formData, paymentGateway: e.target.value as any })}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium text-navy">{method.label}</div>
                          <div className="text-sm text-text-3">{method.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-white border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-navy mb-4">Required Confirmations</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.ruoAccepted}
                        onChange={(e) => setFormData({ ...formData, ruoAccepted: e.target.checked })}
                        className="mt-1"
                      />
                      <div className="text-sm">
                        <strong className="text-navy">Research Use Only.</strong> I confirm that I am a qualified researcher and these products are for in-vitro research use only, not for human or veterinary use.
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.ageConfirmed}
                        onChange={(e) => setFormData({ ...formData, ageConfirmed: e.target.checked })}
                        className="mt-1"
                      />
                      <div className="text-sm">
                        <strong className="text-navy">Age Confirmation.</strong> I confirm that I am 21 years of age or older.
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-navy text-white font-semibold rounded hover:bg-navy-2 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Order...' : `Complete Order - $${total.toFixed(2)}`}
                </button>
              </form>
            </div>

            {/* Right: Order Summary */}
            <div className="col-span-1">
              <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-navy mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-bg rounded flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{item.productTitle}</div>
                        <div className="text-xs text-text-3">{item.variationSize}mg × {item.quantity}</div>
                        <div className="text-sm font-mono font-semibold text-navy">
                          ${((item.priceCents * item.quantity) / 100).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-text-2">Subtotal</span>
                    <span className="font-mono font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-2">Shipping</span>
                    <span className="font-mono font-semibold">
                      {shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="font-semibold text-navy">Total</span>
                  <span className="font-mono font-bold text-navy">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
