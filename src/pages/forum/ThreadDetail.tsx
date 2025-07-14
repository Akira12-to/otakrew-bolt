import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { ArrowLeft, Eye, MessageCircle, Pin, Lock, Edit, Flag } from 'lucide-react'
import { forumApi } from '@/api/forumApi'
import { useForumContext } from '@/contexts/ForumContext'
import { Post } from '@/components/forum/Post'
import { ReplyEditor } from '@/components/forum/ReplyEditor'
import { SkeletonPostList } from '@/components/forum/SkeletonPost'
import { Pagination } from '@/components/forum/Pagination'
import { ReplyData } from '@/types/forum'

export const ThreadDetail: React.FC = () => {
  const { categoryId, threadId } = useParams<{ categoryId: string; threadId: string }>()
  const { categories, user, isAuthenticated } = useForumContext()
  const queryClient = useQueryClient()
  const [currentPage, setCurrentPage] = useState(1)

  const category = categories.find(cat => cat.id === categoryId)

  const { data: thread, isLoading } = useQuery({
    queryKey: ['thread', threadId],
    queryFn: () => forumApi.getThread(threadId!),
    enabled: !!threadId,
  })

  const replyMutation = useMutation({
    mutationFn: (data: ReplyData) => forumApi.createReply(threadId!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['thread', threadId] })
    }
  })

  if (!categoryId || !threadId) {
    return <Navigate to="/forum" replace />
  }

  if (!category && !isLoading) {
    return <Navigate to="/forum" replace />
  }

  if (!thread && !isLoading) {
    return <Navigate to={`/forum/${categoryId}`} replace />
  }

  const handleReply = async (data: ReplyData) => {
    await replyMutation.mutateAsync(data)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-otaku-dark">
        <div className="container-otaku py-8">
          <SkeletonPostList count={5} />
        </div>
      </div>
    )
  }

  if (!thread) return null

  const postsPerPage = 10
  const totalPages = Math.ceil(thread.posts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = thread.posts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-otaku-dark">
      {/* Header */}
      <div className="bg-otaku-gray border-b border-otaku-gray-light">
        <div className="container-otaku py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to={`/forum/${categoryId}`}
              className="p-2 text-gray-400 hover:text-white hover:bg-otaku-gray-light rounded-lg transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            
            {category && (
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color || 'bg-gradient-otaku'} flex items-center justify-center text-lg`}>
                  {category.icon}
                </div>
                <div>
                  <p className="text-gray-400">{category.name}</p>
                </div>
              </div>
            )}
          </div>

          {/* Thread title and info */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {thread.isPinned && (
                  <Pin className="w-5 h-5 text-otaku-gold" />
                )}
                {thread.isLocked && (
                  <Lock className="w-5 h-5 text-gray-400" />
                )}
                <h1 className="text-2xl font-bold text-white">{thread.title}</h1>
              </div>
              
              {thread.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {thread.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-otaku-orange/20 text-otaku-orange rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{thread.viewCount} vues</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{thread.replyCount} réponses</span>
                </div>
                <span>Créé le {formatDate(thread.createdAt)}</span>
              </div>
            </div>

            {/* Thread actions */}
            {user && (user.id === thread.author.id || user.role === 'moderator' || user.role === 'admin') && (
              <div className="flex items-center gap-2">
                <Link
                  to={`/forum/${categoryId}/${threadId}/edit`}
                  className="p-2 text-gray-400 hover:text-otaku-orange hover:bg-otaku-orange/10 rounded-lg transition-all duration-200"
                >
                  <Edit className="w-5 h-5" />
                </Link>
                <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200">
                  <Flag className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Thread content and posts */}
      <div className="container-otaku py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Original post */}
          <Post
            post={{
              id: 'original',
              content: thread.content,
              author: thread.author,
              createdAt: thread.createdAt,
              updatedAt: thread.updatedAt,
              isEdited: !!thread.updatedAt,
              likes: 0,
              threadId: thread.id
            }}
            currentUser={user}
            isFirstPost={true}
          />

          {/* Replies */}
          {currentPosts.map((post) => (
            <Post
              key={post.id}
              post={post}
              currentUser={user}
            />
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}

          {/* Reply editor */}
          {isAuthenticated && !thread.isLocked ? (
            <ReplyEditor
              onSubmit={handleReply}
              isSubmitting={replyMutation.isPending}
            />
          ) : !isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="otaku-card p-6 text-center"
            >
              <p className="text-gray-400 mb-4">
                Vous devez être connecté pour répondre à ce sujet.
              </p>
              <Link to="/login">
                <button className="otaku-button">
                  Se connecter
                </button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="otaku-card p-6 text-center"
            >
              <Lock className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">
                Ce sujet est verrouillé. Aucune nouvelle réponse n'est autorisée.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}