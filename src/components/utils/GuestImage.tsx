import { ImageBox } from '@/styles/questionStyle'
import Image from 'next/image'
import React from 'react'

type prop = {
    src : string
}

const GuestImage = (prop : prop) => {
  return (
    <ImageBox>
        <Image src={prop.src} alt='이미지 경로' fill className='rounded-[20px]'/>
    </ImageBox>
  )
}

export default GuestImage