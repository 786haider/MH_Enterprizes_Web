'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1A1714]/95 backdrop-blur-md shadow-2xl border-b border-[#C9913D]/20'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between px-8 py-2 border-b border-[#C9913D]/20 text-xs text-[#C9913D]/70 font-body tracking-widest">
          <span>ESTABLISHED 1989 · 35 YEARS OF EXCELLENCE</span>
          <div className="flex items-center gap-6">
            <a href="tel:+92-XXX-XXXXXXX" className="flex items-center gap-2 hover:text-[#C9913D] transition-colors">
              <Phone size={11} />
              <span>+92 300 0000000</span>
            </a>
            <span>Mon–Sat: 9AM–7PM</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <Link href="#home" className="flex flex-col leading-none group">
            <span
              className="text-3xl font-display font-bold gold-shimmer"
              style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '-0.02em' }}
            >
              MH
            </span>
            <span
              className="text-[8px] tracking-[0.35em] text-[#C9913D]/70 uppercase font-body mt-[-2px]"
            >
              Enterprises
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative text-xs tracking-[0.2em] uppercase font-body font-medium transition-colors duration-300 group ${
                  activeLink === link.label ? 'text-[#C9913D]' : 'text-white/70 hover:text-[#C9913D]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C9913D] transition-all duration-300 ${
                    activeLink === link.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="btn-gold text-xs tracking-[0.15em]">
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-[#C9913D] transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1714] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 tile-pattern opacity-30" />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <span className="text-5xl font-display gold-shimmer font-bold">MH Enterprises</span>
          <div className="diamond-divider w-48">
            <span className="text-[#C9913D] text-lg">◆</span>
          </div>
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-display text-white/80 hover:text-[#C9913D] transition-colors tracking-widest"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold mt-4">Get a Free Quote</a>
        </div>
      </div>
    </>
  )
}
