import { Layout } from "@/components/Layout"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FanArt = () => {
  const [fanArts, setFanArts] = useState([
    {
      id: 1,
      title: "Nezuko Pixel Art",
      artist: "OtakuArtist237",
      imageUrl: "/lovable-uploads/4999591f-965d-444d-8497-449a39f1942b.png",
      likes: 123,
      comments: 34,
    },
    {
      id: 2,
      title: "Luffy Gear 5 Digital Painting",
      artist: "OnePieceFanCmr",
      imageUrl: "/lovable-uploads/a999994b-4999-49a4-a999-9a94a4a9a9a4.png",
      likes: 234,
      comments: 56,
    },
    {
      id: 3,
      title: "Sasuke Rinnegan Illustration",
      artist: "NarutoFanCmr",
      imageUrl: "/lovable-uploads/b999994b-4999-49a4-a999-9a94a4a9a9a4.png",
      likes: 345,
      comments: 78,
    },
    {
      id: 4,
      title: "Eren Yeager - Attack on Titan",
      artist: "ShingekiNoCmr",
      imageUrl: "/lovable-uploads/c999994b-4999-49a4-a999-9a94a4a9a9a4.png",
      likes: 456,
      comments: 90,
    },
    {
      id: 5,
      title: "Gojo Satoru - Jujutsu Kaisen",
      artist: "JujutsuCmr",
      imageUrl: "/lovable-uploads/d999994b-4999-49a4-a999-9a94a4a9a9a4.png",
      likes: 567,
      comments: 12,
    },
    {
      id: 6,
      title: "Tanjiro Kamado - Demon Slayer",
      artist: "KimetsuNoCmr",
      imageUrl: "/lovable-uploads/e999994b-4999-49a4-a999-9a94a4a9a9a4.png",
      likes: 678,
      comments: 34,
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-otaku-dark">
        {/* Hero Section */}
        <div
          className="relative h-64 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/6999994b-4999-49a4-a999-9a94a4a9a9a4.png')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 otaku-text-gradient">
                Galerie Fan Art
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                L'art de la communauté otaku camerounaise
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="otaku-card">
                  <div className="loading-skeleton h-48 w-full mb-4"></div>
                  <div className="loading-skeleton h-6 w-3/4 mb-2"></div>
                  <div className="loading-skeleton h-4 w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {fanArts.map((art) => (
                <motion.div
                  key={art.id}
                  className="otaku-card image-hover-effect"
                  variants={itemVariants}
                >
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {art.title}
                  </h3>
                  <p className="text-gray-400">Par {art.artist}</p>
                  <div className="flex items-center justify-between mt-4 text-gray-500">
                    <span>❤️ {art.likes}</span>
                    <span>💬 {art.comments}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="otaku-card-hero max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Partagez votre art !
              </h3>
              <p className="text-gray-300 mb-6">
                Montrez votre talent à la communauté otaku camerounaise.
              </p>
              <button className="otaku-button">
                Télécharger votre Fan Art
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FanArt
