import React, { useState } from 'react'
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { ArrowLeft, Save, X, Plus, Eye, Edit } from 'lucide-react'
import { forumApi } from '@/api/forumApi'
import { useForumContext } from '@/contexts/ForumContext'
import { NewThreadSchema, NewThreadData } from '@/types/forum'

export const EditThreadForm: React.FC = () => {
  const { categoryId, threadId } = useParams<{ categoryId: string; threadId: string }>()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { categories, user } = useForumContext()
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [tagInput, setTagInput] = useState('')

  const category = categories.find(cat => cat.id === categoryId)

  const { data: thread, isLoading } = useQuery({
    queryKey: ['thread', threadId],
    queryFn: () => forumApi.getThread(threadId!),
    enabled: !!threadId,
  })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid }
  } = useForm<NewThreadData>({
    resolver: zodResolver(NewThreadSchema),
    defaultValues: {
      title: thread?.title || '',
      content: thread?.content || '',
      tags: thread?.tags || []
    },
    mode: 'onChange'
  })

  const watchedValues = watch()

  const updateThreadMutation = useMutation({
    mutationFn: (data: NewThreadData) => forumApi.updateThread(threadId!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['thread', threadId] })
      queryClient.invalidateQueries({ queryKey: ['threads', categoryId] })
      navigate(`/forum/${categoryId}/${threadId}`)
    }
  })

  // Check permissions
  if (!user || !thread) {
    return <Navigate to="/forum" replace />
  }

  const canEdit = user.id === thread.author.id || user.role === 'moderator' || user.role === 'admin'
  if (!canEdit) {
    return <Navigate to={`/forum/${categoryId}/${threadId}`} replace />
  }

  if (!categoryId || !threadId || !category) {
    return <Navigate to="/forum" replace />
  }

  const handleFormSubmit = (data: NewThreadData) => {
    updateThreadMutation.mutate(data)
  }

  const addTag = () => {
    if (tagInput.trim() && watchedValues.tags.length < 5 && !watchedValues.tags.includes(tagInput.trim())) {
      setValue('tags', [...watchedValues.tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setValue('tags', watchedValues.tags.filter(tag => tag !== tagToRemove))
  }

  const handleTagInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-otaku-dark">
        <div className="container-otaku py-8">
          <div className="max-w-4xl mx-auto">
            <div className="otaku-card p-6 animate-pulse">
              <div className="h-8 bg-otaku-gray-light rounded mb-4" />
              <div className="h-4 bg-otaku-gray-light rounded mb-2" />
              <div className="h-64 bg-otaku-gray-light rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-otaku-dark">
      {/* Header */}
      <div className="bg-otaku-gray border-b border-otaku-gray-light">
        <div className="container-otaku py-6">
          <div className="flex items-center gap-4">
            <Link 
              to={`/forum/${categoryId}/${threadId}`}
              className="p-2 text-gray-400 hover:text-white hover:bg-otaku-gray-light rounded-lg transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color || 'bg-gradient-otaku'} flex items-center justify-center text-lg`}>
                {category.icon}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Modifier le sujet</h1>
                <p className="text-gray-400">{category.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container-otaku py-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            {/* Title */}
            <div className="otaku-card p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Titre du sujet *
              </label>
              <input
                {...register('title')}
                type="text"
                placeholder="Donnez un titre accrocheur à votre sujet..."
                className={`otaku-input w-full ${errors.title ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
              />
              {errors.title && (
                <p className="text-red-400 text-sm mt-2">{errors.title.message}</p>
              )}
              <div className="text-sm text-gray-400 mt-2">
                <span className={watchedValues.title.length >= 10 ? 'text-green-400' : 'text-gray-400'}>
                  {watchedValues.title.length}
                </span>
                <span className="text-gray-500"> / 10 caractères minimum</span>
              </div>
            </div>

            {/* Tags */}
            <div className="otaku-card p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags (optionnel)
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {watchedValues.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-otaku-orange/20 text-otaku-orange rounded-full text-sm"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-white transition-colors duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={handleTagInputKeyPress}
                  placeholder="Ajouter un tag..."
                  className="otaku-input flex-1"
                  disabled={watchedValues.tags.length >= 5}
                />
                <button
                  type="button"
                  onClick={addTag}
                  disabled={!tagInput.trim() || watchedValues.tags.length >= 5}
                  className="px-4 py-2 bg-otaku-gray-light text-gray-300 rounded-lg hover:bg-otaku-orange hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Maximum 5 tags. Utilisez des mots-clés pertinents pour aider les autres à trouver votre sujet.
              </p>
            </div>

            {/* Content */}
            <div className="otaku-card p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Contenu *
                </label>
                <button
                  type="button"
                  onClick={() => setIsPreviewMode(!isPreviewMode)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition-all duration-200 ${
                    isPreviewMode
                      ? 'bg-otaku-orange text-white'
                      : 'text-gray-400 hover:text-white hover:bg-otaku-gray-light'
                  }`}
                >
                  {isPreviewMode ? <Edit className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {isPreviewMode ? 'Éditer' : 'Aperçu'}
                </button>
              </div>

              {isPreviewMode ? (
                <div className="min-h-[300px] p-4 bg-otaku-gray-light rounded-lg border border-otaku-gray">
                  <div className="prose prose-invert max-w-none">
                    {watchedValues.content ? (
                      <div className="text-gray-300 whitespace-pre-wrap">
                        {watchedValues.content}
                      </div>
                    ) : (
                      <div className="text-gray-500 italic">
                        Rien à prévisualiser...
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <textarea
                  {...register('content')}
                  placeholder="Décrivez votre sujet en détail..."
                  rows={12}
                  className={`otaku-textarea w-full resize-none ${errors.content ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
              )}

              {errors.content && (
                <p className="text-red-400 text-sm mt-2">{errors.content.message}</p>
              )}
              <div className="text-sm text-gray-400 mt-2">
                <span className={watchedValues.content.length >= 30 ? 'text-green-400' : 'text-gray-400'}>
                  {watchedValues.content.length}
                </span>
                <span className="text-gray-500"> / 30 caractères minimum</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <Link
                to={`/forum/${categoryId}/${threadId}`}
                className="px-6 py-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                Annuler
              </Link>

              <motion.button
                type="submit"
                disabled={!isValid || updateThreadMutation.isPending}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isValid && !updateThreadMutation.isPending
                    ? 'otaku-button hover:shadow-otaku-halo-sm'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={isValid && !updateThreadMutation.isPending ? { scale: 1.05 } : {}}
                whileTap={isValid && !updateThreadMutation.isPending ? { scale: 0.95 } : {}}
              >
                {updateThreadMutation.isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sauvegarde...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Sauvegarder
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}