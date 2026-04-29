'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    id: 1,
    title: 'Floor Tiles',
    subtitle: 'Porcelain & Natural Stone',
    description: 'Durable, elegant floor tiles for every space — from grand foyers to modern kitchens.',
    count: '150+ Designs',
    gradient: 'from-[#8B7355] via-[#6B5540] to-[#4A3828]',
    accentColor: '#C9913D',
    pattern: 'diagonal',
    size: 'large',
  },
  {
    id: 2,
    title: 'Wall Tiles',
    subtitle: 'Decorative & Structural',
    description: 'Transform every wall into a statement with our curated wall tile collection.',
    count: '200+ Designs',
    gradient: 'from-[#2C2520] via-[#3D3530] to-[#2C2520]',
    accentColor: '#E8B86D',
    pattern: 'checker',
    size: 'small',
  },
  {
    id: 3,
    title: 'Sanitary Ware',
    subtitle: 'Luxury Bathroom Solutions',
    description: 'Premium washbasins, toilets, bathtubs and accessories for your perfect bathroom.',
    count: '80+ Products',
    gradient: 'from-[#1A2028] via-[#202830] to-[#1A2028]',
    accentColor: '#C9913D',
    pattern: 'cross',
    size: 'small',
  },
  {
    id: 4,
    title: 'Ceramics',
    subtitle: 'Artisan Craft & Modern Design',
    description: 'Hand-selected ceramics that bridge tradition and contemporary aesthetics.',
    count: '120+ Pieces',
    gradient: 'from-[#C9913D]/20 via-[#8B6020]/20 to-[#C9913D]/10',
    accentColor: '#F5D07A',
    pattern: 'hexagon',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Outdoor Tiles',
    subtitle: 'Anti-slip & Weather Resistant',
    description: 'Tough, beautiful tiles engineered for patios, driveways, and outdoor living.',
    count: '60+ Designs',
    gradient: 'from-[#282420] via-[#1E1C18] to-[#282420]',
    accentColor: '#C9913D',
    pattern: 'brick',
    size: 'medium',
  },
]

export default function Collections() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="collections" ref={sectionRef} className="relative py-32 bg-[#FAF7F2] overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,145,61,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`mb-16 transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C9913D]" />
            <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Our Range</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[#1A1714]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1 }}>
              Curated{' '}
              <span className="italic font-semibold" style={{ color: '#C9913D' }}>Collections</span>
              <br />
              for Every Space
            </h2>
            <p className="text-[#6B6560] font-body max-w-sm leading-relaxed text-sm">
              From grand commercial projects to intimate home renovations — we have the perfect tile, ceramic, or sanitary solution for you.
            </p>
          </div>
        </div>

        {/* Collection grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {/* Large card */}
          <div
            className={`md:col-span-2 md:row-span-2 relative cursor-pointer overflow-hidden rounded-sm transition-all duration-800 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${collections[0].gradient} transition-transform duration-700 ${hovered === 1 ? 'scale-105' : 'scale-100'}`} />
            {/* Grid pattern overlay */}
            <div className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(rgba(201,145,61,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,145,61,0.08) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            <div className={`absolute inset-0 transition-opacity duration-400 ${hovered === 1 ? 'opacity-100' : 'opacity-0'}`}
              style={{ background: 'linear-gradient(135deg, rgba(201,145,61,0.15) 0%, transparent 60%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-[#C9913D]" />
                <span className="text-[#C9913D] text-xs tracking-[0.3em] uppercase font-body">{collections[0].subtitle}</span>
              </div>
              <h3 className="font-display text-white text-4xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                {collections[0].title}
              </h3>
              <p className="text-white/60 font-body text-sm mb-4 max-w-sm">{collections[0].description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#C9913D] text-xs font-body tracking-wider">{collections[0].count}</span>
                <div className={`flex items-center gap-2 text-[#C9913D] text-xs font-body tracking-wider transition-transform duration-300 ${hovered === 1 ? 'translate-x-0' : '-translate-x-2 opacity-0'}`}>
                  View All <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {collections.slice(1).map((col, i) => (
            <div
              key={col.id}
              className={`relative cursor-pointer overflow-hidden rounded-sm transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
              onMouseEnter={() => setHovered(col.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${col.gradient} transition-transform duration-700 ${hovered === col.id ? 'scale-105' : 'scale-100'}`} />
              {/* Pattern */}
              <div className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                  backgroundSize: '25px 25px'
                }}
              />
              <div className={`absolute inset-0 transition-opacity duration-400 ${hovered === col.id ? 'opacity-100' : 'opacity-0'}`}
                style={{ background: `linear-gradient(135deg, ${col.accentColor}20 0%, transparent 60%)` }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[#C9913D]/70 text-[10px] tracking-[0.3em] uppercase font-body mb-1">{col.subtitle}</span>
                <h3 className="font-display text-white text-2xl mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                  {col.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-[10px] font-body tracking-wider">{col.count}</span>
                  <ArrowRight size={14} className={`text-[#C9913D] transition-all duration-300 ${hovered === col.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-800 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#contact" className="btn-outline inline-flex items-center gap-2">
            View Full Catalog
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
