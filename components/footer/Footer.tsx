"use client";

import React from "react";

import AboutUs from "./AboutUs";
import Category from "./Category";
import Cerrtificates from "./Cerrtificates";
import { useMediaQuery } from "react-responsive";
import Applications from "./Applications";
import CopyRight from "./CopyRight";
import Logo from "./Logo";
import TitleFooterSeo from "./TitleFooterSeo";

const Footer = () => {
  return (
    <footer className=" bg-[var(--primary)]  relative">
      {/* 1 */}
      <div className="w-full h-[100px] bg-[var(--primary)] relative flex items-center">
        <TitleFooterSeo />
        <div className="h-[100%] md:mr-[20%] right-[50%] md:right-0 translate-x-[50%] md:translate-0 w-[200px] relative">
          <Logo />
        </div>
      </div>
      {/* 2 */}
      <div className="w-full h-auto bg-[var(--background)] rounded-t-[30px]">
        <div className="container mx-auto h-[85%]  relative  flex flex-wrap gap-[40px] pb-[40px]">
          <div className="  mx-auto">
            <AboutUs />
          </div>
          <div>
            <Category />
          </div>
          <div className=" mx-auto flex flex-col gap-5 justify-around">
            <Cerrtificates />
          </div>
        </div>

        <div className="h-auto py-8 bg-[#f2f6fc] mb-[40px]">
          <Applications />
        </div>

        {/* کپی رایت */}
        <div className="w-full rounded-t-[30px] bg-[#ffe9f6] h-[100px] flex justify-center items-center font-[shabnamThin] border-t-1 border-[var(--primary)]">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
