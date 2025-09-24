import React from "react";
import pinkBoxImage from "./../../../public/pinkbox/ChatGPT Image Sep 23, 2025, 02_51_28 PM.svg";
import Image from "next/image";
import PinkBoxSlide from "./PinkBoxSlide";

const PinkBox = () => {
  const counter = [0, 1, 2, 3, 4];

  return (
    <section className="w-full bg-[var(--primary)] min-h-[300px] my-12 ">
      <div className="container mx-auto h-full grid grid-cols-6 gap-2.5">
        <div className="col-span-6 lg:col-span-2 ">
          <div className="w-[200px]  h-[80px] mx-auto relative  flex justify-center">
            <div className="h-full w-[100px] bg-[var(--background)] rounded-b-[30px] flex justify-center items-center">
              <Image src={pinkBoxImage} alt="" className="w-full ml-1" />
            </div>
            {/* راست */}
            <div className="w-[25%] h-full absolute right-0 bg-[var(--background)]"></div>
            <div className="w-[25%] h-full absolute right-0 bg-[var(--primary)] rounded-tl-[30px]"></div>
            {/* چپ */}
            <div className="w-[25%] h-full absolute left-0 bg-[var(--background)]"></div>
            <div className="w-[25%] h-full absolute left-0 bg-[var(--primary)] rounded-tr-[30px]"></div>
          </div>
          <div className="mb-[40px] flex flex-col gap-5 px-[30px] text-center lg:text-start mt-[20px]">
            <strong className="text-[40px] text-[var(--primary-foreground)] font-[shabnamBold]">
              پینگ باکس
            </strong>
            <p className="text-[16px] text-[var(--primary-foreground)] font-[shabnamThin]">
              ۵ محصول منتخب، تخفیف‌های استثنایی؛ فقط تا پایان هفته.
            </p>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4  min-h-[300px] gap-[10px] py-[30px] flex flex-wrap justify-around items-center ">
          {counter.map((item) => (
            <PinkBoxSlide key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinkBox;
