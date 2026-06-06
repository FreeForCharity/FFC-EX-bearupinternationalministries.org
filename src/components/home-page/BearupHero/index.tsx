import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const BearupHero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '110px',
        background: '#2e6f8e',
      }}
    >
      {/* Background worship photo */}
      <Image
        src={assetPath('/Images/hero-worship.jpg')}
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        sizes="100vw"
        priority
        aria-hidden="true"
      />
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(17, 53, 99, 0.72)',
          zIndex: 1,
        }}
      />
      {/* Diagonal white stripe */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#fff',
          clipPath: 'polygon(0% 108%, 100% 30%, 100% 33%, 0% 111%)',
          zIndex: 2,
        }}
      />
      {/* Orange bottom triangle */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#f58629',
          clipPath: 'polygon(0% 111%, 100% 33%, 100% 100%, 0% 100%)',
          zIndex: 2,
        }}
      />

      <div
        className="hero-inner-layout"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          gap: '56px',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '168px',
          color: '#fff',
        }}
      >
        {/* Copy */}
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--church-font-sans)',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'rgba(255,255,255,.14)',
              border: '1px solid rgba(255,255,255,.3)',
              padding: '8px 16px',
              borderRadius: '30px',
              marginBottom: '16px',
            }}
          >
            ✦ A church for the nations
          </span>

          <p
            style={{
              margin: '0 0 24px',
              fontFamily: 'var(--church-font-display)',
              fontWeight: 500,
              fontSize: 'clamp(17px, 1.8vw, 21px)',
              letterSpacing: '.01em',
              color: '#e2a23b',
            }}
          >
            Family Bible Fellowship and Academy
          </p>

          <h1
            style={{
              fontFamily: 'var(--church-font-display)',
              fontSize: 'clamp(44px, 5.6vw, 64px)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-.01em',
              margin: 0,
              width: '100%',
              maxWidth: '520px',
            }}
          >
            Bringing Jesus Christ to the World
          </h1>

          <p
            style={{
              fontSize: 'clamp(20px, 2.2vw, 24px)',
              lineHeight: 1.45,
              margin: '24px 0 0',
              color: 'rgba(255,255,255,.92)',
              fontWeight: 400,
            }}
          >
            A Spirit-filled, Bible-believing family in Christ — gathering to worship, growing as
            disciples, and going out to carry the hope of the Gospel to every nation.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '38px' }}>
            <a
              href="#visit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '56px',
                padding: '0 32px',
                borderRadius: '28px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '18px',
                fontWeight: 700,
                cursor: 'pointer',
                border: '2px solid transparent',
                transition: 'all .22s ease',
                background: '#fff',
                color: '#113563',
                textDecoration: 'none',
              }}
            >
              Plan Your Visit
            </a>
            <a
              href="#give"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '56px',
                padding: '0 32px',
                borderRadius: '28px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '18px',
                fontWeight: 700,
                cursor: 'pointer',
                border: '2px solid rgba(255,255,255,.7)',
                transition: 'all .22s ease',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Give
            </a>
          </div>
        </div>

        {/* Art — circular photo placeholder */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '430px',
            aspectRatio: '1',
            flex: 'none',
          }}
        >
          {/* Dashed ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-16px',
              borderRadius: '50%',
              border: '2px dashed rgba(255,255,255,.45)',
            }}
          />
          {/* White disc */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#fff',
              borderRadius: '50%',
              padding: '30px',
              boxShadow: '0 40px 90px rgba(0,0,0,.28)',
            }}
          >
            <div
              className="church-ph"
              data-label="Pastor / Church Photo"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner-layout {
            flex-direction: column;
            text-align: center;
            padding-top: 138px !important;
          }
          .hero-inner-layout > div:first-child {
            max-width: 640px;
            align-items: center;
          }
          .hero-inner-layout > div:last-child {
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  )
}

export default BearupHero
