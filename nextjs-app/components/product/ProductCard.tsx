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
      className="bg-white border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 block"
    >
      {/* Product Image */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center relative border-b border-border group-hover:border-accent transition-colors overflow-hidden">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {product.imageUrl ? (
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            fill
            className="object-contain p-8 group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-32 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-inner" />
        )}
        
        {/* Purity Badge */}
        <div className="absolute top-4 left-4 bg-navy/95 backdrop-blur-sm text-white font-mono text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg group-hover:scale-110 transition-transform">
          <span className="text-sm">{product.purity}%</span>
          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">HPLC</span>
        </div>

        {/* COA Badge */}
        <div className="absolute top-4 right-4 bg-green-50 text-green-700 border-2 border-green-200 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5" />
          </svg>
          COA
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-mono font-bold text-navy text-lg mb-1 group-hover:text-accent transition">
            {product.name}
          </h3>
          {product.commonName && (
            <span className="text-sm text-text-3 font-medium">{product.commonName}</span>
          )}
        </div>

        {/* Sizes */}
        <div className="flex gap-2 mb-5">
          {product.sizes.map((size) => (
            <div 
              key={size}
              className="flex-1 text-center py-2.5 text-xs font-mono font-bold border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition group/size"
            >
              <div className="text-navy group-hover/size:text-accent transition">{size}</div>
              <div className="text-[10px] text-text-3">mg</div>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="font-mono font-bold text-2xl text-navy group-hover:text-accent transition">
              ${product.price}
            </div>
            <div className="font-mono text-xs text-text-3 mt-1">
              from {product.sizes[0]}mg
            </div>
          </div>

          <button className="px-5 py-2.5 bg-navy text-white text-sm font-bold rounded-lg hover:bg-accent transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
            Add
          </button>
        </div>
      </div>
    </Link>
  )
}
