import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    nav: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <nav {...props}>{children}</nav>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should display the Bearup International Ministries brand', () => {
    render(<Header />)
    // SVG emblem exposes the ministry name via aria-label
    expect(screen.getByLabelText('Bearup International Ministries emblem')).toBeInTheDocument()
    // Brand wordmark
    expect(screen.getByText('Bearup International')).toBeInTheDocument()
  })

  it('should display Home navigation link', () => {
    render(<Header />)
    // "Home" renders in both the desktop nav and the mobile drawer
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
  })

  it('should have navigation links', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should have a mobile menu button', () => {
    render(<Header />)
    // Open + close menu controls
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should have a "Plan Your Visit" call to action', () => {
    render(<Header />)
    // Appears in both the header bar and the mobile drawer
    expect(screen.getAllByText('Plan Your Visit').length).toBeGreaterThan(0)
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
