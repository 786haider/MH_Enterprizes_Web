'use client'
import { useEffect, useRef, useState } from 'react'
import { Star, Eye, ShoppingBag, Filter } from 'lucide-react'

const categories = ['All', 'Floor Tiles', 'Wall Tiles', 'Sanitary', 'Ceramics', 'Outdoor']

const products = [
  {
    id: 1, name: 'Carrara Marble Effect', category: 'Floor Tiles', price: 'PKR 2,800/sqft',
    origin: 'Italy', rating: 4.9, reviews: 124,
    gradient: 'from-[#E8E0D8] to-[#C8C0B8]',
    tag: 'Bestseller',
  },
  {
    id: 2, name: 'Nero Assoluto Black', category: 'Floor Tiles', price: 'PKR 3,200/sqft',
    origin: 'Spain', rating: 4.8, reviews: 89,
    gradient: 'from-[#2C2520] to-[#1A1714]',
    tag: 'Premium',
  },
  {
    id: 3, name: 'Terracotta Artisan', category: 'Wall Tiles', price: 'PKR 1,900/sqft',
    origin: 'Portugal', rating: 4.7, reviews: 67,
    gradient: 'from-[#C9913D] to-[#8B5E2A]',
    tag: 'Trending',
  },
  {
    id: 4, name: 'Arctic White Basin', category: 'Sanitary', price: 'PKR 45,000/pc',
    origin: 'Germany', rating: 5.0, reviews: 42,
    gradient: 'from-[#F0EDE8] to-[#D8D2C8]',
    tag: 'New Arrival',
  },
  {
    id: 5, name: 'Herringbone Oak Ceramic', category: 'Ceramics', price: 'PKR 2,200/sqft',
    origin: 'Spain', rating: 4.8, reviews: 156,
    gradient: 'from-[#8B7355] to-[#6B5540]',
    tag: 'Bestseller',
  },
  {
    id: 6, name: 'Slate Grey Outdoor', category: 'Outdoor', price: 'PKR 1,600/sqft',
    origin: 'Turkey', rating: 4.6, reviews: 93,
    gradient: 'from-[#5C5850] to-[#3C3830]',
    tag: 'Durable',
  },
]

const tagColors: Record<string, string> = {
  'Bestseller': 'bg-[#C9913D] text-white',
  'Premium': 'bg-[#1A1714] text-[#C9913D] border border-[#C9913D]',
  'Trending': 'bg-[#C9913D]/20 text-[#C9913D]',
  'New Arrival': 'bg-emerald-900/50 text-emerald-400',
  'Durable': 'bg-blue-900/30 text-blue-400',
}

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" ref={sectionRef} className="relative py-32 bg-[#1A1714] overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 tile-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9913D]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-[#C9913D]" />
              <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Featured</span>
            </div>
            <h2 className="font-display text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
              Our Star{' '}
              <span className="italic font-semibold text-[#C9913D]">Products</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-white/50 font-body text-sm">
            <Filter size={14} />
            <span>Filter by category</span>
          </div>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-800 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 rounded-sm ${
                activeCategory === cat
                  ? 'bg-[#C9913D] text-white shadow-lg shadow-[#C9913D]/20'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={`group relative bg-[#242018] border border-[#C9913D]/10 rounded-sm overflow-hidden cursor-pointer transition-all duration-800 tile-card ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tile visual */}
              <div className={`relative h-52 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                {/* Pattern */}
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                {/* Grout lines */}
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.3) 2px, transparent 2px)',
                    backgroundSize: '60px 60px'
                  }}
                />

                {/* Tag */}
                <div className={`absolute top-3 left-3 px-2 py-1 text-[9px] tracking-[0.2em] uppercase font-body font-medium rounded-sm ${tagColors[product.tag] || 'bg-[#C9913D] text-white'}`}>
                  {product.tag}
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-[#1A1714]/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${hovered === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#C9913D] hover:border-[#C9913D] transition-all duration-200">
                    <Eye size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#C9913D] hover:border-[#C9913D] transition-all duration-200">
                    <ShoppingBag size={16} />
                  </button>
                </div>

                {/* Origin badge */}
                <div className="absolute bottom-3 right-3 bg-[#1A1714]/80 backdrop-blur-sm px-2 py-1">
                  <span className="text-[#C9913D] text-[9px] tracking-[0.2em] uppercase font-body">{product.origin}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[#C9913D]/60 text-[9px] tracking-[0.25em] uppercase font-body">{product.category}</span>
                    <h3 className="font-display text-white text-lg mt-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                      {product.name}
                    </h3>
                  </div>
                  <span className="text-[#C9913D] font-body text-xs font-medium text-right">{product.price}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#C9913D]/10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        className={i < Math.floor(product.rating) ? 'text-[#C9913D] fill-[#C9913D]' : 'text-white/20'}
                      />
                    ))}
                  </div>
                  <span className="text-white/50 text-xs font-body">{product.rating} ({product.reviews} reviews)</span>
                </div>

                {/* Enquire button */}
                <a
                  href="#contact"
                  className={`mt-4 w-full text-center block btn-outline text-xs py-2 transition-all duration-300 ${hovered === product.id ? 'bg-[#C9913D] text-white border-[#C9913D]' : ''}`}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-800 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/40 font-body text-sm mb-4">Showing {filtered.length} of 500+ products</p>
          <a href="#contact" className="btn-gold inline-flex items-center gap-2">
            Request Full Catalog
          </a>
        </div>
      </div>
    </section>
  )
}
