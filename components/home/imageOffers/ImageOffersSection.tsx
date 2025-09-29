import Image from 'next/image'
import React from 'react'
import image1 from './../../../public/b2.png'
import image2 from './../../../public/b3.png'

const ImageOffersSection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 px-[20px] md:px-[0] box-content md:gap-[40px] '>
        <div className='col-span-1'><Image src={image1} alt='' /></div>
        <div className='col-span-1'><Image src={image2} alt='' /></div>
    </section>
  )
}

export default ImageOffersSection