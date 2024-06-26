import React, { ReactNode } from 'react'
import BG from '@/images/BG.png'
import Image from 'next/image'

const LoadingCompo = ({children} : {children : ReactNode}) => {
  return (
    <main
    className={`flex flex-col items-center justify-center p-7 w-full min-h-screen relative`}
  >
    <Image src={BG} alt="백그라운드 사진" className="img--layout" /> 
    <div className='blur--layout'>
        {children}
    </div>
  </main>
  )
}

export default LoadingCompo