import { Category, Thread, Post, NewThreadData, ReplyData, User } from '@/types/forum'

// Mock data
const mockCategories: Category[] = [
  {
    id: 'anime-manga',
    name: 'Anime & Manga',
    description: 'Discussions sur vos séries préférées',
    icon: '📺',
    threadCount: 1247,
    postCount: 15623,
    lastActivity: '2024-01-08T10:30:00Z',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'culture-cameroun',
    name: 'Culture Camerounaise',
    description: 'L\'otaku culture au Cameroun',
    icon: '🇨🇲',
    threadCount: 342,
    postCount: 2890,
    lastActivity: '2024-01-08T09:15:00Z',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'cosplay-events',
    name: 'Cosplay & Events',
    description: 'Événements et costumes',
    icon: '🎭',
    threadCount: 156,
    postCount: 982,
    lastActivity: '2024-01-08T08:45:00Z',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Jeux vidéo japonais et plus',
    icon: '🎮',
    threadCount: 489,
    postCount: 3421,
    lastActivity: '2024-01-08T11:00:00Z',
    color: 'from-yellow-500 to-orange-500'
  }
]

const mockUser: User = {
  id: 'user-1',
  username: 'OtakuCmr_237',
  avatar: '/lovable-uploads/54e3c6d2-ead5-4fcf-85ea-84e0a01e7eaf.png',
  role: 'user',
  joinDate: '2023-03-15T00:00:00Z',
  postCount: 156
}

const mockThreads: Thread[] = [
  {
    id: 'thread-1',
    title: 'One Piece 1100 - Théories sur le prochain arc',
    content: 'Que pensez-vous du dernier chapitre ? Partagez vos théories !',
    author: mockUser,
    category: 'anime-manga',
    tags: ['one-piece', 'theories', 'manga'],
    createdAt: '2024-01-08T10:00:00Z',
    isPinned: true,
    viewCount: 892,
    replyCount: 45,
    posts: []
  },
  {
    id: 'thread-2',
    title: 'Convention Otaku Yaoundé 2024 - Qui participe ?',
    content: 'Salut la communauté ! Qui sera présent à la convention cette année ?',
    author: mockUser,
    category: 'culture-cameroun',
    tags: ['convention', 'yaoundé', 'événement'],
    createdAt: '2024-01-08T09:30:00Z',
    viewCount: 456,
    replyCount: 23,
    posts: []
  }
]

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const forumApi = {
  // Categories
  async getCategories(): Promise<Category[]> {
    await delay(500)
    return mockCategories
  },

  async getCategory(id: string): Promise<Category | null> {
    await delay(300)
    return mockCategories.find(cat => cat.id === id) || null
  },

  // Threads
  async getThreads(categoryId: string, page = 1, limit = 20): Promise<{ threads: Thread[], total: number }> {
    await delay(800)
    const categoryThreads = mockThreads.filter(thread => thread.category === categoryId)
    const start = (page - 1) * limit
    const end = start + limit
    
    return {
      threads: categoryThreads.slice(start, end),
      total: categoryThreads.length
    }
  },

  async getThread(threadId: string): Promise<Thread | null> {
    await delay(600)
    const thread = mockThreads.find(t => t.id === threadId)
    if (!thread) return null

    // Mock posts for the thread
    const mockPosts: Post[] = [
      {
        id: 'post-1',
        content: 'Excellent sujet ! Je pense que le prochain arc va être épique.',
        author: mockUser,
        createdAt: '2024-01-08T10:15:00Z',
        updatedAt: '2024-01-08T10:15:00Z',
        isEdited: false,
        likes: 12,
        threadId: threadId
      },
      {
        id: 'post-2',
        content: 'Je suis d\'accord ! Oda nous prépare quelque chose de grandiose.',
        author: { ...mockUser, id: 'user-2', username: 'MangaFan237' },
        createdAt: '2024-01-08T10:30:00Z',
        updatedAt: '2024-01-08T10:30:00Z',
        isEdited: false,
        likes: 8,
        threadId: threadId
      }
    ]

    return {
      ...thread,
      posts: mockPosts,
      lastReply: mockPosts[mockPosts.length - 1]
    }
  },

  async createThread(categoryId: string, data: NewThreadData): Promise<Thread> {
    await delay(1000)
    const newThread: Thread = {
      id: `thread-${Date.now()}`,
      title: data.title,
      content: data.content,
      author: mockUser,
      category: categoryId,
      tags: data.tags,
      createdAt: new Date().toISOString(),
      isPinned: false,
      isLocked: false,
      viewCount: 0,
      replyCount: 0,
      posts: []
    }
    
    mockThreads.unshift(newThread)
    return newThread
  },

  async createReply(threadId: string, data: ReplyData): Promise<Post> {
    await delay(800)
    const newPost: Post = {
      id: `post-${Date.now()}`,
      content: data.content,
      author: mockUser,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isEdited: false,
      likes: 0,
      threadId: threadId
    }

    return newPost
  },

  async updateThread(threadId: string, data: Partial<NewThreadData>): Promise<Thread | null> {
    await delay(800)
    const threadIndex = mockThreads.findIndex(t => t.id === threadId)
    if (threadIndex === -1) return null

    mockThreads[threadIndex] = {
      ...mockThreads[threadIndex],
      ...data,
      updatedAt: new Date().toISOString()
    }

    return mockThreads[threadIndex]
  },

  async deleteThread(threadId: string): Promise<boolean> {
    await delay(500)
    const threadIndex = mockThreads.findIndex(t => t.id === threadId)
    if (threadIndex === -1) return false

    mockThreads.splice(threadIndex, 1)
    return true
  },

  // User profile
  async getUserProfile(username: string): Promise<User | null> {
    await delay(400)
    if (username === mockUser.username) {
      return mockUser
    }
    return null
  },

  async getUserThreads(username: string): Promise<Thread[]> {
    await delay(600)
    return mockThreads.filter(thread => thread.author.username === username)
  }
}