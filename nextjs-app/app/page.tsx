'use client'

import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/product/ProductCard'

// Mock featured products (will be replaced with database fetch)
const FEATURED_PRODUCTS = [
  {
    id: 'phosphatidylcholine',
    name: 'Phosphatidylcholine',
    commonName: 'PC / Lecithin',
    purity: 99.5,
    price: 48,
    sizes: [100, 500, 1000],
    imageUrl: '/images/products/phosphatidylcholine.png',
  },
  {
    id: 'phosphatidylserine',
    name: 'Phosphatidylserine',
    commonName: 'PS',
    purity: 99.3,
    price: 56,
    sizes: [100, 500, 1000],
    imageUrl: '/images/products/phosphatidylserine.png',
  },
  {
    id: 'ceramide-c24',
    name: 'Ceramide C24',
    commonName: 'N-Lignoceroylsphingosine',
    purity: 99.7,
    price: 68,
    sizes: [50, 100, 250],
    imageUrl: '/images/products/ceramide-c24.png',
  },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section - Enhanced with inline styles */}
      <section 
        className="relative overflow-hidden border-b border-gray-300"
        style={{
          background: 'linear-gradient(135deg, #0E1B2C 0%, #16263B 50%, #0A1018 100%)',
          color: '#FFFFFF',
        }}
      >
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Floating orbs */}
        <div 
          className="absolute rounded-full blur-3xl"
          style={{
            top: '5rem',
            right: '5rem',
            width: '16rem',
            height: '16rem',
            background: 'oklch(58% 0.06 245)',
            opacity: 0.2,
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute rounded-full blur-3xl"
          style={{
            bottom: '5rem',
            left: '5rem',
            width: '24rem',
            height: '24rem',
            background: 'oklch(58% 0.06 245)',
            opacity: 0.1,
            animation: 'pulse 3s ease-in-out infinite 1s',
          }}
        />
        
        <div className="container mx-auto px-8 py-24 md:py-32 relative z-10 max-w-5xl">
          <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
            <div 
              className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full mb-8"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span 
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{
                    background: '#4ade80',
                    animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span 
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: '#4ade80' }}
                />
              </span>
              Research Use Only
            </div>
            
            <h1 
              className="font-bold leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
            >
              Premium Research-Grade{' '}
              <span 
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, oklch(58% 0.06 245) 50%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              >
                Lipids
              </span>
            </h1>
            
            <p className="text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: '#9AA8BC' }}>
              Verified purity with comprehensive COAs. Phospholipids, ceramides, and specialized lipid compounds. 
              Self-custody cryptocurrency payments accepted.
            </p>
            
            <div className="flex gap-4">
              <Link 
                href="/shop" 
                className="group inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all"
                style={{
                  background: 'oklch(58% 0.06 245)',
                  color: '#FFFFFF',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)'
                }}
              >
                Browse Catalog
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/shop" 
                className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
              >
                View COAs
              </Link>
            </div>
            
            <div className="flex gap-8 mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                { icon: '🔬', label: 'HPLC Verified', value: '99%+' },
                { icon: '🔒', label: 'Crypto Payments', value: 'BTC/ETH' },
                { icon: '📦', label: 'Fast Shipping', value: '24h' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  style={{ 
                    animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`,
                  }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-sm" style={{ color: '#9AA8BC' }}>{stat.label}</div>
                  <div className="text-lg font-mono font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b" style={{ borderColor: '#E3E7EB', boxShadow: '0 1px 2px rgba(14,27,44,0.04)' }}>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4 divide-x" style={{ borderColor: '#E3E7EB' }}>
            {[
              { icon: '🔬', title: 'Lab Tested', desc: 'HPLC + MS verified' },
              { icon: '🔒', title: 'Secure Payment', desc: 'BTC, ETH, XMR' },
              { icon: '📦', title: 'Discrete Ship', desc: 'US-only, fast' },
              { icon: '✓', title: 'Full COAs', desc: 'Every batch' },
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 px-7 py-7 transition-all cursor-pointer"
                style={{ background: '#FFFFFF' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F4F6F8'
                  e.currentTarget.querySelector('.emoji')!.setAttribute('style', 'transform: scale(1.1); transition: transform 0.2s')
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF'
                  e.currentTarget.querySelector('.emoji')!.setAttribute('style', 'transform: scale(1); transition: transform 0.2s')
                }}
              >
                <div className="emoji text-4xl" style={{ transition: 'transform 0.2s' }}>{item.icon}</div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#0E1B2C' }}>{item.title}</div>
                  <div className="text-sm font-mono" style={{ color: '#7B8696' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section 
        className="py-20 md:py-28"
        style={{
          background: 'linear-gradient(180deg, #F4F6F8 0%, #FFFFFF 100%)',
        }}
      >
        <div className="container mx-auto px-8">
          <div className="flex items-end justify-between mb-12" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div>
              <div className="font-mono text-xs font-medium tracking-wider uppercase mb-3 flex items-center gap-2" style={{ color: 'oklch(58% 0.06 245)' }}>
                <div style={{ width: '2rem', height: '1px', background: 'oklch(58% 0.06 245)' }} />
                Featured
              </div>
              <h2 className="font-bold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#0E1B2C' }}>
                Most Popular Research Lipids
              </h2>
              <p className="max-w-xl" style={{ color: '#4A5667' }}>
                Verified purity, comprehensive documentation, and guaranteed quality for your research needs.
              </p>
            </div>
            <Link 
              href="/shop" 
              className="group font-semibold flex items-center gap-2 transition-colors"
              style={{ color: '#0E1B2C' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'oklch(58% 0.06 245)'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0E1B2C'}
            >
              View All
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <div 
                key={product.id} 
                style={{ 
                  animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0E1B2C 0%, #16263B 50%, #0A1018 100%)',
          color: '#FFFFFF',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="container mx-auto px-8 text-center relative z-10 max-w-3xl">
          <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
            <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Ready to Start Your Research?
            </h2>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: '#9AA8BC' }}>
              Browse our complete catalog of research-grade lipids with verified purity and comprehensive documentation.
            </p>
            <Link 
              href="/shop" 
              className="group inline-flex items-center justify-center px-10 py-5 font-bold text-lg rounded-lg transition-all"
              style={{
                background: 'oklch(58% 0.06 245)',
                color: '#FFFFFF',
                boxShadow: '0 20px 48px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 24px 56px rgba(0,0,0,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.3)'
              }}
            >
              Browse Catalog
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
