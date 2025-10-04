import React, { Fragment } from "react";
import { SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const HeroSlide = ({ title, description, image }: Props) => {
  return (
    <Fragment>
      <div className="absolute top-0 right-0 bg-[var(--background)] h-[50%] md:h-[40%] w-[60%] lg:w-[50%] rounded-[0_35px] select-none">
        <div className="w-full h-full relative">
          {/* برای چپ بالا */}
          <div className="absolute left-0 top-0 ml-[-30px]  border-l-[30px] border-l-transparent border-t-[30px] border-t-[#fff]"></div>
          <div className="absolute left-0 top-0 ml-[-30px]  rounded-[0px_90px_0_0] bg-[#ffe9f6] h-[30px] w-[30px]"></div>
          {/* برای راست پایین */}
          <div className="absolute right-0 bottom-0 mb-[-30px]  border-l-[30px] border-l-transparent border-t-[30px] border-t-[#fff]"></div>
          <div className="absolute right-0 bottom-0 mb-[-30px]  rounded-[0px_90px_0_0] bg-[#ffe9f6] h-[30px] w-[30px]"></div>
          <p className="w-full h-full box-border flex text-center items-center text-[23px] lg:text-[30px] px-[10px] sm:px-[20px] font-[shabnamBold]">
            {title}
          </p>
        </div>
      </div>
      <div className="absolute bottom-[0px] md:bottom-10 right-0 h-[40%] md:w-[60%]  flex flex-col justify-center md:justify-between pr-[40px] select-none">
        <p className="text-[17px] md:block hidden text-[#141D26] font-[shabnamThin] leading-[30px]">
          {description}
        </p>
        <div>
          <button className="group text-[16px] font-[shabnamMedium] text-[var(--primary-foreground)] flex items-center gap-[20px] cursor-pointer">
            <div className="bg-[var(--primary)] group-hover:bg-[var(--background)] group-hover:text-[var(--primary)] duration-300  p-[13px_20px] rounded-[15px]">
              <span className="font-[shabnamBold]">مشاهده جزییات</span> بیشتر
            </div>
            <div className="bg-[color-mix(in_srgb,_var(--primary)_5%,_white_100%)] group-hover:bg-[var(--primary)] duration-300 rounded-[15px] size-[50px] flex justify-center items-center">
              <div className="bg-[var(--primary)] group-hover:bg-[var(--background)] group-hover:text-[var(--primary)] duration-300 text-[22px] p-[4px] rounded-full">
                <IoIosArrowBack />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-[170px] sm:bottom-0 left-0 ml-[40px] h-[100%] w-[40%] flex justify-center items-end ">
        <Image src={image} alt="" className="w-[400px] mb-[-30px]" />
      </div>
    </Fragment>
  );
};

export default HeroSlide;
