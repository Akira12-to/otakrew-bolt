import { Layout } from "@/components/Layout"
import { useState } from "react"
import { 
  User, 
  Settings, 
  Heart, 
  MessageCircle, 
  Trophy, 
  Calendar,
  MapPin,
  Mail,
  Phone,
  Edit3,
  Camera,
  Star,
  BookOpen,
  Gamepad2,
  Palette
} from "lucide-react"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)

  const userStats = {
    posts: 247,
    likes: 1834,
    followers: 156,
    following: 89,
    karma: 2847,
    level: 15
  }

  const favoriteAnimes = [
    { title: "Attack on Titan", rating: 5, status: "Terminé" },
    { title: "Demon Slayer", rating: 5, status: "En cours" },
    { title: "One Piece", rating: 4, status: "En cours" },
    { title: "Naruto", rating: 4, status: "Terminé" }
  ]

  const recentActivity = [
    { type: "post", content: "A commenté sur 'Meilleurs animes de 2024'", time: "Il y a 2h" },
    { type: "like", content: "A aimé un fanart de Nezuko", time: "Il y a 5h" },
    { type: "follow", content: "Suit maintenant @CosplayMaster", time: "Il y a 1j" },
    { type: "post", content: "A créé un nouveau sujet dans Forum Anime", time: "Il y a 2j" }
  ]

  const achievements = [
    { title: "Premier Post", description: "Votre premier message sur le forum", icon: "🎉", unlocked: true },
    { title: "Otaku Confirmé", description: "100 posts sur le forum", icon: "📝", unlocked: true },
    { title: "Populaire", description: "1000 likes reçus", icon: "❤️", unlocked: true },
    { title: "Collectionneur", description: "50 animes dans vos favoris", icon: "📚", unlocked: false }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-otaku-dark">
        {/* Profile Header */}
        <div className="relative">
          <div 
            className="h-64 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/lovable-uploads/1ca127c7-ce95-4c3c-adbc-cd7a31420c75.png')`
            }}
          />
          
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-otaku rounded-full flex items-center justify-center border-4 border-otaku-dark">
                <User className="w-16 h-16 text-white" />
              </div>
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-otaku-orange rounded-full flex items-center justify-center hover:bg-otaku-orange-light transition-colors">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Basic Info */}
              <div className="otaku-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">Profil</h2>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="p-2 text-gray-400 hover:text-otaku-orange transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Otaku_Cmr</h3>
                    <p className="text-otaku-orange">Niveau {userStats.level} • {userStats.karma} Karma</p>
                  </div>
                  
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Yaoundé, Cameroun</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Membre depuis Mars 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span>otaku@example.com</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">
                    Passionné d'anime et manga depuis toujours. Fan de shonen et amateur de cosplay. 
                    Toujours prêt à découvrir de nouvelles séries !
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="otaku-card">
                <h3 className="text-lg font-semibold text-white mb-4">Statistiques</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-otaku-orange">{userStats.posts}</div>
                    <div className="text-sm text-gray-400">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-otaku-orange">{userStats.likes}</div>
                    <div className="text-sm text-gray-400">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-otaku-orange">{userStats.followers}</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-otaku-orange">{userStats.following}</div>
                    <div className="text-sm text-gray-400">Following</div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="otaku-card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-otaku-orange" />
                  Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`flex items-center p-3 rounded-lg ${
                        achievement.unlocked 
                          ? 'bg-otaku-gray-light border border-otaku-orange/30' 
                          : 'bg-otaku-gray border border-gray-600 opacity-50'
                      }`}
                    >
                      <span className="text-2xl mr-3">{achievement.icon}</span>
                      <div>
                        <div className="font-medium text-white">{achievement.title}</div>
                        <div className="text-sm text-gray-400">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex space-x-1 mb-6 bg-otaku-gray rounded-lg p-1">
                {[
                  { id: "overview", label: "Aperçu", icon: User },
                  { id: "favorites", label: "Favoris", icon: Heart },
                  { id: "activity", label: "Activité", icon: MessageCircle },
                  { id: "settings", label: "Paramètres", icon: Settings }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-otaku text-white shadow-otaku-halo-sm"
                        : "text-gray-400 hover:text-white hover:bg-otaku-gray-light"
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <>
                    {/* Recent Activity */}
                    <div className="otaku-card">
                      <h3 className="text-lg font-semibold text-white mb-4">Activité Récente</h3>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-otaku-gray-light rounded-lg">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              activity.type === 'post' ? 'bg-blue-500' :
                              activity.type === 'like' ? 'bg-red-500' :
                              activity.type === 'follow' ? 'bg-green-500' : 'bg-otaku-orange'
                            }`} />
                            <div className="flex-1">
                              <p className="text-gray-300">{activity.content}</p>
                              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="otaku-card text-center">
                        <BookOpen className="w-8 h-8 text-otaku-orange mx-auto mb-2" />
                        <div className="text-xl font-bold text-white">127</div>
                        <div className="text-gray-400">Animes vus</div>
                      </div>
                      <div className="otaku-card text-center">
                        <Gamepad2 className="w-8 h-8 text-otaku-orange mx-auto mb-2" />
                        <div className="text-xl font-bold text-white">89</div>
                        <div className="text-gray-400">Jeux joués</div>
                      </div>
                      <div className="otaku-card text-center">
                        <Palette className="w-8 h-8 text-otaku-orange mx-auto mb-2" />
                        <div className="text-xl font-bold text-white">23</div>
                        <div className="text-gray-400">Fanarts créés</div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "favorites" && (
                  <div className="otaku-card">
                    <h3 className="text-lg font-semibold text-white mb-4">Animes Favoris</h3>
                    <div className="space-y-4">
                      {favoriteAnimes.map((anime, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-otaku-gray-light rounded-lg">
                          <div>
                            <h4 className="font-medium text-white">{anime.title}</h4>
                            <p className="text-sm text-gray-400">{anime.status}</p>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < anime.rating ? 'text-otaku-orange fill-current' : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "activity" && (
                  <div className="otaku-card">
                    <h3 className="text-lg font-semibold text-white mb-4">Historique d'Activité</h3>
                    <div className="space-y-4">
                      {recentActivity.concat(recentActivity).map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-otaku-gray-light rounded-lg">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.type === 'post' ? 'bg-blue-500' :
                            activity.type === 'like' ? 'bg-red-500' :
                            activity.type === 'follow' ? 'bg-green-500' : 'bg-otaku-orange'
                          }`} />
                          <div className="flex-1">
                            <p className="text-gray-300">{activity.content}</p>
                            <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="space-y-6">
                    <div className="otaku-card">
                      <h3 className="text-lg font-semibold text-white mb-4">Paramètres du Compte</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Nom d'utilisateur
                          </label>
                          <input
                            type="text"
                            defaultValue="Otaku_Cmr"
                            className="otaku-input w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue="otaku@example.com"
                            className="otaku-input w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Bio
                          </label>
                          <textarea
                            defaultValue="Passionné d'anime et manga depuis toujours. Fan de shonen et amateur de cosplay."
                            className="otaku-textarea w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="otaku-card">
                      <h3 className="text-lg font-semibold text-white mb-4">Préférences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Notifications par email</span>
                          <button className="w-12 h-6 bg-otaku-orange rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Profil public</span>
                          <button className="w-12 h-6 bg-otaku-orange rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Afficher le statut en ligne</span>
                          <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="otaku-button">
                        Sauvegarder les modifications
                      </button>
                      <button className="otaku-button-secondary">
                        Annuler
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
