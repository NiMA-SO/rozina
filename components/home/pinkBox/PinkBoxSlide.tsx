import React from 'react'
import ExpandableText from "@/components/ExpandableText";
import SwiperImage from "./../../../public/swiper.jpg";
import Image from "next/image";
const PinkBoxSlide = () => {
  return (
              <div className="w-[150px]  group cursor-pointer">
            <div className="w-full h-[150px] bg-white rounded-[30px] group-hover:rounded-[50%] duration-300 relative overflow-hidden">
              <span className="w-[35px] h-[25px] text-[12px] absolute top-[15px] right-[25px] flex justify-center items-center bg-[var(--primary)] rounded-[90px] pl-0.5 text-[var(--primary-foreground)]">
                50%
              </span>
              <Image src={SwiperImage} alt="" />
            </div>
            <h2 className="font-[shabnamMedium] m-1 text-center text-[var(--primary-foreground)]">
              <ExpandableText limitText={15}>
                کرم ضد آفتاب اچ ال مدل ویتامین E حجم 50 میلی لیتر
              </ExpandableText>
            </h2>
            <div className="py-1 grid grid-cols-2 ">
              <div className="col-span-2 flex flex-col justify-start gap-1 items-center text-[var(--primary-foreground)]">
                <span className="text-sm">
                  <span className="line-through">200,000</span>
                </span>
                <span className="flex">
                  <span className="">100,000</span>
                  <span className="font-[shabnamBold] mr-1 bg-[var(--background)] text-[var(--primary)] flex justify-center items-center px-1.5 rounded-[30px]">
                    تومان
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
  )
}

export default PinkBoxSlide