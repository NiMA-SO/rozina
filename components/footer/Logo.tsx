import React from "react";
import logo from "./../../public/logo/favicon.png";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="absolute left-[50%] translate-x-[-50%] bottom-0 bg-white h-[60%] w-[80px] rounded-t-[60px] p-2.5">
        <Image src={logo} alt="" className="w-full mx-auto" />
      </div>
      {/* بروی راسته 😂 */}
      <div className="size-[50px] bg-white absolute bottom-0 mr-[10px]   "></div>
      <div className="size-[50px] bg-[var(--primary)] absolute bottom-0 mr-[10px] rounded-bl-[25px]   "></div>
      {/* بروی چپه😍 */}
      <div className="size-[50px] bg-white absolute bottom-0 left-[10px]   "></div>
      <div className="size-[50px] bg-[var(--primary)] absolute bottom-0 left-[10px] rounded-br-[25px]   "></div>
    </>
  );
};

export default Logo;
