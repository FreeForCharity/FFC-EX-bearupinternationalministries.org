'use client'

import React, { useEffect, useState } from 'react'
import { getWeeklyScripture, scriptures, type Scripture } from '@/lib/scriptures'

const BearupScripture: React.FC = () => {
  const [scripture, setScripture] = useState<Scripture>(scriptures[0])

  useEffect(() => {
    // Deliberately deferred to the client: the visitor's real Date must be used
    // (not the build-time snapshot) so the verse keeps rotating weekly without a redeploy.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScripture(getWeeklyScripture())
  }, [])

  return (
    <section
      id="scripture"
      style={{
        background: 'var(--church-cream)',
        padding: '72px 0',
        textAlign: 'center',
      }}
    >
      <div className="church-wide">
        <span className="church-eyebrow">Weekly Scripture &amp; Inspiration</span>
        <span
          style={{
            fontFamily: 'var(--church-font-display)',
            fontSize: '70px',
            lineHeight: 0,
            color: 'var(--church-accent)',
            opacity: 0.5,
            height: '30px',
            display: 'block',
            marginTop: '18px',
          }}
        >
          &ldquo;
        </span>
        <blockquote
          style={{
            margin: '0 auto',
            maxWidth: '900px',
            fontFamily: 'var(--church-font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(26px, 3.4vw, 38px)',
            lineHeight: 1.38,
            color: 'var(--church-primary-deep)',
          }}
        >
          {scripture.text}
        </blockquote>
        <cite
          style={{
            display: 'block',
            marginTop: '26px',
            fontFamily: 'var(--church-font-sans)',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--church-accent)',
          }}
        >
          — {scripture.reference}
        </cite>
      </div>
    </section>
  )
}

export default BearupScripture
