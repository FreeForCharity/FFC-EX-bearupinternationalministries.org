import React from 'react'

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const calendarIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const mapPinIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const BearupVisit: React.FC = () => {
  return (
    <section id="visit" style={{ padding: '96px 0', background: 'var(--church-cream)' }}>
      <div
        className="church-wide visit-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'start',
        }}
      >
        {/* Info column */}
        <div>
          <span className="church-eyebrow">Plan Your Visit</span>
          <h2
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: 'clamp(32px, 4.2vw, 46px)',
              fontWeight: 500,
              color: 'var(--church-ink)',
              marginBottom: '18px',
              lineHeight: 1.1,
            }}
          >
            We&apos;d love to welcome you home
          </h2>
          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.6,
              color: 'var(--church-ink-soft)',
              marginBottom: '26px',
            }}
          >
            However you come — curious, searching, or ready to worship — you&apos;ll find a warm
            family that&apos;s genuinely glad you&apos;re here. Here&apos;s what to expect on your
            first visit.
          </p>

          <ul
            style={{
              listStyle: 'none',
              margin: '26px 0 30px',
              padding: 0,
              display: 'grid',
              gap: '14px',
            }}
          >
            {[
              { bold: 'Come as you are.', rest: ' No dress code, no pressure — just open hearts.' },
              { bold: 'A welcome team', rest: ' will greet you and help you find your way.' },
              { bold: 'Care for the kids', rest: ' — a safe, joyful space during service.' },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  fontSize: '16px',
                  color: 'var(--church-ink-soft)',
                }}
              >
                <span
                  style={{
                    flex: 'none',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'var(--church-primary)',
                    color: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                    marginTop: '1px',
                  }}
                >
                  {checkIcon}
                </span>
                <span>
                  <strong style={{ color: 'var(--church-ink)' }}>{item.bold}</strong>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>

          {/* Location card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: '#fff',
              border: '1px solid var(--church-line)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: 'var(--church-shadow-sm)',
            }}
          >
            <span style={{ color: 'var(--church-accent)', flex: 'none' }}>{mapPinIcon}</span>
            <p style={{ fontSize: '15px', color: 'var(--church-ink-soft)', margin: 0 }}>
              <strong
                style={{
                  display: 'block',
                  fontSize: '16px',
                  color: 'var(--church-ink)',
                  fontWeight: 900,
                }}
              >
                Gathering Location
              </strong>
              Family Bible Fellowship and Academy
              <br />
              41212 Sterling Highway, Soldotna, Alaska 99669
            </p>
          </div>
        </div>

        {/* Times column */}
        <div style={{ display: 'grid', gap: '14px' }}>
          {/* Service times card */}
          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: 'var(--church-shadow-sm)',
              display: 'block',
              border: '1px solid var(--church-line)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'var(--church-cream-deep)',
                color: 'var(--church-primary)',
                display: 'grid',
                placeItems: 'center',
                marginBottom: '18px',
              }}
            >
              {calendarIcon}
            </div>
            <div>
              <h4
                style={{
                  fontFamily: 'var(--church-font-sans)',
                  fontWeight: 900,
                  fontSize: '20px',
                  color: 'var(--church-ink)',
                  marginBottom: '8px',
                  margin: '0 0 8px',
                }}
              >
                Service Times
              </h4>
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: 1.6,
                  color: 'var(--church-ink-soft)',
                  margin: 0,
                }}
              >
                Our gathering schedule varies by season. Please reach out and we&apos;ll share
                current service times and let you know what&apos;s happening this week.
              </p>
            </div>
          </div>

          <a
            href="tel:+19072628741"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '56px',
              borderRadius: '28px',
              fontFamily: 'var(--church-font-sans)',
              fontSize: '18px',
              fontWeight: 700,
              background: 'var(--church-primary)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all .22s ease',
            }}
          >
            Call (907) 262-8741
          </a>

          <a
            href="mailto:Info@bearupinternationalministries.org"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '56px',
              borderRadius: '28px',
              fontFamily: 'var(--church-font-sans)',
              fontSize: '18px',
              fontWeight: 700,
              background: 'transparent',
              color: 'var(--church-primary)',
              border: '2px solid var(--church-primary)',
              textDecoration: 'none',
              transition: 'all .22s ease',
            }}
          >
            Email Us for the Schedule
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .visit-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
      `}</style>
    </section>
  )
}

export default BearupVisit
