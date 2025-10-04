"use client";
import React, { useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import heroData from "./HeroData";
import NextPrev from "./NextPrev";
import HeroSlide from "./HeroSlide";

const HeroSection = () => {
  // ref برای ذخیرهٔ instance سوایپر
  const swiperRef = useRef<any>(null);
  // استیت برای غیرفعال/فعال کردن دکمه‌ها (اختیاری ولی مفید)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section
      className="h-[500px] w-full overflow-y-visible overflow-x-hidden relative "
      id="heroContainer"
    >
      <NextPrev isBeginning={isBeginning} isEnd={isEnd} swiperRef={swiperRef} />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
                autoplay={{
          delay: 5000, // میلی‌ثانیه؛ 5000 = 5s
          disableOnInteraction: false, // بعد از interaction ادامه بده
          pauseOnMouseEnter: true, // وقتی موس وارد شد موقتاً قطع کن (اختیاری)
        }}
        grabCursor={true}
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
        className="h-[400px] rounded-[35px] mt-[30px] "
        id="heroSwiper"
      >
        {heroData.map((item, index) => (
          <SwiperSlide
            className="bg-[#ffe9f6] rounded-[35px] relative "
            key={index}
          >
            <HeroSlide
              description={item.description}
              image={item.image}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
