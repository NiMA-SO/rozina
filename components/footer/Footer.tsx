'use client'
import Image from "next/image";
import React from "react";
import logo from "./../../public/logo/favicon.png";
import AboutUs from "./AboutUs";
import Category from "./Category";
import Cerrtificates from "./Cerrtificates";
import { FiPhoneCall } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoPwa } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";


const Footer = () => {
   const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <footer className=" bg-[var(--primary)]  relative">
      {/* 1 */}
      <div className="w-full h-[100px] bg-[var(--primary)] relative flex items-center">
        {lg && <div className="lg:w-[400px] xl:w-[600px] 2xl:w-auto h-[40px] absolute left-0 lg:left-[200px] flex items-center">
          <p className="text-md font-[shabnamThin] text-[var(--primary-foreground)]">
            <strong className="font-[shabnamBold]">رزینا</strong> | فروشگاه
            اینترنتی لوازم آرایشی، عطر و محصولات مراقبت پوست و مو — خرید اصل با
            ارسال سریع
          </p>
        </div>}
        <div className="h-[100%] md:mr-[20%] right-[50%] md:right-0 translate-x-[50%] md:translate-0 w-[200px] relative">
          <div className="absolute left-[50%] translate-x-[-50%] bottom-0 bg-white h-[60%] w-[80px] rounded-t-[60px] p-2.5">
            <Image src={logo} alt="" className="w-full mx-auto" />
          </div>
          {/* بروی راسته 😂 */}
          <div className="size-[50px] bg-white absolute bottom-0 mr-[10px]   "></div>
          <div className="size-[50px] bg-[var(--primary)] absolute bottom-0 mr-[10px] rounded-bl-[25px]   "></div>
          {/* بروی چپه😍 */}
          <div className="size-[50px] bg-white absolute bottom-0 left-[10px]   "></div>
          <div className="size-[50px] bg-[var(--primary)] absolute bottom-0 left-[10px] rounded-br-[25px]   "></div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full h-auto bg-[var(--background)] rounded-t-[30px]">
        <div className="container mx-auto h-[85%]  relative  flex flex-wrap gap-[40px] pb-[40px] justify-center">
          <div className="  mx-auto">
            <AboutUs />
          </div>
          <div className="mx-auto">
            <Category />
          </div>
          <div className=" mx-auto flex flex-col gap-5 justify-around">
            <Cerrtificates />
          </div>
        </div>

        <div className="h-auto py-8 bg-[#f2f6fc] mb-[40px]">
          <div className="container  mx-auto h-full flex justify-between items-center gap-9 flex-wrap">
            <div className="flex justify-center items-center w-[500px] gap-6 mx-auto px-[10px]">
              <div className="group w-[200px] px-1 h-[60px] bg-[var(--background)] shadow-sm rounded-[20px] flex justify-around items-center">
                <div className="bg-[#ffe9f6] group-hover:bg-[var(--primary)] duration-300 text-[var(--primary)] group-hover:text-[var(--primary-foreground)] size-[35px] rounded-full flex justify-center items-center">
                  <FaGooglePlay />
                </div>
                <span className="font-[shabnamThin]">دانلود از google play</span>
              </div>
              <div className="group w-[200px] px-1 h-[60px] bg-[var(--background)] shadow-sm rounded-[20px] flex justify-around items-center">
                <div className="bg-[#ffe9f6] group-hover:bg-[var(--primary)] duration-300 text-[var(--primary)] group-hover:text-[var(--primary-foreground)] size-[35px] rounded-full flex justify-center items-center">
                  <IoLogoPwa />
                </div>
                <span className="font-[shabnamThin]">نصب PWA</span>
              </div>
            </div>
            <div className="flex justify-center items-center w-[300px] mx-auto">
              <div className="flex items-center justify-end ml-8 pt-1 text-[var(--primary)] font-[shabnamMedium]">
                <span>09335041284</span>
              </div>
              <button className="w-[130px] h-[60px] bg-[var(--primary)] rounded-[20px] flex justify-around px-[10px] items-center">
                <span className="text-[18px] text-[var(--primary-foreground)] font-[shabnamBold]">
                  شماره
                </span>
                <div className="bg-[var(--background)] text-[var(--primary)] size-[35px] flex justify-center items-center rounded-full text-[18px]">
                  <FiPhoneCall />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* کپی رایت */}
        <div className="w-full rounded-t-[30px] bg-[#ffe9f6] h-[100px] flex justify-center items-center font-[shabnamThin] border-t-1 border-[var(--primary)]">
          <div className="text-center text-[14px] md:text-[16px]">
            <div>
              © {new Date().getFullYear()} <strong>رزینا</strong>. با عشق و
              تضمین اصالت — ارسال سریع و بازگشتِ آسان.
            </div>
            <div className="mt-1">
              <span>کلیه حقوق مادی و معنوی این وب‌سایت متعلق به </span>
              <strong>رزینا</strong>
              <span> است. </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
