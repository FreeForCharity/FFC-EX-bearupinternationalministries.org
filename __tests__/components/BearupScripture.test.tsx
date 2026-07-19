import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import BearupScripture from '../../src/components/home-page/BearupScripture'
import { scriptures, getWeeklyScripture } from '../../src/lib/scriptures'

expect.extend(toHaveNoViolations)

describe('BearupScripture component', () => {
  it('renders the eyebrow label', () => {
    render(<BearupScripture />)
    expect(screen.getByText('Weekly Scripture & Inspiration')).toBeInTheDocument()
  })

  it('renders this week’s scripture text and reference after mount', async () => {
    const expected = getWeeklyScripture()
    render(<BearupScripture />)

    await waitFor(() => {
      expect(screen.getByText(expected.text)).toBeInTheDocument()
    })
    expect(screen.getByText(`— ${expected.reference}`)).toBeInTheDocument()
  })

  it('always renders a scripture from the curated list', async () => {
    render(<BearupScripture />)

    await waitFor(() => {
      const matches = scriptures.some((s) => screen.queryByText(s.text) !== null)
      expect(matches).toBe(true)
    })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<BearupScripture />)
    await waitFor(() => screen.getByText(/—/))
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
