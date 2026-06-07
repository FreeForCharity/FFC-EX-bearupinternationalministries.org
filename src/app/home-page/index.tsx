import React from 'react'
import BearupHero from '@/components/home-page/BearupHero'
import BearupScripture from '@/components/home-page/BearupScripture'
import BearupAbout from '@/components/home-page/BearupAbout'
import BearupVisit from '@/components/home-page/BearupVisit'
import BearupMinistries from '@/components/home-page/BearupMinistries'
import BearupOrphanage from '@/components/home-page/BearupOrphanage'
import BearupSchedule from '@/components/home-page/BearupSchedule'
import BearupLeadership from '@/components/home-page/BearupLeadership'
import BearupBoard from '@/components/home-page/BearupBoard'
import BearupGive from '@/components/home-page/BearupGive'
import BearupFaq from '@/components/home-page/BearupFaq'

const BearupHomePage = () => {
  return (
    <div>
      <span id="top" aria-hidden="true" />
      <BearupHero />
      <BearupScripture />
      <BearupAbout />
      <div
        style={{
          width: '95%',
          maxWidth: '1280px',
          margin: '0 auto',
          borderTop: '1px solid #e6ddcf',
        }}
      />
      <BearupVisit />
      <BearupMinistries />
      <BearupOrphanage />
      <BearupSchedule />
      <BearupLeadership />
      <BearupBoard />
      <BearupGive />
      <BearupFaq />
    </div>
  )
}

export default BearupHomePage
