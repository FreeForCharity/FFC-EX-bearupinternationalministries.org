import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const BearupInternationalMinistry: React.FC = () => {
  return (
    <section id="international-ministry" style={{ padding: '96px 0', background: '#fff' }}>
      <div
        className="church-wide intl-section-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Photo column */}
        <div style={{ position: 'relative' }}>
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

        {/* Content column */}
        <div>
          <span className="church-eyebrow">Taking the Gospel to the Nations</span>
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
            International Ministry
          </h2>

          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'var(--church-ink-soft)',
              marginBottom: '18px',
            }}
          >
            Bearup International Ministries answers the call to carry the love of Jesus Christ
            beyond borders — sending teams to serve, worship, and share the Gospel with communities
            around the world.
          </p>

          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'var(--church-ink-soft)',
              marginBottom: '34px',
            }}
          >
            These trips bring{' '}
            <strong style={{ color: 'var(--church-ink)', fontWeight: 700 }}>
              clothing, supplies, and the Word of God
            </strong>{' '}
            to those in need — reminding every person they meet that they are known, loved, and
            never forgotten.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <Link
              href="/international-ministry"
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
              Learn More →
            </Link>
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
              Support Missions
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .intl-section-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default BearupInternationalMinistry
