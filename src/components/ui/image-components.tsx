
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Play, Eye, Heart, ExternalLink } from 'lucide-react'

// Image avec overlay animé ADN-style
interface AnimatedImageProps {
  src: string
  alt: string
  title?: string
  subtitle?: string
  overlay?: boolean
  hoverZoom?: boolean
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  overlay = true,
  hoverZoom = true,
  aspectRatio = 'video',
  size = 'md',
  className,
  onClick,
  children
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]'
  }

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-80 h-80',
    xl: 'w-96 h-96'
  }

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-lg cursor-pointer group',
        aspectRatio !== 'square' ? aspectRatioClasses[aspectRatio] : sizeClasses[size],
        className
      )}
      whileHover={{ scale: hoverZoom ? 1.03 : 1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-transform duration-500',
          hoverZoom && 'group-hover:scale-110'
        )}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-otaku-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="absolute inset-0 bg-otaku-orange/0 group-hover:bg-otaku-orange/10 transition-colors duration-300" />

      {(title || subtitle || children) && (
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {title && (
            <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-300 text-sm drop-shadow-lg">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      )}

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2">
          <motion.button
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-otaku-orange/80 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// Carrousel d'images ADN-style
interface ImageCarouselProps {
  images: Array<{
    src: string
    alt: string
    title?: string
    subtitle?: string
  }>
  autoplay?: boolean
  className?: string
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplay = true,
  className
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, images.length])

  return (
    <div className={cn('relative overflow-hidden rounded-xl', className)}>
      <div className="relative h-64 md:h-96">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-otaku-dark/60 to-transparent" />
            
            {(image.title || image.subtitle) && (
              <div className="absolute bottom-6 left-6 right-6">
                {image.title && (
                  <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                    {image.title}
                  </h2>
                )}
                {image.subtitle && (
                  <p className="text-gray-300 text-lg drop-shadow-lg">
                    {image.subtitle}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === currentIndex 
                ? 'bg-otaku-orange w-8' 
                : 'bg-white/50 hover:bg-white/80'
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

// Grille d'images masonry-style
interface ImageGridProps {
  images: Array<{
    src: string
    alt: string
    title?: string
    category?: string
  }>
  columns?: 2 | 3 | 4
  className?: string
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
  className
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }

  return (
    <div className={cn(
      'grid grid-cols-1 gap-4',
      gridCols[columns],
      className
    )}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <AnimatedImage
            src={image.src}
            alt={image.alt}
            title={image.title}
            subtitle={image.category}
            aspectRatio="portrait"
          />
        </motion.div>
      ))}
    </div>
  )
}

// Image héro avec overlay complexe
interface HeroImageProps {
  src: string
  alt: string
  title: string
  subtitle?: string
  cta?: string
  onCtaClick?: () => void
  className?: string
}

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  cta,
  onCtaClick,
  className
}) => {
  return (
    <div className={cn('relative h-[70vh] overflow-hidden rounded-xl', className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradients multiples */}
      <div className="absolute inset-0 bg-gradient-to-r from-otaku-dark/80 via-transparent to-otaku-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-otaku-dark/90 via-transparent to-transparent" />
      
      {/* Contenu */}
      <div className="absolute inset-0 flex items-center justify-center text-center p-8">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              className="text-xl text-gray-300 mb-8 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {cta && (
            <motion.button
              className="otaku-button text-lg px-8 py-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={onCtaClick}
            >
              {cta}
            </motion.button>
          )}
        </div>
      </div>

      {/* Effet de particules */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-otaku-orange rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
