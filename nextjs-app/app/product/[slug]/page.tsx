'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { useCartStore } from '@/lib/cart-store'

interface Product {
  id: string
  slug: string
  title: string
  commonName?: string
  description: string
  category: string
  molecularWeight?: string
  purity?: number
  imageUrl?: string
  powder?: string
  variations: Variation[]
  coas: COA[]
}

interface Variation {
  id: string
  sizeMg: number
  sku: string
  priceCents: number
  stockCount: number
}

interface COA {
  id: string
  reportType: string
  imageUrl: string
  lotNumber: string
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const { addItem } = useCartStore()

  const [product, setProduct] = useState<Product | null>(null)
  const [selectedVariation, setSelectedVariation] = useState<Variation | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [addingToCart, setAddingToCart] = useState(false)

  useEffect(() => {
    fetchProduct()
  }, [slug])

  async function fetchProduct() {
    try {
      const res = await fetch(`/api/products/${slug}`)
      if (res.ok) {
        const data = await res.json()
        setProduct(data.product)
        if (data.product.variations.length > 0) {
          setSelectedVariation(data.product.variations[0])
        }
      }
    } catch (error) {
      console.error('Failed to fetch product:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleAddToCart() {
    if (!selectedVariation || !product) return
    
    setAddingToCart(true)
    try {
      addItem({
        productId: product.id,
        productTitle: product.title,
        productSlug: product.slug,
        variationId: selectedVariation.id,
        variationSize: selectedVariation.sizeMg,
        quantity,
        priceCents: selectedVariation.priceCents,
        imageUrl: product.imageUrl,
      })
      
      // Reset quantity after adding
      setQuantity(1)
    } catch (error) {
      console.error('Failed to add to cart:', error)
    } finally {
      setAddingToCart(false)
    }
  }

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-8 py-24 text-center text-text-3">
          Loading product...
        </div>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-8 py-24 text-center">
          <h1 className="text-3xl font-semibold text-navy mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-accent hover:underline">
            ← Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const currentPrice = selectedVariation ? selectedVariation.priceCents / 100 : 0
  const inStock = selectedVariation ? selectedVariation.stockCount > 0 : false

  return (
    <>
      <Navigation />

      {/* Breadcrumb */}
      <div className="container mx-auto px-8 py-6">
        <nav className="font-mono text-xs text-text-3 flex gap-2 items-center">
          <Link href="/" className="hover:text-navy">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-navy">Shop</Link>
          <span>/</span>
          <span className="text-navy font-medium">{product.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-8 pb-24">
        <div className="grid grid-cols-2 gap-12">
          {/* Left: Product Images */}
          <div>
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg aspect-square flex items-center justify-center border border-border mb-4">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="object-contain p-12"
                />
              ) : (
                <div className="w-64 h-80 bg-gray-200 rounded-sm" />
              )}
            </div>

            {/* COA Thumbnails */}
            {product.coas && product.coas.length > 0 && (
              <div>
                <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-text-3 mb-3">
                  Certificates of Analysis
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.coas.map((coa) => (
                    <button
                      key={coa.id}
                      className="aspect-[3/4] bg-bg-surface border border-border rounded hover:border-border-strong transition flex flex-col items-center justify-center p-2 text-xs"
                    >
                      <svg className="w-8 h-8 text-coa mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                        <path d="M14 3v5h5" />
                      </svg>
                      <span className="font-mono font-semibold text-coa">{coa.reportType}</span>
                      <span className="text-[10px] text-text-3 mt-0.5">Lot {coa.lotNumber}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-4xl font-semibold text-navy mb-2">{product.title}</h1>
              {product.commonName && (
                <p className="text-lg text-text-2">{product.commonName}</p>
              )}
            </div>

            {/* Badges */}
            <div className="flex gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 bg-navy/90 text-white font-mono text-xs font-semibold px-3 py-1.5 rounded">
                {product.purity || 99.5}%
                <span className="text-[9px] bg-white/20 px-1 py-0.5 rounded">HPLC</span>
              </div>
              
              {product.category && (
                <div className="inline-flex items-center bg-bg-surface text-navy font-mono text-xs font-medium px-3 py-1.5 rounded border border-border">
                  {product.category.replace(/_/g, ' ')}
                </div>
              )}

              {product.molecularWeight && (
                <div className="inline-flex items-center bg-bg-surface text-text-2 font-mono text-xs px-3 py-1.5 rounded border border-border">
                  MW: {product.molecularWeight}
                </div>
              )}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-4xl font-mono font-bold text-navy">
                ${currentPrice.toFixed(2)}
              </div>
              {selectedVariation && (
                <div className="font-mono text-sm text-text-3 mt-1">
                  per {selectedVariation.sizeMg}mg vial
                </div>
              )}
            </div>

            {/* Variation Selector */}
            <div className="mb-6">
              <label className="block font-mono text-xs font-semibold tracking-wider uppercase text-text-3 mb-2">
                Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {product.variations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation)}
                    className={`px-4 py-3 text-center font-mono text-sm font-medium rounded border transition ${
                      selectedVariation?.id === variation.id
                        ? 'border-navy bg-navy text-white'
                        : 'border-border bg-bg-surface text-text-2 hover:border-border-strong'
                    }`}
                  >
                    {variation.sizeMg}mg
                    <div className={`text-xs mt-0.5 ${selectedVariation?.id === variation.id ? 'text-white/70' : 'text-text-3'}`}>
                      ${(variation.priceCents / 100).toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-mono text-xs font-semibold tracking-wider uppercase text-text-3 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded hover:border-border-strong transition"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center px-3 py-2 border border-border rounded font-mono font-semibold"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded hover:border-border-strong transition"
                >
                  +
                </button>

                {selectedVariation && (
                  <div className="ml-auto font-mono text-sm text-text-2">
                    {selectedVariation.stockCount} in stock
                  </div>
                )}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!inStock || addingToCart}
              className={`w-full py-4 text-lg font-semibold rounded transition ${
                inStock && !addingToCart
                  ? 'bg-navy text-white hover:bg-navy-2'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {addingToCart ? 'Adding to Cart...' : inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            {/* RUO Warning */}
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
              <div className="flex items-start gap-2">
                <div className="font-mono text-xs font-semibold tracking-wider bg-red-900 text-white px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                  RUO
                </div>
                <p className="text-sm text-red-900 leading-relaxed">
                  <strong>Research Use Only.</strong> Not for human or veterinary use. 
                  By purchasing, you confirm you are a qualified researcher.
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-text-3 mb-3">
                Product Description
              </h3>
              <p className="text-text-2 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-text-3 mb-3">
                Specifications
              </h3>
              <dl className="space-y-3 text-sm">
                {product.molecularWeight && (
                  <div className="flex justify-between">
                    <dt className="text-text-3">Molecular Weight:</dt>
                    <dd className="font-mono font-medium">{product.molecularWeight} Da</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-text-3">Purity (HPLC):</dt>
                  <dd className="font-mono font-medium">{product.purity || 99.5}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-3">Form:</dt>
                  <dd className="font-mono font-medium">Lyophilized powder</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-3">Storage:</dt>
                  <dd className="font-mono font-medium">-20°C</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
