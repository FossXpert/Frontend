'use client'
import React from 'react'
import Carousel from '../components/Carousel/Carousel'


const page = () => {

  const imageUrl = "https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75"
  const paragraph = "Curated vibrants colors for your living, make it pop & calm in the same time"
  const header = "Header"
  return (
    <>
      <Carousel image={imageUrl} paragraph={paragraph} heading={header}/>
    </>
  )
}

export default page