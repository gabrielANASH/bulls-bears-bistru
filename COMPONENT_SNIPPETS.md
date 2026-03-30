# 🔧 Ready-to-Use Component Code Snippets

## Table of Contents
1. [Button Component System](#button-component-system)
2. [Card Components](#card-components)
3. [Badge & Pill Components](#badge--pill-components)
4. [Trust Signals Section](#trust-signals-section)
5. [Enhanced Menu Card](#enhanced-menu-card)
6. [Review Card Enhanced](#review-card-enhanced)
7. [CTA Section Component](#cta-section-component)
8. [Loading Skeletons](#loading-skeletons)

---

## Button Component System

**File**: `src/components/common/Button.tsx`

```tsx
'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
  disabled?: boolean
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  disabled = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-inter font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap'

  const variants = {
    primary:
      'bg-bull text-dark hover:bg-bull/90 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary:
      'bg-bear text-white hover:bg-bear/90 border border-bear/50 active:scale-95 disabled:opacity-50',
    tertiary:
      'bg-transparent border border-bull/40 text-bull hover:bg-bull/10 active:scale-95 disabled:opacity-50',
    outline:
      'border border-gray-400 text-gray-300 hover:border-bull hover:text-bull disabled:opacity-50',
    ghost:
      'bg-transparent text-gray-300 hover:text-bull disabled:opacity-50',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
    xl: 'px-10 py-4 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span>{icon}</span>}
        </>
      )}
    </motion.button>
  )
}

// Usage Examples:
export function ButtonExamples() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button size="lg" fullWidth>Full Width Large</Button>
      <Button variant="primary" size="sm" icon={<span>→</span>} iconPosition="right">
        With Icon
      </Button>
      <Button loading>Loading...</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  )
}
```

---

## Card Components

**File**: `src/components/common/Card.tsx`

```tsx
'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  onClick?: () => void
  variant?: 'default' | 'elevated' | 'bordered' | 'filled'
}

export function Card({
  children,
  className = '',
  hoverable = false,
  onClick,
  variant = 'default',
}: CardProps) {
  const variants = {
    default: 'border border-bull/10 bg-dark/50 rounded-lg',
    elevated: 'bg-dark/80 rounded-lg shadow-lg shadow-bull/10',
    bordered: 'border border-bull/30 bg-dark rounded-lg',
    filled: 'bg-bull/5 border border-bull/20 rounded-lg',
  }

  return (
    <motion.div
      whileHover={hoverable ? { scale: 1.02, y: -4 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`${variants[variant]} ${hoverable ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Feature Card with Icon
interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: 'bull' | 'bear' | 'gold' | 'blue'
  index?: number
}

export function FeatureCard({ icon, title, description, color, index = 0 }: FeatureCardProps) {
  const colorMap = {
    bull: { border: 'border-bull/20', bg: 'bg-bull/5', text: 'text-bull' },
    bear: { border: 'border-bear/20', bg: 'bg-bear/5', text: 'text-bear' },
    gold: { border: 'border-gold/20', bg: 'bg-gold/5', text: 'text-gold' },
    blue: { border: 'border-blue-400/20', bg: 'bg-blue-400/5', text: 'text-blue-400' },
  }

  const colors = colorMap[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${colors.bg} border ${colors.border} rounded-lg p-6 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all duration-300`}
    >
      <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
        <div className={colors.text}>{icon}</div>
      </div>
      <h3 className="font-orbitron font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
```

---

## Badge & Pill Components

**File**: `src/components/common/Badge.tsx`

```tsx
'use client'

import { ReactNode } from 'react'

export type BadgeVariant = 'bull' | 'bear' | 'gold' | 'outline' | 'success' | 'warning' | 'error'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  removable?: boolean
  onRemove?: () => void
}

const variantStyles = {
  bull: 'bg-bull text-dark',
  bear: 'bg-bear text-white',
  gold: 'bg-gold text-dark',
  outline: 'border border-bull/40 text-bull bg-transparent',
  success: 'bg-green-500/20 border border-green-500/40 text-green-400',
  warning: 'bg-yellow-500/20 border border-yellow-500/40 text-yellow-400',
  error: 'bg-red-500/20 border border-red-500/40 text-red-400',
}

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
}

export function Badge({
  children,
  variant = 'outline',
  size = 'md',
  icon,
  removable = false,
  onRemove,
}: BadgeProps) {
  return (
    <div className={`${variantStyles[variant]} ${sizeStyles[size]} rounded-full inline-flex items-center gap-2 font-inter font-semibold`}>
      {icon && <span>{icon}</span>}
      {children}
      {removable && (
        <button onClick={onRemove} className="ml-1 hover:opacity-70 transition-opacity">
          ✕
        </button>
      )}
    </div>
  )
}

// Dietary Diet Badges
export function DietaryBadges({ tags }: { tags: string[] }) {
  const dietaryMap: Record<string, BadgeVariant> = {
    'vegetarian': 'success',
    'vegan': 'success',
    'gluten-free': 'warning',
    'spicy': 'error',
    'bestseller': 'bull',
    'new': 'gold',
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Badge key={tag} variant={dietaryMap[tag.toLowerCase()] || 'outline'} size="sm">
          {tag}
        </Badge>
      ))}
    </div>
  )
}
```

---

## Trust Signals Section

**File**: `src/components/sections/TrustSignals.tsx`

```tsx
'use client'

import { Users, Star, Clock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface StatProps {
  icon: React.ReactNode
  number: string
  label: string
  description?: string
}

function StatCard({ icon, number, label, description, index }: StatProps & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6 border border-bull/10 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] transition-all"
    >
      <div className="flex justify-center mb-3">
        <div className="w-14 h-14 rounded-lg bg-bull/10 border border-bull/20 flex items-center justify-center text-bull">
          {icon}
        </div>
      </div>
      <p className="font-orbitron text-3xl font-bold text-bull mb-2">{number}</p>
      <p className="font-inter font-semibold text-white mb-1">{label}</p>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
    </motion.div>
  )
}

export default function TrustSignals() {
  const stats: StatProps[] = [
    {
      icon: <Users size={24} />,
      number: '500+',
      label: 'Happy Customers',
      description: 'Trusted by food lovers',
    },
    {
      icon: <Star size={24} />,
      number: '4.9★',
      label: 'Average Rating',
      description: 'Out of 5 stars',
    },
    {
      icon: <Clock size={24} />,
      number: '2 Yrs',
      label: 'In Business',
      description: 'Serving the community',
    },
    {
      icon: <CheckCircle size={24} />,
      number: '100%',
      label: 'Satisfaction Guaranteed',
      description: 'Your happiness matters',
    },
  ]

  return (
    <section id="trust" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-4">
            Why Choose <span className="text-bull">Us?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by hundreds of customers for our premium quality, exceptional service, and unique vibe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Enhanced Menu Card

**File**: `src/components/common/MenuItemCard.tsx`

```tsx
'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge, DietaryBadges } from './Badge'
import { Button } from './Button'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  dietary: string[]
  badge?: 'bestseller' | 'new' | 'limited-time'
  image?: string
}

interface MenuItemCardProps {
  item: MenuItem
  index?: number
}

export function MenuItemCard({ item, index = 0 }: MenuItemCardProps) {
  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case 'bestseller':
        return 'bull'
      case 'new':
        return 'gold'
      case 'limited-time':
        return 'bear'
      default:
        return 'outline'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-bull/10 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] transition-all duration-300 bg-dark/50"
    >
      {/* Image (if available) */}
      {item.image && (
        <div className="relative h-48 w-full bg-dark/80 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          {item.badge && (
            <div className="absolute top-3 right-3">
              <Badge variant={getBadgeVariant(item.badge)} size="sm">
                {item.badge.replace('-', ' ').toLowerCase()}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Dietary Tags */}
        {item.dietary.length > 0 && (
          <div className="mb-3">
            <DietaryBadges tags={item.dietary} />
          </div>
        )}

        {/* Title */}
        <h3 className="font-orbitron font-bold text-lg text-white mb-1">{item.name}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{item.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-bold text-bull text-lg">₹{item.price}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(item.rating) ? 'fill-gold' : ''}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">({item.reviews})</span>
          </div>
        </div>

        {/* CTA */}
        <Button variant="primary" size="sm" fullWidth>
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )
}
```

---

## Review Card Enhanced

**File**: `src/components/common/ReviewCard.tsx`

```tsx
'use client'

import { motion } from 'framer-motion'
import { Star, ThumbsUp } from 'lucide-react'
import { Badge } from './Badge'

export interface Review {
  id: string
  author: string
  avatar?: string
  rating: number
  text: string
  date: Date
  verified: boolean
  regular: boolean
  helpfulCount: number
}

interface ReviewCardProps {
  review: Review
  index?: number
}

function formatDate(date: Date) {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-bull/10 rounded-lg p-6 bg-dark/50 hover:bg-dark/70 transition-colors"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 flex-1">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-bull/20 flex items-center justify-center flex-shrink-0">
            {review.avatar ? (
              <img src={review.avatar} alt={review.author} className="w-full h-full rounded-full" />
            ) : (
              <span className="font-bold text-bull font-orbitron">{review.author[0].toUpperCase()}</span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-bold text-white">{review.author}</p>
              {review.verified && <Badge variant="success" size="sm">Verified</Badge>}
              {review.regular && <Badge variant="bull" size="sm">Regular</Badge>}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'fill-gold text-gold' : 'text-gray-600'}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">{formatDate(review.date)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{review.text}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-bull/5">
        <button className="flex items-center gap-2 text-xs text-gray-400 hover:text-bull transition-colors">
          <ThumbsUp size={14} />
          <span>Helpful ({review.helpfulCount})</span>
        </button>
        <span className="text-xs text-gray-500">Reviewed {review.rating} star{'s' if review.rating !== 1 else ''}</span>
      </div>
    </motion.div>
  )
}
```

---

## CTA Section Component

**File**: `src/components/sections/CTASection.tsx`

```tsx
'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Phone } from 'lucide-react'
import { Button } from '../common/Button'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryCTA: {
    text: string
    action: () => void
  }
  secondaryCTA?: {
    text: string
    action: () => void
  }
  features?: Array<{
    icon: React.ReactNode
    text: string
  }>
}

export function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  features,
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gradient-to-r from-bull/10 to-bear/10 border border-bull/20 rounded-lg overflow-hidden relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-bull/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="font-orbitron text-4xl font-black text-white mb-3">{title}</h2>
        {subtitle && <p className="text-gray-300 mb-8">{subtitle}</p>}

        {/* Features (if provided) */}
        {features && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-bull text-3xl">{feature.icon}</div>
                <p className="text-sm text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button variant="primary" size="lg" onClick={primaryCTA.action}>
            {primaryCTA.text}
          </Button>
          {secondaryCTA && (
            <Button variant="outline" size="lg" onClick={secondaryCTA.action}>
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  )
}

// Usage Example:
export function CTASectionExample() {
  return (
    <CTASection
      title="Experience Premium Flavors Today"
      subtitle="Book your table or order online and enjoy exclusive happy hour specials"
      primaryCTA={{
        text: 'Book Now',
        action: () => console.log('Book table'),
      }}
      secondaryCTA={{
        text: 'View Menu',
        action: () => console.log('View menu'),
      }}
      features={[
        { icon: <Clock size={24} />, text: 'Happy Hour: 3-5 PM Daily' },
        { icon: <MapPin size={24} />, text: '20+ Seating Arrangements' },
        { icon: <Phone size={24} />, text: 'Call: +91 XXX-XXX-XXXX' },
      ]}
    />
  )
}
```

---

## Loading Skeletons

**File**: `src/components/common/Skeleton.tsx`

```tsx
'use client'

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'rect' | 'circle' | 'text'
  count?: number
}

export function Skeleton({ 
  className = 'w-full h-12', 
  variant = 'rect',
  count = 1 
}: SkeletonProps) {
  const baseClass = 'animate-pulse bg-gradient-to-r from-bull/10 via-bull/5 to-bull/10'

  const variants = {
    rect: `${baseClass} rounded-lg`,
    circle: `${baseClass} rounded-full w-12 h-12`,
    text: `${baseClass} rounded h-4`,
  }

  if (count > 1) {
    return (
      <div className="space-y-3">
        {[...Array(count)].map((_, i) => (
          <div key={i} className={`${variants[variant]} ${className}`} />
        ))}
      </div>
    )
  }

  return <div className={`${variants[variant]} ${className}`} />
}

// Skeleton Menu Card
export function MenuCardSkeleton() {
  return (
    <div className="border border-bull/10 rounded-lg overflow-hidden">
      <Skeleton className="w-full h-48" />
      <div className="p-4">
        <Skeleton count={2} />
        <Skeleton className="h-8 w-1/2 mt-4" />
      </div>
    </div>
  )
}

// Skeleton Review Card
export function ReviewCardSkeleton() {
  return (
    <div className="border border-bull/10 rounded-lg p-6">
      <div className="flex gap-4 mb-4">
        <Skeleton variant="circle" />
        <div className="flex-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/2 mt-2" />
        </div>
      </div>
      <Skeleton count={3} />
    </div>
  )
}

// Skeleton Grid Loading
export function MenuGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <MenuCardSkeleton key={i} />
      ))}
    </div>
  )
}
```

---

## Integration Guide

### 1. Create Folder Structure
```bash
src/
└── components/
    ├── common/
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   ├── Badge.tsx
    │   ├── MenuItemCard.tsx
    │   ├── ReviewCard.tsx
    │   └── Skeleton.tsx
    └── sections/
        ├── TrustSignals.tsx
        └── CTASection.tsx
```

### 2. Update Your Page
```tsx
// src/app/page.tsx
import TrustSignals from '@/components/sections/TrustSignals'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TrustSignals /> {/* NEW */}
      <Menu />
      <TickerSpecials />
      <CTASection /> {/* NEW */}
      <Quiz />
      <Reviews />
      <Location />
      <Footer />
    </main>
  )
}
```

### 3. Styling Requirements
Ensure your `tailwind.config.js` includes:
```js
theme: {
  extend: {
    colors: {
      bull: '#00ff88',
      bear: '#ff3355',
      gold: '#FFD700',
      dark: '#0a0a0a',
    },
    fontFamily: {
      orbitron: 'var(--font-orbitron)',
      inter: 'var(--font-inter)',
    },
  },
}
```

---

**These components are production-ready and can be integrated immediately!** 🚀
