'use client'

import React, { useState } from 'react'

const plusIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const faqs = [
  {
    q: 'What time are your services?',
    a: (
      <>
        Our gathering schedule varies by season, so the best way to get current service times is to
        reach out directly. Call us at{' '}
        <a href="tel:+19072628741" style={{ color: 'var(--church-primary)', fontWeight: 700 }}>
          (907) 262-8741
        </a>{' '}
        or email{' '}
        <a
          href="mailto:Info@bearupinternationalministries.org"
          style={{ color: 'var(--church-primary)', fontWeight: 700 }}
        >
          Info@bearupinternationalministries.org
        </a>{' '}
        and we&apos;ll let you know when we&apos;re meeting this week.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: "I'm new to church — what should I expect?",
    a: "Come exactly as you are. You'll find heartfelt worship, a clear message from the Bible, and a warm family genuinely glad you came. There's no pressure — just an open invitation to encounter Jesus.",
    defaultOpen: false,
  },
  {
    q: 'Is there something for my kids?',
    a: 'Yes! Our children & youth ministry offers safe, joyful, age-appropriate spaces during our services so the whole family can worship with peace of mind.',
    defaultOpen: false,
  },
  {
    q: 'How can I get involved or serve?',
    a: "Join a small group, serve on a ministry team, or come alongside our missions and outreach work. The best first step is to plan a visit and let us know you'd like to connect.",
    defaultOpen: false,
  },
  {
    q: 'How do you support missions?',
    a: 'Carrying Jesus to the nations is at the heart of who we are. Through giving, short-term teams, and partnerships, we support Gospel work locally and around the world.',
    defaultOpen: false,
  },
]

const FaqItem: React.FC<{ q: string; a: React.ReactNode; defaultOpen: boolean }> = ({
  q,
  a,
  defaultOpen,
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      style={{
        background: open ? '#fff' : 'var(--church-cream)',
        border: '1px solid var(--church-line)',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: open ? 'var(--church-shadow-sm)' : 'none',
        transition: 'box-shadow .2s ease',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          cursor: 'pointer',
          padding: '22px 26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
          fontFamily: 'var(--church-font-sans)',
          fontWeight: 900,
          fontSize: '18px',
          color: 'var(--church-ink)',
          background: 'none',
          border: 'none',
          textAlign: 'left',
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flex: 'none',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: open ? 'var(--church-accent)' : 'var(--church-primary)',
            color: '#fff',
            display: 'grid',
            placeItems: 'center',
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
            transition: 'transform .25s ease, background .2s ease',
          }}
        >
          {plusIcon}
        </span>
      </button>

      {open && (
        <div
          style={{
            padding: '0 26px 24px',
            fontSize: '16px',
            lineHeight: 1.65,
            color: 'var(--church-ink-soft)',
          }}
        >
          {a}
        </div>
      )}
    </div>
  )
}

const BearupFaq: React.FC = () => {
  return (
    <section id="faq" style={{ padding: '96px 0' }}>
      <div className="church-wide">
        <div className="church-section-head">
          <span className="church-eyebrow">Questions</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'grid',
            gap: '14px',
          }}
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={faq.defaultOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BearupFaq
