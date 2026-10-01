'use client'

import React, { useState, useEffect } from 'react'

const BearupEmblem = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Bearup International Ministries emblem"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    <circle cx="50" cy="50" r="49" fill="#2a6682" />
    <circle
      cx="50"
      cy="50"
      r="44.5"
      fill="none"
      stroke="#ffffff"
      strokeOpacity=".22"
      strokeWidth="1.5"
    />
    <g fill="none" stroke="#ffffff" strokeLinecap="round">
      <circle
        cx="50"
        cy="64"
        r="21"
        strokeOpacity=".5"
        strokeWidth="2"
        fill="#ffffff"
        fillOpacity=".06"
      />
      <ellipse cx="50" cy="64" rx="8.5" ry="21" strokeOpacity=".4" strokeWidth="1.6" />
      <path d="M30.4 57.5H69.6" strokeOpacity=".38" strokeWidth="1.6" />
      <path d="M31.6 71H68.4" strokeOpacity=".38" strokeWidth="1.6" />
    </g>
    <g fill="#e2a23b">
      <rect x="46.6" y="12" width="6.8" height="39" rx="2" />
      <rect x="38" y="24.6" width="24" height="6.8" rx="2" />
    </g>
  </svg>
)

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Visit', href: '#visit' },
  { label: 'International Ministry', href: '/international-ministry' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Board', href: '#board' },
  { label: 'Give', href: '#give' },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <>
      <header
        id="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: isScrolled ? '64px' : '88px',
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255,255,255,.96)',
          backdropFilter: 'blur(8px)',
          boxShadow: isScrolled ? '0 2px 10px rgba(27,42,49,.06)' : '0 1px 0 rgba(27,42,49,.06)',
          transition: 'height .3s ease, box-shadow .3s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Brand */}
          <a
            href="#top"
            aria-label="Bearup International Ministries home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                width: isScrolled ? '38px' : '46px',
                height: isScrolled ? '38px' : '46px',
                flex: 'none',
                display: 'block',
                transition: 'all .3s ease',
              }}
            >
              <BearupEmblem />
            </span>
            <span
              style={{
                fontFamily: 'var(--church-font-display)',
                fontWeight: 600,
                fontSize: '19px',
                lineHeight: 1.05,
                color: '#1b2a31',
              }}
            >
              Bearup International
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--church-font-sans)',
                  fontWeight: 700,
                  fontSize: '10px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: '#f58629',
                  marginTop: '3px',
                }}
              >
                Ministries
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="church-desktop-nav">
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      fontFamily: 'var(--church-font-sans)',
                      fontWeight: 700,
                      fontSize: '14.5px',
                      color: '#4a5c64',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'color .2s ease, background .2s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.target as HTMLAnchorElement).style.color = '#2a6682'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.target as HTMLAnchorElement).style.color = '#4a5c64'
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://www.zeffy.com/en-US/donation-form/support-this-ministry-3"
              target="_blank"
              rel="noopener noreferrer"
              className="church-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '46px',
                padding: '0 24px',
                borderRadius: '23px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '15px',
                fontWeight: 700,
                background: '#2a6682',
                color: '#fff',
                textDecoration: 'none',
                border: '2px solid transparent',
                transition: 'all .22s ease',
              }}
            >
              Donate
            </a>
            <a
              href="#visit"
              className="church-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '46px',
                padding: '0 24px',
                borderRadius: '23px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '15px',
                fontWeight: 700,
                background: '#f58629',
                color: '#fff',
                textDecoration: 'none',
                border: '2px solid transparent',
                transition: 'all .22s ease',
              }}
            >
              Plan Your Visit
            </a>

            <button
              className="church-hamburger"
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
              style={{
                display: 'none',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: '#1b2a31',
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer scrim */}
      {isDrawerOpen && (
        <div
          onClick={closeDrawer}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(20,30,35,.4)',
            zIndex: 55,
            transition: 'opacity .3s',
          }}
        />
      )}

      {/* Mobile drawer */}
      <aside
        aria-label="Mobile menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(340px, 84vw)',
          background: '#fff',
          zIndex: 60,
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .3s ease',
          boxShadow: '0 30px 70px rgba(27,42,49,.16)',
          padding: '28px',
          overflowY: 'auto',
        }}
      >
        <button
          aria-label="Close menu"
          onClick={closeDrawer}
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            float: 'right',
            color: '#1b2a31',
            padding: '6px',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>

        <ul
          style={{
            listStyle: 'none',
            margin: '28px 0 0',
            padding: 0,
            display: 'grid',
            gap: '6px',
          }}
          onClick={closeDrawer}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  display: 'block',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  fontFamily: 'var(--church-font-sans)',
                  fontWeight: 700,
                  color: '#1b2a31',
                  textDecoration: 'none',
                  transition: 'background .2s ease, color .2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLAnchorElement
                  el.style.background = 'var(--church-cream)'
                  el.style.color = '#2a6682'
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLAnchorElement
                  el.style.background = ''
                  el.style.color = '#1b2a31'
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.zeffy.com/en-US/donation-form/support-this-ministry-3"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '56px',
            borderRadius: '28px',
            fontFamily: 'var(--church-font-sans)',
            fontSize: '18px',
            fontWeight: 700,
            background: '#2a6682',
            color: '#fff',
            textDecoration: 'none',
            marginTop: '18px',
          }}
        >
          Donate
        </a>
        <a
          href="#visit"
          onClick={closeDrawer}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '56px',
            borderRadius: '28px',
            fontFamily: 'var(--church-font-sans)',
            fontSize: '18px',
            fontWeight: 700,
            background: '#f58629',
            color: '#fff',
            textDecoration: 'none',
            marginTop: '12px',
          }}
        >
          Plan Your Visit
        </a>
      </aside>

      <style>{`
        @media (max-width: 1080px) {
          .church-desktop-nav { display: none !important; }
          .church-cta-btn { display: none !important; }
          .church-hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}

export default Header
