'use client'

import React, { useState, FormEvent } from 'react'

const eventTypes = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
      </svg>
    ),
    label: 'Weddings & vow renewals',
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v6M9 5h6M5 22V12a7 7 0 0 1 14 0v10" />
      </svg>
    ),
    label: 'Baptisms & baby dedications',
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-5h4v5" />
      </svg>
    ),
    label: 'Memorial & celebration-of-life services',
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2 20a7 7 0 0 1 14 0M15 20a6 6 0 0 1 7-5.7" />
      </svg>
    ),
    label: 'Conferences, retreats & community events',
  },
]

const BearupSchedule: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    const g = (id: string) => {
      const el = form.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        `#${id}`
      )
      return el ? el.value.trim() : ''
    }
    const type = g('ev-type')
    const name = g('ev-name')
    const phone = g('ev-phone')
    const email = g('ev-email')
    const date = g('ev-date')
    const guests = g('ev-guests')
    const details = g('ev-details')

    const subject = `Event Request: ${type || 'Event'}${name ? ` — ${name}` : ''}`
    const body = [
      `Event type: ${type || '—'}`,
      `Name: ${name || '—'}`,
      `Email: ${email || '—'}`,
      `Phone: ${phone || '—'}`,
      `Preferred date: ${date || '—'}`,
      `Estimated guests: ${guests || '—'}`,
      '',
      'Details:',
      details || '—',
    ].join('\n')

    window.location.href =
      `mailto:Info@bearupinternationalministries.org` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'var(--church-font-sans)',
    fontSize: '16px',
    color: 'var(--church-ink)',
    padding: '13px 15px',
    border: '1.5px solid var(--church-line)',
    borderRadius: '11px',
    background: 'var(--church-cream)',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color .18s ease, background .18s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 900,
    letterSpacing: '.04em',
    textTransform: 'uppercase',
    color: 'var(--church-primary)',
    marginBottom: '8px',
  }

  return (
    <section id="schedule" style={{ padding: '96px 0', background: 'var(--church-cream)' }}>
      <div
        className="church-wide schedule-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: '44px',
          alignItems: 'stretch',
        }}
      >
        {/* Info panel */}
        <div
          style={{
            background: 'var(--church-primary)',
            color: '#fff',
            borderRadius: '20px',
            padding: '44px 40px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Decorative circle */}
          <div
            style={{
              position: 'absolute',
              right: '-40px',
              bottom: '-40px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'rgba(245,134,41,.18)',
            }}
          />

          <span className="church-eyebrow" style={{ color: '#e2a23b' }}>
            Weddings &amp; Events
          </span>
          <h2
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: 'clamp(30px, 3.6vw, 40px)',
              fontWeight: 500,
              color: '#fff',
              marginBottom: '18px',
              lineHeight: 1.1,
            }}
          >
            Host your special occasion with us
          </h2>
          <p
            style={{ color: 'rgba(255,255,255,.88)', fontSize: '17px', lineHeight: 1.6, margin: 0 }}
          >
            From weddings to dedications to community gatherings, we&apos;d be honored to help you
            mark life&apos;s sacred moments. Tell us about your event and our team will follow up to
            walk through dates, details, and next steps.
          </p>

          <ul
            style={{
              listStyle: 'none',
              margin: '28px 0 0',
              padding: 0,
              display: 'grid',
              gap: '12px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {eventTypes.map((et) => (
              <li
                key={et.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '15.5px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,.92)',
                }}
              >
                <span
                  style={{
                    flex: 'none',
                    width: '30px',
                    height: '30px',
                    borderRadius: '9px',
                    background: 'rgba(255,255,255,.14)',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#e2a23b',
                  }}
                >
                  {et.icon}
                </span>
                {et.label}
              </li>
            ))}
          </ul>

          <p
            style={{
              marginTop: 'auto',
              paddingTop: '28px',
              fontSize: '14px',
              color: 'rgba(255,255,255,.72)',
              lineHeight: 1.55,
            }}
          >
            Prefer to talk it through? Email us at{' '}
            <a
              href="mailto:Info@bearupinternationalministries.org"
              style={{ color: '#e2a23b', fontWeight: 700, textDecoration: 'none' }}
            >
              Info@bearupinternationalministries.org
            </a>{' '}
            or call{' '}
            <a
              href="tel:+19072628741"
              style={{ color: '#e2a23b', fontWeight: 700, textDecoration: 'none' }}
            >
              (907) 262-8741
            </a>
            .
          </p>
        </div>

        {/* Form panel */}
        <div
          style={{
            background: '#fff',
            border: '1px solid var(--church-line)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: 'var(--church-shadow-sm)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: '26px',
              fontWeight: 500,
              color: 'var(--church-ink)',
              margin: '0 0 6px',
              lineHeight: 1.1,
            }}
          >
            Request a date
          </h3>
          <p
            style={{
              fontSize: '14.5px',
              color: 'var(--church-muted)',
              marginBottom: '26px',
              margin: '0 0 26px',
            }}
          >
            Share a few details and we&apos;ll be in touch to confirm availability.
          </p>

          <form id="eventForm" onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="ev-type" style={labelStyle}>
                Type of event
              </label>
              <select id="ev-type" name="type" required defaultValue="" style={inputStyle}>
                <option value="" disabled>
                  Select an event type…
                </option>
                <option>Wedding</option>
                <option>Vow renewal</option>
                <option>Baptism / Baby dedication</option>
                <option>Memorial / Celebration of life</option>
                <option>Conference / Retreat</option>
                <option>Community event</option>
                <option>Other</option>
              </select>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '18px',
                marginBottom: '18px',
              }}
            >
              <div>
                <label htmlFor="ev-name" style={labelStyle}>
                  Your name
                </label>
                <input
                  id="ev-name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="ev-phone" style={labelStyle}>
                  Phone
                </label>
                <input
                  id="ev-phone"
                  name="phone"
                  type="tel"
                  placeholder="(907) 000-0000"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="ev-email" style={labelStyle}>
                Email
              </label>
              <input
                id="ev-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
                style={inputStyle}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '18px',
                marginBottom: '18px',
              }}
            >
              <div>
                <label htmlFor="ev-date" style={labelStyle}>
                  Preferred date
                </label>
                <input id="ev-date" name="date" type="date" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="ev-guests" style={labelStyle}>
                  Estimated guests
                </label>
                <input
                  id="ev-guests"
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="e.g. 80"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <label htmlFor="ev-details" style={labelStyle}>
                Tell us about your event
              </label>
              <textarea
                id="ev-details"
                name="details"
                placeholder="Share your vision, any timing preferences, and how we can serve you…"
                style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                height: '56px',
                borderRadius: '28px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '18px',
                fontWeight: 700,
                background: 'var(--church-accent)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                transition: 'all .22s ease',
                marginTop: '8px',
              }}
            >
              Send Request
            </button>

            {submitted && (
              <p
                style={{
                  marginTop: '16px',
                  padding: '14px 16px',
                  borderRadius: '11px',
                  background: 'rgba(42,102,130,.08)',
                  border: '1px solid rgba(42,102,130,.25)',
                  color: 'var(--church-primary-deep)',
                  fontSize: '14.5px',
                  fontWeight: 600,
                }}
              >
                Thank you! Your email app should open with the request ready to send. We&apos;ll be
                in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .schedule-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default BearupSchedule
