import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const galleryPhotos = [
  {
    src: assetPath('/Images/orphanage-visit.jpg'),
    alt: 'Ministry team visiting children at the orphanage',
  },
  {
    src: assetPath('/Images/orphanage-clothing.jpg'),
    alt: 'Clothing donations collected for the orphanage',
  },
  {
    src: assetPath('/Images/orphanage-delivery.jpg'),
    alt: 'Delivering donation boxes to the orphanage',
  },
  {
    src: assetPath('/Images/orphanage-supplies.jpg'),
    alt: 'Hygiene and household supplies donated to the orphanage',
  },
]

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
              href="#orphanage-details"
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
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--church-shadow)',
            }}
          >
            <Image
              src={assetPath('/Images/orphanage-exterior.jpg')}
              alt="EUNIME orphanage in Mexico, partner of Bearup International Ministries"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Detailed info panel */}
      <div
        id="orphanage-details"
        className="church-wide"
        style={{
          marginTop: '72px',
          background: '#fff',
          borderRadius: '24px',
          padding: '52px 56px',
          boxShadow: 'var(--church-shadow)',
          scrollMarginTop: '100px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--church-font-display)',
            fontSize: 'clamp(24px, 3vw, 34px)',
            fontWeight: 500,
            color: 'var(--church-ink)',
            marginBottom: '16px',
            lineHeight: 1.15,
          }}
        >
          How We Help
        </h3>
        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--church-ink-soft)',
            maxWidth: '780px',
            marginBottom: '36px',
          }}
        >
          Our partnership with a children&apos;s orphanage in Mexico is built on a simple
          conviction: every child deserves to be clothed, cared for, and to know the love of Jesus
          Christ. Through the generosity of our congregation, we regularly collect and send
          meaningful donations directly to our partner orphanage.
        </p>

        <div
          className="orphanage-items-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {[
            {
              icon: '👕',
              title: 'Clothing',
              desc: 'New and gently used clothing for children of all ages — from infants to teenagers — keeping them warm, dignified, and cared for.',
            },
            {
              icon: '🧸',
              title: 'Toys',
              desc: 'Age-appropriate toys and games that bring joy, spark creativity, and remind every child that they are worthy of good gifts.',
            },
            {
              icon: '✝️',
              title: 'Religious Items',
              desc: 'Bibles, devotionals, and faith-based materials in Spanish that introduce children to the Word of God and the hope of the Gospel.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: '28px 24px',
                borderRadius: '16px',
                background: 'var(--church-cream)',
                border: '1px solid var(--church-line)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
              <h4
                style={{
                  fontFamily: 'var(--church-font-sans)',
                  fontWeight: 900,
                  fontSize: '14px',
                  letterSpacing: '.05em',
                  textTransform: 'uppercase',
                  color: 'var(--church-primary)',
                  margin: '0 0 8px',
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--church-ink-soft)',
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div
          className="orphanage-gallery"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {galleryPhotos.map((photo) => (
            <div
              key={photo.src}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px"
              />
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--church-ink-soft)',
            maxWidth: '780px',
            marginBottom: '28px',
          }}
        >
          If you would like to contribute clothing, toys, or religious materials, please bring
          donations to the church. To support this outreach financially so we can cover shipping and
          expand our reach, use the button below.
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
          Give to Orphanage Outreach →
        </a>
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
        @media (max-width: 700px) {
          .orphanage-items-grid { grid-template-columns: 1fr !important; }
          .orphanage-gallery { grid-template-columns: 1fr !important; }
        }
        #orphanage-details {
          padding: 36px 24px !important;
        }
        @media (min-width: 600px) {
          #orphanage-details { padding: 52px 56px !important; }
        }
      `}</style>
    </section>
  )
}

export default BearupOrphanage
