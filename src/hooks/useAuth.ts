import { useState, useEffect } from 'react'
import { User } from '@/types/forum'

// Mock auth hook - replace with real authentication later
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setUser({
        id: 'user-1',
        username: 'OtakuCmr_237',
        avatar: '/lovable-uploads/54e3c6d2-ead5-4fcf-85ea-84e0a01e7eaf.png',
        role: 'user',
        joinDate: '2023-03-15T00:00:00Z',
        postCount: 156
      })
      setIsLoading(false)
    }, 1000)
  }, [])

  const login = async (username: string, password: string) => {
    // Mock login
    setIsLoading(true)
    setTimeout(() => {
      setUser({
        id: 'user-1',
        username,
        avatar: '/lovable-uploads/54e3c6d2-ead5-4fcf-85ea-84e0a01e7eaf.png',
        role: 'user',
        joinDate: '2023-03-15T00:00:00Z',
        postCount: 156
      })
      setIsLoading(false)
    }, 1000)
  }

  const logout = () => {
    setUser(null)
  }

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout
  }
}