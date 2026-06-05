import React from 'react'

const boardMembers = [
  { initial: 'T', bg: '#2a6682', name: 'Dr. Thomas R. Bearup', role: 'Board Chair / President' },
  { initial: 'A', bg: '#f58629', name: 'Adele M. Bearup', role: 'Secretary & Treasurer' },
  { initial: 'P', bg: '#1c4c61', name: 'Dr. Patrick Bearup Sr.', role: 'Director' },
  { initial: 'R', bg: '#e2a23b', name: 'Robyn Faucheux', role: 'Director' },
  { initial: 'R', bg: '#5a8a6a', name: 'Rebekah Freeman', role: 'Director' },
]

const BearupBoard: React.FC = () => {
  return (
    <section id="board" style={{ padding: '96px 0', background: 'var(--church-cream)' }}>
      <div className="church-wide">
        <div className="church-section-head">
          <span className="church-eyebrow">Governance</span>
          <h2>Board of Directors</h2>
          <p>
            The dedicated men and women who provide oversight, accountability, and prayerful
            direction for the ministry.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '22px',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          {boardMembers.map((m) => (
            <article
              key={`${m.name}-${m.role}`}
              className="board-card"
              style={{
                flex: '0 1 320px',
                background: '#fff',
                border: '1px solid var(--church-line)',
                borderRadius: '16px',
                padding: '26px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                boxShadow: 'var(--church-shadow-sm)',
                transition: 'transform .2s ease, box-shadow .2s ease',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 0 3px rgba(255,255,255,.22), 0 0 0 1px var(--church-line)',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: m.bg,
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: 'var(--church-font-display)',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  {m.initial}
                </div>
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--church-font-display)',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'var(--church-ink)',
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  {m.name}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--church-font-sans)',
                    fontWeight: 700,
                    fontSize: '12.5px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: 'var(--church-accent)',
                    marginTop: '5px',
                  }}
                >
                  {m.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .board-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--church-shadow) !important;
        }
      `}</style>
    </section>
  )
}

export default BearupBoard
