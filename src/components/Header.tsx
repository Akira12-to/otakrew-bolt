
import { useState } from "react"
import { Search, Bell, User, Menu } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { OtakrewLogo, OnlineStatus, KarmaDisplay, UserLevel } from "@/components/ui/brand-elements"

export function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-otaku-darker/95 backdrop-blur-lg border-b border-otaku-gray-light">
      <div className="flex items-center justify-between h-16 section-padding">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-gray-400 hover:text-white interactive-hover p-2 rounded-lg" />
          
          {/* Logo on mobile */}
          <div className="sm:hidden">
            <OtakrewLogo size="sm" />
          </div>
          
          {/* Search bar */}
          <div className={cn(
            'relative transition-all duration-300',
            isSearchFocused ? 'w-80 max-w-[280px] sm:max-w-none' : 'w-64 max-w-[200px] sm:max-w-none'
          )}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher anime, manga, utilisateurs..."
              className="otaku-input w-full pl-10 pr-4 py-2"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white hover:bg-otaku-gray rounded-lg interactive-hover">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-otaku-orange rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            </span>
          </button>

          {/* User section */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block text-right space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-body-sm font-medium text-white">Otaku_Cmr</p>
                <UserLevel level={15} />
              </div>
              <div className="flex items-center gap-3">
                <KarmaDisplay points={1247} />
                <OnlineStatus isOnline={true} />
              </div>
            </div>
            
            <button className="flex items-center justify-center w-10 h-10 bg-gradient-otaku rounded-full interactive-hover otaku-glow">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
