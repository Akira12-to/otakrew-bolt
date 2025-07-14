import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Eye, Edit } from 'lucide-react'
import { ReplySchema, ReplyData } from '@/types/forum'
import { cn } from '@/lib/utils'

interface ReplyEditorProps {
  onSubmit: (data: ReplyData) => Promise<void>
  isSubmitting?: boolean
  placeholder?: string
  className?: string
  isMobile?: boolean
}

export const ReplyEditor: React.FC<ReplyEditorProps> = ({
  onSubmit,
  isSubmitting = false,
  placeholder = "Écrivez votre réponse...",
  className,
  isMobile = false
}) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid }
  } = useForm<ReplyData>({
    resolver: zodResolver(ReplySchema),
    mode: 'onChange'
  })

  const content = watch('content', '')

  const handleFormSubmit = async (data: ReplyData) => {
    try {
      await onSubmit(data)
      reset()
      setIsExpanded(false)
      setIsPreviewMode(false)
    } catch (error) {
      console.error('Error submitting reply:', error)
    }
  }

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode)
  }

  return (
    <motion.div
      className={cn('otaku-card p-4', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* Editor Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Répondre au sujet</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePreview}
              className={cn(
                'flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition-all duration-200',
                isPreviewMode
                  ? 'bg-otaku-orange text-white'
                  : 'text-gray-400 hover:text-white hover:bg-otaku-gray-light'
              )}
            >
              {isPreviewMode ? <Edit className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {isPreviewMode ? 'Éditer' : 'Aperçu'}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {isPreviewMode ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="min-h-[120px] p-4 bg-otaku-gray-light rounded-lg border border-otaku-gray"
              >
                <div className="prose prose-invert max-w-none">
                  {content ? (
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {content}
                    </div>
                  ) : (
                    <div className="text-gray-500 italic">
                      Rien à prévisualiser...
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="editor"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <textarea
                  {...register('content')}
                  placeholder={placeholder}
                  className={cn(
                    'otaku-textarea w-full resize-none transition-all duration-300',
                    isExpanded ? 'min-h-[200px]' : 'min-h-[120px]',
                    errors.content && 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  )}
                  onFocus={() => setIsExpanded(true)}
                  onBlur={(e) => {
                    if (!e.target.value.trim()) {
                      setIsExpanded(false)
                    }
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error message */}
          {errors.content && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2"
            >
              {errors.content.message}
            </motion.p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            <span className={cn(
              'transition-colors duration-200',
              content.length >= 10 ? 'text-green-400' : 'text-gray-400'
            )}>
              {content.length}
            </span>
            <span className="text-gray-500"> / 10 caractères minimum</span>
          </div>

          <div className="flex items-center gap-3">
            {(isExpanded || content.trim()) && (
              <motion.button
                type="button"
                onClick={() => {
                  reset()
                  setIsExpanded(false)
                  setIsPreviewMode(false)
                }}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Annuler
              </motion.button>
            )}

            <motion.button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={cn(
                'flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all duration-300',
                isValid && !isSubmitting
                  ? 'otaku-button hover:shadow-otaku-halo-sm'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              )}
              whileHover={isValid && !isSubmitting ? { scale: 1.05 } : {}}
              whileTap={isValid && !isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Envoyer
                </>
              )}
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}