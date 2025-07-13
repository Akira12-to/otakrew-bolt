
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, X, User, Bell, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavItem {
  title: string
  url: string
  isActive?: boolean
}

const navItems: NavItem[] = [
  { title: "Accueil", url: "/" },
  { title: "Forum", url: "/forum" },
  { title: "Actualités", url: "/news" },
  { title: "Boutique", url: "/shop" },
  { title: "Fanart", url: "/fanart" },
  { title: "Profil", url: "/profile" },
]

export function GlobalNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActivePath = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-otaku-darker/95 backdrop-blur-lg border-b border-otaku-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/54e3c6d2-ead5-4fcf-85ea-84e0a01e7eaf.png" 
                alt="OTAKREW Logo" 
                className="h-12 w-auto max-w-[200px] object-contain filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  end
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      isActive
                        ? "text-otaku-orange"
                        : "text-gray-300 hover:text-white hover:bg-otaku-gray-light"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.title}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-otaku-orange"
                          layoutId="activeTab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 text-gray-400 hover:text-white hover:bg-otaku-gray rounded-lg transition-all duration-300"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative p-2 text-gray-400 hover:text-white hover:bg-otaku-gray rounded-lg transition-all duration-300"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-otaku-orange rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              </span>
            </button>
            <button 
              className="flex items-center justify-center w-10 h-10 bg-gradient-otaku rounded-full hover:shadow-otaku-halo-sm transition-all duration-300"
              aria-label="Profil utilisateur"
            >
              <User className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-400 hover:text-white hover:bg-otaku-gray rounded-lg transition-all duration-300"
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu principal"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-otaku-dark border-t border-otaku-gray-light"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  end
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-otaku text-white shadow-otaku-halo-sm"
                        : "text-gray-300 hover:text-white hover:bg-otaku-gray-light"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 mt-4 border-t border-otaku-gray-light">
                <div className="flex items-center justify-around">
                  <button 
                    className="p-3 text-gray-400 hover:text-white hover:bg-otaku-gray rounded-lg transition-all duration-300"
                    aria-label="Rechercher"
                  >
                    <Search className="w-6 h-6" />
                  </button>
                  <button 
                    className="relative p-3 text-gray-400 hover:text-white hover:bg-otaku-gray rounded-lg transition-all duration-300"
                    aria-label="Notifications"
                  >
                    <Bell className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-otaku-orange rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    </span>
                  </button>
                  <button 
                    className="flex items-center justify-center w-12 h-12 bg-gradient-otaku rounded-full hover:shadow-otaku-halo-sm transition-all duration-300"
                    aria-label="Profil utilisateur"
                  >
                    <User className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
