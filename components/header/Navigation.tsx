"use client";
import React, { JSX, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { categories } from "./NavItem";
import { NavItem } from "./NavItem";

// یک نوع بازگشتی ساده برای هر سطح از دسته‌بندی

export default function Navigation(): JSX.Element {
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(
    null
  );
  const [hoveredSubItemId, setHoveredSubItemId] = useState<string | null>(null);

  const activeCategory =
    categories.find((c) => c.id === hoveredCategoryId) ?? null;
  const activeSubItem =
    activeCategory?.children?.find((s) => s.id === hoveredSubItemId) ?? null;

  function handleCategoryEnter(item: NavItem) {
    setHoveredCategoryId(item.id);
    // هنگامی که وارد دسته می‌شویم، اولین زیر دسته را انتخاب کن (اگر وجود داشته باشد)
    setHoveredSubItemId(item.children?.[0]?.id ?? null);
  }
  function handleCategoryLeave() {
    setHoveredCategoryId(null);
    // هنگامی که وارد دسته می‌شویم، اولین زیر دسته را انتخاب کن (اگر وجود داشته باشد)
    setHoveredSubItemId(null);
  }

  return (
    <nav
      className="container mx-auto relative h-full flex items-center"
      aria-label="Main navigation"
      onMouseLeave={handleCategoryLeave}
    >
      <ul className="flex items-center gap-5">
        {categories.map((cat) => (
          <li
            key={cat.id}
            onMouseEnter={() => handleCategoryEnter(cat)}
            className="h-10 cursor-pointer"
          >
            <Link
              href={cat.href ?? "#"}
              title={cat.label}
              className="flex items-center gap-2 px-3 rounded-2xl h-full"
            >
              {cat.icon && typeof cat.icon !== "string" && (
                <Image
                  src={cat.icon as StaticImageData}
                  alt={`آیکون ${cat.label}`}
                  width={20}
                  height={20}
                />
              )}
              <strong
                className={`font-[shabnamThin] transition-colors duration-200 ${
                  hoveredCategoryId === cat.id ? "text-[var(--primary)]" : ""
                }`}
              >
                {cat.label}
              </strong>
            </Link>
          </li>
        ))}
      </ul>

      {activeCategory && activeCategory.children && (
        <div
          className="absolute top-[100%] w-full pt-2 px-[20px]"
          onMouseLeave={() => {
            // وقتی از منو بیرون می‌رویم، فقط زیر دسته را پاک کن (می‌خواهیم دسته اصلی همچنان فعال بماند تا ani بهتر شود)
            setHoveredSubItemId(null);
          }}
        >
          <div className=" bg-white rounded-2xl shadow-md grid grid-cols-12 overflow-hidden">
            {/* ستون 1: لیست زیر دسته‌ها */}
            <div className="col-span-3 border-l-2 border-[var(--border)]">
              <ul className="flex flex-col">
                {activeCategory.children?.map((sub) => (
                  <li
                    key={sub.id}
                    onMouseEnter={() => setHoveredSubItemId(sub.id)}
                    className={`w-full h-[50px] flex items-center gap-3 py-4 px-6 cursor-pointer group relative ${
                      hoveredSubItemId === sub.id
                        ? "bg-[#ffe9f6]"
                        : "hover:bg-[#fff0f8]"
                    }`}
                  >
                    {/* {sub.icon && typeof sub.icon !== "string" && (
                      <Image src={sub.icon as StaticImageData} alt={`آیکون ${sub.label}`} width={18} height={18} />
                    )} */}

                    <strong
                      className={`transition-colors duration-200 font-[shabnamThin] ${
                        hoveredSubItemId === sub.id
                          ? "text-[var(--primary)]"
                          : ""
                      }`}
                    >
                      {sub.label}
                    </strong>

                    {hoveredSubItemId === sub.id && (
                      <div className="absolute left-0 ml-[-14px]">
                        <div className="w-[28px] h-[28px] flex justify-center items-center bg-[var(--background)] rounded-full border border-[var(--border)]">
                          <IoIosArrowBack />
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ستون 2: آیتم‌های سطح سوم */}
            <div className="col-span-6 p-4 flex justify-center items-center">
              {activeSubItem?.children ? (
                <ul className="grid grid-cols-2 gap-2 list-disc list-inside mx-auto w-[90%]">
                  {activeSubItem.children.map((child) => (
                    <li key={child.id} className="py-2 font-[shabnamLight] text-gray-800 hover:text-[var(--primary)]">
                      <Link href={child.href ?? "#"} className="">
                        <strong>{child.label}</strong>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600">
                  آیتمی برای نمایش وجود ندارد.
                </p>
              )}
            </div>

            {/* ستون 3: فضای خالی / تصویر یا تبلیغ */}
            <div className="col-span-3 p-4 flex items-center justify-center border-r-2 border-[var(--border)]">
              {/* می‌توانید اینجا تصویر، بنر یا موارد مرتبط اضافه کنید */}
              <span className="text-sm">نمایش سریع / بنر</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
