"use client";
import React, { useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCards,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "./../../public/heroImage/1.png";
import Img2 from "./../../public/heroImage/2.png";
import Img3 from "./../../public/heroImage/3.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  // ref برای ذخیرهٔ instance سوایپر
  const swiperRef = useRef<any>(null);

  // استیت برای غیرفعال/فعال کردن دکمه‌ها (اختیاری ولی مفید)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
   const md = useMediaQuery({ query: "(min-width: 768px)" });

  const heroData: {
    title: string;
    description: string;
    image: string | StaticImageData;
  }[] = [
    {
      title: "بهترین اسپری های مردانه ایرانی و خارجی در قالب مهرنوش",
      description:
        "فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها",
      image: Img1,
    },
    {
      title: "بهترین شامپو های بدن و مو ایرانی و خارجی در قالب مهرنوش",
      description:
        "فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها",
      image: Img2,
    },
    {
      title: "لوسین های خارجی برای بانوان بصورت کاملا گیاهی و طبیعی",
      description:
        "فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها",
      image: Img3,
    },
  ];

  return (
    <section
      className="h-[500px] w-full overflow-y-visible overflow-x-hidden relative "
      id="heroContainer"
    >
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
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={1}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          // نگهداری reference برای استفاده در دکمه‌ها
          swiperRef.current = swiper;
          // اولیه‌سازی وضعیت (در صورت شروع در اولین اسلاید)
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          // آپدیت وضعیت دکمه‌ها هنگام تغییر اسلاید
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        effect="coverflow"
        className="h-[400px] rounded-[35px] mt-[30px] "
        id="heroSwiper"
      >
        {heroData.map((item, index) => (
          <SwiperSlide className="bg-[#ffe9f6] rounded-[35px] relative " key={index}>
            <div className="absolute top-0 right-0 bg-[var(--background)] h-[50%] md:h-[40%] w-[60%] lg:w-[50%] rounded-[0_35px] select-none">
              <div className="w-full h-full relative">
                {/* برای چپ بالا */}
                <div className="absolute left-0 top-0 ml-[-30px]  border-l-[30px] border-l-transparent border-t-[30px] border-t-[#fff]"></div>
                <div className="absolute left-0 top-0 ml-[-30px]  rounded-[0px_90px_0_0] bg-[#ffe9f6] h-[30px] w-[30px]"></div>
                {/* برای راست پایین */}
                <div className="absolute right-0 bottom-0 mb-[-30px]  border-l-[30px] border-l-transparent border-t-[30px] border-t-[#fff]"></div>
                <div className="absolute right-0 bottom-0 mb-[-30px]  rounded-[0px_90px_0_0] bg-[#ffe9f6] h-[30px] w-[30px]"></div>
                <p className="w-full h-full box-border flex text-center items-center text-[23px] lg:text-[30px] px-[10px] sm:px-[20px] font-[shabnamBold]">
                  {item.title}
                </p>
              </div>
            </div>
            <div className="absolute bottom-[0px] md:bottom-10 right-0 h-[40%] md:w-[60%]  flex flex-col justify-center md:justify-between pr-[40px] select-none">
              {md&&<p className="text-[17px] text-[#141D26] font-[shabnamThin] leading-[30px]">
                {item.description}
              </p>}
              <div>
                <button className="group text-[16px] font-[shabnamMedium] text-[var(--primary-foreground)] flex items-center gap-[20px] cursor-pointer">
                  <div className="bg-[var(--primary)] group-hover:bg-[var(--background)] group-hover:text-[var(--primary)] duration-300  p-[13px_20px] rounded-[15px]">
                    <span className="font-[shabnamBold]">مشاهده جزییات</span>{" "}
                    بیشتر
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
              <Image src={item.image} alt="" className="w-[400px] mb-[-30px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
