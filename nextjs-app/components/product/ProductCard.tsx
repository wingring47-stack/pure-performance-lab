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
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 block relative"
      style={{
        border: '1px solid #E3E7EB',
        transform: 'translateZ(0)', // Enable 3D transforms
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
        e.currentTarget.style.boxShadow = '0 32px 64px rgba(14, 27, 44, 0.15)'
        e.currentTarget.style.borderColor = '#4169E1'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(14, 27, 44, 0.06)'
        e.currentTarget.style.borderColor = '#E3E7EB'
      }}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(14, 27, 44, 0.02) 0%, rgba(65, 105, 225, 0.05) 100%)',
        }}
      />

      {/* Product Image */}
      <div 
        className="aspect-[4/3] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 50%, #F0F2F5 100%)',
        }}
      >
        {/* Animated background glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(65, 105, 225, 0.1) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />

        {product.imageUrl ? (
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            fill
            className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div 
              className="w-32 h-40 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-700"
              style={{
                background: 'linear-gradient(135deg, #E8EDF3 0%, #F4F6F8 100%)',
              }}
            />
          </div>
        )}
        
        {/* Purity Badge */}
        <div 
          className="absolute top-4 left-4 backdrop-blur-md text-white font-mono text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl group-hover:scale-110 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 27, 44, 0.95) 0%, rgba(22, 38, 59, 0.95) 100%)',
          }}
        >
          <span className="text-sm">{product.purity}%</span>
          <span 
            className="text-[10px] px-2 py-0.5 rounded-md"
            style={{ background: 'rgba(255, 255, 255, 0.2)' }}
          >
            HPLC
          </span>
        </div>

        {/* COA Badge */}
        <div 
          className="absolute top-4 right-4 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xl group-hover:scale-110 transition-all duration-300"
          style={{
            background: 'rgba(34, 197, 94, 0.95)',
            color: '#FFFFFF',
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5" />
          </svg>
          COA
        </div>

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Product Info */}
      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="font-mono font-bold text-navy text-lg mb-1.5 group-hover:text-blue-600 transition-colors duration-300">
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
              className="flex-1 text-center py-3 text-xs font-mono font-bold border-2 rounded-xl transition-all duration-300 group/size hover:scale-105"
              style={{
                borderColor: '#E3E7EB',
                background: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4169E1'
                e.currentTarget.style.background = 'rgba(65, 105, 225, 0.05)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E3E7EB'
                e.currentTarget.style.background = '#FFFFFF'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <div className="text-navy font-bold text-base">{size}</div>
              <div className="text-[10px] text-text-3 font-semibold mt-0.5">mg</div>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
          <div>
            <div className="font-mono font-bold text-2xl text-navy group-hover:text-blue-600 transition-colors duration-300">
              ${product.price}
            </div>
            <div className="font-mono text-xs text-text-3 mt-1 font-medium">
              from {product.sizes[0]}mg
            </div>
          </div>

          <button 
            className="px-6 py-3 font-bold rounded-xl transition-all duration-300 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #0E1B2C 0%, #16263B 100%)',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(14, 27, 44, 0.3)'
              e.currentTarget.style.background = 'linear-gradient(135deg, #4169E1 0%, #6B8AFF 100%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(14, 27, 44, 0.2)'
              e.currentTarget.style.background = 'linear-gradient(135deg, #0E1B2C 0%, #16263B 100%)'
            }}
          >
            View
          </button>
        </div>
      </div>

      {/* Shine effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
          transform: 'translateX(-100%)',
        }}
      />
    </Link>
  )
}
