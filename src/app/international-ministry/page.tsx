import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'International Ministry | Bearup International Ministries',
  description:
    'Bearup International Ministries takes the Gospel to the nations — from Alaska to Eastern Europe and beyond. Learn about our international outreach and how you can partner with us.',
}

export default function InternationalMinistry() {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero */}
      <section
        style={{
          background: 'var(--church-ink)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.45,
          }}
        >
          <Image
            src={assetPath('/Images/orphanage-team.jpg')}
            alt="Bearup International Ministries team on international outreach mission"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="100vw"
          />
        </div>
        <div className="church-wide" style={{ position: 'relative', zIndex: 1, padding: '80px 0' }}>
          <span
            className="church-eyebrow"
            style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}
          >
            Taking the Gospel to the Nations
          </span>
          <h1
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: 'clamp(38px, 6vw, 68px)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.05,
              marginTop: '14px',
              marginBottom: '24px',
              maxWidth: '700px',
            }}
          >
            International Ministry
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.88)',
              maxWidth: '560px',
              marginBottom: '36px',
            }}
          >
            From Soldotna, Alaska to the nations of the earth — Bearup International Ministries
            answers the call to carry the love of Jesus Christ across every border.
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
            }}
          >
            Support International Missions →
          </a>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '80px 0', background: 'var(--church-cream)' }}>
        <div className="church-wide">
          {/* Intro */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
              marginBottom: '80px',
            }}
            className="intl-two-col"
          >
            <div>
              <span className="church-eyebrow">Our Mission Abroad</span>
              <h2
                style={{
                  fontFamily: 'var(--church-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 500,
                  color: 'var(--church-ink)',
                  lineHeight: 1.1,
                  marginBottom: '20px',
                }}
              >
                Bringing Jesus Christ to Every Corner of the World
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: 'var(--church-ink-soft)',
                  marginBottom: '16px',
                }}
              >
                Bearup International Ministries was built on the conviction that the Great
                Commission has no borders. Our congregation in Soldotna, Alaska regularly sends
                teams abroad to serve, worship, and share the Gospel with communities across the
                globe.
              </p>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: 'var(--church-ink-soft)',
                }}
              >
                These trips are more than mission work — they are expressions of the body of Christ
                reaching out to brothers and sisters around the world, reminding every person they
                encounter that they are known, loved, and never forgotten by God.
              </p>
            </div>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--church-shadow)',
              }}
            >
              <Image
                src={assetPath('/Images/orphanage-team.jpg')}
                alt="Bearup International Ministries team on outreach mission"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* What we do cards */}
          <div style={{ marginBottom: '80px' }}>
            <div
              className="church-section-head"
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              <span className="church-eyebrow">How We Serve</span>
              <h2
                style={{
                  fontFamily: 'var(--church-font-display)',
                  fontSize: 'clamp(26px, 3vw, 38px)',
                  fontWeight: 500,
                  color: 'var(--church-ink)',
                  marginTop: '10px',
                }}
              >
                What Our Teams Do
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
              className="intl-cards-grid"
            >
              {[
                {
                  icon: '✝️',
                  title: 'Gospel Proclamation',
                  desc: 'Our teams share the message of Jesus Christ through preaching, worship, and personal testimony — meeting people where they are.',
                },
                {
                  icon: '🤝',
                  title: 'Community Partnership',
                  desc: 'We build lasting relationships with local churches, orphanages, and ministries — partnering for long-term kingdom impact rather than one-time visits.',
                },
                {
                  icon: '📦',
                  title: 'Tangible Relief',
                  desc: 'We bring clothing, supplies, and resources to communities in need, demonstrating the love of Christ through practical service.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '32px 28px',
                    border: '1px solid var(--church-line)',
                    boxShadow: 'var(--church-shadow-sm)',
                  }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'var(--church-font-sans)',
                      fontWeight: 900,
                      fontSize: '14px',
                      letterSpacing: '.05em',
                      textTransform: 'uppercase',
                      color: 'var(--church-primary)',
                      margin: '0 0 10px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15.5px',
                      lineHeight: 1.65,
                      color: 'var(--church-ink-soft)',
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              background: 'var(--church-primary)',
              borderRadius: '24px',
              padding: '52px 56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
            }}
            className="intl-cta"
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--church-font-display)',
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 500,
                  color: '#fff',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                }}
              >
                Partner With Us
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.88)',
                  maxWidth: '540px',
                  margin: 0,
                }}
              >
                Your financial support makes international missions possible — covering travel,
                supplies, and the resources our teams need to serve effectively around the world.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', flexShrink: 0 }}>
              <a
                href="https://www.zeffy.com/en-US/donation-form/100-free-donation-form"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '52px',
                  padding: '0 30px',
                  borderRadius: '26px',
                  fontFamily: 'var(--church-font-sans)',
                  fontSize: '17px',
                  fontWeight: 700,
                  background: '#fff',
                  color: 'var(--church-primary)',
                  textDecoration: 'none',
                }}
              >
                Give Now →
              </a>
              <Link
                href="/"
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
                  color: '#fff',
                  border: '2px solid rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .intl-two-col {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .intl-two-col > div:last-child {
            order: -1;
          }
        }
        @media (max-width: 700px) {
          .intl-cards-grid { grid-template-columns: 1fr !important; }
          .intl-cta { padding: 36px 24px !important; }
        }
      `}</style>
    </div>
  )
}
