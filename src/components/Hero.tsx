'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react'

// Mini ticker data at top
const tickerItems = [
  { label: 'ESPRESSO', value: '₹150', change: '+3.2%', up: true },
  { label: 'COLD COFFEE', value: '₹220', change: '+1.8%', up: true },
  { label: 'GRILLED WINGS', value: '₹280', change: '-0.5%', up: false },
  { label: 'LAVA CAKE', value: '₹180', change: '+5.1%', up: true },
  { label: 'RISOTTO', value: '₹420', change: '+2.3%', up: true },
  { label: 'PASTA', value: '₹380', change: '-1.2%', up: false },
  { label: 'BURGER', value: '₹350', change: '+4.7%', up: true },
  { label: 'CAPPUCCINO', value: '₹170', change: '+0.9%', up: true },
]

// Duplicate for seamless loop
const allItems = [...tickerItems, ...tickerItems]

function LiveClock() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const istOffset = 5.5 * 60 * 60 * 1000
      const ist = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + istOffset)
      setTime(ist.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
      setDate(ist.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-2 bg-dark/60 border border-bull/20 px-3 py-1.5 rounded-sm">
      <Clock size={12} className="text-bull" />
      <div>
        <div className="font-orbitron text-bull text-xs font-bold tracking-widest">{time} IST</div>
        <div className="font-orbitron text-gray-500 text-[9px] tracking-widest">{date}</div>
      </div>
    </div>
  )
}

// Animated SVG chart
function ChartSVG() {
  return (
    <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fill */}
      <path
        d="M0,90 L30,75 L70,80 L100,60 L140,65 L170,45 L200,50 L230,30 L260,35 L290,20 L320,25 L360,10 L400,15 L400,120 L0,120 Z"
        fill="url(#chartGrad)"
      />
      {/* Line */}
      <path
        className="chart-path"
        d="M0,90 L30,75 L70,80 L100,60 L140,65 L170,45 L200,50 L230,30 L260,35 L290,20 L320,25 L360,10 L400,15"
        fill="none"
        stroke="#00ff88"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Dots */}
      {[[290,20],[360,10],[400,15]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#00ff88" opacity="0.8" />
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark" id="home">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bull/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-bear/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gold/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Top ticker bar */}
      <div className="relative z-10 bg-dark/80 border-b border-bull/20 backdrop-blur-sm mt-16">
        <div className="ticker-wrapper py-2">
          <div className="ticker-content flex gap-8">
            {allItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[11px] font-orbitron font-medium whitespace-nowrap px-2">
                <span className="text-gray-400">{item.label}</span>
                <span className="text-white">{item.value}</span>
                <span className={`flex items-center ${item.up ? 'text-bull' : 'text-bear'}`}>
                  {item.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                  {item.change}
                </span>
                <span className="text-gray-700 ml-2">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text content */}
            <div>
              {/* Live clock */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <LiveClock />
              </motion.div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-[1px] bg-bull" />
                <span className="section-label">COIMBATORE'S FIRST TRADING CAFÉ</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
              >
                <span className="text-white block">WHERE</span>
                <span className="text-bull block" style={{ textShadow: '0 0 40px rgba(0,255,136,0.4)' }}>MARKETS</span>
                <span className="text-white block">MEET</span>
                <span className="relative inline-block">
                  <span className="text-white">MEALS</span>
                  <span className="text-bull">.</span>
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-inter text-gray-400 text-base sm:text-lg max-w-md mb-8 leading-relaxed"
              >
                Coimbatore's first stock market themed café — where great food meets the energy of the trading floor.
              </motion.p>

              {/* Stat row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-6 mb-10"
              >
                {[
                  { value: '4.6★', label: 'Rating' },
                  { value: '500+', label: 'Reviews' },
                  { value: '10PM', label: 'Open Till' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-orbitron text-xl font-bold text-bull">{stat.value}</div>
                    <div className="font-inter text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#menu"
                  className="font-orbitron text-sm font-bold px-8 py-3 bg-bull text-dark rounded-sm hover:shadow-[0_0_25px_rgba(0,255,136,0.5)] hover:bg-bull/90 transition-all duration-300"
                >
                  VIEW MENU ↗
                </a>
                <a
                  href="#location"
                  className="font-orbitron text-sm font-bold px-8 py-3 border border-bull/40 text-bull rounded-sm hover:bg-bull/10 hover:border-bull transition-all duration-300"
                >
                  VISIT US
                </a>
              </motion.div>
            </div>

            {/* Right: Trading dashboard panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="glow-border bg-card/80 backdrop-blur-sm rounded-sm overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-bull/20 bg-dark/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-bear" />
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <div className="w-2 h-2 rounded-full bg-bull" />
                  </div>
                  <span className="font-orbitron text-[10px] text-gray-500 tracking-widest">BBB MARKET TERMINAL v2.0</span>
                  <span className="font-orbitron text-[10px] text-bull animate-pulse">● LIVE</span>
                </div>

                {/* Chart */}
                <div className="px-4 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-orbitron text-xs text-gray-500">MENU INDEX</span>
                      <div className="font-orbitron text-2xl font-bold text-white">₹2,640 <span className="text-bull text-sm">▲ +4.2%</span></div>
                    </div>
                    <div className="text-right">
                      <div className="font-orbitron text-[10px] text-gray-600">TODAY'S HIGH</div>
                      <div className="font-orbitron text-xs text-bull">₹2,650</div>
                      <div className="font-orbitron text-[10px] text-gray-600 mt-1">TODAY'S LOW</div>
                      <div className="font-orbitron text-xs text-bear">₹2,580</div>
                    </div>
                  </div>
                  <div className="h-28">
                    <ChartSVG />
                  </div>
                </div>

                {/* Market data rows */}
                <div className="px-4 pb-4 space-y-2">
                  {[
                    { name: 'Grilled Burger', price: '₹350', change: '+4.7%', up: true, vol: '143' },
                    { name: 'Pistachio Risotto', price: '₹420', change: '+2.1%', up: true, vol: '89' },
                    { name: 'Cold Coffee', price: '₹220', change: '-0.8%', up: false, vol: '212' },
                    { name: 'Choco Lava Cake', price: '₹180', change: '+9.3%', up: true, vol: '178' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center justify-between py-1.5 px-2 rounded-sm hover:bg-bull/5 transition-colors cursor-default"
                    >
                      <span className="font-inter text-xs text-gray-300">{item.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-inter text-xs text-gray-500 hidden sm:block">Vol: {item.vol}</span>
                        <span className="font-orbitron text-xs text-white">{item.price}</span>
                        <span className={`font-orbitron text-xs flex items-center gap-0.5 ${item.up ? 'text-bull' : 'text-bear'}`}>
                          {item.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          {item.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer bar */}
                <div className="px-4 py-2 border-t border-bull/10 bg-dark/60 flex justify-between items-center">
                  <span className="font-orbitron text-[9px] text-gray-600 tracking-widest">RS PURAM EXCHANGE</span>
                  <span className="font-orbitron text-[9px] text-bull">MARKET OPEN<span className="blink ml-1">_</span></span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-orbitron text-[9px] text-gray-600 tracking-widest">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-bull/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
