"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperImage from "./../../public/swiper.jpg";
import SwiperBgImage from "./../../public/4545656.png";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SwiperOfferA = () => {
  // ref برای ذخیرهٔ instance سوایپر
  const swiperRef = useRef<any>(null);

  // استیت برای غیرفعال/فعال کردن دکمه‌ها (اختیاری ولی مفید)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <section
      className="w-full h-[500px] my-[40px] bg-no-repeat bg-bottom relative"
      style={{
        backgroundImage: `url(${SwiperBgImage?.src ?? SwiperBgImage})`,
        backgroundPosition: "center 85%", // تصویر رو پایین‌تر می‌بره (0%=top,100%=bottom)
        backgroundSize: "auto 150% ",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={` size-[50px] z-10 rounded-[30px] bg-white flex justify-center items-center absolute right-3 md:right-0 top-[50%] translate-y-[-50%] shadow-[0_8px_24px_rgba(149,157,165,0.2)] ${
              isBeginning
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
            aria-label="قبلی"
          >
            <IoIosArrowForward className="text-[20px]" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={` size-[50px] z-10 rounded-[30px] bg-white flex justify-center items-center absolute left-3  md:left-0 top-[50%] translate-y-[-50%] shadow-[0_8px_24px_rgba(149,157,165,0.2)]  ${
              isEnd
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 cursor-pointer"
            }`}
            aria-label="بعدی"
          >
            <IoIosArrowBack className="text-[20px]" />
          </button>
        </>
      )}
      <Swiper
        // spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2},
          900: { slidesPerView: 3},
          1150: { slidesPerView: 4},
        }}
        // navigation={true}
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
        className=" w-full h-[550px] px-[100px] "
      >
        <SwiperSlide className=" h-full flex justify-center items-center  min-w-[320px] p-[20px] cursor-pointer mx-auto">
          <div className=" bg-white h-[80%] w-full rounded-[30px] shadow-[0_2px_15px_rgba(124,79,126,0.11)] relative">
            <div className="absolute w-[40%] h-[3px] bg-[var(--primary)] top-0  left-[50%] translate-x-[-50%] shadow-[0_1px_5px_0px_var(--primary)] rounded-full"></div>
            <div className="h-[60%] rounded-t-[30px] flex justify-center items-center">
              <Image src={SwiperImage} alt="" className="h-full w-[auto]" />
            </div>
            <div className="py-[10px] px-[30px] h-[70px]">
              <p className="font-[shabnamBold] leading-[25px]">
                رژ لب مایع مای سری Black Diamond مدل Perfection Matt
              </p>
            </div>
            <div className="h-[70px] relative">
              <div className="absolute w-[3PX] h-[90%] bg-[var(--primary)] left-0 shadow-[1px_0px_5px_0px_var(--primary)] rounded-full"></div>
              <div className="w-full  h-[90%] grid grid-cols-2">
                <div className="col-span-1 flex flex-col  px-[20px] ">
                  <span className=" line-through font-[shabnamThin]  h-[50%] flex items-center">
                    255000
                  </span>
                  <span className=" font-[shabnamBold]  h-[50%] flex items-center gap-1.5">
                    <span>255000</span>
                    <span className="text-[var(--primary)]">تومان</span>
                  </span>
                </div>
                <div className="col-span-1  px-[30px] flex flex-col">
                  <span className="flex justify-end items-center h-[50%]">
                    <span className="w-[50px] h-full flex justify-center items-center bg-[var(--primary)] rounded-[90px] pl-0.5 text-[var(--primary-foreground)]">
                      85%
                    </span>
                  </span>
                  <span className="flex justify-end items-center h-[50%] font-[shabnamThin]">
                    تخفیف
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full flex justify-center items-center  min-w-[320px] p-[20px] cursor-pointer mx-auto">
          <div className=" bg-white h-[80%] w-full rounded-[30px] shadow-[0_2px_15px_rgba(124,79,126,0.11)] relative">
            <div className="absolute w-[40%] h-[3px] bg-[var(--primary)] top-0  left-[50%] translate-x-[-50%] shadow-[0_1px_5px_0px_var(--primary)] rounded-full"></div>
            <div className="h-[60%] rounded-t-[30px] flex justify-center items-center">
              <Image src={SwiperImage} alt="" className="h-full w-[auto]" />
            </div>
            <div className="py-[10px] px-[30px] h-[70px]">
              <p className="font-[shabnamBold] leading-[25px]">
                رژ لب مایع مای سری Black Diamond مدل Perfection Matt
              </p>
            </div>
            <div className="h-[70px] relative">
              <div className="absolute w-[3PX] h-[90%] bg-[var(--primary)] left-0 shadow-[1px_0px_5px_0px_var(--primary)] rounded-full"></div>
              <div className="w-full  h-[90%] grid grid-cols-2">
                <div className="col-span-1 flex flex-col  px-[20px] ">
                  <span className=" line-through font-[shabnamThin]  h-[50%] flex items-center">
                    255000
                  </span>
                  <span className=" font-[shabnamBold]  h-[50%] flex items-center gap-1.5">
                    <span>255000</span>
                    <span className="text-[var(--primary)]">تومان</span>
                  </span>
                </div>
                <div className="col-span-1  px-[30px] flex flex-col">
                  <span className="flex justify-end items-center h-[50%]">
                    <span className="w-[50px] h-full flex justify-center items-center bg-[var(--primary)] rounded-[90px] pl-0.5 text-[var(--primary-foreground)]">
                      85%
                    </span>
                  </span>
                  <span className="flex justify-end items-center h-[50%] font-[shabnamThin]">
                    تخفیف
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full flex justify-center items-center  min-w-[320px] p-[20px] cursor-pointer mx-auto">
          <div className=" bg-white h-[80%] w-full rounded-[30px] shadow-[0_2px_15px_rgba(124,79,126,0.11)] relative">
            <div className="absolute w-[40%] h-[3px] bg-[var(--primary)] top-0  left-[50%] translate-x-[-50%] shadow-[0_1px_5px_0px_var(--primary)] rounded-full"></div>
            <div className="h-[60%] rounded-t-[30px] flex justify-center items-center">
              <Image src={SwiperImage} alt="" className="h-full w-[auto]" />
            </div>
            <div className="py-[10px] px-[30px] h-[70px]">
              <p className="font-[shabnamBold] leading-[25px]">
                رژ لب مایع مای سری Black Diamond مدل Perfection Matt
              </p>
            </div>
            <div className="h-[70px] relative">
              <div className="absolute w-[3PX] h-[90%] bg-[var(--primary)] left-0 shadow-[1px_0px_5px_0px_var(--primary)] rounded-full"></div>
              <div className="w-full  h-[90%] grid grid-cols-2">
                <div className="col-span-1 flex flex-col  px-[20px] ">
                  <span className=" line-through font-[shabnamThin]  h-[50%] flex items-center">
                    255000
                  </span>
                  <span className=" font-[shabnamBold]  h-[50%] flex items-center gap-1.5">
                    <span>255000</span>
                    <span className="text-[var(--primary)]">تومان</span>
                  </span>
                </div>
                <div className="col-span-1  px-[30px] flex flex-col">
                  <span className="flex justify-end items-center h-[50%]">
                    <span className="w-[50px] h-full flex justify-center items-center bg-[var(--primary)] rounded-[90px] pl-0.5 text-[var(--primary-foreground)]">
                      85%
                    </span>
                  </span>
                  <span className="flex justify-end items-center h-[50%] font-[shabnamThin]">
                    تخفیف
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full flex justify-center items-center  min-w-[320px] p-[20px] cursor-pointer mx-auto">
          <div className=" bg-white h-[80%] w-full rounded-[30px] shadow-[0_2px_15px_rgba(124,79,126,0.11)] relative">
            <div className="absolute w-[40%] h-[3px] bg-[var(--primary)] top-0  left-[50%] translate-x-[-50%] shadow-[0_1px_5px_0px_var(--primary)] rounded-full"></div>
            <div className="h-[60%] rounded-t-[30px] flex justify-center items-center">
              <Image src={SwiperImage} alt="" className="h-full w-[auto]" />
            </div>
            <div className="py-[10px] px-[30px] h-[70px]">
              <p className="font-[shabnamBold] leading-[25px]">
                رژ لب مایع مای سری Black Diamond مدل Perfection Matt
              </p>
            </div>
            <div className="h-[70px] relative">
              <div className="absolute w-[3PX] h-[90%] bg-[var(--primary)] left-0 shadow-[1px_0px_5px_0px_var(--primary)] rounded-full"></div>
              <div className="w-full  h-[90%] grid grid-cols-2">
                <div className="col-span-1 flex flex-col  px-[20px] ">
                  <span className=" line-through font-[shabnamThin]  h-[50%] flex items-center">
                    255000
                  </span>
                  <span className=" font-[shabnamBold]  h-[50%] flex items-center gap-1.5">
                    <span>255000</span>
                    <span className="text-[var(--primary)]">تومان</span>
                  </span>
                </div>
                <div className="col-span-1  px-[30px] flex flex-col">
                  <span className="flex justify-end items-center h-[50%]">
                    <span className="w-[50px] h-full flex justify-center items-center bg-[var(--primary)] rounded-[90px] pl-0.5 text-[var(--primary-foreground)]">
                      85%
                    </span>
                  </span>
                  <span className="flex justify-end items-center h-[50%] font-[shabnamThin]">
                    تخفیف
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full flex justify-center items-center  min-w-[320px] p-[20px] cursor-pointer mx-auto">
          <div className=" bg-white h-[80%] w-full rounded-[30px] shadow-[0_2px_15px_rgba(124,79,126,0.11)] relative">
            <div className="absolute w-[40%] h-[3px] bg-[var(--primary)] top-0  left-[50%] translate-x-[-50%] shadow-[0_1px_5px_0px_var(--primary)] rounded-full"></div>
            <div className="h-[60%] rounded-t-[30px] flex justify-center items-center">
              <Image src={SwiperImage} alt="" className="h-full w-[auto]" />
            </div>
            <div className="py-[10px] px-[30px] h-[70px]">
              <p className="font-[shabnamBold] leading-[25px]">
                رژ لب مایع مای سری Black Diamond مدل Perfection Matt
              </p>
            </div>
            <div className="h-[70px] relative">
              <div className="absolute w-[3PX] h-[90%] bg-[var(--primary)] left-0 shadow-[1px_0px_5px_0px_var(--primary)] rounded-full"></div>
              <div className="w-full  h-[90%] grid grid-cols-2">
                <div className="col-span-1 flex flex-col  px-[20px] ">
                  <span className=" line-through font-[shabnamThin]  h-[50%] flex items-center">
                    255000
                  </span>
                  <span className=" font-[shabnamBold]  h-[50%] flex items-center gap-1.5">
                    <span>255000</span>
                    <span className="text-[var(--primary)]">تومان</span>
                  </span>
                </div>
                <div className="col-span-1  px-[30px] flex flex-col">
                  <span className="flex justify-end items-center h-[50%]">
                    <span className="w-[50px] h-full flex justify-center items-center bg-[var(--primary)] rounded-[90px] pl-0.5 text-[var(--primary-foreground)]">
                      85%
                    </span>
                  </span>
                  <span className="flex justify-end items-center h-[50%] font-[shabnamThin]">
                    تخفیف
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full flex justify-center items-center  min-w-[320px] p-[20px] cursor-pointer mx-auto">
          <div className=" bg-white h-[80%] w-full rounded-[30px] shadow-[0_2px_15px_rgba(124,79,126,0.11)] relative">
            <div className="absolute w-[40%] h-[3px] bg-[var(--primary)] top-0  left-[50%] translate-x-[-50%] shadow-[0_1px_5px_0px_var(--primary)] rounded-full"></div>
            <div className="h-[60%] rounded-t-[30px] flex justify-center items-center">
              <Image src={SwiperImage} alt="" className="h-full w-[auto]" />
            </div>
            <div className="py-[10px] px-[30px] h-[70px]">
              <p className="font-[shabnamBold] leading-[25px]">
                رژ لب مایع مای سری Black Diamond مدل Perfection Matt
              </p>
            </div>
            <div className="h-[70px] relative">
              <div className="absolute w-[3PX] h-[90%] bg-[var(--primary)] left-0 shadow-[1px_0px_5px_0px_var(--primary)] rounded-full"></div>
              <div className="w-full  h-[90%] grid grid-cols-2">
                <div className="col-span-1 flex flex-col  px-[20px] ">
                  <span className=" line-through font-[shabnamThin]  h-[50%] flex items-center">
                    255000
                  </span>
                  <span className=" font-[shabnamBold]  h-[50%] flex items-center gap-1.5">
                    <span>255000</span>
                    <span className="text-[var(--primary)]">تومان</span>
                  </span>
                </div>
                <div className="col-span-1  px-[30px] flex flex-col">
                  <span className="flex justify-end items-center h-[50%]">
                    <span className="w-[50px] h-full flex justify-center items-center bg-[var(--primary)] rounded-[90px] pl-0.5 text-[var(--primary-foreground)]">
                      85%
                    </span>
                  </span>
                  <span className="flex justify-end items-center h-[50%] font-[shabnamThin]">
                    تخفیف
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperOfferA;
