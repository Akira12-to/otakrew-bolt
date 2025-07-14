import React, { createContext, useContext, ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { forumApi } from '@/api/forumApi'
import { Category, User } from '@/types/forum'
import { useAuth } from '@/hooks/useAuth'

interface ForumContextType {
  categories: Category[]
  isLoadingCategories: boolean
  user: User | null
  isAuthenticated: boolean
}

const ForumContext = createContext<ForumContextType | undefined>(undefined)

export const useForumContext = () => {
  const context = useContext(ForumContext)
  if (!context) {
    throw new Error('useForumContext must be used within a ForumProvider')
  }
  return context
}

interface ForumProviderProps {
  children: ReactNode
}

export const ForumProvider: React.FC<ForumProviderProps> = ({ children }) => {
  const { user, isAuthenticated } = useAuth()
  
  const { data: categories = [], isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: forumApi.getCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  const value: ForumContextType = {
    categories,
    isLoadingCategories,
    user,
    isAuthenticated
  }

  return (
    <ForumContext.Provider value={value}>
      {children}
    </ForumContext.Provider>
  )
}