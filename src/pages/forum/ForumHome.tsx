import React from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { Users, MessageCircle, TrendingUp } from 'lucide-react'
import { forumApi } from '@/api/forumApi'
import { CategoryCard } from '@/components/forum/CategoryCard'
import { StaggerContainer } from '@/components/ui/animated-components'

export const ForumHome: React.FC = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: forumApi.getCategories,
  })

  const totalStats = categories.reduce(
    (acc, category) => ({
      threads: acc.threads + category.threadCount,
      posts: acc.posts + category.postCount,
    }),
    { threads: 0, posts: 0 }
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-otaku-dark">
        <div className="container-otaku py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="otaku-card p-6 animate-pulse">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-otaku-gray-light rounded-lg" />
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-otaku-gray-light rounded w-3/4" />
                    <div className="h-4 bg-otaku-gray-light rounded w-full" />
                    <div className="h-4 bg-otaku-gray-light rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-otaku-dark">
      {/* Hero Section */}
      <div className="relative bg-gradient-otaku py-16 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/lovable-uploads/1ca127c7-ce95-4c3c-adbc-cd7a31420c75.png"
            alt="Forum Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-otaku-dark/90 to-otaku-dark/70" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Forum OTAKREW
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 drop-shadow-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            La communauté otaku du Cameroun se retrouve ici
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-otaku-orange mr-2" />
                <span className="text-2xl font-bold text-white">2.2K+</span>
              </div>
              <p className="text-white/80">Membres</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <MessageCircle className="w-6 h-6 text-otaku-orange mr-2" />
                <span className="text-2xl font-bold text-white">{totalStats.threads.toLocaleString()}</span>
              </div>
              <p className="text-white/80">Sujets</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-otaku-orange mr-2" />
                <span className="text-2xl font-bold text-white">{totalStats.posts.toLocaleString()}</span>
              </div>
              <p className="text-white/80">Messages</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="container-otaku py-12">
        <motion.h2 
          className="text-2xl font-bold text-white mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Catégories du Forum
        </motion.h2>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="otaku-card-hero max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Rejoignez la discussion !
            </h3>
            <p className="text-gray-300 mb-6">
              Partagez vos passions, découvrez de nouveaux animes, et connectez-vous avec la communauté otaku camerounaise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="otaku-button">
                Créer un compte
              </button>
              <button className="otaku-button-secondary">
                Parcourir les discussions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}