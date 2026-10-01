import React from 'react'
import PayPalButton from '@/components/ui/PayPalButton'

const mailIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
)

const BearupGive: React.FC = () => {
  return (
    <section id="give" style={{ padding: 0 }}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 0',
        }}
      >
        {/* Gradient background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, #e0741a, #f58629)',
          }}
        />

        <div
          className="church-wide give-inner"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <div>
            <span className="church-eyebrow" style={{ color: '#fff' }}>
              Ways to Give
            </span>
            <h2
              style={{
                fontFamily: 'var(--church-font-display)',
                fontSize: 'clamp(34px, 4.4vw, 48px)',
                fontWeight: 500,
                color: '#fff',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Partner with the mission
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,.92)',
                marginTop: '18px',
                maxWidth: '560px',
              }}
            >
              Every gift fuels worship, discipleship, and the spread of the Gospel to the nations.
              Thank you for sowing into Kingdom work that will outlast us all.
            </p>
            <p
              style={{
                marginTop: '22px',
                fontFamily: 'var(--church-font-display)',
                fontStyle: 'italic',
                fontSize: '18px',
                color: 'rgba(255,255,255,.85)',
              }}
            >
              &ldquo;Each one must give as he has decided in his heart… for God loves a cheerful
              giver.&rdquo; — 2 Corinthians 9:7
            </p>
          </div>

          {/* Right: actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a
              href="https://www.zeffy.com/en-US/donation-form/support-this-ministry-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
                borderRadius: '30px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '19px',
                fontWeight: 700,
                background: '#fff',
                color: '#113563',
                textDecoration: 'none',
                transition: 'all .22s ease',
                border: '2px solid transparent',
              }}
            >
              Give Online
            </a>

            <a
              href="https://www.zeffy.com/en-US/donation-form/support-this-ministry-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
                borderRadius: '30px',
                fontFamily: 'var(--church-font-sans)',
                fontSize: '19px',
                fontWeight: 700,
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all .22s ease',
                border: '2px solid rgba(255,255,255,.7)',
              }}
            >
              Set Up Recurring Giving
            </a>

            <p
              style={{
                textAlign: 'center',
                fontSize: '13.5px',
                color: 'rgba(255,255,255,.8)',
                margin: 0,
              }}
            >
              Secure giving powered by Zeffy · 100% of your gift reaches the ministry
            </p>

            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
              <p
                style={{
                  fontSize: '13.5px',
                  color: 'rgba(255,255,255,.8)',
                  margin: 0,
                }}
              >
                Or give with PayPal / Venmo
              </p>
              <PayPalButton hostedButtonId="2APKJ4LM5QSZ2" />
            </div>

            {/* Mail option */}
            <div
              style={{
                marginTop: '6px',
                background: 'rgba(255,255,255,.12)',
                border: '1px solid rgba(255,255,255,.25)',
                borderRadius: '14px',
                padding: '18px 22px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
              }}
            >
              <span style={{ flex: 'none', color: '#fff', marginTop: '2px' }}>{mailIcon}</span>
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 900,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.8)',
                    marginBottom: '5px',
                  }}
                >
                  Give by Mail
                </div>
                <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.5, color: '#fff' }}>
                  <span style={{ fontWeight: 700 }}>Family Bible Fellowship and Academy</span>
                  <br />
                  PO Box 2763
                  <br />
                  Soldotna, AK 99669
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .give-inner {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            text-align: center;
          }
          .give-inner p { margin-inline: auto; }
        }
      `}</style>
    </section>
  )
}

export default BearupGive
