'use client'
import { useEffect, useState } from 'react'
import { MessageCircle, ArrowUp } from 'lucide-react'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -300, y: -300 })

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMouse = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Cursor glow */}
      <div
        className="cursor-glow hidden md:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* WhatsApp float button */}
      <a
        href="https://wa.me/923000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        title="Chat on WhatsApp"
      >
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:bg-green-400 transition-all duration-300 hover:scale-110">
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
          <MessageCircle size={22} className="text-white relative z-10" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 bottom-3 bg-[#1A1714] text-white px-3 py-1.5 text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#C9913D]/20">
          Chat on WhatsApp
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#1A1714] border-r border-t border-[#C9913D]/20 rotate-45" />
        </div>
      </a>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-8 z-50 w-10 h-10 bg-[#C9913D] flex items-center justify-center text-white hover:bg-[#B07D2E] transition-all duration-300 hover:scale-110 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        title="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </>
  )
}
