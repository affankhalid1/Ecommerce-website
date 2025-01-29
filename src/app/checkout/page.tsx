import React from 'react'
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/StripePayment'),
  { ssr: false }
)

const page = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  )
}

export default page
