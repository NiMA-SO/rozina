import Link from "next/link";
import { NavItem as NavItemType } from "./NavItem";
const ThirdLevelList: React.FC<{ items: NavItemType[] }> = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <p className="text-sm text-gray-600">آیتمی برای نمایش وجود ندارد.</p>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-2 list-disc list-inside mx-auto w-[90%]">
      {items.map((child) => (
        <li
          key={child.id}
          className="py-2 font-[shabnamLight] text-gray-800 hover:text-[var(--primary)]"
        >
          <Link href={child.href ?? "#"}>
            <strong>{child.label}</strong>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ThirdLevelList