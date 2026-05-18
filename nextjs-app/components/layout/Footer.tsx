import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-ink text-text-on-dark-2 pt-18 pb-6">
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-12 pb-14 border-b border-border-dark">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-navy font-bold text-lg">
                P
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-medium text-sm tracking-widest text-white">
                  PURE PERFORMANCE
                </span>
                <span className="font-mono text-[9px] tracking-[0.42em] text-text-on-dark-2 mt-0.5">
                  LAB
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mt-4">
              Premium research-grade lipids with verified purity. 
              Cryptocurrency payments accepted.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Shop
            </h5>
            <ul className="space-y-2.5">
              <li><Link href="/shop" className="text-sm hover:text-white transition">All Products</Link></li>
              <li><Link href="/shop?cat=recovery" className="text-sm hover:text-white transition">Recovery</Link></li>
              <li><Link href="/shop?cat=gh" className="text-sm hover:text-white transition">Growth Hormone</Link></li>
              <li><Link href="/shop?cat=cognitive" className="text-sm hover:text-white transition">Cognitive</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Support
            </h5>
            <ul className="space-y-2.5">
              <li><Link href="/track" className="text-sm hover:text-white transition">Track Order</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-white transition">Shipping Policy</Link></li>
              <li><Link href="/refunds" className="text-sm hover:text-white transition">Refund Policy</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Legal
            </h5>
            <ul className="space-y-2.5">
              <li><Link href="/terms" className="text-sm hover:text-white transition">Terms of Sale</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* RUO Disclaimer */}
        <div className="flex gap-4 items-start py-7 border-b border-border-dark">
          <div className="font-mono text-[10px] font-semibold tracking-wider bg-red-900 text-white px-2 py-1 rounded flex-shrink-0">
            RUO
          </div>
          <p className="text-xs leading-relaxed">
            <strong className="text-white">Research Use Only.</strong> All products are intended 
            for qualified researchers and in-vitro use only. Not for human or veterinary use. 
            By accessing this site, you acknowledge you are a qualified researcher and agree to 
            our Terms of Sale.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-6 text-xs font-mono text-text-3">
          <div>© 2026 Pure Performant Labs. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
