import React from "react";
import {
  FaInfoCircle,
  FaHeadset,
  FaShieldAlt,
  FaShippingFast,
  FaStore,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <header className="flex items-center gap-3 mb-4">
        <FaInfoCircle className="text-[var(--primary)] w-8 h-8" aria-hidden />
        <h2 className="text-xl font-[shabnamMedium]">درباره رزینا</h2>
      </header>

      <p className="font-[shabnamThin] leading-relaxed text-justify">
        رزینا یک فروشگاه اینترنتی تخصصی در زمینه لوازم آرایشی و بهداشتی است که
        با هدف ارائه‌ی محصولات اصل و اورجینال به خانم‌ها و آقایان ایرانی
        راه‌اندازی شد. ما باور داریم که زیبایی و سلامت، حق همه است؛ به همین دلیل
        تلاش می‌کنیم مجموعه‌ای کامل از آرایشی، عطر و ادکلن، محصولات مراقبت از
        پوست و مو را با ضمانت اصالت کالا و قیمت مناسب فراهم کنیم.
      </p>

      <ul className="mt-[30px] flex gap-4 font-[shabnamThin] flex-wrap justify-center">
        <li className="flex justify-between items-center text-center flex-col gap-3  w-[150px] bg-[#ffe9f6] rounded-[30px] p-[10px_10px]">
          <div className="w-full h-[40%] flex justify-center items-center">
            <FaShieldAlt
              className="w-6 h-6 text-[var(--primary)] mt-1"
              aria-hidden
            />
          </div>
          <div className="w-full h-[60%]">
            <span>ضمانت اصالت کالا</span>
          </div>
        </li>
        <li className="flex justify-between items-center text-center flex-col gap-3  w-[150px] bg-[#ffe9f6] rounded-[30px] p-[10px_10px]">
          <div className="w-full h-[40%] flex justify-center items-center">
            <FaHeadset
              className="w-6 h-6 text-[var(--primary)] mt-1"
              aria-hidden
            />
          </div>
          <div className="w-full h-[60%]">
            <span>تیم پشتیبانی تخصصی</span>
          </div>
        </li>
        <li className="flex justify-between text-center items-center flex-col gap-3  w-[150px] bg-[#ffe9f6] rounded-[30px] p-[10px_10px]">
          <div className="w-full h-[40%] flex justify-center items-center">
            <FaShippingFast
              className="w-6 h-6 text-[var(--primary)] mt-1"
              aria-hidden
            />
          </div>
          <div className="w-full h-[60%]">
            <span>ارسال سریع به سراسر ایران</span>
          </div>
        </li>
        <li className="flex justify-between text-center items-center flex-col gap-3  w-[150px] bg-[#ffe9f6] rounded-[30px] p-[10px_10px]">
          <div className="w-full h-[40%] flex justify-center items-center">
            <FaStore
              className="w-6 h-6 text-[var(--primary)] mt-1"
              aria-hidden
            />
          </div>
          <div className="w-full h-[60%]">
            <span>تنوع بالای برندهای ایرانی و خارجی</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
