import React from 'react'
import { motion } from 'framer-motion'

interface LoaderProps {
  isVisible?: boolean
  onExitComplete?: () => void
}

export const Loader: React.FC<LoaderProps> = ({ 
  isVisible = true, 
  onExitComplete 
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (!isVisible && onExitComplete) {
          onExitComplete()
        }
      }}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo with pulse animation and orange glow */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.img
            src="/lovable-uploads/54e3c6d2-ead5-4fcf-85ea-84e0a01e7eaf.png"
            alt="OTAKREW Logo"
            className="max-h-[120px] sm:max-h-[80px] w-auto object-contain filter drop-shadow-2xl"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(255, 138, 0, 0.5))",
                "drop-shadow(0 0 40px rgba(255, 138, 0, 0.8))",
                "drop-shadow(0 0 20px rgba(255, 138, 0, 0.5))"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Additional glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 30px rgba(255, 138, 0, 0.3)",
                "0 0 60px rgba(255, 138, 0, 0.6)",
                "0 0 30px rgba(255, 138, 0, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading spinner and text */}
        <div className="flex flex-col items-center space-y-4">
          {/* Circular spinner */}
          <div className="relative">
            <div className="w-8 h-8 border-2 border-gray-600 border-t-otaku-orange rounded-full animate-spin"></div>
            <motion.div
              className="absolute inset-0 w-8 h-8 border-2 border-transparent border-t-otaku-orange rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="text-white text-lg font-medium tracking-wide"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Chargement...
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 text-sm text-center max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Préparation de votre expérience otaku
          </motion.p>
        </div>

        {/* Animated dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-otaku-orange rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-otaku-orange/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Loader