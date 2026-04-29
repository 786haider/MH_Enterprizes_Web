'use client'
import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Showroom Address',
    lines: ['Main Tariq Road, Karachi', 'Pakistan'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+92 300 0000000', '+92 21 0000000'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@mhenterprises.pk', 'sales@mhenterprises.pk'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'],
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', projectType: '', message: '' })
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-[#1A1714] overflow-hidden">
      <div className="absolute inset-0 tile-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9913D]/30 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute -right-40 top-1/4 w-[500px] h-[500px] rounded-full border border-[#C9913D]/8" />
      <div className="absolute -left-20 bottom-1/4 w-[300px] h-[300px] rounded-full border border-[#C9913D]/6" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="diamond-divider mb-6">
            <span className="text-[#C9913D] text-xs tracking-[0.4em] uppercase font-body">Get In Touch</span>
          </div>
          <h2 className="font-display text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Let's Build Something{' '}
            <span className="italic font-semibold gold-shimmer">Beautiful</span>
          </h2>
          <p className="text-white/40 font-body mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Whether you're renovating your home, designing a hotel, or building a commercial space — our team is ready to help you find the perfect solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div className={`flex flex-col gap-6 transition-all duration-800 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-[#242018] border border-[#C9913D]/10 p-5 rounded-sm hover:border-[#C9913D]/30 transition-all duration-300 group">
                  <div className="w-9 h-9 border border-[#C9913D]/30 flex items-center justify-center mb-3 group-hover:border-[#C9913D] group-hover:bg-[#C9913D]/10 transition-all duration-300">
                    <info.icon size={15} className="text-[#C9913D]" />
                  </div>
                  <p className="text-[#C9913D]/70 text-[10px] tracking-[0.25em] uppercase font-body mb-2">{info.title}</p>
                  {info.lines.map((line) => (
                    <p key={line} className="text-white/70 font-body text-sm">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-52 bg-[#242018] border border-[#C9913D]/10 rounded-sm overflow-hidden">
              <div className="absolute inset-0 tile-pattern opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 border border-[#C9913D]/40 rotate-45 flex items-center justify-center">
                  <MapPin size={18} className="text-[#C9913D] -rotate-45" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 font-body text-sm">Main Tariq Road, Karachi</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9913D] text-xs font-body tracking-wider hover:underline mt-1 block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              {/* Grid lines to simulate map */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="border border-[#C9913D]/5" />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-800 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-[#242018] border border-[#C9913D]/15 p-8 rounded-sm relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-px bg-[#C9913D]/40" />
                <div className="absolute top-0 left-0 h-full w-px bg-[#C9913D]/40" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#C9913D]/40" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#C9913D]/40" />
              </div>

              <h3 className="font-display text-white text-2xl mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                Request a Free Quote
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <div className="w-16 h-16 rounded-full border border-[#C9913D] flex items-center justify-center">
                    <CheckCircle size={28} className="text-[#C9913D]" />
                  </div>
                  <p className="font-display text-white text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Message Sent!
                  </p>
                  <p className="text-white/50 font-body text-sm text-center">
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    {['name', 'phone'].map((field) => (
                      <div key={field} className="flex flex-col gap-1.5">
                        <label className="text-[#C9913D]/70 text-[10px] tracking-[0.25em] uppercase font-body">
                          {field === 'name' ? 'Full Name *' : 'Phone Number'}
                        </label>
                        <input
                          type={field === 'phone' ? 'tel' : 'text'}
                          required={field === 'name'}
                          value={form[field as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          placeholder={field === 'name' ? 'Your name' : '+92 300...'}
                          className="bg-[#1A1714] border border-[#C9913D]/15 text-white placeholder-white/25 font-body text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9913D]/50 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#C9913D]/70 text-[10px] tracking-[0.25em] uppercase font-body">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-[#1A1714] border border-[#C9913D]/15 text-white placeholder-white/25 font-body text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9913D]/50 transition-colors"
                    />
                  </div>

                  {/* Project type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#C9913D]/70 text-[10px] tracking-[0.25em] uppercase font-body">
                      Project Type
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="bg-[#1A1714] border border-[#C9913D]/15 text-white/80 font-body text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9913D]/50 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential / Home</option>
                      <option value="commercial">Commercial / Office</option>
                      <option value="hospitality">Hotel / Hospitality</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#C9913D]/70 text-[10px] tracking-[0.25em] uppercase font-body">
                      Message / Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, space size, style preferences..."
                      className="bg-[#1A1714] border border-[#C9913D]/15 text-white placeholder-white/25 font-body text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9913D]/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gold flex items-center justify-center gap-2 mt-2"
                  >
                    Send Enquiry
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
