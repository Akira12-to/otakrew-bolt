import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonPostProps {
  className?: string
}

export const SkeletonPost: React.FC<SkeletonPostProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn('otaku-card p-6', className)}
    >
      <div className="flex gap-4">
        {/* Avatar skeleton */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-otaku-gray-light rounded-full animate-pulse" />
        </div>

        {/* Content skeleton */}
        <div className="flex-1 space-y-3">
          {/* Header skeleton */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-5 w-24 bg-otaku-gray-light rounded animate-pulse" />
              <div className="h-4 w-12 bg-otaku-gray-light rounded-full animate-pulse" />
            </div>
            <div className="h-4 w-20 bg-otaku-gray-light rounded animate-pulse" />
          </div>

          {/* Content skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-otaku-gray-light rounded animate-pulse w-full" />
            <div className="h-4 bg-otaku-gray-light rounded animate-pulse w-5/6" />
            <div className="h-4 bg-otaku-gray-light rounded animate-pulse w-4/6" />
            <div className="h-4 bg-otaku-gray-light rounded animate-pulse w-3/6" />
          </div>

          {/* Actions skeleton */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <div className="h-8 w-16 bg-otaku-gray-light rounded-lg animate-pulse" />
              <div className="h-8 w-20 bg-otaku-gray-light rounded-lg animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-otaku-gray-light rounded-lg animate-pulse" />
              <div className="h-8 w-8 bg-otaku-gray-light rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface SkeletonPostListProps {
  count?: number
  className?: string
}

export const SkeletonPostList: React.FC<SkeletonPostListProps> = ({ 
  count = 3, 
  className 
}) => {
  return (
    <div className={cn('space-y-6', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonPost key={index} />
      ))}
    </div>
  )
}