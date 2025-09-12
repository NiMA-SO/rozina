import React from "react";
import { BiLogIn } from "react-icons/bi";

const LoginBtn = () => {
  return (
    <button className="border-[var(--primary)] border-2 w-[100px] h-[40px] rounded-[.25rem] flex justify-center items-center pb-1 gap-1.5 ">
      <BiLogIn className="mt-1 text-[20px]" />
      <b>ورود</b>
    </button>
  );
};

export default LoginBtn;
