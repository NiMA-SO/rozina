import Link from "next/link";
import React from "react";
import { RiUserLine } from "react-icons/ri";

const LoginBtn = () => {
  return (
    <Link
      className="bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] w-[80px] h-[90px] rounded-[20px] flex flex-col items-center justify-center relative"
      href={"/account"}
    >
      <div className="absolute top-0 left-[50%] translate-[-50%] w-[40%] h-[3px] bg-[var(--primary)] rounded-full"></div>
      <div className="bg-[var(--primary)] text-[var(--primary-foreground)] size-[35px] mx-auto rounded-full flex justify-center items-center pb-1 shadow-[var(--primary)_0px_30px_60px_-12px,var(--primary)_0px_18px_36px_-18px]">
        <RiUserLine />
      </div>
      <b>ورود</b>
    </Link>
  );
};

export default LoginBtn;
