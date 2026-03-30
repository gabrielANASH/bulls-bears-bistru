'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, TrendingDown, Coffee, Users } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    label: 'Bull Market Energy',
    desc: 'High energy, winning vibes, and an atmosphere that keeps you charged all day.',
    color: 'text-bull',
    bg: 'bg-bull/10',
    border: 'border-bull/20',
    glow: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]',
  },
  {
    icon: TrendingDown,
    label: 'Bear Market Chill',
    desc: 'Slow down, unwind, and enjoy the cozy corners perfect for quiet conversations.',
    color: 'text-bear',
    bg: 'bg-bear/10',
    border: 'border-bear/20',
    glow: 'hover:shadow-[0_0_30px_rgba(255,51,85,0.15)]',
  },
  {
    icon: Coffee,
    label: 'Premium Brews',
    desc: 'Handcrafted coffees and beverages that fuel your best ideas and trades.',
    color: 'text-gold',
    bg: 'bg-gold/10',
    border: 'border-gold/20',
    glow: 'hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]',
  },
  {
    icon: Users,
    label: 'Community Hub',
    desc: 'Where students, professionals, and friends gather to trade ideas and share stories.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    glow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`card-hover glow-border ${feature.glow} ${feature.bg} border ${feature.border} rounded-sm p-6 flex flex-col gap-4`}
    >
      <div className={`w-12 h-12 rounded-sm ${feature.bg} border ${feature.border} flex items-center justify-center`}>
        <Icon size={22} className={feature.color} />
      </div>
      <div>
        <h3 className={`font-orbitron text-sm font-bold ${feature.color} mb-2`}>{feature.label}</h3>
        <p className="font-inter text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-28 bg-dark overflow-hidden">
      {/* subtle bg */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-bull/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-bull" />
              <span className="section-label">About The Bistro</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-6 leading-tight"
            >
              TRADE IDEAS,<br />
              <span className="text-bull">SHARE MEALS</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-gray-400 text-base leading-relaxed mb-6"
            >
              Bulls &amp; Bears Bistro blends the thrill of financial markets with the comfort of great food.
              Inspired by trading culture, the café creates an energetic environment where friends, students,
              and professionals gather to trade ideas, stories, and great meals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-gray-500 text-sm leading-relaxed mb-8"
            >
              From Bloomberg-terminal-inspired walls to menu items named after market movements,
              every detail is crafted to give you an experience unlike any other café in Coimbatore.
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 pt-4 border-t border-bull/10"
            >
              {[
                { val: '2+', label: 'Years Running' },
                { val: '20+', label: 'Menu Items' },
                { val: 'RS Puram', label: 'Coimbatore' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-orbitron text-xl font-bold text-bull">{s.val}</div>
                  <div className="font-inter text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <FeatureCard key={f.label} feature={f} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
