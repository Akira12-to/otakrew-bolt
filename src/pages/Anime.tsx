
import { useState } from "react"
import { Play, Heart, Share2, Star, Calendar, Clock, Users, MessageCircle, BookOpen } from "lucide-react"

export default function Anime() {
  const [activeTab, setActiveTab] = useState("synopsis")
  const [isFavorite, setIsFavorite] = useState(false)
  const [userRating, setUserRating] = useState(0)

  const animeData = {
    title: "One Piece",
    alternateTitle: "ワンピース",
    type: "Anime TV",
    status: "En cours",
    year: "1999",
    studio: "Toei Animation",
    genres: ["Action", "Aventure", "Comédie", "Drame", "Shōnen"],
    rating: 4.8,
    userCount: 2847,
    episodes: 1050,
    duration: "24 min",
    synopsis: "Monkey D. Luffy refuse de laisser qui que ce soit ou quoi que ce soit l'empêcher de devenir le roi des pirates. Il est capable depuis qu'il était enfant d'étirer son corps comme de la gomme, une capacité qu'il a acquise après avoir mangé un Fruit du Démon. Luffy explore le Grand Line avec son équipage des Pirates du Chapeau de Paille à la recherche du trésor ultime connu sous le nom de \"One Piece\" pour devenir le prochain roi des pirates.",
    trailer: "photo-1526374965328-7f61d4dc18c5",
    poster: "photo-1649972904349-6e44c42644a7"
  }

  const episodes = [
    { number: 1050, title: "Le Réveil du Pouvoir! Luffy Gear 5!", date: "2024-01-07", watched: true },
    { number: 1049, title: "La Bataille Finale! Kaido vs Luffy", date: "2023-12-31", watched: true },
    { number: 1048, title: "L'Attaque Suprême de Kaido", date: "2023-12-24", watched: false },
  ]

  const comments = [
    {
      user: "OtakuCmr_237",
      avatar: "photo-1488590528505-98d2b5aba04b",
      rating: 5,
      comment: "One Piece reste le meilleur manga/anime de tous les temps ! L'arc Wano était incroyable.",
      time: "il y a 2h",
      likes: 23
    },
    {
      user: "MangaFanCmr",
      avatar: "photo-1581091226825-a6a2a5aee158",
      rating: 4.5,
      comment: "J'ai grandi avec cet anime. Oda est un génie du storytelling !",
      time: "il y a 5h",
      likes: 15
    }
  ]

  const relatedAnimes = [
    { title: "Naruto", poster: "photo-1488590528505-98d2b5aba04b", rating: 4.7 },
    { title: "Dragon Ball Z", poster: "photo-1526374965328-7f61d4dc18c5", rating: 4.6 },
    { title: "Demon Slayer", poster: "photo-1649972904349-6e44c42644a7", rating: 4.9 }
  ]

  return (
    <div className="min-h-screen bg-otaku-dark text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`https://images.unsplash.com/${animeData.trailer}?w=1200&h=400&fit=crop`}
            alt={animeData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-otaku-dark via-otaku-dark/70 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto section-padding pb-12 w-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-48 h-72 flex-shrink-0">
                <img
                  src={`https://images.unsplash.com/${animeData.poster}?w=300&h=400&fit=crop`}
                  alt={animeData.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {animeData.genres.map((genre) => (
                    <span key={genre} className="px-3 py-1 bg-otaku-orange/20 text-otaku-orange rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-4xl font-bold mb-2">{animeData.title}</h1>
                <p className="text-xl text-gray-300 mb-4">{animeData.alternateTitle}</p>
                
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{animeData.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{animeData.episodes} épisodes • {animeData.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{animeData.rating}/5 ({animeData.userCount} votes)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <button className="otaku-button flex items-center gap-2 px-8 py-3">
                    <Play className="w-5 h-5" />
                    Voir maintenant
                  </button>
                  
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      isFavorite
                        ? "bg-otaku-orange border-otaku-orange text-white"
                        : "border-gray-600 text-gray-400 hover:border-otaku-orange hover:text-otaku-orange"
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button className="p-3 rounded-lg border-2 border-gray-600 text-gray-400 hover:border-otaku-orange hover:text-otaku-orange transition-all duration-200">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
                
                {/* User Rating */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">Votre note :</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setUserRating(star)}
                        className="transition-colors duration-200"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= userRating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-600 hover:text-yellow-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto section-padding py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-6 mb-8 border-b border-otaku-gray">
          {[
            { key: "synopsis", label: "Synopsis", icon: BookOpen },
            { key: "episodes", label: "Épisodes", icon: Play },
            { key: "comments", label: "Commentaires", icon: MessageCircle },
            { key: "similar", label: "Similaires", icon: Star }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-4 px-2 font-semibold transition-colors duration-200 flex items-center gap-2 ${
                activeTab === tab.key
                  ? "text-otaku-orange border-b-2 border-otaku-orange"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === "synopsis" && (
              <div className="otaku-card">
                <h3 className="text-xl font-bold mb-4 otaku-text-gradient">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">{animeData.synopsis}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-otaku-orange">Informations</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Type :</span>
                        <span>{animeData.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Statut :</span>
                        <span>{animeData.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Studio :</span>
                        <span>{animeData.studio}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "episodes" && (
              <div className="otaku-card">
                <h3 className="text-xl font-bold mb-4 otaku-text-gradient">Derniers Épisodes</h3>
                <div className="space-y-3">
                  {episodes.map((episode) => (
                    <div key={episode.number} className="flex items-center gap-4 p-4 bg-otaku-gray-light rounded-lg hover:bg-otaku-gray transition-colors duration-200 cursor-pointer">
                      <div className="w-16 h-16 bg-gradient-otaku rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Épisode {episode.number}</h4>
                        <p className="text-gray-400 text-sm">{episode.title}</p>
                        <p className="text-gray-500 text-xs">{episode.date}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${episode.watched ? 'bg-green-400' : 'bg-gray-600'}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "comments" && (
              <div className="otaku-card">
                <h3 className="text-xl font-bold mb-6 otaku-text-gradient">Commentaires de la Communauté</h3>
                <div className="space-y-6">
                  {comments.map((comment, index) => (
                    <div key={index} className="border-b border-otaku-gray pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-otaku rounded-full flex items-center justify-center font-bold">
                          {comment.user.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold">{comment.user}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < comment.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{comment.time}</span>
                          </div>
                          <p className="text-gray-300 mb-3">{comment.comment}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-gray-400 hover:text-otaku-orange transition-colors duration-200">
                              <Heart className="w-4 h-4" />
                              <span className="text-sm">{comment.likes}</span>
                            </button>
                            <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                              Répondre
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-otaku-gray">
                  <textarea
                    placeholder="Partagez votre avis sur cet anime..."
                    rows={4}
                    className="w-full bg-otaku-gray border border-otaku-gray-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-otaku-orange resize-none"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Votre note :</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} className="text-gray-600 hover:text-yellow-400 transition-colors duration-200">
                            <Star className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <button className="otaku-button px-6 py-2">
                      Publier
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "similar" && (
              <div className="otaku-card">
                <h3 className="text-xl font-bold mb-6 otaku-text-gradient">Animes Similaires</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedAnimes.map((anime, index) => (
                    <div key={index} className="otaku-card p-0 overflow-hidden hover:border-otaku-orange/50 transition-all duration-200 cursor-pointer group">
                      <img
                        src={`https://images.unsplash.com/${anime.poster}?w=300&h=200&fit=crop`}
                        alt={anime.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2 group-hover:text-otaku-orange transition-colors duration-200">
                          {anime.title}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{anime.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="otaku-card">
              <h4 className="font-bold mb-4 otaku-text-gradient">Statistiques</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Popularité :</span>
                  <span className="font-semibold">#3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rang :</span>
                  <span className="font-semibold">#1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Membres :</span>
                  <span className="font-semibold">{animeData.userCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Favoris :</span>
                  <span className="font-semibold">1,247</span>
                </div>
              </div>
            </div>

            <div className="otaku-card">
              <h4 className="font-bold mb-4 otaku-text-gradient">Genres</h4>
              <div className="flex flex-wrap gap-2">
                {animeData.genres.map((genre) => (
                  <span key={genre} className="px-3 py-1 bg-otaku-gray-light text-gray-300 rounded-full text-sm hover:bg-otaku-orange hover:text-white cursor-pointer transition-all duration-200">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
