"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LoginBtn from "./LoginBtn";
import CartBtn from "./CartBtn";



const TopNavigation: React.FC = () => {
  return (
    <nav
      className="container h-[80px] lg:h-[130px] mx-auto flex items-center justify-between"
      aria-label="Primary site navigation"
    >
      <div className="h-full lg:w-[60%] w-full flex gap-[40px] items-center justify-between px-2">
        <Logo />
        <SearchBar />
      </div>
      <div className="h-full w-[30%] hidden lg:flex justify-end gap-6 items-center ">
        <LoginBtn />
        <CartBtn />
      </div>
    </nav>
  );
};

export default TopNavigation;
