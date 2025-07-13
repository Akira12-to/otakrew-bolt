
import { Play, Users, TrendingUp, Star, MapPin } from "lucide-react"
import { OtakrewLogo, CameroonPattern } from "@/components/ui/brand-elements"
import { ImageCarousel, HeroImage } from "@/components/ui/image-components"

export function HeroSection() {
  // Images enrichies pour le carrousel principal
  const heroImages = [
    {
      src: "/lovable-uploads/a70b48d9-668e-46ca-9db2-65b94dba41a5.png",
      alt: "Dan Da Dan - Anime Action",
      title: "DAN DA DAN",
      subtitle: "L'anime sensation qui fait vibrer la communauté otaku camerounaise"
    },
    {
      src: "/lovable-uploads/d3719426-a7bc-4925-8a74-2cb5580388f9.png",
      alt: "Solo Leveling - Reawakening",
      title: "SOLO LEVELING",
      subtitle: "L'ascension épique d'un chasseur ordinaire vers la légende"
    },
    {
      src: "/lovable-uploads/4f2658e7-2f74-4415-8ebc-70b566363988.png",
      alt: "Spice and Wolf - Merchant Adventure",
      title: "SPICE & WOLF",
      subtitle: "Découvrez l'aventure commerciale et romantique d'Holo et Lawrence"
    },
    {
      src: "/lovable-uploads/53f6e7ca-da09-4394-99c2-b385ff47d758.png",
      alt: "Kaiju No. 8 - Action & Monstres",
      title: "KAIJU No. 8",
      subtitle: "Découvrez l'univers des kaijus avec notre communauté"
    },
    {
      src: "/lovable-uploads/42162b07-95bc-41eb-8447-195188cfb060.png",
      alt: "Steins;Gate - Sci-Fi Thriller",
      title: "STEINS;GATE",
      subtitle: "Plongez dans le thriller scientifique qui redéfinit le temps"
    }
  ]

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-hero">
      {/* Carrousel principal avec images enrichies */}
      <div className="absolute inset-0">
        <ImageCarousel 
          images={heroImages}
          autoplay={true}
          className="h-full"
        />
      </div>

      {/* Overlay pour le contenu */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-otaku text-center">
          <div className="animate-entrance">
            {/* Badge Cameroun */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 otaku-badge-cameroon backdrop-blur-sm">
                <MapPin className="w-4 h-4" />
                <span>Communauté Otaku du Cameroun</span>
                <CameroonPattern />
              </div>
            </div>

            {/* Titre principal avec effet glassmorphism */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/10">
              <h1 className="text-hero font-heading font-black mb-6 leading-none text-white drop-shadow-2xl">
                Bienvenue sur{" "}
                <span className="otaku-text-gradient">OTAKREW</span>
              </h1>
              
              <p className="text-body-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                La première plateforme otaku du Cameroun. Connecte-toi with des passionnés, 
                découvre du contenu exclusif et vis ta passion anime au maximum.
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="otaku-button flex items-center gap-3 text-body-lg px-8 py-4 shadow-otaku-halo-md">
                  <Play className="w-6 h-6" />
                  Découvrir maintenant
                </button>
                <button className="otaku-button-secondary flex items-center gap-3 text-body-lg px-8 py-4 backdrop-blur-sm">
                  <Users className="w-6 h-6" />
                  Rejoindre la communauté
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques avec glassmorphism */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container-otaku">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center interactive-hover">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-otaku rounded-full mr-3 shadow-otaku-glow">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <span className="text-title font-heading font-bold text-white">1.2K+</span>
              </div>
              <p className="text-body text-gray-300">Membres actifs</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center interactive-hover">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-otaku-gold to-otaku-yellow rounded-full mr-3 shadow-otaku-glow">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <span className="text-title font-heading font-bold text-white">500+</span>
              </div>
              <p className="text-body text-gray-300">Publications par jour</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center interactive-hover">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-cameroon rounded-full mr-3 shadow-otaku-glow">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <span className="text-title font-heading font-bold text-white">98%</span>
              </div>
              <p className="text-body text-gray-300">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Effet de particules animées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-otaku-orange/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}
