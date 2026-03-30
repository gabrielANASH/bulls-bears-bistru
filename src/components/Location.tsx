'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone, ExternalLink, ShoppingBag, Coffee, UtensilsCrossed, Car } from 'lucide-react'

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 10:00 PM', status: 'open' },
  { day: 'Saturday', time: '09:00 AM – 11:00 PM', status: 'open' },
  { day: 'Sunday', time: '09:00 AM – 10:30 PM', status: 'open' },
]

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="location" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-bear/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-bull" />
            <span className="section-label">Find Us</span>
            <div className="w-8 h-[1px] bg-bull" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl sm:text-5xl font-black text-white"
          >
            VISIT THE <span className="text-bull">TRADING FLOOR</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Map placeholder + address */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {/* Map embed */}
            <div className="relative rounded-sm overflow-hidden glow-border mb-6" style={{ height: '320px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.9558!3d11.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzE5LjQiTiA3NsKwNTcnMjEuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-dark/90 border border-bull/30 rounded-sm px-3 py-2 backdrop-blur-sm">
                <div className="font-orbitron text-xs text-bull font-bold">BULLS & BEARS BISTRO</div>
                <div className="font-inter text-xs text-gray-400">RS Puram, Coimbatore</div>
              </div>
            </div>

            {/* Address card */}
            <div className="glow-border bg-card/60 rounded-sm p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-bull/10 border border-bull/30 rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-bull" />
              </div>
              <div>
                <div className="font-orbitron text-xs text-gray-400 tracking-widest mb-1">ADDRESS</div>
                <div className="font-inter text-sm text-white font-medium leading-relaxed">
                  40, E Lokamanya Street<br />
                  R.S. Puram, Coimbatore<br />
                  Tamil Nadu – 641 002
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Hours */}
            <div className="glow-border bg-card/60 rounded-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-bull" />
                <span className="font-orbitron text-xs text-gray-400 tracking-widest">MARKET HOURS</span>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="font-inter text-sm text-gray-300">{h.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-orbitron text-xs text-white">{h.time}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-bull animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="glow-border bg-card/60 rounded-sm p-5">
              <div className="font-orbitron text-xs text-gray-400 tracking-widest mb-4">SERVICES AVAILABLE</div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: UtensilsCrossed, label: 'Dine-in' },
                  { icon: Car, label: 'Takeaway' },
                  { icon: Coffee, label: 'Coffee Shop' },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2 p-3 bg-dark/60 rounded-sm border border-white/5">
                    <s.icon size={18} className="text-bull" />
                    <span className="font-inter text-xs text-gray-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="glow-border bg-card/60 rounded-sm p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-bull/10 border border-bull/30 rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-bull" />
              </div>
              <div>
                <div className="font-orbitron text-xs text-gray-400 tracking-widest mb-0.5">REACH US</div>
                <div className="font-inter text-sm text-white">+91 98765 43210</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=RS+Puram+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-bull text-dark font-orbitron text-xs font-bold rounded-sm hover:bg-bull/90 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all"
              >
                <MapPin size={14} /> OPEN IN MAPS
              </a>
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#fc8019] text-white font-orbitron text-xs font-bold rounded-sm hover:bg-[#fc8019]/90 transition-all"
              >
                <ShoppingBag size={14} /> ORDER ON SWIGGY
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
