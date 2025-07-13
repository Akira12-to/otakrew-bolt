
import { 
  MessageCircle, 
  Newspaper, 
  ShoppingBag, 
  Palette, 
  BookOpen, 
  Trophy,
  Camera,
  Users,
  Zap
} from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Forum Communautaire",
    description: "Échange avec des otakus camerounais sur tes animes préférés, partage tes théories et découvre de nouveaux amis.",
    color: "text-blue-400"
  },
  {
    icon: Newspaper,
    title: "Actualités Otaku",
    description: "Reste à jour avec les dernières news anime, manga et les événements otaku au Cameroun et dans le monde.",
    color: "text-green-400"
  },
  {
    icon: ShoppingBag,
    title: "Boutique Exclusive",
    description: "Achète des produits dérivés, mangas et goodies otaku avec livraison dans tout le Cameroun.",
    color: "text-purple-400"
  },
  {
    icon: Palette,
    title: "Galerie Fanart",
    description: "Partage tes créations artistiques, découvre des talents locaux et participe aux concours mensuels.",
    color: "text-pink-400"
  },
  {
    icon: BookOpen,
    title: "BD Africaines",
    description: "Découvre et soutiens les créateurs de bandes dessinées africaines inspirées de la culture manga.",
    color: "text-yellow-400"
  },
  {
    icon: Camera,
    title: "Cosplay Virtuel",
    description: "Montre tes cosplays, participe aux événements virtuels et connecte-toi avec d'autres cosplayers.",
    color: "text-red-400"
  },
  {
    icon: Trophy,
    title: "Quiz & Défis",
    description: "Teste tes connaissances otaku, défie tes amis et grimpe dans le classement communautaire.",
    color: "text-otaku-orange"
  },
  {
    icon: Users,
    title: "Communauté Locale",
    description: "Organise et participe à des meet-ups, conventions et événements otaku dans ta ville.",
    color: "text-cyan-400"
  },
  {
    icon: Zap,
    title: "Mode Hors-ligne",
    description: "Accède à tes contenus favoris même sans connexion grâce à notre technologie PWA avancée.",
    color: "text-otaku-gold"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une plateforme{" "}
            <span className="otaku-text-gradient">complète</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            OTAKREW réunit tout ce dont tu as besoin pour vivre pleinement ta passion otaku 
            au sein de la communauté camerounaise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="otaku-card group hover:scale-105 transform transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-otaku-gray-light rounded-xl group-hover:bg-gradient-otaku transition-all duration-300">
                  <feature.icon className={`w-6 h-6 ${feature.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-otaku-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="otaku-button text-lg px-8 py-4">
            Explorer toutes les fonctionnalités
          </button>
        </div>
      </div>
    </section>
  )
}
