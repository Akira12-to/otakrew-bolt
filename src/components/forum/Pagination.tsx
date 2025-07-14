import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  showFirstLast?: boolean
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showFirstLast = true
}) => {
  if (totalPages <= 1) return null

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const visiblePages = getVisiblePages()

  const PaginationButton: React.FC<{
    page: number | string
    isActive?: boolean
    disabled?: boolean
    onClick?: () => void
    children: React.ReactNode
  }> = ({ page, isActive, disabled, onClick, children }) => (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex items-center justify-center w-10 h-10 rounded-lg font-medium transition-all duration-200',
        isActive
          ? 'bg-otaku-orange text-white shadow-otaku-halo-sm'
          : disabled
          ? 'text-gray-600 cursor-not-allowed'
          : 'text-gray-400 hover:text-white hover:bg-otaku-gray-light'
      )}
      whileHover={!disabled && !isActive ? { scale: 1.05 } : {}}
      whileTap={!disabled && !isActive ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  )

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      {/* Previous button */}
      <PaginationButton
        page="prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="w-5 h-5" />
      </PaginationButton>

      {/* Page numbers */}
      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <div key={`dots-${index}`} className="flex items-center justify-center w-10 h-10">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          )
        }

        const pageNumber = page as number
        return (
          <PaginationButton
            key={pageNumber}
            page={pageNumber}
            isActive={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        )
      })}

      {/* Next button */}
      <PaginationButton
        page="next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="w-5 h-5" />
      </PaginationButton>
    </div>
  )
}