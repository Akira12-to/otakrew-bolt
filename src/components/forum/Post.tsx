import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Flag, Edit, Trash2, Clock, User as UserIcon } from 'lucide-react'
import { Post as PostType, User } from '@/types/forum'
import { cn } from '@/lib/utils'

interface PostProps {
  post: PostType
  currentUser?: User | null
  isFirstPost?: boolean
  onEdit?: (postId: string) => void
  onDelete?: (postId: string) => void
  onReport?: (postId: string) => void
  className?: string
}

export const Post: React.FC<PostProps> = ({
  post,
  currentUser,
  isFirstPost = false,
  onEdit,
  onDelete,
  onReport,
  className
}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const canEdit = currentUser?.id === post.author.id || currentUser?.role === 'moderator' || currentUser?.role === 'admin'
  const canDelete = currentUser?.id === post.author.id || currentUser?.role === 'moderator' || currentUser?.role === 'admin'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'otaku-card p-6',
        isFirstPost && 'border-otaku-orange/30 bg-otaku-orange/5',
        className
      )}
    >
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-otaku rounded-full flex items-center justify-center">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <UserIcon className="w-6 h-6 text-white" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <h4 className="font-semibold text-white hover:text-otaku-orange transition-colors duration-200 cursor-pointer">
                {post.author.username}
              </h4>
              <span className={cn(
                'px-2 py-1 rounded-full text-xs font-medium',
                post.author.role === 'admin' && 'bg-otaku-red text-white',
                post.author.role === 'moderator' && 'bg-otaku-gold text-otaku-dark',
                post.author.role === 'user' && 'bg-otaku-gray-light text-gray-300'
              )}>
                {post.author.role === 'admin' && 'Admin'}
                {post.author.role === 'moderator' && 'Mod'}
                {post.author.role === 'user' && 'Membre'}
              </span>
              {isFirstPost && (
                <span className="px-2 py-1 bg-otaku-orange/20 text-otaku-orange rounded-full text-xs font-medium">
                  Auteur
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{formatDate(post.createdAt)}</span>
              {post.isEdited && (
                <span className="text-xs text-gray-500 ml-2">(modifié)</span>
              )}
            </div>
          </div>

          {/* Post content */}
          <div className="prose prose-invert max-w-none mb-4">
            <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Like button */}
              <motion.button
                onClick={handleLike}
                className={cn(
                  'flex items-center gap-1 px-3 py-1 rounded-lg transition-all duration-200',
                  isLiked
                    ? 'bg-otaku-orange/20 text-otaku-orange'
                    : 'text-gray-400 hover:text-otaku-orange hover:bg-otaku-orange/10'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={cn('w-4 h-4', isLiked && 'fill-current')} />
                <span className="text-sm font-medium">{likeCount}</span>
              </motion.button>

              {/* Report button */}
              {currentUser && currentUser.id !== post.author.id && (
                <button
                  onClick={() => onReport?.(post.id)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
                >
                  <Flag className="w-4 h-4" />
                  <span className="text-sm">Signaler</span>
                </button>
              )}
            </div>

            {/* Edit/Delete actions */}
            {currentUser && (canEdit || canDelete) && (
              <div className="flex items-center gap-2">
                {canEdit && (
                  <button
                    onClick={() => onEdit?.(post.id)}
                    className="p-2 text-gray-400 hover:text-otaku-orange hover:bg-otaku-orange/10 rounded-lg transition-all duration-200"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                )}
                {canDelete && (
                  <button
                    onClick={() => onDelete?.(post.id)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}