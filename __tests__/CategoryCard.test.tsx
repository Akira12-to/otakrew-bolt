import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CategoryCard } from '@/components/forum/CategoryCard'
import { Category } from '@/types/forum'

const mockCategory: Category = {
  id: 'test-category',
  name: 'Test Category',
  description: 'A test category for unit testing',
  icon: '🧪',
  threadCount: 42,
  postCount: 123,
  lastActivity: '2024-01-08T10:30:00Z',
  color: 'from-blue-500 to-purple-500'
}

const CategoryCardWrapper = ({ category }: { category: Category }) => (
  <BrowserRouter>
    <CategoryCard category={category} />
  </BrowserRouter>
)

describe('CategoryCard', () => {
  it('renders category information correctly', () => {
    render(<CategoryCardWrapper category={mockCategory} />)
    
    expect(screen.getByText('Test Category')).toBeInTheDocument()
    expect(screen.getByText('A test category for unit testing')).toBeInTheDocument()
    expect(screen.getByText('🧪')).toBeInTheDocument()
    expect(screen.getByText('42 sujets')).toBeInTheDocument()
    expect(screen.getByText('123 posts')).toBeInTheDocument()
  })

  it('creates correct link to category', () => {
    render(<CategoryCardWrapper category={mockCategory} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/forum/test-category')
  })

  it('formats last activity time correctly', () => {
    render(<CategoryCardWrapper category={mockCategory} />)
    
    // Should show relative time
    expect(screen.getByText(/Il y a/)).toBeInTheDocument()
  })
})