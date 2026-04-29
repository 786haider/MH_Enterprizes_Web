'use client'
import { useEffect, useRef, useState } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Arshad Mahmood',
    title: 'Head Architect, AM Associates',
    content: 'MH Enterprises has been our go-to partner for over 15 years. Their tile selection is unmatched and the team always helps us find exactly what our clients envision. The quality is consistently exceptional.',
    rating: 5,
    initials: 'AM',
    color: 'bg-[#C9913D]',
  },
  {
    id: 2,
    name: 'Sana Rizvi',
    title: 'Interior Designer, SR Interiors',
    content: 'As an interior designer, I need suppliers who understand aesthetics as well as quality. MH Enterprises does both brilliantly. Their ceramics collection has pieces you simply cannot find anywhere else in Pakistan.',
    rating: 5,
    initials: 'SR',
    color: 'bg-[#8B5E2A]',
  },
  {
    id: 3,
    name: 'Imran Baig',
    title: 'Director, Baig Construction',
    content: 'We\'ve supplied all 200+ villas in our DHA project through MH Enterprises. The pricing is competitive, delivery is always on time, and their after-sales support has saved us multiple times.',
    rating: 5,
    initials: 'IB',
    color: 'bg-[#5C4A2A]',
  },
  {
    id: 4,
    name: 'Dr. Farrukh Qureshi',
    title: 'Homeowner, Clifton Karachi',
    content: 'Renovated our home bathroom entirely with MH\'s sanitary and tile collection. The consultation team was incredibly patient and helped us choose a design that transformed our bathrooms completely.',
    rating: 5,
    initials: 'FQ',
    color: 'bg-[#3D3020]',
  },
  {
    id: 5,
    name: 'Nadia Hassan',
    title: 'Hotel GM, Avari Towers',
    content: 'The hotel industry demands perfection and durability. MH Enterprises has supplied us across three major renovations and every time the quality, variety, and service has exceeded expectations.',
    rating: 5,
    initials: 'NH',
    color: 'bg-[#2A2018]',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#FAF7F2] overflow-hidden">
      {/* Subtle dots bg */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(201,145,61,0.2) 1px, transparent 0)', backgroundSize: '28px 28px' }}
      />

      {/* Large decorative quote */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[300px] font-display font-bold text-[#C9913D]/5 select-none pointer-events-none leading-none"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        "
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="diamond-divider mb-6">
            <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Testimonials</span>
          </div>
          <h2 className="font-display text-[#1A1714]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            What Our{' '}
            <span className="italic font-semibold text-[#C9913D]">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          key={current}
          className={`relative bg-white border border-[#C9913D]/15 p-10 md:p-14 rounded-sm transition-all duration-800 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ boxShadow: '0 30px 80px rgba(201,145,61,0.08)' }}
        >
          {/* Decorative corners */}
          {['-top-px -left-px', '-top-px -right-px', '-bottom-px -left-px', '-bottom-px -right-px'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 border-[#C9913D]/40`}
              style={{ borderWidth: i < 2 ? '1px 0 0 1px' : '0 0 1px 0', borderStyle: 'solid', borderColor: '#C9913D40',
                ...(i === 1 ? { borderWidth: '1px 1px 0 0' } : {}),
                ...(i === 3 ? { borderWidth: '0 1px 1px 0' } : {}),
              }}
            />
          ))}

          {/* Quote icon */}
          <div className="absolute top-8 right-10 opacity-10">
            <Quote size={60} className="text-[#C9913D]" />
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-[#C9913D] fill-[#C9913D]" />
            ))}
          </div>

          {/* Content */}
          <blockquote className="font-display text-[#1A1714] leading-relaxed mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, fontStyle: 'italic' }}>
            "{t.content}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${t.color} flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {t.initials}
            </div>
            <div>
              <p className="font-body font-semibold text-[#1A1714]">{t.name}</p>
              <p className="font-body text-[#6B6560] text-sm">{t.title}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 right-10 flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 border border-[#C9913D]/30 flex items-center justify-center text-[#C9913D] hover:bg-[#C9913D] hover:text-white hover:border-[#C9913D] transition-all duration-300"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 border border-[#C9913D]/30 flex items-center justify-center text-[#C9913D] hover:bg-[#C9913D] hover:text-white hover:border-[#C9913D] transition-all duration-300"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-[#C9913D]' : 'w-2 h-2 bg-[#C9913D]/30 hover:bg-[#C9913D]/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
