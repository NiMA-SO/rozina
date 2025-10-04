import React, { Fragment } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'



interface Props{
    isBeginning:boolean,
    hover:boolean,
    swiperRef: any,
    isEnd:boolean
}
const NextPrev = ({isBeginning,hover,swiperRef,isEnd}: Props) => {
  return (
    <Fragment>
        {isBeginning == false && hover && (
        <button
          onClick={() => swiperRef.current?.slideTo(0, 600)}
          disabled={isBeginning}
          className={` size-[50px] z-10 rounded-[30px] bg-white flex justify-center items-center absolute right-3 md:right-0 mr-[-10px] md:mr-[-25px] top-[50%] translate-y-[-50%] shadow-[0_8px_24px_rgba(149,157,165,0.2)] ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          aria-label="قبلی"
        >
          <IoIosArrowForward className="text-[20px]" />
        </button>
      )}
      {isEnd == false && hover && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className={` size-[50px] z-10 rounded-[30px] bg-white flex justify-center items-center absolute left-3  md:left-0 top-[50%] ml-[-10px] md:ml-[-25px] translate-y-[-50%] shadow-[0_8px_24px_rgba(149,157,165,0.2)]  ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          aria-label="بعدی"
        >
          <IoIosArrowBack className="text-[20px]" />
        </button>
      )}
    </Fragment>
  )
}

export default NextPrev