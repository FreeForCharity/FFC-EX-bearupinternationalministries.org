'use client'

import React from 'react'

const BearupEmblem = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Bearup International Ministries emblem"
    style={{ width: '56px', height: '56px', display: 'block', marginBottom: '18px' }}
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

const mailIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
)

const pinIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const phoneIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,.72)',
    fontSize: '15.5px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'color .2s ease',
    display: 'block',
    lineHeight: 1.4,
  }

  const contactRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
    marginBottom: '18px',
  }

  return (
    <footer style={{ background: '#11181c', color: '#fff' }}>
      <div
        className="church-wide footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.2fr',
          gap: '48px',
          padding: '72px 0 40px',
        }}
      >
        {/* Column 1: Brand */}
        <div>
          <BearupEmblem />
          <h3
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: '22px',
              fontWeight: 600,
              marginBottom: '20px',
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.1,
            }}
          >
            Bearup International Ministries
          </h3>
          <p
            style={{
              color: 'rgba(255,255,255,.66)',
              fontSize: '15.5px',
              lineHeight: 1.6,
              maxWidth: '340px',
              margin: 0,
            }}
          >
            A Spirit-filled family bringing Jesus Christ to the world — worshipping, growing, and
            going to the nations.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: '22px',
              fontWeight: 600,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.1,
            }}
          >
            Explore
          </h3>
          <ul
            style={{
              listStyle: 'none',
              margin: '0 0 32px',
              padding: 0,
              display: 'grid',
              gap: '11px',
            }}
          >
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Plan Your Visit', href: '#visit' },
              { label: 'Ministries', href: '#ministries' },
              { label: 'Weddings & Events', href: '#schedule' },
              { label: 'Leadership', href: '#leadership' },
              { label: 'Board of Directors', href: '#board' },
              { label: 'Give', href: '#give' },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLAnchorElement).style.color = '#f58629'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,.72)'
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Policies */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '8px' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms-of-service' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  style={{ ...linkStyle, fontSize: '13.5px', color: 'rgba(255,255,255,.5)' }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLAnchorElement).style.color = '#f58629'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,.5)'
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: '22px',
              fontWeight: 600,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.1,
            }}
          >
            Contact
          </h3>

          <div style={contactRowStyle}>
            <span style={{ color: '#f58629', flex: 'none', marginTop: '2px' }}>{mailIcon}</span>
            <div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.5)',
                  fontWeight: 700,
                }}
              >
                Email
              </div>
              <a
                href="mailto:Info@bearupinternationalministries.org"
                style={{
                  color: 'rgba(255,255,255,.88)',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Info@bearupinternationalministries.org
              </a>
            </div>
          </div>

          <div style={contactRowStyle}>
            <span style={{ color: '#f58629', flex: 'none', marginTop: '2px' }}>{phoneIcon}</span>
            <div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.5)',
                  fontWeight: 700,
                }}
              >
                Phone
              </div>
              <a
                href="tel:+19072628741"
                style={{
                  color: 'rgba(255,255,255,.88)',
                  fontSize: '16px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                (907) 262-8741
              </a>
            </div>
          </div>

          <div style={contactRowStyle}>
            <span style={{ color: '#f58629', flex: 'none', marginTop: '2px' }}>{pinIcon}</span>
            <div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.5)',
                  fontWeight: 700,
                }}
              >
                Mailing Address
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,.88)',
                  fontSize: '16px',
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                PO Box 2763
                <br />
                Soldotna, AK 99669
              </p>
            </div>
          </div>

          <div style={{ ...contactRowStyle, marginBottom: 0 }}>
            <span style={{ color: '#f58629', flex: 'none', marginTop: '2px' }}>{pinIcon}</span>
            <div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.5)',
                  fontWeight: 700,
                }}
              >
                Gather With Us
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,.88)',
                  fontSize: '15px',
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                Family Bible Fellowship and Academy
                <br />
                41212 Sterling Highway
                <br />
                Soldotna, Alaska 99669
              </p>
            </div>
          </div>

          <a
            href="#visit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
              height: '46px',
              padding: '0 24px',
              borderRadius: '23px',
              fontFamily: 'var(--church-font-sans)',
              fontSize: '15px',
              fontWeight: 700,
              background: '#f58629',
              color: '#fff',
              textDecoration: 'none',
              transition: 'background .2s ease',
            }}
          >
            Plan Your Visit
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,.1)',
          padding: '24px 0',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            maxWidth: '760px',
            margin: '0 auto 10px',
            fontSize: '13px',
            lineHeight: 1.55,
            color: 'rgba(255,255,255,.5)',
          }}
        >
          Bearup International Ministries is a ministry of Family Bible Fellowship and Academy, a
          registered 501(c)(3) non-profit organization. All donations are tax-deductible to the
          fullest extent allowed by law.
        </p>
        <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,.6)', margin: 0 }}>
          © {currentYear} Bearup International Ministries. All rights reserved. · Bringing Jesus
          Christ to the World
        </p>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 48px !important; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
