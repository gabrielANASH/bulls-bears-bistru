'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import TickerSpecials from '@/components/TickerSpecials'
import Quiz from '@/components/Quiz'
import Reviews from '@/components/Reviews'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-dark min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <TickerSpecials />
      <Quiz />
      <Reviews />
      <Location />
      <Footer />
    </main>
  )
}
