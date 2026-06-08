'use client'

import Script from 'next/script'
import { useRef } from 'react'

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (opts: { hostedButtonId: string }) => { render: (selector: string) => void }
    }
  }
}

const PAYPAL_SDK_URL =
  'https://www.paypal.com/sdk/js?client-id=BAANSLod3z_ZuG4tjlePIgw9jGmQWIlQrq1Gf9Xtft9yrXIb_g_ztx_9pICHuMpYyRmjbRfCdzkap2OUVY&components=hosted-buttons&enable-funding=venmo&currency=USD'

export default function PayPalButton({ hostedButtonId }: { hostedButtonId: string }) {
  const containerId = `paypal-container-${hostedButtonId}`
  const rendered = useRef(false)

  const handleLoad = () => {
    if (rendered.current) return
    if (!window.paypal) return
    rendered.current = true
    window.paypal.HostedButtons({ hostedButtonId }).render(`#${containerId}`)
  }

  return (
    <>
      <Script src={PAYPAL_SDK_URL} strategy="afterInteractive" onLoad={handleLoad} />
      <div id={containerId} style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }} />
    </>
  )
}
