import React from "react";

const CopyRight = () => {
  return (
    <div className="text-center text-[14px] md:text-[16px]">
      <div>
        © {new Date().getFullYear()} <strong>رزینا</strong>. با عشق و تضمین
        اصالت — ارسال سریع و بازگشتِ آسان.
      </div>
      <div className="mt-1">
        <span>کلیه حقوق مادی و معنوی این وب‌سایت متعلق به </span>
        <strong>رزینا</strong>
        <span> است. </span>
      </div>
    </div>
  );
};

export default CopyRight;
