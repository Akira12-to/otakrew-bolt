
import React from 'react'
import { motion, HTMLMotionProps, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInVariants, slideInVariants, scaleInVariants, staggerContainer } from '@/lib/animation-variants'

// Composant Card animé avec effet hover ADN
interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  hoverScale?: number
  hoverGlow?: boolean
  className?: string
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  hoverScale = 1.02, 
  hoverGlow = true,
  className,
  ...props 
}) => {
  return (
    <motion.div
      className={cn(
        'otaku-card cursor-pointer transition-all duration-300',
        hoverGlow && 'hover:shadow-otaku-halo-md',
        className
      )}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      variants={fadeInVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Bouton animé avec effet ADN
interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className,
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-otaku-orange/50'
  
  const variants = {
    primary: 'otaku-button hover:shadow-otaku-halo-sm',
    secondary: 'otaku-button-secondary hover:shadow-otaku-halo-sm',
    ghost: 'otaku-button-ghost hover:bg-otaku-gray-light'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-body',
    lg: 'px-8 py-4 text-body-lg'
  }

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      variants={scaleInVariants}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Container pour animations en série (stagger)
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({ 
  children, 
  className,
  delay = 0.1 
}) => {
  const customStagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={customStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Element qui apparaît au scroll
interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up',
  delay = 0,
  className 
}) => {
  const directionVariants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 }
  }

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Dropdown menu animé
interface AnimatedDropdownProps {
  children: React.ReactNode
  isOpen: boolean
  className?: string
}

export const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({ 
  children, 
  isOpen, 
  className 
}) => {
  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      initial={{ height: 0, opacity: 0 }}
      animate={{ 
        height: isOpen ? 'auto' : 0, 
        opacity: isOpen ? 1 : 0,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div
        initial={{ y: -10 }}
        animate={{ 
          y: isOpen ? 0 : -10,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Loading skeleton animé
interface SkeletonProps {
  className?: string
  lines?: number
}

export const AnimatedSkeleton: React.FC<SkeletonProps> = ({ 
  className, 
  lines = 1 
}) => {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-otaku-gray-light rounded mb-2 last:mb-0"
          animate={{
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1
            }
          }}
        />
      ))}
    </div>
  )
}
