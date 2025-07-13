
import { motion } from "framer-motion"
import { TrendingUp, Star, Play, Eye, Clock } from "lucide-react"
import { AnimatedImage, ImageGrid } from "@/components/ui/image-components"
import { StaggerContainer, ScrollReveal } from "@/components/ui/animated-components"

export function TrendingSection() {
  // Collection enrichie d'animes populaires avec les nouvelles images
  const trendingAnimes = [
    {
      src: "/lovable-uploads/a529d6a8-056f-4459-832c-3fe109360591.png",
      alt: "Fantasy Adventure Anime",
      title: "Fantasy Adventure",
      category: "Fantasy",
      rating: 4.9,
      episodes: 24,
      views: "3.2M"
    },
    {
      src: "/lovable-uploads/ea3e3cae-6130-407d-8bff-f649c11ddf8e.png",
      alt: "School Romance Magic",
      title: "Magical School Life",
      category: "Romance",
      rating: 4.7,
      episodes: 12,
      views: "2.8M"
    },
    {
      src: "/lovable-uploads/d3719426-a7bc-4925-8a74-2cb5580388f9.png",
      alt: "Solo Leveling Reawakening",
      title: "SOLO LEVELING",
      category: "Action",
      rating: 4.9,
      episodes: 12,
      views: "8.5M"
    },
    {
      src: "/lovable-uploads/14342ced-6146-4296-9b30-e0419e0fe623.png",
      alt: "Chain Chronicles Adventure",
      title: "Chain Chronicles",
      category: "Adventure",
      rating: 4.6,
      episodes: 12,
      views: "1.9M"
    },
    {
      src: "/lovable-uploads/42162b07-95bc-41eb-8447-195188cfb060.png",
      alt: "Steins Gate Sci-Fi",
      title: "STEINS;GATE",
      category: "Sci-Fi",
      rating: 4.8,
      episodes: 24,
      views: "4.1M"
    },
    {
      src: "/lovable-uploads/4f2658e7-2f74-4415-8ebc-70b566363988.png",
      alt: "Spice and Wolf Adventure",
      title: "SPICE & WOLF",
      category: "Adventure",
      rating: 4.7,
      episodes: 13,
      views: "2.3M"
    },
    {
      src: "/lovable-uploads/fbbf9eba-8e97-4c50-895e-56119675a5be.png",
      alt: "Sword Art Online Alicization",
      title: "SAO: Alicization",
      category: "Sci-Fi",
      rating: 4.9,
      episodes: 24,
      views: "3.5M"
    },
    {
      src: "/lovable-uploads/726c9999-0a3a-482f-b2e2-58756ef0f6fe.png",
      alt: "One Piece Adventure",
      title: "ONE PIECE",
      category: "Aventure",
      rating: 4.9,
      episodes: "1000+",
      views: "10M+"
    }
  ]

  return (
    <section className="section-spacing bg-gradient-to-b from-otaku-dark to-otaku-darker">
      <div className="container-otaku">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 otaku-badge mb-4">
              <TrendingUp className="w-5 h-5" />
              <span>Tendances OTAKREW</span>
            </div>
            <h2 className="text-title font-heading font-bold text-white mb-4">
              Animes les plus populaires
            </h2>
            <p className="text-body-lg text-gray-400 max-w-2xl mx-auto">
              Découvrez les séries qui passionnent notre communauté camerounaise
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {trendingAnimes.map((anime, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="otaku-card p-0 overflow-hidden hover:border-otaku-orange/50 transition-all duration-300">
                <div className="relative">
                  <img
                    src={anime.src}
                    alt={anime.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay avec infos */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge catégorie */}
                  <div className="absolute top-3 left-3">
                    <span className="otaku-badge-secondary text-xs px-2 py-1">
                      {anime.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-otaku-gold fill-current" />
                    <span className="text-white text-xs font-semibold">{anime.rating}</span>
                  </div>

                  {/* Bouton play */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      className="p-4 bg-otaku-orange rounded-full text-white shadow-otaku-halo-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-6 h-6 fill-current" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-otaku-orange transition-colors duration-200">
                    {anime.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{anime.episodes} ép</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{anime.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <ScrollReveal className="text-center">
          <div className="bg-gradient-to-r from-otaku-orange/10 to-otaku-gold/10 border border-otaku-orange/20 rounded-2xl p-8">
            <h3 className="text-heading font-bold text-white mb-4">
              Découvrez plus d'animes
            </h3>
            <p className="text-gray-400 mb-6">
              Explorez notre catalogue complet et rejoignez les discussions de la communauté
            </p>
            <button className="otaku-button-outline">
              Voir tout le catalogue
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
