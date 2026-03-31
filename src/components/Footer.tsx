'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Instagram, MapPin, Phone, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-bull/10 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-bull/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-sm bg-bull/10 border border-bull/40 flex items-center justify-center">
                <TrendingUp size={18} className="text-bull" />
              </div>
              <span className="font-orbitron font-black text-lg text-white tracking-wider">
                BULLS & <span className="text-bull">BEARS</span>
              </span>
            </div>
            <p className="font-inter text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Unofficial portfolio concept inspired by Bulls & Bears Bistro, a real cafe in Coimbatore.
              This is a personal demo project.
            </p>
            <div className="font-orbitron text-xl font-bold text-white mb-2">
              "Trade Smart. <span className="text-bull">Eat Better.</span>"
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-bull hover:border-bull/40 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="tel:+919876543210"
                className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-bull hover:border-bull/40 transition-all"
              >
                <Phone size={14} />
              </a>
              <a
                href="#location"
                className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-bull hover:border-bull/40 transition-all"
              >
                <MapPin size={14} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-orbitron text-xs text-gray-400 tracking-widest mb-5">NAVIGATION</div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Today\'s Specials', href: '#specials' },
                { label: 'Food Portfolio', href: '#quiz' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Visit Us', href: '#location' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-inter text-sm text-gray-500 hover:text-bull transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-orbitron text-xs text-gray-400 tracking-widest mb-5">CONTACT</div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="font-orbitron text-[10px] text-gray-600 mb-1">ADDRESS</div>
                <div className="font-inter text-sm text-gray-400 leading-relaxed">
                  40, E Lokamanya Street<br />
                  RS Puram, Coimbatore<br />
                  Tamil Nadu – 641 002
                </div>
              </div>
              <div>
                <div className="font-orbitron text-[10px] text-gray-600 mb-1">PHONE</div>
                <a href="tel:+919876543210" className="font-inter text-sm text-gray-400 hover:text-bull transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div>
                <div className="font-orbitron text-[10px] text-gray-600 mb-1">HOURS</div>
                <div className="font-inter text-sm text-gray-400">Open till 10:00 PM</div>
                <div className="font-inter text-xs text-gray-600">Mon–Sun</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-orbitron text-[10px] text-gray-700 tracking-widest">
            © 2026 PERSONAL PORTFOLIO DEMO. UNOFFICIAL CONCEPT.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-bull animate-pulse" />
              <span className="font-orbitron text-[10px] text-bull tracking-widest">MARKET OPEN</span>
            </div>
            <span className="font-orbitron text-[10px] text-gray-700">RS PURAM EXCHANGE</span>
          </div>
        </div>
        <p className="pb-8 font-inter text-xs text-gray-600 leading-relaxed max-w-4xl">
          Disclaimer: This website is an independent personal portfolio project inspired by a real business in Coimbatore.
          The actual shop already has its own official website. This demo is not affiliated with or endorsed by the business.
        </p>
      </div>
    </footer>
  )
}
