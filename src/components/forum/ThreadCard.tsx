import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Eye, Pin, Lock, Clock, User } from 'lucide-react'
import { Thread } from '@/types/forum'
import { cn } from '@/lib/utils'

interface ThreadCardProps {
  thread: Thread
  categoryId: string
  className?: string
}

export const ThreadCard: React.FC<ThreadCardProps> = ({ thread, categoryId, className }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Il y a quelques minutes'
    if (diffInHours < 24) return `Il y a ${diffInHours}h`
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={cn('group', className)}
    >
      <Link to={`/forum/${categoryId}/${thread.id}`}>
        <div className={cn(
          'otaku-card hover:border-otaku-orange/50 transition-all duration-300 p-4',
          thread.isPinned && 'border-otaku-gold/30 bg-otaku-gold/5'
        )}>
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              {/* Title with status icons */}
              <div className="flex items-center gap-2 mb-2">
                {thread.isPinned && (
                  <Pin className="w-4 h-4 text-otaku-gold flex-shrink-0" />
                )}
                {thread.isLocked && (
                  <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
                <h3 className="text-lg font-semibold text-white group-hover:text-otaku-orange transition-colors duration-300 line-clamp-2">
                  {thread.title}
                </h3>
              </div>
              
              {/* Tags */}
              {thread.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {thread.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-otaku-gray-light text-gray-300 rounded-full text-xs hover:bg-otaku-orange hover:text-white transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                  {thread.tags.length > 3 && (
                    <span className="px-2 py-1 bg-otaku-gray-light text-gray-400 rounded-full text-xs">
                      +{thread.tags.length - 3}
                    </span>
                  )}
                </div>
              )}
              
              {/* Author and date */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span className="hover:text-otaku-orange transition-colors duration-200">
                    {thread.author.username}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatDate(thread.createdAt)}</span>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-col items-end gap-2 ml-4 text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">{thread.replyCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{thread.viewCount}</span>
                </div>
              </div>
              
              {/* Last reply info */}
              {thread.lastReply && (
                <div className="text-xs text-gray-500 text-right">
                  <div>Dernier: {thread.lastReply.author.username}</div>
                  <div>{formatDate(thread.lastReply.createdAt)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}