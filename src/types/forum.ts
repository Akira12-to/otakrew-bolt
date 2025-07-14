import { z } from 'zod'

// Zod schemas for type safety
export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  threadCount: z.number(),
  postCount: z.number(),
  lastActivity: z.string(),
  color: z.string().optional(),
})

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  avatar: z.string().optional(),
  role: z.enum(['user', 'moderator', 'admin']),
  joinDate: z.string(),
  postCount: z.number(),
})

export const PostSchema = z.object({
  id: z.string(),
  content: z.string(),
  author: UserSchema,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  isEdited: z.boolean().default(false),
  likes: z.number().default(0),
  threadId: z.string(),
})

export const ThreadSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  author: UserSchema,
  category: z.string(),
  tags: z.array(z.string()).default([]),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  isPinned: z.boolean().default(false),
  isLocked: z.boolean().default(false),
  viewCount: z.number().default(0),
  replyCount: z.number().default(0),
  lastReply: PostSchema.optional(),
  posts: z.array(PostSchema).default([]),
})

// Form schemas
export const NewThreadSchema = z.object({
  title: z.string().min(10, 'Le titre doit contenir au moins 10 caractères'),
  content: z.string().min(30, 'Le contenu doit contenir au moins 30 caractères'),
  tags: z.array(z.string()).max(5, 'Maximum 5 tags autorisés'),
})

export const ReplySchema = z.object({
  content: z.string().min(10, 'La réponse doit contenir au moins 10 caractères'),
})

// TypeScript types
export type Category = z.infer<typeof CategorySchema>
export type User = z.infer<typeof UserSchema>
export type Post = z.infer<typeof PostSchema>
export type Thread = z.infer<typeof ThreadSchema>
export type NewThreadData = z.infer<typeof NewThreadSchema>
export type ReplyData = z.infer<typeof ReplySchema>