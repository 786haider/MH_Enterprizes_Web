'use client'
import { useEffect, useRef, useState } from 'react'
import { Award, Users, Globe, Sparkles } from 'lucide-react'

const counters = [
  { end: 35, suffix: '+', label: 'Years of Excellence', icon: Award },
  { end: 10000, suffix: '+', label: 'Happy Clients', icon: Users },
  { end: 500, suffix: '+', label: 'Tile Designs', icon: Sparkles },
  { end: 25, suffix: '+', label: 'Cities Served', icon: Globe },
]

function useCounter(end: number, start: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [start, end])
  return count
}

function Counter({ end, suffix, label, icon: Icon, started }: any) {
  const count = useCounter(end, started)
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="w-14 h-14 rounded-full border border-[#C9913D]/30 flex items-center justify-center group-hover:border-[#C9913D] group-hover:bg-[#C9913D]/10 transition-all duration-400 mb-2">
        <Icon size={20} className="text-[#C9913D]" />
      </div>
      <span className="text-4xl font-display font-bold text-[#C9913D]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        {end >= 1000 ? `${(count / 1000).toFixed(count >= end ? 0 : 1)}K` : count}{suffix}
      </span>
      <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-body text-center">{label}</span>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [counterStart, setCounterStart] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setCounterStart(true), 400)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-[#1A1714] overflow-hidden">
      {/* BG pattern */}
      <div className="absolute inset-0 tile-pattern opacity-10" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9913D]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9913D]/40 to-transparent" />

      {/* Decorative large text */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[200px] font-display font-bold text-[#C9913D]/3 select-none pointer-events-none leading-none"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        MH
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="diamond-divider mb-6">
            <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Our Legacy</span>
          </div>
          <h2 className="font-display text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Built on Trust,{' '}
            <span className="gold-shimmer italic font-semibold">Crafted with Passion</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-body leading-relaxed">
            Since 1989, MH Enterprises has been Pakistan's leading destination for premium tiles, ceramics, and sanitary solutions — transforming homes, hotels, and commercial spaces with unmatched quality.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Story */}
          <div className={`transition-all duration-800 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Decorative tile stack visual */}
              <div className="relative h-80 mb-8">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2">
                  {[
                    'bg-gradient-to-br from-[#8B7355] to-[#5C4A2A]',
                    'bg-gradient-to-br from-[#C4B49A] to-[#A89478]',
                    'bg-gradient-to-br from-[#2C2520] to-[#1A1714]',
                    'bg-gradient-to-br from-[#C9913D]/50 to-[#8B6020]/50',
                    'bg-gradient-to-br from-[#E8DDD0] to-[#CCC0A8]',
                    'bg-gradient-to-br from-[#3D3530] to-[#28211C]',
                    'bg-gradient-to-br from-[#C9913D] to-[#8B6020]',
                    'bg-gradient-to-br from-[#1A1714] to-[#2A2420]',
                    'bg-gradient-to-br from-[#D0C8B8] to-[#B8A888]',
                    'bg-gradient-to-br from-[#5C4A2A] to-[#3D3020]',
                    'bg-gradient-to-br from-[#2A2520] to-[#1A1714]',
                    'bg-gradient-to-br from-[#C9913D]/40 to-[#E8B86D]/40',
                  ].map((bg, i) => (
                    <div
                      key={i}
                      className={`${bg} rounded-sm tile-card`}
                      style={{
                        transitionDelay: `${i * 0.04}s`,
                      }}
                    />
                  ))}
                </div>
                {/* Overlay badge */}
                <div className="absolute bottom-4 right-4 bg-[#C9913D] px-4 py-3 text-white">
                  <p className="text-3xl font-display font-bold leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>35</p>
                  <p className="text-[9px] tracking-[0.3em] uppercase font-body">Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`flex flex-col gap-6 transition-all duration-800 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-[#C9913D]" />
              <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Since 1989</span>
            </div>
            <h3 className="font-display text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 400, lineHeight: 1.2 }}>
              Three Decades of<br />
              <span className="text-[#C9913D] italic">Transforming Spaces</span>
            </h3>
            <p className="text-white/60 font-body leading-relaxed">
              What started as a small tile shop in 1989 has grown into Pakistan's most trusted name in premium surfaces. MH Enterprises brings you the finest Italian porcelain, Spanish ceramics, and top-tier sanitary ware — all under one roof.
            </p>
            <p className="text-white/60 font-body leading-relaxed">
              Our team of expert consultants helps architects, interior designers, and homeowners select the perfect tile and sanitary solutions tailored to their vision and budget.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                'Italian & Spanish Imports',
                'Expert Design Consultation',
                'Complete Installation Support',
                'Custom Order Capability',
                'Commercial & Residential',
                'After-sales Service',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C9913D] rotate-45 flex-shrink-0" />
                  <span className="text-white/70 font-body text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#collections" className="btn-gold self-start mt-4">Explore Our Collections</a>
          </div>
        </div>

        {/* Counters */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#C9913D]/15 transition-all duration-800 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {counters.map((counter) => (
            <Counter key={counter.label} {...counter} started={counterStart} />
          ))}
        </div>
      </div>
    </section>
  )
}
