'use client'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const slides = [
  {
    title: 'Floors That',
    titleAccent: 'Tell Stories',
    subtitle: 'Premium Italian & Spanish Tiles',
    description: 'Transform any space with our curated collection of world-class tiles, ceramics and sanitary ware.',
    bg: 'from-[#1A1714] via-[#2A2118] to-[#1A1714]',
    accent: 'Porcelain & Marble',
  },
  {
    title: 'Bathrooms',
    titleAccent: 'Reimagined',
    subtitle: 'Luxury Sanitary Solutions',
    description: 'Complete bathroom transformations with premium sanitary ware, accessories and expert consultation.',
    bg: 'from-[#181A17] via-[#1E221A] to-[#181A17]',
    accent: 'Sanitary Ware',
  },
  {
    title: 'Ceramics of',
    titleAccent: 'Distinction',
    subtitle: 'Artisan Ceramic Collections',
    description: 'Hand-crafted and machine-precision ceramics that elevate residential and commercial interiors.',
    bg: 'from-[#17181A] via-[#1A1C22] to-[#17181A]',
    accent: 'Ceramics',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        })
      }
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const slide = slides[current]

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${slide.bg} transition-all duration-1000`}
    >
      {/* Animated tile grid background */}
      <div className="absolute inset-0 tile-pattern opacity-20" />

      {/* Parallax geometric shapes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      >
        {/* Large gold circle */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-[#C9913D]/10 opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full border border-[#C9913D]/8 opacity-40"
          style={{ transform: 'translate(8%, 8%)' }} />

        {/* Floating tile shapes */}
        <div className="absolute top-16 left-16 w-32 h-32 border border-[#C9913D]/20 rotate-45 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-20 w-20 h-20 border border-[#C9913D]/15 rotate-12 animate-[float_6s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-8 w-12 h-12 bg-[#C9913D]/10 rotate-45 animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-32 right-1/3 w-8 h-8 bg-[#C9913D]/20 rotate-45 animate-[float_5s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Parallax main content glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,145,61,0.06) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
          transition: 'transform 0.15s ease',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-screen pt-32 pb-20">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div
            key={`badge-${current}`}
            className="inline-flex items-center gap-3 self-start animate-[fadeIn_0.6s_ease-out]"
          >
            <div className="w-8 h-px bg-[#C9913D]" />
            <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body font-medium">
              {slide.accent}
            </span>
            <div className="w-8 h-px bg-[#C9913D]" />
          </div>

          {/* Headline */}
          <div key={`title-${current}`} className="animate-[slideUp_0.7s_ease-out]">
            <h1 className="font-display text-white leading-[0.9]" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
              {slide.title}
              <br />
              <span className="gold-shimmer font-bold italic">{slide.titleAccent}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div key={`sub-${current}`} className="animate-[slideUp_0.7s_ease-out_0.1s_both]">
            <p className="text-[#C9913D]/80 font-body text-sm tracking-[0.2em] uppercase font-medium">
              {slide.subtitle}
            </p>
          </div>

          {/* Description */}
          <div key={`desc-${current}`} className="animate-[slideUp_0.7s_ease-out_0.2s_both]">
            <p className="text-white/50 font-body text-base leading-relaxed max-w-md">
              {slide.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 animate-[slideUp_0.7s_ease-out_0.3s_both]">
            <a href="#collections" className="btn-gold flex items-center gap-2">
              Explore Collection
              <ArrowRight size={14} />
            </a>
            <a href="#contact" className="btn-outline">
              Get Free Consultation
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-6 pt-6 border-t border-[#C9913D]/15 animate-[fadeIn_1s_ease-out_0.5s_both]">
            {[
              { num: '35+', label: 'Years' },
              { num: '10K+', label: 'Projects' },
              { num: '500+', label: 'Designs' },
              { num: '98%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-display font-bold text-[#C9913D]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {stat.num}
                </span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-body">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual tile mosaic */}
        <div
          className="hidden md:block relative h-[520px]"
          style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`, transition: 'transform 0.15s ease' }}
        >
          {/* Mosaic grid of tiles */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 gap-3 p-4">
            {[
              { bg: 'bg-gradient-to-br from-[#8B7355] to-[#5C4A2A]', delay: '0s', span: 'col-span-2 row-span-2' },
              { bg: 'bg-gradient-to-br from-[#C9913D]/30 to-[#1A1714]', delay: '0.1s', span: '' },
              { bg: 'bg-gradient-to-br from-[#2C2520] to-[#1A1714]', delay: '0.2s', span: '' },
              { bg: 'bg-gradient-to-br from-[#E8DDD0] to-[#C4B49A]', delay: '0.15s', span: '' },
              { bg: 'bg-gradient-to-br from-[#3D3530] to-[#28211C]', delay: '0.25s', span: 'col-span-2' },
              { bg: 'bg-gradient-to-br from-[#C9913D] to-[#8B6020]', delay: '0.3s', span: '' },
              { bg: 'bg-gradient-to-br from-[#1A1714] to-[#2C2520]', delay: '0.35s', span: '' },
              { bg: 'bg-gradient-to-br from-[#D4C4A8] to-[#A89880]', delay: '0.4s', span: 'col-span-2' },
              { bg: 'bg-gradient-to-br from-[#2A2820] to-[#1A1814]', delay: '0.45s', span: '' },
            ].map((tile, i) => (
              <div
                key={i}
                className={`${tile.bg} ${tile.span} rounded-sm tile-card relative overflow-hidden`}
                style={{ animationDelay: tile.delay }}
              >
                {/* Tile texture lines */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.05) 8px, rgba(255,255,255,0.05) 9px)'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Overlay badge */}
          <div className="absolute bottom-8 left-8 bg-[#1A1714]/90 backdrop-blur-sm border border-[#C9913D]/30 px-6 py-4 rounded-sm">
            <p className="text-[#C9913D] text-xs tracking-[0.3em] uppercase font-body">Since 1989</p>
            <p className="text-white font-display text-xl mt-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Pakistan's Finest
            </p>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-400 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-[#C9913D]'
                : 'w-2 h-2 bg-white/30 hover:bg-[#C9913D]/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 right-12 flex flex-col items-center gap-2 text-white/30 hover:text-[#C9913D] transition-colors group"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-body rotate-90 origin-center mb-2">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
