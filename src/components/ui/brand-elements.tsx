
import React from 'react'
import { cn } from '@/lib/utils'

// Logo OTAKREW avec animations
export const OtakrewLogo = ({ size = 'md', animated = true, className }: {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-8 h-8 text-lg',
    lg: 'w-12 h-12 text-2xl',
    xl: 'w-16 h-16 text-4xl'
  }

  return (
    <div className={cn(
      'flex items-center gap-3',
      animated && 'group',
      className
    )}>
      <div className={cn(
        'bg-gradient-otaku rounded-lg flex items-center justify-center font-bold text-white',
        sizeClasses[size],
        animated && 'group-hover:animate-glow-pulse transition-all duration-300'
      )}>
        O
      </div>
      <span className={cn(
        'font-heading font-bold otaku-text-gradient',
        size === 'sm' && 'text-lg',
        size === 'md' && 'text-xl',
        size === 'lg' && 'text-3xl',
        size === 'xl' && 'text-5xl',
        animated && 'group-hover:scale-105 transition-transform duration-300'
      )}>
        OTAKREW
      </span>
    </div>
  )
}

// Éléments décoratifs camerounais
export const CameroonPattern = ({ className }: { className?: string }) => (
  <div className={cn('flex items-center gap-1', className)}>
    <div className="w-2 h-2 bg-otaku-green rounded-full" />
    <div className="w-2 h-2 bg-otaku-yellow rounded-full" />  
    <div className="w-2 h-2 bg-otaku-red rounded-full" />
  </div>
)

// Badge premium/VIP
export const PremiumBadge = ({ className }: { className?: string }) => (
  <div className={cn(
    'inline-flex items-center gap-1 bg-gradient-to-r from-otaku-gold to-otaku-yellow',
    'text-otaku-dark text-caption font-bold px-2 py-1 rounded-full',
    'shadow-otaku-sm animate-shimmer',
    className
  )}>
    ⭐ PREMIUM
  </div>
)

// Indicateur de niveau utilisateur
export const UserLevel = ({ level, className }: { level: number; className?: string }) => {
  const getColorByLevel = (level: number) => {
    if (level >= 50) return 'from-otaku-gold to-otaku-yellow'
    if (level >= 25) return 'from-otaku-orange to-otaku-orange-light'
    if (level >= 10) return 'from-otaku-green to-otaku-green-light'
    return 'from-gray-500 to-gray-400'
  }

  return (
    <div className={cn(
      'inline-flex items-center gap-1',
      `bg-gradient-to-r ${getColorByLevel(level)}`,
      'text-white text-caption font-semibold px-2 py-1 rounded-full',
      className
    )}>
      Niv. {level}
    </div>
  )
}

// Karma/Points utilisateur
export const KarmaDisplay = ({ points, className }: { points: number; className?: string }) => (
  <div className={cn(
    'inline-flex items-center gap-1 text-otaku-orange',
    'font-semibold text-body-sm',
    className
  )}>
    <span className="text-otaku-gold">⚡</span>
    {points.toLocaleString()} pts
  </div>
)

// Statut en ligne
export const OnlineStatus = ({ isOnline, className }: { isOnline: boolean; className?: string }) => (
  <div className={cn('flex items-center gap-2', className)}>
    <div className={cn(
      'w-2 h-2 rounded-full',
      isOnline ? 'bg-otaku-green animate-pulse' : 'bg-gray-500'
    )} />
    <span className={cn(
      'text-caption',
      isOnline ? 'text-otaku-green' : 'text-gray-400'
    )}>
      {isOnline ? 'En ligne' : 'Hors ligne'}
    </span>
  </div>
)

// Drapeaux et indicateurs régionaux
export const RegionFlag = ({ region, className }: { 
  region: 'yaoundé' | 'douala' | 'bamenda' | 'bafoussam' | 'garoua' | 'maroua' | 'ngaoundéré' | 'autre'
  className?: string 
}) => {
  const flagEmojis = {
    yaoundé: '🏛️',
    douala: '🏢',
    bamenda: '🏔️',
    bafoussam: '🌄',
    garoua: '🌅',
    maroua: '🏜️',
    ngaoundéré: '🌾',
    autre: '📍'
  }

  const regionNames = {
    yaoundé: 'Yaoundé',
    douala: 'Douala', 
    bamenda: 'Bamenda',
    bafoussam: 'Bafoussam',
    garoua: 'Garoua',
    maroua: 'Maroua',
    ngaoundéré: 'Ngaoundéré',
    autre: 'Autre'
  }

  return (
    <div className={cn(
      'inline-flex items-center gap-1 bg-otaku-gray-light',
      'text-gray-300 text-caption px-2 py-1 rounded-full',
      className
    )}>
      <span>{flagEmojis[region]}</span>
      <span>{regionNames[region]}</span>
    </div>
  )
}

// Indicateur de catégorie otaku
export const OtakuCategory = ({ category, className }: {
  category: 'anime' | 'manga' | 'cosplay' | 'fanart' | 'bd-africaine' | 'gaming' | 'quiz'
  className?: string
}) => {
  const categoryConfig = {
    anime: { emoji: '🎌', label: 'Animé', color: 'bg-blue-500' },
    manga: { emoji: '📚', label: 'Manga', color: 'bg-purple-500' },
    cosplay: { emoji: '👘', label: 'Cosplay', color: 'bg-pink-500' },
    fanart: { emoji: '🎨', label: 'Fan Art', color: 'bg-green-500' },
    'bd-africaine': { emoji: '📖', label: 'BD Africaine', color: 'bg-otaku-yellow' },
    gaming: { emoji: '🎮', label: 'Gaming', color: 'bg-red-500' },
    quiz: { emoji: '🧠', label: 'Quiz', color: 'bg-otaku-orange' }
  }

  const config = categoryConfig[category]

  return (
    <div className={cn(
      'inline-flex items-center gap-1',
      config.color,
      'text-white text-caption font-medium px-2 py-1 rounded-full',
      className
    )}>
      <span>{config.emoji}</span>
      <span>{config.label}</span>
    </div>
  )
}
