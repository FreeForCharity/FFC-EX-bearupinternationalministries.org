import React from 'react'

const values = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
      </svg>
    ),
    title: 'Worship',
    desc: 'Encountering God together with hearts wide open.',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 19V5l8 4 8-4v14l-8-4-8 4z" />
      </svg>
    ),
    title: 'The Word',
    desc: 'Grounded in Scripture, growing as disciples.',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    title: 'The Nations',
    desc: 'Carrying the hope of the Gospel to all peoples.',
  },
]

const BearupAbout: React.FC = () => {
  return (
    <section id="about" style={{ padding: '96px 0' }}>
      <div
        className="church-wide about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Art column */}
        <div style={{ position: 'relative' }}>
          <div
            className="church-ph"
            data-label="Congregation / Pastor Photo"
            style={{
              aspectRatio: '4/5',
              borderRadius: '20px',
              boxShadow: 'var(--church-shadow)',
            }}
          />
          <div
            style={{
              marginTop: '18px',
              background: 'var(--church-primary)',
              color: '#fff',
              borderRadius: '16px',
              padding: '20px 24px',
              boxShadow: 'var(--church-shadow)',
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <strong
              style={{
                fontFamily: 'var(--church-font-display)',
                fontSize: '26px',
              }}
            >
              Who we are
            </strong>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.85)' }}>
              A family in Christ, sent to the nations
            </span>
          </div>
        </div>

        {/* Content column */}
        <div>
          <span className="church-eyebrow">Our Mission</span>
          <h2
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: 'clamp(32px, 4.2vw, 46px)',
              fontWeight: 500,
              color: 'var(--church-ink)',
              marginBottom: '22px',
              lineHeight: 1.1,
            }}
          >
            One simple mission, eternal in its reach
          </h2>

          <div>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'var(--church-ink-soft)',
                marginBottom: '18px',
              }}
            >
              Bearup International Ministries exists to{' '}
              <strong style={{ color: 'var(--church-ink)', fontWeight: 700 }}>
                bring Jesus Christ to the world
              </strong>{' '}
              — to know Him, to make Him known, and to see lives transformed by the power of the
              Gospel in every community we touch.
            </p>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'var(--church-ink-soft)',
              }}
            >
              We are a{' '}
              <strong style={{ color: 'var(--church-ink)', fontWeight: 700 }}>
                non-denominational, Bible-believing church ministry
              </strong>{' '}
              — a worshipping family rooted in Scripture and led by the Holy Spirit. Whether you are
              exploring faith for the first time or have walked with the Lord for decades, there is
              a place for you at our table.
            </p>
          </div>

          {/* Values */}
          <div
            className="about-values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '18px',
              marginTop: '34px',
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  textAlign: 'center',
                  padding: '22px 12px',
                  borderRadius: '14px',
                  background: 'var(--church-cream)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    margin: '0 auto 12px',
                    borderRadius: '12px',
                    background: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--church-accent)',
                    boxShadow: 'var(--church-shadow-sm)',
                  }}
                >
                  {v.icon}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--church-font-sans)',
                    fontWeight: 900,
                    fontSize: '14px',
                    letterSpacing: '.04em',
                    textTransform: 'uppercase',
                    color: 'var(--church-primary)',
                    margin: 0,
                  }}
                >
                  {v.title}
                </h4>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--church-muted)',
                    marginTop: '6px',
                    lineHeight: 1.4,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .about-values-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 480px) {
          .about-values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default BearupAbout
