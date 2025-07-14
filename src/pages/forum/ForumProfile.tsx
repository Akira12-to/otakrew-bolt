import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { User, Calendar, MessageCircle, Trophy, ArrowLeft } from 'lucide-react'
import { forumApi } from '@/api/forumApi'
import { ThreadCard } from '@/components/forum/ThreadCard'
import { Link } from 'react-router-dom'

export const ForumProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>()

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user-profile', username],
    queryFn: () => forumApi.getUserProfile(username!),
    enabled: !!username,
  })

  const { data: userThreads = [], isLoading: isLoadingThreads } = useQuery({
    queryKey: ['user-threads', username],
    queryFn: () => forumApi.getUserThreads(username!),
    enabled: !!username,
  })

  if (!username) {
    return <Navigate to="/forum" replace />
  }

  if (!user && !isLoadingUser) {
    return <Navigate to="/forum" replace />
  }

  const formatJoinDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long'
    })
  }

  if (isLoadingUser) {
    return (
      <div className="min-h-screen bg-otaku-dark">
        <div className="container-otaku py-8">
          <div className="max-w-4xl mx-auto">
            <div className="otaku-card p-8 animate-pulse">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-otaku-gray-light rounded-full" />
                <div className="space-y-3">
                  <div className="h-8 bg-otaku-gray-light rounded w-48" />
                  <div className="h-4 bg-otaku-gray-light rounded w-32" />
                  <div className="h-4 bg-otaku-gray-light rounded w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-otaku-dark">
      {/* Header */}
      <div className="bg-otaku-gray border-b border-otaku-gray-light">
        <div className="container-otaku py-6">
          <div className="flex items-center gap-4">
            <Link 
              to="/forum"
              className="p-2 text-gray-400 hover:text-white hover:bg-otaku-gray-light rounded-lg transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Profil utilisateur</h1>
          </div>
        </div>
      </div>

      <div className="container-otaku py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* User Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="otaku-card p-8"
          >
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-otaku rounded-full flex items-center justify-center">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-white" />
                  )}
                </div>
              </div>

              {/* User details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-white">{user.username}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user.role === 'admin' ? 'bg-otaku-red text-white' :
                    user.role === 'moderator' ? 'bg-otaku-gold text-otaku-dark' :
                    'bg-otaku-gray-light text-gray-300'
                  }`}>
                    {user.role === 'admin' && 'Administrateur'}
                    {user.role === 'moderator' && 'Modérateur'}
                    {user.role === 'user' && 'Membre'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>Membre depuis {formatJoinDate(user.joinDate)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="w-5 h-5" />
                    <span>{user.postCount} messages</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Trophy className="w-5 h-5" />
                    <span>Niveau {Math.floor(user.postCount / 10) + 1}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-otaku-gray-light rounded-lg">
                    <div className="text-2xl font-bold text-otaku-orange">{userThreads.length}</div>
                    <div className="text-sm text-gray-400">Sujets créés</div>
                  </div>
                  <div className="text-center p-4 bg-otaku-gray-light rounded-lg">
                    <div className="text-2xl font-bold text-otaku-orange">{user.postCount}</div>
                    <div className="text-sm text-gray-400">Messages</div>
                  </div>
                  <div className="text-center p-4 bg-otaku-gray-light rounded-lg">
                    <div className="text-2xl font-bold text-otaku-orange">
                      {userThreads.reduce((acc, thread) => acc + thread.viewCount, 0)}
                    </div>
                    <div className="text-sm text-gray-400">Vues totales</div>
                  </div>
                  <div className="text-center p-4 bg-otaku-gray-light rounded-lg">
                    <div className="text-2xl font-bold text-otaku-orange">
                      {userThreads.reduce((acc, thread) => acc + thread.replyCount, 0)}
                    </div>
                    <div className="text-sm text-gray-400">Réponses reçues</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User's Threads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Sujets créés par {user.username} ({userThreads.length})
            </h3>
            
            {isLoadingThreads ? (
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="otaku-card p-4 animate-pulse">
                    <div className="h-6 bg-otaku-gray-light rounded mb-2" />
                    <div className="h-4 bg-otaku-gray-light rounded w-3/4" />
                  </div>
                ))}
              </div>
            ) : userThreads.length > 0 ? (
              <div className="space-y-4">
                {userThreads.map((thread) => (
                  <ThreadCard
                    key={thread.id}
                    thread={thread}
                    categoryId={thread.category}
                  />
                ))}
              </div>
            ) : (
              <div className="otaku-card p-8 text-center">
                <div className="text-6xl mb-4">📝</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Aucun sujet créé
                </h4>
                <p className="text-gray-400">
                  {user.username} n'a pas encore créé de sujet sur le forum.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}