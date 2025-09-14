import React from 'react'
import logo from './../../public/logo.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image src={logo} alt="" className='w-[190px] h-[68px]' />
    // <h1 className='text-[50px] text-[var(--primary)]'>رزینا</h1>
  )
}

export default Logo
