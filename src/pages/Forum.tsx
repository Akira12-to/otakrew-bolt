import { Layout } from "@/components/Layout"
import { MessageCircle, Users, TrendingUp, Clock, Pin, Lock } from "lucide-react"

const Forum = () => {
  // Mock data for categories
  const categories = [
    {
      id: 1,
      name: "Anime & Manga",
      description: "Discussions sur vos séries préférées",
      topics: 1247,
      posts: 15623,
      lastPost: "Il y a 2 minutes",
      color: "from-red-500 to-pink-500",
      icon: "📺"
    },
    {
      id: 2,
      name: "Culture Camerounaise",
      description: "L'otaku culture au Cameroun",
      topics: 342,
      posts: 2890,
      lastPost: "Il y a 15 minutes",
      color: "from-green-500 to-blue-500",
      icon: "🇨🇲"
    },
    {
      id: 3,
      name: "Cosplay & Events",
      description: "Événements et costumes",
      topics: 156,
      posts: 982,
      lastPost: "Il y a 1 heure",
      color: "from-purple-500 to-indigo-500",
      icon: "🎭"
    },
    {
      id: 4,
      name: "Gaming",
      description: "Jeux vidéo japonais et plus",
      topics: 489,
      posts: 3421,
      lastPost: "Il y a 30 minutes",
      color: "from-yellow-500 to-orange-500",
      icon: "🎮"
    }
  ]

  // Mock data for featured topics
  const featuredTopics = [
    {
      id: 1,
      title: "One Piece 1100 - Théories sur le prochain arc",
      author: "NarutoFan237",
      replies: 45,
      views: 892,
      lastReply: "Il y a 5 minutes",
      isPinned: true,
      category: "Anime & Manga"
    },
    {
      id: 2,
      title: "Convention Otaku Yaoundé 2024 - Qui participe ?",
      author: "CosplayQueen",
      replies: 23,
      views: 456,
      lastReply: "Il y a 20 minutes",
      category: "Culture Camerounaise"
    },
    {
      id: 3,
      title: "Tutoriel Cosplay Nezuko - Matériaux locaux",
      author: "ArtisanCmr",
      replies: 67,
      views: 1234,
      lastReply: "Il y a 1 heure",
      category: "Cosplay & Events"
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-otaku-dark">
        {/* Hero Section with Parallax Background */}
        <div 
          className="relative h-64 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/1ca127c7-ce95-4c3c-adbc-cd7a31420c75.png')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 otaku-text-gradient">
                Forum OTAKREW
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                La communauté otaku du Cameroun se retrouve ici
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="otaku-card text-center">
              <div className="text-2xl font-bold text-otaku-orange">2,234</div>
              <div className="text-gray-400">Membres</div>
            </div>
            <div className="otaku-card text-center">
              <div className="text-2xl font-bold text-otaku-orange">1,247</div>
              <div className="text-gray-400">Sujets</div>
            </div>
            <div className="otaku-card text-center">
              <div className="text-2xl font-bold text-otaku-orange">22,916</div>
              <div className="text-gray-400">Messages</div>
            </div>
            <div className="otaku-card text-center">
              <div className="text-2xl font-bold text-otaku-orange">156</div>
              <div className="text-gray-400">En ligne</div>
            </div>
          </div>

          {/* Categories Grid */}
          <h2 className="text-2xl font-bold text-white mb-6">Catégories du Forum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map((category) => (
              <div
                key={category.id}
                className="otaku-card-animated cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-otaku-orange transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {category.topics} sujets
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {category.posts} posts
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {category.lastPost}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Topics */}
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-otaku-orange" />
            Sujets en vogue
          </h2>
          <div className="space-y-4">
            {featuredTopics.map((topic) => (
              <div
                key={topic.id}
                className="otaku-card hover:border-otaku-orange/50 cursor-pointer group transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {topic.isPinned && (
                      <Pin className="w-5 h-5 text-otaku-orange mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-otaku-orange transition-colors duration-300">
                        {topic.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>Par {topic.author}</span>
                        <span className="otaku-badge-secondary">{topic.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-400 flex-shrink-0 ml-4">
                    <div className="flex items-center space-x-4 mb-1">
                      <span>{topic.replies} réponses</span>
                      <span>{topic.views} vues</span>
                    </div>
                    <div>{topic.lastReply}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="otaku-card-hero max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Rejoignez la discussion !
              </h3>
              <p className="text-gray-300 mb-6">
                Partagez vos passions, découvrez de nouveaux animes, et connectez-vous avec la communauté otaku camerounaise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="otaku-button">
                  Créer un sujet
                </button>
                <button className="otaku-button-secondary">
                  Parcourir les discussions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Forum
