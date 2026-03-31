'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Menu as MenuIcon, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Specials', href: '#specials' },
  { label: 'Portfolio', href: '#quiz' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-md border-b border-bull/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-bull/10 border border-bull/40 flex items-center justify-center group-hover:bg-bull/20 transition-colors">
            <TrendingUp size={16} className="text-bull" />
          </div>
          <span className="font-orbitron font-bold text-sm tracking-wider text-white">
            B&B <span className="text-bull">BISTRO</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-inter font-medium text-gray-400 hover:text-bull transition-colors tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#menu"
          className="hidden md:flex items-center gap-1 text-xs font-orbitron font-bold px-4 py-2 bg-bull text-dark rounded-sm hover:bg-bull/90 transition-all hover:shadow-[0_0_15px_rgba(0,255,136,0.4)]"
        >
          VIEW MENU
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-bull"
        >
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-md border-b border-bull/20 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-inter text-gray-300 hover:text-bull transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#menu"
                onClick={() => setOpen(false)}
                className="text-xs font-orbitron font-bold px-4 py-2 bg-bull text-dark rounded-sm text-center"
              >
                VIEW MENU
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
