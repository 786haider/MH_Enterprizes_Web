import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

const footerLinks = {
  'Products': ['Floor Tiles', 'Wall Tiles', 'Sanitary Ware', 'Ceramics', 'Outdoor Tiles', 'Accessories'],
  'Company': ['About Us', 'Our Projects', 'Testimonials', 'Careers', 'News & Blog', 'CSR Initiatives'],
  'Services': ['Design Consultation', 'Custom Orders', 'Installation Support', 'Commercial Supply', 'Nationwide Delivery', 'After-Sales Service'],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0E0C0A] overflow-hidden">
      <div className="absolute inset-0 tile-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9913D]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Top footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-16 border-b border-[#C9913D]/10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-5">
            <div>
              <span className="text-5xl font-display gold-shimmer font-bold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                MH
              </span>
              <p className="text-[#C9913D]/60 text-[9px] tracking-[0.4em] uppercase font-body mt-1">Enterprises</p>
            </div>
            <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs">
              Pakistan's premier destination for tiles, ceramics, and sanitary ware. Serving excellence since 1989.
            </p>

            {/* Contact quick links */}
            <div className="flex flex-col gap-2.5">
              {[
                { icon: MapPin, text: 'Main Tariq Road, Karachi' },
                { icon: Phone, text: '+92 300 0000000' },
                { icon: Mail, text: 'info@mhenterprises.pk' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={12} className="text-[#C9913D]" />
                  <span className="text-white/50 font-body text-xs">{text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 border border-[#C9913D]/20 flex items-center justify-center text-white/40 hover:text-[#C9913D] hover:border-[#C9913D]/50 hover:bg-[#C9913D]/10 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-[#C9913D] text-[10px] tracking-[0.4em] uppercase font-body font-medium">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 font-body text-xs hover:text-[#C9913D] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-px bg-[#C9913D]/30 group-hover:w-2.5 group-hover:bg-[#C9913D] transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="py-8 border-b border-[#C9913D]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-display text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Stay Updated with New Arrivals & Offers
            </p>
            <p className="text-white/40 text-xs font-body mt-1">Subscribe to our newsletter for exclusive deals and new collections.</p>
          </div>
          <div className="flex gap-0 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-[#1A1714] border border-[#C9913D]/20 text-white placeholder-white/25 font-body text-xs px-4 py-3 w-full md:w-64 focus:outline-none focus:border-[#C9913D]/50 transition-colors"
            />
            <button className="btn-gold text-xs px-5 py-3 flex-shrink-0" style={{ borderRadius: 0 }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 font-body text-xs">
            © {new Date().getFullYear()} MH Enterprises. All rights reserved. Established 1989.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                <a href="#" className="text-white/25 font-body text-xs hover:text-[#C9913D] transition-colors">{item}</a>
                {i < 2 && <span className="text-white/10">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
