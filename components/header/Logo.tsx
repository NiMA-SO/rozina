import React from 'react'
import logo from './../../public/logo/farsi.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image src={logo} alt="" className='w-auto h-full lg:h-auto lg:w-[160px]' />
    // <h1 className='text-[50px] text-[var(--primary)]'>رزینا</h1>
  )
}

export default Logo
