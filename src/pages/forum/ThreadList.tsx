import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { Plus, Search, Filter, ArrowLeft } from 'lucide-react'
import { forumApi } from '@/api/forumApi'
import { useForumContext } from '@/contexts/ForumContext'
import { ThreadCard } from '@/components/forum/ThreadCard'
import { SkeletonThreadList } from '@/components/forum/SkeletonThread'
import { Pagination } from '@/components/forum/Pagination'

export const ThreadList: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>()
  const { categories, isAuthenticated } = useForumContext()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const category = categories.find(cat => cat.id === categoryId)

  const { data, isLoading } = useQuery({
    queryKey: ['threads', categoryId, currentPage],
    queryFn: () => forumApi.getThreads(categoryId!, currentPage),
    enabled: !!categoryId,
  })

  if (!categoryId) {
    return <Navigate to="/forum" replace />
  }

  if (!category && !isLoading) {
    return <Navigate to="/forum" replace />
  }

  const threads = data?.threads || []
  const totalPages = Math.ceil((data?.total || 0) / 20)

  return (
    <div className="min-h-screen bg-otaku-dark">
      {/* Header */}
      <div className="bg-otaku-gray border-b border-otaku-gray-light">
        <div className="container-otaku py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to="/forum"
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
                  <h1 className="text-2xl font-bold text-white">{category.name}</h1>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher dans cette catégorie..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="otaku-input pl-10 w-full"
                />
              </div>

              {/* Filter */}
              <button className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-otaku-gray-light rounded-lg transition-all duration-200">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filtrer</span>
              </button>
            </div>

            {/* New Thread Button */}
            {isAuthenticated ? (
              <Link to={`/forum/${categoryId}/new`}>
                <motion.button
                  className="otaku-button flex items-center gap-2 px-6 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="w-5 h-5" />
                  Nouveau sujet
                </motion.button>
              </Link>
            ) : (
              <div className="text-gray-400 text-sm">
                <Link to="/login" className="text-otaku-orange hover:underline">
                  Connectez-vous
                </Link> pour créer un sujet
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Thread List */}
      <div className="container-otaku py-8">
        {isLoading ? (
          <SkeletonThreadList count={10} />
        ) : threads.length > 0 ? (
          <div className="space-y-4">
            {threads.map((thread) => (
              <ThreadCard
                key={thread.id}
                thread={thread}
                categoryId={categoryId}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="otaku-card max-w-md mx-auto p-8">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Aucun sujet pour le moment
              </h3>
              <p className="text-gray-400 mb-6">
                Soyez le premier à lancer une discussion dans cette catégorie !
              </p>
              {isAuthenticated && (
                <Link to={`/forum/${categoryId}/new`}>
                  <button className="otaku-button">
                    Créer le premier sujet
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  )
}