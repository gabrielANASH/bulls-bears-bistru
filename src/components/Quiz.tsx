'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { TrendingUp, BarChart2, CheckCircle2, RefreshCw } from 'lucide-react'

type Answers = {
  diet: 'veg' | 'nonveg' | null
  drink: 'coffee' | 'dessert' | null
  meal: 'light' | 'heavy' | null
}

type Portfolio = {
  starter: string
  main: string
  dessert: string
  drink: string
  profile: string
  risk: string
}

function getPortfolio(answers: Answers): Portfolio {
  const { diet, drink, meal } = answers

  if (diet === 'nonveg' && meal === 'heavy' && drink === 'coffee') {
    return {
      starter: 'Grilled Wings',
      main: 'BBQ Bacon Smash Burger',
      dessert: 'Choco Lava Cake',
      drink: 'Hazelnut Cold Coffee',
      profile: 'AGGRESSIVE TRADER',
      risk: 'High Risk / High Reward',
    }
  }
  if (diet === 'veg' && meal === 'heavy' && drink === 'coffee') {
    return {
      starter: 'Loaded Fries',
      main: 'Pistachio Risotto',
      dessert: 'Tiramisu',
      drink: 'Cappuccino',
      profile: 'BALANCED INVESTOR',
      risk: 'Medium Risk / Steady Returns',
    }
  }
  if (diet === 'veg' && meal === 'light' && drink === 'dessert') {
    return {
      starter: 'Garlic Bread',
      main: 'Pesto Pasta',
      dessert: 'Crème Brûlée',
      drink: 'Matcha Latte',
      profile: 'SAFE HAVEN INVESTOR',
      risk: 'Low Risk / Stable Portfolio',
    }
  }
  if (diet === 'nonveg' && meal === 'light' && drink === 'dessert') {
    return {
      starter: 'Paneer Tikka Skewers',
      main: 'Grilled Chicken Burger',
      dessert: 'Brownie with Ice Cream',
      drink: 'Espresso Shot',
      profile: 'SWING TRADER',
      risk: 'Medium-High Risk / Active Play',
    }
  }
  // Default
  return {
    starter: 'Loaded Fries',
    main: 'Grilled Chicken Burger',
    dessert: 'Choco Lava Cake',
    drink: 'Hazelnut Cold Coffee',
    profile: 'DIVERSIFIED TRADER',
    risk: 'Balanced Risk / All-Weather Portfolio',
  }
}

const questions = [
  {
    key: 'diet' as const,
    label: '01 / POSITION TYPE',
    question: 'What\'s your food preference?',
    options: [
      { value: 'veg', label: 'VEG', sub: 'Green Portfolio', icon: '🌿' },
      { value: 'nonveg', label: 'NON-VEG', sub: 'Aggressive Pick', icon: '🍗' },
    ],
  },
  {
    key: 'drink' as const,
    label: '02 / CLOSING TRADE',
    question: 'How do you close your meal?',
    options: [
      { value: 'coffee', label: 'COFFEE', sub: 'Fuel for the Next Trade', icon: '☕' },
      { value: 'dessert', label: 'DESSERT', sub: 'Sweet Exit Strategy', icon: '🍫' },
    ],
  },
  {
    key: 'meal' as const,
    label: '03 / MARKET EXPOSURE',
    question: 'How hungry are you?',
    options: [
      { value: 'light', label: 'LIGHT MEAL', sub: 'Low Exposure', icon: '📊' },
      { value: 'heavy', label: 'HEAVY MEAL', sub: 'Full Market Exposure', icon: '📈' },
    ],
  },
]

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({ diet: null, drink: null, meal: null })
  const [showResult, setShowResult] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const currentQ = questions[step]

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQ.key]: value as never }
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    } else {
      setTimeout(() => setShowResult(true), 300)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({ diet: null, drink: null, meal: null })
    setShowResult(false)
  }

  const portfolio = getPortfolio(answers)

  return (
    <section id="quiz" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute right-0 top-0 w-80 h-80 bg-gold/4 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="section-label" style={{ color: '#ffd700' }}>Portfolio Builder</span>
            <div className="w-8 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl sm:text-5xl font-black text-white"
          >
            BUILD YOUR <span className="text-gold">FOOD PORTFOLIO</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-inter text-gray-500 mt-3 text-sm"
          >
            Answer 3 quick questions and we'll build your perfect meal portfolio
          </motion.p>
        </div>

        {/* Quiz card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glow-border bg-card/80 rounded-sm overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-bull/10 bg-dark/60">
            <div className="flex items-center gap-2">
              <BarChart2 size={14} className="text-gold" />
              <span className="font-orbitron text-xs text-gray-400 tracking-widest">PORTFOLIO ANALYSER v1.0</span>
            </div>
            {!showResult && (
              <div className="flex gap-1">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-1 rounded-full transition-all duration-300"
                    style={{ background: i <= step ? '#ffd700' : '#ffffff1a' }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-2">
                    <span className="font-orbitron text-[10px] text-gold tracking-widest">{currentQ.label}</span>
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-8">{currentQ.question}</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        className={`group relative overflow-hidden p-6 rounded-sm border transition-all duration-200 text-left ${
                          (answers[currentQ.key] as string) === opt.value
                            ? 'border-gold bg-gold/10'
                            : 'border-white/10 hover:border-gold/50 hover:bg-gold/5'
                        }`}
                      >
                        <div className="text-3xl mb-3">{opt.icon}</div>
                        <div className="font-orbitron text-sm font-bold text-white mb-1">{opt.label}</div>
                        <div className="font-inter text-xs text-gray-500">{opt.sub}</div>
                        {(answers[currentQ.key] as string) === opt.value && (
                          <CheckCircle2 size={16} className="absolute top-4 right-4 text-gold" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Profile badge */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-sm bg-gold/20 border border-gold/40 flex items-center justify-center">
                      <TrendingUp size={22} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-orbitron text-xs text-gold tracking-widest">YOUR INVESTOR PROFILE</div>
                      <div className="font-orbitron text-xl font-black text-white">{portfolio.profile}</div>
                      <div className="font-inter text-xs text-gray-500">{portfolio.risk}</div>
                    </div>
                  </div>

                  <div className="font-orbitron text-xs text-gray-400 tracking-widest mb-4 uppercase">Your Food Portfolio</div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      { label: 'STARTER', value: portfolio.starter, color: '#ffd700' },
                      { label: 'MAIN COURSE', value: portfolio.main, color: '#00ff88' },
                      { label: 'DESSERT', value: portfolio.dessert, color: '#f97316' },
                      { label: 'DRINK', value: portfolio.drink, color: '#818cf8' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-sm border border-white/10 bg-dark/60"
                      >
                        <div className="w-1 h-10 rounded-full" style={{ background: item.color }} />
                        <div>
                          <div className="font-orbitron text-[9px] tracking-widest" style={{ color: item.color }}>{item.label}</div>
                          <div className="font-inter text-sm font-medium text-white">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#menu"
                      className="flex-1 text-center font-orbitron text-xs font-bold py-3 bg-bull text-dark rounded-sm hover:bg-bull/90 transition-colors"
                    >
                      ORDER THIS PORTFOLIO ↗
                    </a>
                    <button
                      onClick={reset}
                      className="flex items-center gap-2 px-4 py-3 border border-white/10 rounded-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                    >
                      <RefreshCw size={14} />
                      <span className="font-orbitron text-xs">RETRY</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
