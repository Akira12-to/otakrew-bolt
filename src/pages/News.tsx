import { useState } from "react"
import { Calendar, Clock, Eye, MessageCircle, Tag, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard, ScrollReveal, StaggerContainer } from "@/components/ui/animated-components"
import { Layout } from "@/components/Layout"

export default function News() {
  const [activeFilter, setActiveFilter] = useState("all")

  const newsArticles = [
    {
      id: 1,
      title: "Festival Otaku Yaoundé 2024 : Les dates officielles révélées !",
      excerpt: "Le plus grand rassemblement otaku du Cameroun aura lieu du 15 au 17 mars 2024 au Palais des Sports de Yaoundé...",
      image: "/lovable-uploads/14154d1a-ed15-44f2-8722-516c1a32c205.png",
      category: "Événements",
      location: "Yaoundé",
      author: "OtakrewTeam",
      date: "2024-01-08",
      views: 1247,
      comments: 34,
      isLocal: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Nouveaux cosplays épiques de la communauté !",
      excerpt: "Découvrez les créations les plus impressionnantes de nos cosplayers locaux, avec des techniques innovantes...",
      image: "/lovable-uploads/c5985b42-3a9a-4c3f-882d-d5ae553e6d80.png",
      category: "Cosplay",
      location: "Douala",
      author: "CosplayMaster",
      date: "2024-01-07",
      views: 892,
      comments: 18,
      isLocal: true,
      isFeatured: false
    },
    {
      id: 3,
      title: "One Piece 1100 : Analyse et théories de la communauté",
      excerpt: "Retour sur le chapitre qui a fait sensation et les théories les plus populaires de nos membres...",
      image: "/lovable-uploads/7274ee51-159f-4d53-9e24-f9dadd3174e6.png",
      category: "Manga",
      location: null,
      author: "OtakuAnalyst",
      date: "2024-01-06",
      views: 2156,
      comments: 67,
      isLocal: false,
      isFeatured: true
    },
    {
      id: 4,
      title: "Techniques avancées de fan art numérique",
      excerpt: "Masterclass exclusive avec les meilleurs artistes de la communauté camerounaise...",
      image: "/lovable-uploads/b7420430-e5c2-4308-9a63-f3a496e8cefc.png",
      category: "Fan Art",
      location: "Bafoussam",
      author: "DigitalArtist237",
      date: "2024-01-05",
      views: 1543,
      comments: 42,
      isLocal: true,
      isFeatured: false
    },
    {
      id: 5,
      title: "Jujutsu Kaisen : L'impact culturel au Cameroun",
      excerpt: "Comment cet anime a révolutionné la scène otaku locale et inspiré une nouvelle génération...",
      image: "/lovable-uploads/1ca127c7-ce95-4c3c-adbc-cd7a31420c75.png",
      category: "Analyse",
      location: null,
      author: "CultureOtaku",
      date: "2024-01-04",
      views: 987,
      comments: 23,
      isLocal: false,
      isFeatured: false
    },
    {
      id: 6,
      title: "Convention gaming : Sword Art Online en VR",
      excerpt: "Première expérience VR SAO au Cameroun - immersion totale garantie !",
      image: "/lovable-uploads/e9ab0794-f11f-440c-9daa-a8cfa6dd92f8.png",
      category: "Gaming",
      location: "Yaoundé",
      author: "VRGamer",
      date: "2024-01-03",
      views: 2341,
      comments: 89,
      isLocal: true,
      isFeatured: true
    }
  ]

  const upcomingEvents = [
    { name: "Concours Cosplay", date: "15 Jan", location: "Yaoundé" },
    { name: "Tournoi Gaming", date: "22 Jan", location: "Douala" },
    { name: "Atelier BD", date: "29 Jan", location: "Bafoussam" }
  ]

  const filters = [
    { key: "all", label: "Tout", count: newsArticles.length },
    { key: "local", label: "Local", count: newsArticles.filter(n => n.isLocal).length },
    { key: "events", label: "Événements", count: newsArticles.filter(n => n.category === "Événements").length },
    { key: "cosplay", label: "Cosplay", count: newsArticles.filter(n => n.category === "Cosplay").length }
  ]

  const filteredNews = newsArticles.filter(article => {
    if (activeFilter === "all") return true
    if (activeFilter === "local") return article.isLocal
    if (activeFilter === "events") return article.category === "Événements"
    if (activeFilter === "cosplay") return article.category === "Cosplay"
    return true
  })

  return (
    <Layout>
      <div className="min-h-screen bg-otaku-dark text-white">
        {/* Header Section avec background hero */}
        <div className="relative bg-gradient-otaku py-16 section-padding overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img
              src="/lovable-uploads/14154d1a-ed15-44f2-8722-516c1a32c205.png"
              alt="News Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-otaku-dark/90 to-otaku-dark/70" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Actualités Otaku
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Restez connectés à l'actualité otaku du Cameroun et du monde
            </motion.p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto section-padding py-8">
          {/* Filters */}
          <ScrollReveal direction="up" className="mb-8">
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-otaku-orange text-white shadow-otaku-halo-sm"
                      : "bg-otaku-gray text-gray-300 hover:bg-otaku-gray-light hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter.label} ({filter.count})
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Grille de cartes visuelles */}
            <div className="lg:col-span-2">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNews.map((article, index) => (
                  <AnimatedCard 
                    key={article.id} 
                    className="group cursor-pointer p-0 overflow-hidden hover:border-otaku-orange/50 h-fit"
                    hoverScale={1.03}
                  >
                    <div className="relative">
                      {/* Image avec overlay animé */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Overlay foncé avec animation */}
                        <div className="absolute inset-0 bg-gradient-to-t from-otaku-dark/90 via-otaku-dark/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                        
                        {/* Badge featured */}
                        {article.isFeatured && (
                          <motion.div 
                            className="absolute top-3 left-3 bg-otaku-orange px-3 py-1 rounded-full text-xs font-bold shadow-otaku-halo-sm"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            À LA UNE
                          </motion.div>
                        )}

                        {/* Titre animé au survol */}
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 drop-shadow-lg">
                            {article.title}
                          </h3>
                          <motion.button
                            className="bg-otaku-orange/90 hover:bg-otaku-orange text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Lire plus
                          </motion.button>
                        </div>
                      </div>
                      
                      {/* Contenu de la carte */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-otaku-orange/20 text-otaku-orange text-sm rounded-full font-medium">
                            {article.category}
                          </span>
                          {article.location && (
                            <div className="flex items-center gap-1 text-gray-400 text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{article.location}</span>
                            </div>
                          )}
                        </div>
                        
                        <h3 className="font-bold mb-2 group-hover:text-otaku-orange transition-colors duration-200 line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center gap-3">
                            <span>Par {article.author}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{article.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{article.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </StaggerContainer>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <AnimatedCard>
                <h3 className="text-xl font-bold mb-4 otaku-text-gradient flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Événements à venir
                </h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <motion.div 
                      key={index} 
                      className="p-3 rounded-lg bg-otaku-gray-light hover:bg-otaku-gray transition-colors duration-200 cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold group-hover:text-otaku-orange transition-colors duration-200">
                            {event.name}
                          </p>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-otaku-orange/20 text-otaku-orange px-2 py-1 rounded text-xs font-bold">
                            {event.date}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedCard>

              {/* Popular Tags */}
              <AnimatedCard>
                <h3 className="text-xl font-bold mb-4 otaku-text-gradient flex items-center gap-2">
                  <Tag className="w-6 h-6" />
                  Tags populaires
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["One Piece", "Cosplay", "Jujutsu Kaisen", "Gaming", "BD Cameroun", "Festival", "Fan Art", "VR"].map((tag, index) => (
                    <motion.span 
                      key={tag} 
                      className="px-3 py-1 bg-otaku-gray-light text-gray-300 rounded-full text-sm hover:bg-otaku-orange hover:text-white cursor-pointer transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
