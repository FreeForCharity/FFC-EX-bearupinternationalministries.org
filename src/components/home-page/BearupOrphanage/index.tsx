import React from 'react'

const BearupOrphanage: React.FC = () => {
  return (
    <section
      id="orphanage-outreach"
      style={{ padding: '96px 0', background: 'var(--church-cream)' }}
    >
      <div
        className="church-wide orphanage-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.05fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Content column */}
        <div>
          <span className="church-eyebrow">Making a Difference</span>
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
            Orphanage Outreach
          </h2>

          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'var(--church-ink-soft)',
              marginBottom: '18px',
            }}
          >
            Bearup International Ministries partners with an orphanage in{' '}
            <strong style={{ color: 'var(--church-ink)', fontWeight: 700 }}>Mexico</strong> to bring
            tangible love and hope to children in need. Our congregation regularly sends{' '}
            <strong style={{ color: 'var(--church-ink)', fontWeight: 700 }}>
              clothing, toys, and religious items
            </strong>{' '}
            — ensuring every child knows they are seen, valued, and loved by a God who never forgets
            them.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '34px' }}>
            <a
              href="#give"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '52px',
                padding: '0 30px',
                borderRadius: '26px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '17px',
                fontWeight: 700,
                background: 'var(--church-primary)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'opacity .2s ease',
              }}
            >
              Support This Ministry →
            </a>
            <a
              href="#give"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '52px',
                padding: '0 28px',
                borderRadius: '26px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '17px',
                fontWeight: 700,
                background: 'transparent',
                color: 'var(--church-primary)',
                border: '2px solid var(--church-primary)',
                textDecoration: 'none',
                transition: 'all .2s ease',
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div style={{ position: 'relative' }}>
          <div
            className="church-ph"
            data-label="Orphanage Outreach Photo"
            style={{
              aspectRatio: '4/3',
              borderRadius: '20px',
              boxShadow: 'var(--church-shadow)',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .orphanage-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .orphanage-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}

export default BearupOrphanage
