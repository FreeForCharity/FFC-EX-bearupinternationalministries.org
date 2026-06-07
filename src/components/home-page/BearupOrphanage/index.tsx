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
            Bearup International Ministries is committed to caring for the most vulnerable among us.
            Our Orphanage Outreach brings{' '}
            <strong style={{ color: 'var(--church-ink)', fontWeight: 700 }}>
              hope, love, and the Gospel
            </strong>{' '}
            to orphaned and at-risk children around the world.
          </p>
          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'var(--church-ink-soft)',
              marginBottom: '34px',
            }}
          >
            Through partnerships with local ministries, we provide{' '}
            <strong style={{ color: 'var(--church-ink)', fontWeight: 700 }}>
              food, shelter, education, and spiritual care
            </strong>{' '}
            — surrounding each child with the love of a Father who will never leave them.
          </p>

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
