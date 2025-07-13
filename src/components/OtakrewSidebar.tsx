
import { useState } from "react"
import { 
  Home, 
  MessageCircle, 
  Newspaper, 
  ShoppingBag, 
  Palette, 
  Users, 
  Trophy, 
  BookOpen,
  Gamepad2,
  Camera,
  Heart,
  Settings
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "Forum", url: "/forum", icon: MessageCircle },
  { title: "Actualités", url: "/news", icon: Newspaper },
  { title: "Boutique", url: "/shop", icon: ShoppingBag },
]

const communityItems = [
  { title: "Fanart", url: "/fanart", icon: Palette },
  { title: "Cosplay", url: "/cosplay", icon: Camera },
  { title: "BD Africaines", url: "/african-comics", icon: BookOpen },
  { title: "Communauté", url: "/community", icon: Users },
]

const entertainmentItems = [
  { title: "Quiz Otaku", url: "/quiz", icon: Trophy },
  { title: "Jeux", url: "/games", icon: Gamepad2 },
  { title: "Favoris", url: "/favorites", icon: Heart },
]

export function OtakrewSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
      isActive 
        ? "bg-gradient-otaku text-white shadow-lg shadow-otaku-orange/30" 
        : "text-gray-300 hover:text-white hover:bg-otaku-gray-light"
    }`

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} bg-otaku-darker border-r border-otaku-gray transition-all duration-300`}
      collapsible="icon"
    >
      <div className="p-4 border-b border-otaku-gray">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-otaku rounded-lg flex items-center justify-center font-bold text-white">
              O
            </div>
            <span className="text-xl font-bold otaku-text-gradient">OTAKREW</span>
          </div>
        ) : (
          <div className="w-8 h-8 bg-gradient-otaku rounded-lg flex items-center justify-center font-bold text-white mx-auto">
            O
          </div>
        )}
      </div>

      <SidebarContent className="p-4 space-y-6">
        <SidebarGroup>
          <SidebarGroupLabel className={`text-otaku-orange font-semibold mb-3 ${collapsed ? 'text-center' : ''}`}>
            {collapsed ? "•" : "Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls({ isActive: isActive(item.url) })}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={`text-otaku-orange font-semibold mb-3 ${collapsed ? 'text-center' : ''}`}>
            {collapsed ? "•" : "Communauté"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {communityItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavCls({ isActive: isActive(item.url) })}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={`text-otaku-orange font-semibold mb-3 ${collapsed ? 'text-center' : ''}`}>
            {collapsed ? "•" : "Divertissement"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {entertainmentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavCls({ isActive: isActive(item.url) })}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t border-otaku-gray mt-auto">
        <NavLink 
          to="/settings" 
          className={getNavCls({ isActive: isActive("/settings") })}
          title={collapsed ? "Paramètres" : undefined}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium">Paramètres</span>}
        </NavLink>
      </div>
    </Sidebar>
  )
}
