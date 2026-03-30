'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react'

const specials = [
  { name: 'Grilled Chicken Burger', price: '₹350', change: '+12%', up: true, vol: '143 orders' },
  { name: 'Choco Lava Cake', price: '₹180', change: '+9%', up: true, vol: '178 orders' },
  { name: 'Pistachio Risotto', price: '₹420', change: '-2%', up: false, vol: '89 orders' },
  { name: 'Pink Sauce Pasta', price: '₹380', change: '+7%', up: true, vol: '112 orders' },
  { name: 'Hazelnut Cold Coffee', price: '₹220', change: '+15%', up: true, vol: '212 orders' },
  { name: 'Loaded Fries', price: '₹240', change: '+5%', up: true, vol: '167 orders' },
  { name: 'Grilled Wings', price: '₹280', change: '-3%', up: false, vol: '95 orders' },
  { name: 'Espresso Shot', price: '₹150', change: '+3%', up: true, vol: '230 orders' },
]

// Duplicate for seamless loop
const allSpecials = [...specials, ...specials]

const boardItems = [
  { name: 'Choco Lava Cake', change: '+9%', up: true, desc: 'Today\'s Hottest Pick' },
  { name: 'Cold Coffee', change: '+15%', up: true, desc: 'Best Seller Today' },
  { name: 'Chicken Burger', change: '+12%', up: true, desc: 'Most Ordered' },
  { name: 'Pistachio Risotto', change: '-2%', up: false, desc: 'Limited Stock' },
  { name: 'Grilled Wings', change: '-3%', up: false, desc: 'Selling Slow' },
  { name: 'Pink Pasta', change: '+7%', up: true, desc: 'Trending Now' },
]

export default function TickerSpecials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="specials" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-bull/4 rounded-full blur-[120px] pointer-events-none" />

      {/* Top ticker bar */}
      <div className="relative overflow-hidden border-y border-bull/30 bg-bull/5 backdrop-blur-sm mb-16 py-3">
        <div className="ticker-wrapper">
          <div className="ticker-content flex gap-12">
            {allSpecials.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-xs font-orbitron whitespace-nowrap">
                <span className="text-gray-400 font-medium">{item.name.toUpperCase()}</span>
                <span className="text-white font-bold">{item.price}</span>
                <span className={`flex items-center gap-0.5 font-bold ${item.up ? 'text-bull' : 'text-bear'}`}>
                  {item.up ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                  {item.change}
                </span>
                <span className="text-gray-700">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-bull" />
            <span className="section-label">Live Market Data</span>
            <div className="w-8 h-[1px] bg-bull" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl sm:text-5xl font-black text-white"
          >
            TODAY'S <span className="text-bull">SPECIALS</span>
          </motion.h2>
        </div>

        {/* Exchange board grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boardItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden glow-border rounded-sm p-5 bg-card card-hover ${
                item.up ? 'hover:border-bull/50' : 'hover:border-bear/50'
              }`}
            >
              {/* BG accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-10 pointer-events-none"
                style={{ background: item.up ? '#00ff88' : '#ff3355' }}
              />

              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-inter text-xs text-gray-500 uppercase tracking-wider mb-1">{item.desc}</div>
                  <div className="font-orbitron text-sm font-bold text-white">{item.name}</div>
                </div>
                <div className={`flex items-center gap-0.5 font-orbitron text-lg font-black ${item.up ? 'text-bull' : 'text-bear'}`}>
                  {item.up ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {item.change}
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1 h-8 mt-2">
                {Array.from({ length: 10 }, (_, j) => {
                  const height = 20 + Math.sin(j * 1.5 + i) * 12 + (item.up ? j * 1.5 : -j * 0.5)
                  const isLast = j === 9
                  return (
                    <div
                      key={j}
                      className="flex-1 rounded-sm opacity-60 transition-all"
                      style={{
                        height: `${Math.max(4, Math.min(32, height))}px`,
                        background: isLast
                          ? (item.up ? '#00ff88' : '#ff3355')
                          : (item.up ? '#00ff8840' : '#ff335540'),
                      }}
                    />
                  )
                })}
              </div>

              <div className="flex items-center gap-1 mt-3">
                <Activity size={10} className={item.up ? 'text-bull' : 'text-bear'} />
                <span className="font-orbitron text-[9px] text-gray-600 tracking-widest">
                  {item.up ? 'BULLISH TREND' : 'BEARISH TREND'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom ticker (reversed direction) */}
      <div className="relative overflow-hidden border-y border-bear/20 bg-bear/5 backdrop-blur-sm mt-16 py-3">
        <div className="ticker-wrapper">
          <div className="flex gap-12" style={{ display: 'inline-flex', animation: 'ticker 25s linear infinite reverse' }}>
            {allSpecials.reverse().map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-xs font-orbitron whitespace-nowrap">
                <span className={`font-bold ${item.up ? 'text-bull' : 'text-bear'}`}>{item.up ? '▲' : '▼'}</span>
                <span className="text-gray-400">{item.name.toUpperCase()}</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-500">{item.vol}</span>
                <span className="text-gray-700 ml-2">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
