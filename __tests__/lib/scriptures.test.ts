import { getWeeklyScripture, scriptures } from '../../src/lib/scriptures'

describe('scriptures data', () => {
  it('contains only non-empty text and reference entries', () => {
    expect(scriptures.length).toBeGreaterThan(0)
    scriptures.forEach((s) => {
      expect(s.text.trim().length).toBeGreaterThan(0)
      expect(s.reference.trim().length).toBeGreaterThan(0)
    })
  })
})

describe('getWeeklyScripture', () => {
  it('returns a scripture from the curated list', () => {
    const result = getWeeklyScripture(new Date('2026-07-19T00:00:00Z'))
    expect(scriptures).toContainEqual(result)
  })

  it('returns the same scripture for any day within the same ISO week', () => {
    const monday = getWeeklyScripture(new Date('2026-07-13T00:00:00Z'))
    const sunday = getWeeklyScripture(new Date('2026-07-19T23:59:59Z'))
    expect(monday).toEqual(sunday)
  })

  it('rotates to a different scripture the following week', () => {
    const weekOne = getWeeklyScripture(new Date('2026-07-13T00:00:00Z'))
    const weekTwo = getWeeklyScripture(new Date('2026-07-20T00:00:00Z'))
    expect(weekOne).not.toEqual(weekTwo)
  })

  it('is deterministic for a given date', () => {
    const a = getWeeklyScripture(new Date('2025-01-06T12:00:00Z'))
    const b = getWeeklyScripture(new Date('2025-01-06T12:00:00Z'))
    expect(a).toEqual(b)
  })
})
