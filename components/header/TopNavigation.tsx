"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LoginBtn from "./LoginBtn";
import CartBtn from "./CartBtn";

function useIsDesktop(minWidth = 1024): boolean {
  return !!useMediaQuery({ query: `(min-width: ${minWidth}px)` });
}

type TopNavigationProps = {
  isDesktop: boolean;
};

const TopNavigation: React.FC<TopNavigationProps> = ({ isDesktop }) => {
  return (
    <nav
      className="container h-[80px] lg:h-[130px] mx-auto flex items-center px-5"
      aria-label="Primary site navigation"
    >
      <div
        className={`h-full ${
          isDesktop ? "w-[60%]" : "w-full"
        } flex gap-[40px] items-center`}
      >
        <Logo />
        <SearchBar />
      </div>

      {isDesktop && (
        <div className="h-[40px] w-[30%] flex justify-end gap-6 items-center">
          <LoginBtn />
          <CartBtn />
        </div>
      )}
    </nav>
  );
};


export default TopNavigation;