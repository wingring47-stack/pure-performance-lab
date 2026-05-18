'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/product/ProductCard'

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [category])

  async function fetchProducts() {
    try {
      const url = category 
        ? `/api/products?category=${category}` 
        : '/api/products'
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'phospholipids', label: 'Phospholipids', count: 3 },
    { id: 'ceramides', label: 'Ceramides', count: 1 },
    { id: 'sphingolipids', label: 'Sphingolipids', count: 1 },
    { id: 'gangliosides', label: 'Gangliosides', count: 1 },
  ]

  return (
    <>
      <Navigation />

      <div className="bg-ink text-white text-center text-sm py-2.5 sticky top-16 z-40 border-b border-black">
        <span className="text-yellow-400">🎯</span> Free shipping over $200 · BTC/ETH accepted
      </div>

      <div className="container mx-auto px-8 py-6">
        <nav className="font-mono text-xs text-text-3 flex gap-2 items-center">
          <a href="/" className="hover:text-navy">Home</a>
          <span>/</span>
          <span className="text-navy font-medium">Shop</span>
        </nav>
      </div>

      <div className="container mx-auto px-8 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-4xl font-semibold text-navy">Research Lipid Catalog</h1>
            <p className="font-mono text-sm text-text-3 mt-2">
              {products.length} products · All with verified COAs
            </p>
          </div>

          <select className="px-4 py-2 border border-border rounded text-sm font-medium">
            <option>Sort by: Newest</option>
            <option>Sort by: Price (Low-High)</option>
            <option>Sort by: Price (High-Low)</option>
            <option>Sort by: Name (A-Z)</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-60 flex-shrink-0 sticky top-32 self-start">
            <div className="bg-bg-surface border border-border rounded-lg p-1">
              <div className="p-4 border-b border-border">
                <h5 className="font-mono text-xs font-semibold tracking-wider uppercase text-text-3">
                  Category
                </h5>
              </div>

              <div className="p-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id === 'all' ? null : cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded text-sm transition ${
                      (cat.id === 'all' && !category) || category === cat.id
                        ? 'bg-bg text-navy font-medium'
                        : 'text-text-2 hover:bg-bg hover:text-navy'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="font-mono text-xs text-text-3">{cat.count}</span>
                  </button>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <h5 className="font-mono text-xs font-semibold tracking-wider uppercase text-text-3 mb-3">
                  Purity
                </h5>
                <label className="flex items-center justify-between text-sm cursor-pointer">
                  <span className="text-text-2">99%+ only</span>
                  <input type="checkbox" className="w-4 h-4" />
                </label>
              </div>

              <div className="p-4 border-t border-border">
                <h5 className="font-mono text-xs font-semibold tracking-wider uppercase text-text-3 mb-3">
                  Availability
                </h5>
                <label className="flex items-center justify-between text-sm cursor-pointer">
                  <span className="text-text-2">In stock</span>
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </label>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="text-center py-24 text-text-3">Loading products...</div>
            ) : products.length === 0 ? (
              <div className="text-center py-24 text-text-3">
                No products found. Database needs seeding.
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-5">
                {products.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
