import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface Props{
    swiperRef: any,
    isBeginning:boolean,
    isEnd:boolean
}
const NextPrev = ({swiperRef,isBeginning,isEnd}: Props) => {
  return (
    <div className="w-[100px] h-[45px] overflow-hidden  bg-[var(--background)] absolute left-[50px] md:left-[100px] top-2  shadow-[0_8px_24px_rgba(149,157,165,0.2)] z-20 rounded-[16px] flex justify-between text-black text-[20px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className={`rounded w-[50%] flex justify-center items-center ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          aria-label="قبلی"
        >
          <IoIosArrowForward />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className={`rounded w-[50%] flex justify-center items-center  ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          aria-label="بعدی"
        >
          <IoIosArrowBack />
        </button>
      </div>
  )
}

export default NextPrev