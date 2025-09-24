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

const BrandSwier = () => {
  // ref برای ذخیرهٔ instance سوایپر
  const swiperRef = useRef<any>(null);

  // استیت برای غیرفعال/فعال کردن دکمه‌ها (اختیاری ولی مفید)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <section
      className="w-full h-[180px] rounded-[30px] border-1 border-[var(--border)] my-[20px] pb-[20px] flex flex-col justify-between relative border-b-[var(--primary)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
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
      <div className="w-full h-[40px] bg-[var(--primary)] text-[var(--primary-foreground)] rounded-t-[30px] font-[shabnamBold] flex justify-center items-center">برند ها</div>
      <div className="w-full h-[100px] px-[30px]">
        <Swiper
          // spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1150: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 500 }}
          grabCursor={true}
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
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img1} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img2} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img3} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img4} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img5} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img6} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img7} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[70%] md:w-[45%] h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img8} alt="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-full">
            <div className="w-[47%]  md:w-[45%]h-full flex flex-col justify-center items-center mx-auto">
              <Image src={img9} alt="" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BrandSwier;
