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
      <section className="bg-navy text-text-on-dark relative overflow-hidden border-b border-border-dark">
        <div className="absolute inset-0 opacity-10">
          {/* Molecular grid background */}
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
        </div>
        
        <div className="container mx-auto px-8 py-24 md:py-32 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider uppercase text-text-on-dark-2 px-3 py-1.5 border border-white/20 rounded-full mb-7">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Research Use Only
          </div>
          
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Premium Research-Grade <span className="text-accent">Lipids</span>
          </h1>
          
          <p className="text-lg text-text-on-dark-2 mb-9 max-w-2xl">
            Verified purity with comprehensive COAs. Phospholipids, ceramides, and specialized lipid compounds. 
            Self-custody cryptocurrency payments accepted.
          </p>
          
          <div className="flex gap-3">
            <Link 
              href="/shop" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded hover:bg-accent-hover transition"
            >
              Browse Catalog
            </Link>
            <Link 
              href="/shop" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded hover:bg-white/20 transition border border-white/20"
            >
              View COAs
            </Link>
          </div>
          
          <div className="flex gap-7 mt-14 pt-7 border-t border-white/10 font-mono text-sm text-text-on-dark-2">
            <div>
              <span className="text-white font-medium">HPLC</span> Verified
            </div>
            <div>
              <span className="text-white font-medium">99%+</span> Purity
            </div>
            <div>
              <span className="text-white font-medium">BTC/ETH</span> Accepted
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-bg-surface border-b border-border">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4 divide-x divide-border">
            {[
              { icon: '🔬', title: 'Lab Tested', desc: 'HPLC + MS verified' },
              { icon: '🔒', title: 'Secure Payment', desc: 'BTC, ETH, XMR' },
              { icon: '📦', title: 'Discrete Ship', desc: 'US-only, fast' },
              { icon: '✓', title: 'Full COAs', desc: 'Every batch' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-7 py-6">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="font-semibold text-navy">{item.title}</div>
                  <div className="text-sm font-mono text-text-3">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-8">
          <div className="flex items-end justify-between mb-9">
            <div>
              <div className="font-mono text-xs font-medium tracking-wider uppercase text-text-3 mb-2">
                Featured
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy">
                Most Popular Research Lipids
              </h2>
            </div>
            <Link 
              href="/shop" 
              className="text-navy font-medium hover:text-accent transition"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-bg-surface border-y border-border">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-semibold text-navy mb-12 text-center">
            Why Pure Performance Lab
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Third-Party Verified',
                desc: 'Every batch tested by independent labs with full HPLC, MS, and sterility reports.',
              },
              {
                num: '02',
                title: 'Cryptocurrency Native',
                desc: 'Self-custody payments via BTC, ETH, XMR, Lightning. No intermediaries.',
              },
              {
                num: '03',
                title: 'Research Focused',
                desc: 'Strict RUO compliance. Products are for qualified researchers only.',
              },
              {
                num: '04',
                title: 'Fast & Discrete',
                desc: 'Ships within 24h to US addresses. Plain packaging, no branding.',
              },
            ].map((item) => (
              <div key={item.num} className="border-r border-border last:border-0 pr-7 last:pr-0">
                <div className="font-mono text-xs text-text-3 mb-7">{item.num}</div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-text-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
