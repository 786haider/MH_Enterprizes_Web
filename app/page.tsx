import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Collections from '@/components/Collections'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Products />
      <WhyUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
