'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Arjun Krishnamurthy',
    handle: '@arjunk_trades',
    rating: 5,
    text: 'Amazing theme and absolutely delicious burgers! The BBQ Smash Burger is worth every rupee. The trading terminal on the wall is so cool — felt like I was eating on Dalal Street.',
    tag: 'Dine-in',
  },
  {
    name: 'Priya Subramaniam',
    handle: '@priya.eats',
    rating: 5,
    text: 'Perfect hangout spot in RS Puram. Came with my college gang and we stayed for 3 hours. The Pistachio Risotto is a game-changer. Will definitely return!',
    tag: 'Regular Customer',
  },
  {
    name: 'Karthik Venkat',
    handle: '@karthik_v',
    rating: 4,
    text: 'Great coffee and a super fun stock market vibe. The Cold Hazelnut Coffee had me at first sip. Loved the menu design — "Quick Trades" for starters is genius.',
    tag: 'Coffee Enthusiast',
  },
  {
    name: 'Sneha Rajan',
    handle: '@sneha.r',
    rating: 5,
    text: 'Took a client here for an informal meeting — best decision. The atmosphere is professional yet relaxed. The portfolio quiz is such a creative touch. Highly recommend!',
    tag: 'Business Meeting',
  },
  {
    name: 'Deepak Anand',
    handle: '@deepak.foodie',
    rating: 5,
    text: 'Choco Lava Cake = Maximum ROI. The lava is perfectly molten and the presentation is stunning. The whole experience feels premium without breaking the bank.',
    tag: 'Dessert Lover',
  },
  {
    name: 'Nithya Bharathi',
    handle: '@nithya_b',
    rating: 4,
    text: 'Coimbatore finally has a café that stands out. The ambience is like nothing I\'ve seen locally. The Grilled Wings are spiced perfectly and the staff is super friendly.',
    tag: 'First Visit',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={12}
          className={i < count ? 'text-gold fill-gold' : 'text-gray-600'}
          fill={i < count ? '#ffd700' : 'none'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % reviews.length)
  }

  const visibleReviews = [
    reviews[current],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ]

  return (
    <section id="reviews" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-1/2 bottom-0 w-96 h-48 bg-bull/5 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-bull" />
            <span className="section-label">Investor Reports</span>
            <div className="w-8 h-[1px] bg-bull" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl sm:text-5xl font-black text-white"
          >
            WHAT THE <span className="text-bull">MARKET SAYS</span>
          </motion.h2>
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {[
            { val: '4.6', label: 'Average Rating', sub: 'Out of 5.0' },
            { val: '500+', label: 'Total Reviews', sub: 'Verified Customers' },
            { val: '98%', label: 'Return Rate', sub: 'Would Visit Again' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glow-border bg-card/60 rounded-sm px-8 py-4">
              <div className="font-orbitron text-3xl font-black text-bull mb-1">{stat.val}</div>
              <div className="font-inter text-xs text-white font-medium">{stat.label}</div>
              <div className="font-inter text-xs text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Reviews carousel */}
        <div className="relative">
          <div className="hidden lg:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={`${current}-${idx}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 60 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`glow-border bg-card rounded-sm p-6 flex flex-col gap-4 ${idx === 1 ? 'border-bull/30' : ''}`}
                >
                  <div className="flex items-start justify-between">
                    <Quote size={20} className="text-bull/40" />
                    <StarRating count={review.rating} />
                  </div>
                  <p className="font-inter text-gray-300 text-sm leading-relaxed flex-1">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div>
                      <div className="font-inter text-sm font-semibold text-white">{review.name}</div>
                      <div className="font-orbitron text-[10px] text-gray-600">{review.handle}</div>
                    </div>
                    <span className="font-orbitron text-[10px] px-2 py-1 bg-bull/10 text-bull border border-bull/20 rounded-sm">
                      {review.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: single card */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4 }}
                className="glow-border bg-card rounded-sm p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <Quote size={20} className="text-bull/40" />
                  <StarRating count={reviews[current].rating} />
                </div>
                <p className="font-inter text-gray-300 text-sm leading-relaxed">
                  "{reviews[current].text}"
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div>
                    <div className="font-inter text-sm font-semibold text-white">{reviews[current].name}</div>
                    <div className="font-orbitron text-[10px] text-gray-600">{reviews[current].handle}</div>
                  </div>
                  <span className="font-orbitron text-[10px] px-2 py-1 bg-bull/10 text-bull border border-bull/20 rounded-sm">
                    {reviews[current].tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-bull hover:border-bull/40 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className="w-6 h-1 rounded-full transition-all duration-300"
                  style={{ background: i === current ? '#00ff88' : 'rgba(255,255,255,0.1)' }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-bull hover:border-bull/40 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
