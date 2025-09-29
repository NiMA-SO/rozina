import Link from "next/link";
import { NavItem as NavItemType } from "./NavItem";
import Image, { StaticImageData } from "next/image";
import React from "react";

type NavState = {
  hoveredCategoryId: string | null;
  hoveredSubItemId: string | null;
};

const NavList: React.FC<{
  items: NavItemType[];
  hoveredCategoryId: string | null;
  onCategoryEnter: (item: NavItemType) => void;
}> = ({ items, hoveredCategoryId, onCategoryEnter }) => {
  return (
    <ul className="flex items-center gap-5">
      {items.map((cat) => (
        <li
          key={cat.id}
          onMouseEnter={() => onCategoryEnter(cat)}
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
  );
};
export default NavList;


