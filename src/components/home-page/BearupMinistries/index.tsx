import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const ministries = [
  {
    label: 'Worship Photo',
    title: 'Worship & Prayer',
    desc: 'Gathering weekly to lift up the name of Jesus through song, prayer, and the presence of the Holy Spirit.',
    linkText: 'Join us Sunday →',
    linkHref: '#visit',
  },
  {
    label: 'Small Group Photo',
    title: 'Discipleship',
    desc: 'Small groups and Bible studies where we grow together in the Word and walk closely as a community.',
    linkText: 'Find a group →',
    linkHref: '#schedule',
    photo: assetPath('/Images/ministry-discipleship.jpg'),
  },
  {
    label: 'Missions Photo',
    title: 'Missions & Outreach',
    desc: 'Carrying the Gospel beyond our walls — locally and to the nations — through service and compassion.',
    linkText: 'Support missions →',
    linkHref: '#give',
    photo: assetPath('/Images/ministry-missions.png'),
  },
  {
    label: 'Children & Youth',
    title: 'Children & Youth',
    desc: 'Safe, joyful spaces where the next generation discovers the love of Jesus in age-appropriate ways.',
    linkText: 'Learn more →',
    linkHref: '#visit',
    photo: assetPath('/Images/ministry-children.png'),
  },
  {
    label: 'Prayer Ministry',
    title: 'Prayer Ministry',
    desc: 'A dedicated team ready to stand with you in prayer for healing, breakthrough, and guidance.',
    linkText: 'Request prayer →',
    linkHref: '#give',
    photo: assetPath('/Images/ministry-prayer.jpg'),
  },
]

const BearupMinistries: React.FC = () => {
  return (
    <section id="ministries" style={{ padding: '96px 0' }}>
      <div className="church-wide">
        <div className="church-section-head">
          <span className="church-eyebrow">Get Involved</span>
          <h2>Our Ministries</h2>
          <p>
            There&apos;s a place for every age and every season of life to belong, grow, and serve.
          </p>
        </div>

        <div
          className="ministries-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
        >
          {ministries.map((m) => (
            <article
              key={m.title}
              className="ministry-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#fff',
                border: '1px solid var(--church-line)',
                boxShadow: 'var(--church-shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .22s ease, box-shadow .22s ease',
              }}
            >
              {'photo' in m && m.photo ? (
                <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                  <Image
                    src={m.photo}
                    alt={m.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="church-ph" data-label={m.label} style={{ aspectRatio: '16/10' }} />
              )}
              <div
                style={{
                  padding: '26px 26px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--church-font-display)',
                    fontSize: '25px',
                    fontWeight: 500,
                    color: 'var(--church-ink)',
                    marginBottom: '10px',
                    margin: '0 0 10px',
                    lineHeight: 1.1,
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.55,
                    color: 'var(--church-ink-soft)',
                    flex: 1,
                    margin: 0,
                  }}
                >
                  {m.desc}
                </p>
                <a
                  href={m.linkHref}
                  style={{
                    marginTop: '18px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    color: 'var(--church-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    transition: 'color .2s ease, gap .2s ease',
                  }}
                >
                  {m.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .ministry-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--church-shadow) !important;
        }
        @media (max-width: 980px) {
          .ministries-cards { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .ministries-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default BearupMinistries
