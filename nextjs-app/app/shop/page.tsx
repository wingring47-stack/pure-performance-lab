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
    { id: 'all', label: 'All Peptides', count: products.length },
    { id: 'peptides', label: 'Research Peptides', count: 6 },
  ]

  return (
    <>
      <Navigation />

      <div className="bg-ink text-white text-center text-sm py-2.5 sticky top-16 z-40 border-b border-black">
        <span className="text-yellow-400">🎯</span> Free shipping over $200 · BTC/ETH/XMR accepted
      </div>

      <div className="container mx-auto px-8 py-6">
        <nav className="font-mono text-xs text-text-3 flex gap-2 items-center">
          <a href="/" className="hover:text-navy">Home</a>
          <span>/</span>
          <span className="text-navy font-medium">Shop</span>
        </nav>

        <div className="flex items-baseline justify-between mt-6 mb-8">
          <div>
            <h1 className="text-4xl font-semibold text-navy mb-2">Research Peptides</h1>
            <p className="text-text-2">Premium quality, verified purity, comprehensive COAs.</p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-56 flex-shrink-0">
            <div className="sticky top-32">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id === 'all' ? null : cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded transition ${
                        (category === cat.id || (!category && cat.id === 'all'))
                          ? 'bg-navy text-white font-medium'
                          : 'text-text-2 hover:bg-bg'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="font-mono text-xs">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-3">
                  Sort By
                </h3>
                <select className="w-full px-3 py-2 border border-border rounded text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-[4/5] bg-gray-100 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-text-3">
                    {products.length} product{products.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {products.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-text-3 mb-4">No products found in this category.</p>
                    <button
                      onClick={() => setCategory(null)}
                      className="text-accent hover:underline"
                    >
                      View all products
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
