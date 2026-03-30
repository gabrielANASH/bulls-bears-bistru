'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Drumstick, TrendingUp, Star } from 'lucide-react'

const categories = [
  {
    id: 'openers',
    code: 'MKT-01',
    label: 'Market Openers',
    sublabel: 'Beverages',
    color: '#00ff88',
    items: [
      { name: 'Espresso Shot', price: 150, desc: 'Pure, bold, single-origin dark roast shot. The opening bell of your day.', veg: true, trending: true },
      { name: 'Cappuccino', price: 170, desc: 'Rich espresso with perfectly steamed microfoam. A classic blue-chip pick.', veg: true },
      { name: 'Hazelnut Cold Coffee', price: 220, desc: 'Chilled brew with hazelnut syrup. A high-yield sweet investment.', veg: true, trending: true },
      { name: 'Matcha Latte', price: 200, desc: 'Japanese ceremonial-grade matcha with oat milk. The defensive stock.', veg: true },
    ],
  },
  {
    id: 'trades',
    code: 'MKT-02',
    label: 'Quick Trades',
    sublabel: 'Starters',
    color: '#ffd700',
    items: [
      { name: 'Loaded Fries', price: 240, desc: 'Crispy fries loaded with cheese sauce, jalapeños & chipotle. High volume trade.', veg: true, trending: true },
      { name: 'Garlic Bread', price: 200, desc: 'Toasted sourdough with herb butter and garlic. The safe bet.', veg: true },
      { name: 'Grilled Wings', price: 280, desc: '6-piece spiced chicken wings with dip. An aggressive growth play.', veg: false, trending: true },
      { name: 'Paneer Tikka Skewers', price: 260, desc: 'Smoky tandoori-spiced paneer with mint chutney. Steady returns.', veg: true },
    ],
  },
  {
    id: 'positions',
    code: 'MKT-03',
    label: 'Power Positions',
    sublabel: 'Mains',
    color: '#ff3355',
    items: [
      { name: 'Grilled Chicken Burger', price: 350, desc: 'Signature chargrilled chicken fillet, lettuce, house sauce in a brioche bun.', veg: false, trending: true },
      { name: 'Veg Signature Burger', price: 300, desc: 'House-made crispy veggie patty with avocado cream and pickles.', veg: true },
      { name: 'BBQ Bacon Smash Burger', price: 420, desc: 'Double smashed patties, cheddar, crispy bacon, BBQ glaze. Maximum returns.', veg: false },
      { name: 'Mushroom Swiss Melt', price: 340, desc: 'Sautéed mushrooms, Swiss cheese, caramelised onions on sourdough.', veg: true },
    ],
  },
  {
    id: 'investments',
    code: 'MKT-04',
    label: 'Global Investments',
    sublabel: 'Pasta & Risotto',
    color: '#818cf8',
    items: [
      { name: 'Pistachio Risotto', price: 420, desc: 'Creamy arborio risotto with pistachio crumb and parmesan foam. Luxury pick.', veg: true, trending: true },
      { name: 'Pink Sauce Pasta', price: 380, desc: 'Penne in rose sauce with cherry tomatoes and fresh basil. Crowd favourite.', veg: true },
      { name: 'Pesto Pasta', price: 360, desc: 'Al dente pasta tossed in house basil pesto with pine nuts.', veg: true },
      { name: 'Aglio Olio', price: 340, desc: 'Classic Italian pasta with olive oil, garlic chili flakes. The index fund.', veg: true },
    ],
  },
  {
    id: 'profits',
    code: 'MKT-05',
    label: 'Sweet Profits',
    sublabel: 'Desserts',
    color: '#f97316',
    items: [
      { name: 'Choco Lava Cake', price: 180, desc: 'Warm dark chocolate cake with a molten core. Maximum ROI per bite.', veg: true, trending: true },
      { name: 'Brownie with Ice Cream', price: 200, desc: 'Fudgy walnut brownie with vanilla bean ice cream and caramel drizzle.', veg: true },
      { name: 'Tiramisu', price: 220, desc: 'Italian classic with mascarpone, espresso-soaked fingers, dusted cocoa.', veg: true },
      { name: 'Crème Brûlée', price: 240, desc: 'Silky vanilla custard beneath a perfectly caramelised sugar crust.', veg: true },
    ],
  },
]

function MenuCard({ item, color, index }: { item: typeof categories[0]['items'][0]; color: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative card-hover group bg-card border border-white/5 rounded-sm overflow-hidden hover:border-white/20 transition-all duration-300"
      style={{ '--accent': color } as React.CSSProperties}
    >
      {/* Image placeholder with gradient */}
      <div className="h-36 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #111118 0%, ${color}18 100%)` }}>
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <div
            className="px-2 py-0.5 rounded-sm text-[10px] font-orbitron font-bold"
            style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
          >
            ₹{item.price}
          </div>
          {item.trending && (
            <div className="px-2 py-0.5 rounded-sm text-[10px] font-orbitron bg-bull/20 text-bull border border-bull/30 flex items-center gap-0.5">
              <TrendingUp size={8} /> HOT
            </div>
          )}
        </div>
        {/* Veg/Non-veg indicator */}
        <div className="absolute top-3 right-3">
          {item.veg ? (
            <div className="w-5 h-5 border-2 border-bull rounded-sm flex items-center justify-center bg-dark">
              <div className="w-2 h-2 rounded-full bg-bull" />
            </div>
          ) : (
            <div className="w-5 h-5 border-2 border-bear rounded-sm flex items-center justify-center bg-dark">
              <div className="w-2 h-2 rounded-full bg-bear" />
            </div>
          )}
        </div>
        {/* decorative chart line */}
        <svg className="absolute bottom-0 left-0 right-0 opacity-20" viewBox="0 0 200 30" preserveAspectRatio="none" height="30">
          <polyline
            points="0,25 30,20 60,22 90,12 120,15 150,8 200,5"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="p-4">
        <h4 className="font-orbitron text-xs font-bold text-white mb-1 group-hover:text-white transition-colors">{item.name}</h4>
        <p className="font-inter text-gray-500 text-xs leading-relaxed">{item.desc}</p>
      </div>

      {/* Bottom color line */}
      <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: color }} />
    </motion.div>
  )
}

export default function Menu() {
  const [active, setActive] = useState('openers')
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const activeCategory = categories.find((c) => c.id === active)!

  return (
    <section id="menu" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-bull" />
            <span className="section-label">Market Listings</span>
            <div className="w-8 h-[1px] bg-bull" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl sm:text-5xl font-black text-white"
          >
            OUR <span className="text-bull">MENU</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-inter text-gray-500 mt-3 text-sm"
          >
            Select your category and place your order
          </motion.p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-sm text-[11px] font-orbitron font-bold tracking-wider transition-all duration-200 border ${
                active === cat.id
                  ? 'text-dark border-transparent'
                  : 'text-gray-400 border-white/10 hover:border-white/20 bg-transparent'
              }`}
              style={active === cat.id ? { background: cat.color, borderColor: cat.color } : {}}
            >
              <span className="text-[9px] opacity-60 block">{cat.code}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-8 rounded-sm" style={{ background: activeCategory.color }} />
          <div>
            <div className="font-orbitron text-sm font-bold text-white">{activeCategory.label}</div>
            <div className="font-inter text-xs text-gray-500">{activeCategory.sublabel}</div>
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {activeCategory.items.map((item, i) => (
            <MenuCard key={item.name} item={item} color={activeCategory.color} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
