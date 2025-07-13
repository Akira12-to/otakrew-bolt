import { Layout } from "@/components/Layout"
import { useState, useEffect } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Figurine One Piece - Luffy Gear 4",
      price: 89.99,
      imageUrl: "/lovable-uploads/6959999a-9591-495f-945a-f9987c336992.png",
      description: "Une figurine de Luffy en mode Gear 4, parfaite pour votre collection.",
      category: "Figurines",
      tags: ["one piece", "luffy", "gear 4", "figurine"]
    },
    {
      id: 2,
      name: "Poster Attaque des Titans - Bataille Finale",
      price: 24.99,
      imageUrl: "/lovable-uploads/499a991f-194c-499f-894d-98899850454f.png",
      description: "Un poster épique de la bataille finale de l'Attaque des Titans.",
      category: "Posters",
      tags: ["attaque des titans", "eren", "poster", "anime"]
    },
    {
      id: 3,
      name: "T-shirt Naruto - Sharingan",
      price: 34.99,
      imageUrl: "/lovable-uploads/9215999a-9591-495f-945a-f9987c336992.png",
      description: "Un t-shirt confortable avec le motif du Sharingan de Naruto.",
      category: "Vêtements",
      tags: ["naruto", "sharingan", "t-shirt", "anime"]
    },
    {
      id: 4,
      name: "Manga Demon Slayer - Volume 1",
      price: 9.99,
      imageUrl: "/lovable-uploads/500a991f-194c-499f-894d-98899850454f.png",
      description: "Le premier volume du manga à succès Demon Slayer.",
      category: "Mangas",
      tags: ["demon slayer", "kimetsu no yaiba", "manga"]
    },
    {
      id: 5,
      name: "Cosplay Perruque - Hatsune Miku",
      price: 45.50,
      imageUrl: "/lovable-uploads/501a991f-194c-499f-894d-98899850454f.png",
      description: "Une perruque de haute qualité pour votre cosplay de Hatsune Miku.",
      category: "Cosplay",
      tags: ["hatsune miku", "vocaloid", "perruque", "cosplay"]
    },
    {
      id: 6,
      name: "Goodies Pack - L'Attaque des Titans",
      price: 59.99,
      imageUrl: "/lovable-uploads/502a991f-194c-499f-894d-98899850454f.png",
      description: "Un pack de goodies exclusifs de L'Attaque des Titans.",
      category: "Goodies",
      tags: ["attaque des titans", "goodies", "anime"]
    }
  ]);

  useEffect(() => {
    document.title = "Boutique Otakrew - Trouvez les meilleurs produits dérivés de vos animés préférés";
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">La Boutique Otakrew</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="otaku-card-animated">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">{product.name}</h2>
              <p className="text-gray-400 mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-otaku-orange font-bold">${product.price}</span>
                <button className="otaku-button">Ajouter au panier</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Shop
