import React from 'react'

const BearupScripture: React.FC = () => {
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
        <span
          style={{
            fontFamily: 'var(--church-font-display)',
            fontSize: '70px',
            lineHeight: 0,
            color: 'var(--church-accent)',
            opacity: 0.5,
            height: '30px',
            display: 'block',
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
          Go therefore and make disciples of all nations, baptizing them in the name of the Father
          and of the Son and of the Holy Spirit.
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
          — Matthew 28:19
        </cite>
      </div>
    </section>
  )
}

export default BearupScripture
