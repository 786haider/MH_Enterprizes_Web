'use client'
import { useEffect, useRef, useState } from 'react'
import { Shield, Truck, Headphones, Award, Layers, Ruler } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: '35 Years Trusted',
    description: 'Three decades of serving Pakistan\'s homes, hotels, and commercial projects with uncompromising quality.',
  },
  {
    icon: Layers,
    title: '500+ Exclusive Designs',
    description: 'The largest collection of tiles, ceramics and sanitary ware under one roof in the region.',
  },
  {
    icon: Shield,
    title: 'Quality Certified',
    description: 'All products meet international quality standards with ISO certifications and manufacturer warranties.',
  },
  {
    icon: Ruler,
    title: 'Expert Consultation',
    description: 'Our design experts help you select the perfect materials, patterns and layouts for your space.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast, secure delivery to all major cities across Pakistan with careful packaging.',
  },
  {
    icon: Headphones,
    title: 'After-Sales Support',
    description: '24/7 customer support and on-site assistance for installation, repairs, and replacements.',
  },
]

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-32 bg-[#FAF7F2] overflow-hidden" ref={sectionRef}>
      {/* Subtle dots */}
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(201,145,61,0.2) 1px, transparent 0)', backgroundSize: '28px 28px' }}
      />

      {/* Decorative diagonal line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] border border-[#C9913D]/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] border border-[#C9913D]/8 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="diamond-divider mb-6">
            <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Why MH Enterprises</span>
          </div>
          <h2 className="font-display text-[#1A1714]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            The MH{' '}
            <span className="italic font-semibold text-[#C9913D]">Difference</span>
          </h2>
          <p className="text-[#6B6560] font-body mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            When you choose MH Enterprises, you choose 35 years of expertise, the widest selection, and service that goes beyond the sale.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative bg-white border border-[#C9913D]/10 p-8 rounded-sm tile-card transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9913D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-sm" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-px bg-[#C9913D]/20" />
                <div className="absolute top-0 right-0 h-full w-px bg-[#C9913D]/20" />
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#C9913D]/30" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 mb-6 relative">
                  <div className="absolute inset-0 border border-[#C9913D]/20 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
                  <div className="absolute inset-2 bg-[#C9913D]/10 rotate-45 group-hover:bg-[#C9913D]/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon size={20} className="text-[#C9913D]" />
                  </div>
                </div>

                <h3 className="font-display text-[#1A1714] text-xl mb-3 group-hover:text-[#C9913D] transition-colors duration-300"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                  {feature.title}
                </h3>
                <p className="text-[#6B6560] font-body text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover bottom line */}
                <div className="mt-6 h-px bg-gradient-to-r from-[#C9913D] to-transparent w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Brand logos / certifications */}
        <div className={`mt-20 pt-12 border-t border-[#C9913D]/15 transition-all duration-800 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-[#6B6560] text-xs tracking-[0.4em] uppercase font-body mb-8">
            Authorized Dealers & Importers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Roca', 'Porcelanosa', 'Gres de Valls', 'Ceramica Vogue', 'Grohe', 'American Standard'].map((brand) => (
              <div
                key={brand}
                className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-1.5 h-1.5 bg-[#C9913D] rotate-45 flex-shrink-0" />
                <span className="font-display text-[#1A1714] text-xl tracking-wide"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
