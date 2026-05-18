import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: string
    name: string
    commonName?: string
    purity: number
    price: number
    sizes: number[]
    imageUrl?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/product/${product.id}`}
      className="bg-bg-surface border border-border rounded-lg overflow-hidden hover:border-border-strong hover:shadow transition-all group"
    >
      {/* Product Image */}
      <div className="aspect-[4/3] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center relative border-b border-border">
        {product.imageUrl ? (
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            fill
            className="object-contain p-8"
          />
        ) : (
          <div className="w-32 h-40 bg-gray-200 rounded-sm" />
        )}
        
        {/* Purity Badge */}
        <div className="absolute top-3 left-3 bg-navy/90 text-white font-mono text-xs font-semibold px-2 py-1 rounded flex items-center gap-1.5">
          {product.purity}%
          <span className="text-[9px] bg-white/20 px-1 py-0.5 rounded">HPLC</span>
        </div>

        {/* COA Badge */}
        <div className="absolute top-3 right-3 bg-coa-bg text-coa border border-coa-border text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5" />
          </svg>
          COA
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-baseline gap-2 mb-3">
          <h3 className="font-mono font-semibold text-navy text-lg">{product.name}</h3>
          {product.commonName && (
            <span className="text-xs text-text-3">{product.commonName}</span>
          )}
        </div>

        {/* Sizes */}
        <div className="flex gap-1.5 mb-4">
          {product.sizes.map((size) => (
            <div 
              key={size}
              className="flex-1 text-center py-2 text-xs font-mono font-medium border border-border rounded hover:border-border-strong transition"
            >
              {size}mg
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono font-semibold text-xl text-navy">
              ${product.price}
            </div>
            <div className="font-mono text-[11px] text-text-3 mt-0.5">
              from {product.sizes[0]}mg
            </div>
          </div>

          <button className="px-4 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy-2 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}
