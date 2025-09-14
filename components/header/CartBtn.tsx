import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const CartBtn = () => {
  return (
    <Link
      className="group bg-[var(--primary)] hover:bg-[color-mix(in_srgb,_var(--primary)_40%,_white_60%)]  duration-300 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] w-[70px] h-[90px] rounded-[20px] flex flex-col items-center justify-center relative gap-1"
      href={"#"}
    >
      <div className="bg-[var(--background)] group-hover:bg-[var(--primary)] duration-300 size-[35px] mx-auto rounded-full flex justify-center items-center  shadow-[var(--primary)_0px_30px_60px_-12px,var(--primary)_0px_18px_36px_-18px]">
        <HiOutlineShoppingBag className="text-[var(--primary)] group-hover:text-[var(--primary-foreground)] duration-300 size-[20px]" />
      </div>
      <b className="text-[var(--primary-foreground)] text-[15px]">0 کالا</b>
    </Link>
  );
};

export default CartBtn;
