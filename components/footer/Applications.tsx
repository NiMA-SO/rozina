import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoPwa } from "react-icons/io5";

const Applications = () => {
  return (
    <div className="container  mx-auto h-full flex justify-between items-center gap-9 flex-wrap">
      <div className="flex justify-center items-center flex-wrap w-[500px] gap-6 mx-auto px-[10px]">
        <div className="group w-[200px] px-2.5 h-[60px] bg-[var(--background)] shadow-sm rounded-[20px] flex justify-between items-center">
          <div className="bg-[#ffe9f6] group-hover:bg-[var(--primary)] duration-300 text-[var(--primary)] group-hover:text-[var(--primary-foreground)] size-[35px] rounded-full flex justify-center items-center">
            <FaGooglePlay />
          </div>
          <span className="font-[shabnamThin]">دانلود از google play</span>
        </div>
        <div className="group w-[200px] px-2.5 h-[60px] bg-[var(--background)] shadow-sm rounded-[20px] flex justify-between items-center">
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
  );
};

export default Applications;
