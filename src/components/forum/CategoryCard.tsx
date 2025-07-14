import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Users, Clock } from 'lucide-react'
import { Category } from '@/types/forum'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  category: Category
  className?: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, className }) => {
  const formatLastActivity = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Il y a quelques minutes'
    if (diffInHours < 24) return `Il y a ${diffInHours}h`
    return `Il y a ${Math.floor(diffInHours / 24)}j`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn('group', className)}
    >
      <Link to={`/forum/${category.id}`}>
        <div className="otaku-card-animated p-6 h-full">
          <div className="flex items-start space-x-4">
            {/* Icon with gradient background */}
            <div className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300',
              category.color ? `bg-gradient-to-r ${category.color}` : 'bg-gradient-otaku'
            )}>
              {category.icon}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-otaku-orange transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {category.description}
              </p>
              
              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{category.threadCount.toLocaleString()} sujets</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{category.postCount.toLocaleString()} posts</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{formatLastActivity(category.lastActivity)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}