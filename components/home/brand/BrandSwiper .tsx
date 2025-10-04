"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./../../../public/brand/brightmax.webp";
import img2 from "./../../../public/brand/callista.webp";
import img3 from "./../../../public/brand/cyspersa.webp";
import img4 from "./../../../public/brand/ellaro.webp";
import img5 from "./../../../public/brand/my.webp";
import img6 from "./../../../public/brand/neuderm.webp";
import img7 from "./../../../public/brand/pharmalist.webp";
import img8 from "./../../../public/brand/racuten.webp";
import img9 from "./../../../public/brand/schon.webp";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Autoplay, FreeMode } from "swiper/modules";
import NextPrev from "./NextPrev";

const BrandSwiper = () => {
  // ref برای ذخیرهٔ instance سوایپر
  const swiperRef = useRef<any>(null);

  // استیت برای غیرفعال/فعال کردن دکمه‌ها (اختیاری ولی مفید)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hover, setHover] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <section
      className="w-full h-[180px] rounded-[30px] border-1 border-[var(--border)] my-[20px] pb-[20px] flex flex-col justify-between relative border-b-[var(--primary)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <NextPrev
        hover={hover}
        isEnd={isEnd}
        isBeginning={isBeginning}
        swiperRef={swiperRef}
      />
      <div className="w-full h-[40px] bg-[var(--primary)] text-[var(--primary-foreground)] rounded-t-[30px] font-[shabnamBold] flex justify-center items-center">
        برند ها
      </div>
      <div className="w-full h-[100px] px-[30px]">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1150: { slidesPerView: 6 },
          }}
          grabCursor={true}
          freeMode={{
            enabled: true,
            sticky: false, // مهم — غیرفعال کردن چسبندگی به نزدیک‌ترین اسلاید
            momentum: true,
            momentumRatio: 0.8,
            momentumVelocityRatio: 0.9,
          }}
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
          className="h-[100px] w-full select-none "
        >
          {images.map((item,index) => (
            <SwiperSlide className=" h-full" key={index}>
              <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
                <Image src={item} alt="" className="w-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandSwiper;
