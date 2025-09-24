import React from "react";
import img1 from "./../../public/certificates/credit-union.png";
import img2 from "./../../public/certificates/logo.png";
import img3 from "./../../public/certificates/samandehi-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

const Cerrtificates = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6">
        <div className="bg-[#f2f6fc] w-[120px] rounded-[30px] py-2 flex justify-center items-center">
          <Image src={img1} alt="" />{" "}
        </div>
        <div className="bg-[#f2f6fc] w-[120px] rounded-[30px] py-2 flex justify-center items-center">
          <Image src={img2} alt="" />{" "}
        </div>
        <div className="bg-[#f2f6fc] w-[120px] rounded-[30px] py-2 flex justify-center items-center">
          <Image src={img3} alt="" />{" "}
        </div>
      </div>
      <div className="flex justify-around flex-wrap w-full">
        <Link href={"#"}>
          <div className="size-[50px] group bg-[#ffe9f6] hover:bg-[var(--primary)] duration-300 flex justify-center items-center rounded-full">
            <div className=" size-[70%] rounded-full bg-[var(--primary)] group-hover:bg-[var(--background)] duration-300 text-[var(--primary-foreground)] group-hover:text-[var(--primary)]  text-[25px] flex justify-center items-center ">
              <FaWhatsapp />
            </div>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="size-[50px] group bg-[#ffe9f6] hover:bg-[var(--primary)] duration-300 flex justify-center items-center rounded-full">
            <div className=" size-[70%] rounded-full bg-[var(--primary)] group-hover:bg-[var(--background)] duration-300 text-[var(--primary-foreground)] group-hover:text-[var(--primary)]  text-[25px] flex justify-center items-center ">
              <FaInstagram />
            </div>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="size-[50px] group bg-[#ffe9f6] hover:bg-[var(--primary)] duration-300 flex justify-center items-center rounded-full">
            <div className=" size-[70%] rounded-full bg-[var(--primary)] group-hover:bg-[var(--background)] duration-300 text-[var(--primary-foreground)] group-hover:text-[var(--primary)]  text-[25px] flex justify-center items-center ">
              <FaYoutube />
            </div>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="size-[50px] group bg-[#ffe9f6] hover:bg-[var(--primary)] duration-300 flex justify-center items-center rounded-full">
            <div className=" size-[70%] rounded-full bg-[var(--primary)] group-hover:bg-[var(--background)] duration-300 text-[var(--primary-foreground)] group-hover:text-[var(--primary)]  text-[25px] flex justify-center items-center ">
              <FaTelegramPlane className="mr-1" />
            </div>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="size-[50px] group bg-[#ffe9f6] hover:bg-[var(--primary)] duration-300 flex justify-center items-center rounded-full">
            <div className=" size-[70%] rounded-full bg-[var(--primary)] group-hover:bg-[var(--background)] duration-300 text-[var(--primary-foreground)] group-hover:text-[var(--primary)]  text-[25px] flex justify-center items-center ">
              <SiAparat />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cerrtificates;
