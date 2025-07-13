
import { ReactNode } from "react"
import { GlobalNavbar } from "./GlobalNavbar"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-otaku-dark">
      <GlobalNavbar />
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-otaku-darker border-t border-otaku-gray py-8 section-padding mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/lovable-uploads/54e3c6d2-ead5-4fcf-85ea-84e0a01e7eaf.png" 
              alt="OTAKREW" 
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 mb-4">
            La communauté otaku du Cameroun - Connecter, Partager, Découvrir
          </p>
          <p className="text-sm text-gray-500">
            © 2024 OTAKREW. Tous droits réservés. Fait avec ❤️ au Cameroun.
          </p>
        </div>
      </footer>
    </div>
  )
}
