import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const linkedinIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.34 8.5h4.37v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.99c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V23H8.34V8.5z" />
  </svg>
)

const leaders = [
  {
    label: 'Dr. Thomas R. Bearup',
    name: 'Dr. Thomas R. Bearup',
    role: 'Senior Pastor & Founder',
    linkedin: 'https://www.linkedin.com/in/dr-tom-bearup-b00bb06/',
    photo: assetPath('/Images/tom-bearup.jpg'),
  },
  {
    label: 'Dr. Patrick Bearup Sr.',
    name: 'Dr. Patrick Bearup Sr.',
    role: 'Associate Pastor',
    linkedin: null,
    photo: assetPath('/Images/patrick-bearup.jpg'),
  },
  {
    label: 'Adele M. Bearup',
    name: 'Adele M. Bearup',
    role: "Youth & Women's Ministry",
    linkedin: null,
    photo: assetPath('/Images/adele-bearup.jpg'),
  },
]

const BearupLeadership: React.FC = () => {
  return (
    <section id="leadership" style={{ padding: '96px 0' }}>
      <div className="church-wide">
        <div className="church-section-head">
          <span className="church-eyebrow">Meet the Team</span>
          <h2>Our Leadership</h2>
          <p>
            Shepherds and servants devoted to caring for this family and pointing every heart to
            Christ.
          </p>
        </div>

        <div
          className="leadership-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          {leaders.map((l) => (
            <article
              key={l.name}
              className="leadership-card"
              style={{
                background: '#fff',
                border: '1px solid var(--church-line)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--church-shadow-sm)',
                transition: 'transform .22s ease, box-shadow .22s ease',
              }}
            >
              {'photo' in l && l.photo ? (
                <div style={{ position: 'relative', aspectRatio: '1' }}>
                  <Image
                    src={l.photo}
                    alt={l.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="church-ph" data-label={l.label} style={{ aspectRatio: '1' }} />
              )}
              <div
                style={{
                  padding: '22px 24px 26px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--church-font-display)',
                    fontSize: '23px',
                    fontWeight: 500,
                    color: 'var(--church-ink)',
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {l.name}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--church-font-sans)',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    letterSpacing: '.04em',
                    textTransform: 'uppercase',
                    color: 'var(--church-accent)',
                    marginTop: '6px',
                  }}
                >
                  {l.role}
                </div>
                {l.linkedin && (
                  <a
                    href={l.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      marginTop: '14px',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      color: 'var(--church-primary)',
                      textDecoration: 'none',
                      transition: 'color .2s ease',
                    }}
                  >
                    {linkedinIcon}
                    LinkedIn
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .leadership-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--church-shadow) !important;
        }
        @media (max-width: 900px) {
          .leadership-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .leadership-grid { grid-template-columns: 1fr !important; max-width: 360px !important; }
        }
      `}</style>
    </section>
  )
}

export default BearupLeadership
