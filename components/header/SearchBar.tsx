"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchBar = () => {
  const [showClose, setShowClose] = useState(false);
  return (
    <div className="w-[70%] h-[60px] lg:h-[90px] px-3 bg-[var(--background)] rounded-[16px] shadow-[0_8px_24px_rgba(149,157,165,0.2)] flex items-center justify-around relative">
      <div className="h-[30px] w-[3px] absolute right-0 bg-[var(--primary)] rounded-full"></div>
      <input
        type="search"
        className="ring-0 outline-0 w-[70%] h-[40px] text-[17px]"
        placeholder="جستجو در بین محصولات"
        onFocus={() => setShowClose(true)}
        onBlur={() => setShowClose(false)}
      />
      <div className="flex items-center gap-[25px]">
        <div className="size-[35px]">
          {showClose && (
            <button className="cursor-pointer size-full flex justify-center items-center bg-[color-mix(in_srgb,_var(--foreground)_8%,_white_100%)] hover:bg-[var(--primary)] text-[color-mix(in_srgb,_var(--foreground)_70%,_white_30%)] hover:text-[var(--primary-foreground)] rounded-full duration-300">
              <IoCloseCircleOutline className="size-[20px] mr-[0.35px]" />
            </button>
          )}
        </div>
        <div className="cursor-pointer size-[50px] flex justify-center items-center bg-[color-mix(in_srgb,_var(--primary)_20%,_white_80%)] hover:bg-[var(--primary)] text-[var(--primary)] hover:text-[var(--primary-foreground)] rounded-full duration-300">
          <IoSearchSharp className="size-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
