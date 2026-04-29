'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MapPin, Building2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Pearl Continental Hotel',
    location: 'Karachi',
    type: 'Hospitality',
    area: '45,000 sqft',
    description: 'Complete lobby, corridor and suite flooring with Italian marble-effect porcelain.',
    gradient: 'from-[#8B7355] via-[#6B5540] to-[#4A3828]',
    year: '2023',
  },
  {
    id: 2,
    title: 'Emaar The Views',
    location: 'Lahore',
    type: 'Residential',
    area: '120 Units',
    description: 'Exclusive ceramic and sanitary supply for premium residential towers.',
    gradient: 'from-[#2C3540] via-[#1E2830] to-[#151E28]',
    year: '2022',
  },
  {
    id: 3,
    title: 'Dolmen Mall Extension',
    location: 'Clifton, Karachi',
    type: 'Commercial',
    area: '80,000 sqft',
    description: 'Anti-slip floor tiles and decorative wall ceramics throughout the mall expansion.',
    gradient: 'from-[#3D3020] via-[#2C2218] to-[#1A1410]',
    year: '2023',
  },
  {
    id: 4,
    title: 'DHA Phase 8 Villas',
    location: 'Karachi',
    type: 'Residential',
    area: '200+ Villas',
    description: 'Premium tile and sanitary packages for the entire residential development.',
    gradient: 'from-[#1A2818] via-[#141E12] to-[#0E1610]',
    year: '2024',
  },
  {
    id: 5,
    title: 'Nishtar Hospital Renovation',
    location: 'Multan',
    type: 'Healthcare',
    area: '35,000 sqft',
    description: 'Hygienic ceramic tiles for wards, OTs, and corridors meeting hospital standards.',
    gradient: 'from-[#182028] via-[#121820] to-[#0C1018]',
    year: '2022',
  },
  {
    id: 6,
    title: 'The Centaurus',
    location: 'Islamabad',
    type: 'Mixed-Use',
    area: '60,000 sqft',
    description: 'Luxury Italian porcelain and artisan ceramics for the iconic landmark building.',
    gradient: 'from-[#28201A] via-[#1E1814] to-[#141010]',
    year: '2021',
  },
]

const typeColors: Record<string, string> = {
  'Hospitality': 'text-amber-400 bg-amber-400/10',
  'Residential': 'text-emerald-400 bg-emerald-400/10',
  'Commercial': 'text-blue-400 bg-blue-400/10',
  'Healthcare': 'text-rose-400 bg-rose-400/10',
  'Mixed-Use': 'text-purple-400 bg-purple-400/10',
}

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="relative py-32 bg-[#1A1714] overflow-hidden">
      <div className="absolute inset-0 tile-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9913D]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-[#C9913D]" />
              <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Portfolio</span>
            </div>
            <h2 className="font-display text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
              Landmark{' '}
              <span className="italic font-semibold text-[#C9913D]">Projects</span>
            </h2>
          </div>
          <p className="text-white/40 font-body text-sm max-w-sm leading-relaxed">
            From 5-star hotels to iconic malls and luxury residences — MH Enterprises is behind Pakistan's most beautiful spaces.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-sm cursor-pointer tile-card transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tile visual */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient}`}>
                {/* Grid overlay */}
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(201,145,61,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,145,61,0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-[#C9913D] text-white text-xs font-body tracking-wider px-3 py-1">
                  {project.year}
                </div>

                {/* Type badge */}
                <div className={`absolute top-4 left-4 text-[10px] font-body tracking-wider px-2 py-1 rounded-sm ${typeColors[project.type]}`}>
                  {project.type}
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-[#C9913D]/10 flex items-center justify-center transition-opacity duration-300 ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-12 h-12 rounded-full border border-[#C9913D] flex items-center justify-center">
                    <ArrowRight size={16} className="text-[#C9913D]" />
                  </div>
                </div>

                {/* Building icon */}
                <div className="absolute bottom-6 left-6 opacity-20">
                  <Building2 size={80} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#242018] border border-t-0 border-[#C9913D]/10 p-5">
                <h3 className="font-display text-white text-xl mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin size={11} className="text-[#C9913D]" />
                  <span className="text-[#C9913D]/70 text-xs font-body">{project.location}</span>
                  <span className="text-white/20 text-xs mx-1">·</span>
                  <span className="text-white/40 text-xs font-body">{project.area}</span>
                </div>
                <p className="text-white/50 font-body text-xs leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-800 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/30 font-body text-sm mb-4">10,000+ successful projects across Pakistan</p>
          <a href="#contact" className="btn-gold inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
