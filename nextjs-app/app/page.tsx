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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-2 to-navy-dark text-text-on-dark relative overflow-hidden border-b border-border-dark">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }} />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-8 py-24 md:py-32 relative z-10 max-w-5xl">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider uppercase text-text-on-dark-2 px-4 py-2 border border-white/20 rounded-full mb-8 backdrop-blur-sm bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Research Use Only
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Premium Research-Grade{' '}
              <span className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-pulse">
                Lipids
              </span>
            </h1>
            
            <p className="text-xl text-text-on-dark-2 mb-10 max-w-2xl leading-relaxed">
              Verified purity with comprehensive COAs. Phospholipids, ceramides, and specialized lipid compounds. 
              Self-custody cryptocurrency payments accepted.
            </p>
            
            <div className="flex gap-4">
              <Link 
                href="/shop" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Browse Catalog
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/shop" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition border border-white/20 hover:border-white/40"
              >
                View COAs
              </Link>
            </div>
            
            <div className="flex gap-8 mt-16 pt-8 border-t border-white/10">
              {[
                { icon: '🔬', label: 'HPLC Verified', value: '99%+' },
                { icon: '🔒', label: 'Crypto Payments', value: 'BTC/ETH' },
                { icon: '📦', label: 'Fast Shipping', value: '24h' },
              ].map((stat, i) => (
                <div key={i} className="animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-sm text-text-on-dark-2">{stat.label}</div>
                  <div className="text-lg font-mono font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4 divide-x divide-border">
            {[
              { icon: '🔬', title: 'Lab Tested', desc: 'HPLC + MS verified' },
              { icon: '🔒', title: 'Secure Payment', desc: 'BTC, ETH, XMR' },
              { icon: '📦', title: 'Discrete Ship', desc: 'US-only, fast' },
              { icon: '✓', title: 'Full COAs', desc: 'Every batch' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-7 py-7 hover:bg-bg transition group">
                <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <div className="font-semibold text-navy mb-1">{item.title}</div>
                  <div className="text-sm font-mono text-text-3">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-bg to-white">
        <div className="container mx-auto px-8">
          <div className="flex items-end justify-between mb-12 animate-fadeIn">
            <div>
              <div className="font-mono text-xs font-medium tracking-wider uppercase text-accent mb-3 flex items-center gap-2">
                <div className="w-8 h-px bg-accent" />
                Featured
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-3">
                Most Popular Research Lipids
              </h2>
              <p className="text-text-2 max-w-xl">
                Verified purity, comprehensive documentation, and guaranteed quality for your research needs.
              </p>
            </div>
            <Link 
              href="/shop" 
              className="group text-navy font-semibold hover:text-accent transition flex items-center gap-2"
            >
              View All
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <div 
                key={product.id} 
                className="animate-fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white border-y border-border">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="font-mono text-xs font-medium tracking-wider uppercase text-accent mb-3">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Pure Performance Lab
            </h2>
            <p className="text-text-2 max-w-2xl mx-auto">
              Setting the standard for research-grade lipids with uncompromising quality and transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                icon: '🔬',
                title: 'Third-Party Verified',
                desc: 'Every batch tested by independent labs with full HPLC, MS, and sterility reports.',
              },
              {
                num: '02',
                icon: '🔐',
                title: 'Cryptocurrency Native',
                desc: 'Self-custody payments via BTC, ETH, XMR, Lightning. No intermediaries.',
              },
              {
                num: '03',
                icon: '📚',
                title: 'Research Focused',
                desc: 'Strict RUO compliance. Products are for qualified researchers only.',
              },
              {
                num: '04',
                icon: '⚡',
                title: 'Fast & Discrete',
                desc: 'Ships within 24h to US addresses. Plain packaging, no branding.',
              },
            ].map((item, i) => (
              <div 
                key={item.num} 
                className="group relative p-8 rounded-xl border border-border hover:border-accent transition hover:shadow-xl bg-gradient-to-br from-white to-bg animate-fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 text-6xl opacity-5 group-hover:opacity-10 transition">
                  {item.icon}
                </div>
                <div className="font-mono text-xs text-accent mb-4 font-semibold">{item.num}</div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-accent transition">
                  {item.title}
                </h3>
                <p className="text-text-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-2 to-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }} />
        </div>

        <div className="container mx-auto px-8 text-center relative z-10 max-w-3xl">
          <div className="animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Research?
            </h2>
            <p className="text-xl text-text-on-dark-2 mb-10 leading-relaxed">
              Browse our complete catalog of research-grade lipids with verified purity and comprehensive documentation.
            </p>
            <Link 
              href="/shop" 
              className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-bold text-lg rounded-lg hover:bg-accent-hover transition shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 group"
            >
              Browse Catalog
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
