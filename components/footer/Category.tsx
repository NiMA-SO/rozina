import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
const Category = () => {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <header className="flex items-center gap-3 mb-4">
        <div className="size-[50px] bg-[#ffe9f6] flex justify-center items-center rounded-full">
            <div className=" size-[70%] rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-[25px] flex justify-center items-center mb-[2px] ml-[1px]">
                <BiCategory aria-hidden />
            </div>
            
        </div>
        <h2 className="text-xl font-[shabnamMedium] hover:text-[var(--primary)] duration-300 cursor-pointer">دسته بندی ها</h2>
      </header>

      <ul className="mt-[30px] flex flex-col gap-4 font-[shabnamThin] pr-5">
        <li className="font-[shabnamLight] hover:text-[var(--primary)] duration-300 cursor-pointer">
          <Link href={''}>لوازم آرایشی</Link>
        </li>
        <li className="font-[shabnamLight] hover:text-[var(--primary)] duration-300 cursor-pointer">
          <Link href={''}>لوازم آرایشی</Link>
        </li>
        <li className="font-[shabnamLight] hover:text-[var(--primary)] duration-300 cursor-pointer">
          <Link href={''}>لوازم آرایشی</Link>
        </li>
        <li className="font-[shabnamLight] hover:text-[var(--primary)] duration-300 cursor-pointer">
          <Link href={''}>لوازم آرایشی</Link>
        </li>
      </ul>
    </section>
  );
};

export default Category;
