"use client";

import React, { Fragment } from "react";
import Logo from "./Logo";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import { useMediaQuery } from "react-responsive";
import { RiMenu3Fill, RiUserLine } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <Fragment>
      <header className="w-full h-[100px] lg:h-[140px] flex items-center  border-t-3 border-[var(--primary)] bg-[#f2f6fc] lg:bg-[var(--background)] z-[10000] font-[shabnamThin]">
        <nav className="container h-[80px] lg:h-[130px] mx-auto flex justify-between items-center px-5 ">
          <div
            className={`h-full ${
              lg ? "w-[60%]" : "w-full"
            } flex gap-[40px] items-center`}
          >
            <Logo />
            <SearchBar />
          </div>
          {lg && (
            <div className=" h-[40px] w-[30%] flex justify-end gap-6 items-center">
              <LoginBtn />
              <CartBtn />
            </div>
          )}
        </nav>
        {/* bg-[var(--background)]/95 backdrop-blur-md */}
      </header>
      <div className="w-full h-[80px] sticky top-0 bg-white z-[1000] mb-[20px] shadow-[0px_6px_10px_0px_rgba(255,0,199,0.07)] ">
        {lg && <Navigation />}
        {lg == false && (
          <Link className="flex justify-between items-center mx-auto container h-full px-1.5" href={'#'}>
            <div className="p-4 text-[25px] cursor-pointer hover:text-[var(--primary-foreground)] duration-300 bg-[#f2f6fc] hover:bg-[var(--primary)] flex justify-center items-center rounded-[20px] ">
              <RiMenu3Fill />
            </div>
            <div className="h-[60px] px-[20px]  cursor-pointer duration-300 bg-[var(--primary)] flex justify-around items-center gap-2.5 rounded-[20px] shadow-[0_8px_24px_rgba(149,157,165,0.2)]">
              <span className="font-[shabnamThin] text-[var(--primary-foreground)]">ورود و عضویت</span>
              <div className="size-[35px] text-[18px] text-[var(--primary)] bg-[var(--background)] flex justify-center items-center rounded-full">
                <RiUserLine />
              </div>
            </div>
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default Header;
