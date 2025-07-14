import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonThreadProps {
  className?: string
}

export const SkeletonThread: React.FC<SkeletonThreadProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn('otaku-card p-4', className)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          {/* Title skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-otaku-gray-light rounded animate-pulse" />
            <div className="h-5 bg-otaku-gray-light rounded animate-pulse flex-1 max-w-md" />
          </div>
          
          {/* Tags skeleton */}
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-otaku-gray-light rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-otaku-gray-light rounded-full animate-pulse" />
            <div className="h-6 w-12 bg-otaku-gray-light rounded-full animate-pulse" />
          </div>
          
          {/* Author and date skeleton */}
          <div className="flex items-center gap-4">
            <div className="h-4 w-24 bg-otaku-gray-light rounded animate-pulse" />
            <div className="h-4 w-20 bg-otaku-gray-light rounded animate-pulse" />
          </div>
        </div>
        
        {/* Stats skeleton */}
        <div className="flex flex-col items-end gap-2 ml-4">
          <div className="flex items-center gap-4">
            <div className="h-4 w-8 bg-otaku-gray-light rounded animate-pulse" />
            <div className="h-4 w-8 bg-otaku-gray-light rounded animate-pulse" />
          </div>
          <div className="text-right space-y-1">
            <div className="h-3 w-16 bg-otaku-gray-light rounded animate-pulse" />
            <div className="h-3 w-12 bg-otaku-gray-light rounded animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface SkeletonThreadListProps {
  count?: number
  className?: string
}

export const SkeletonThreadList: React.FC<SkeletonThreadListProps> = ({ 
  count = 5, 
  className 
}) => {
  return (
    <div className={cn('space-y-4', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonThread key={index} />
      ))}
    </div>
  )
}