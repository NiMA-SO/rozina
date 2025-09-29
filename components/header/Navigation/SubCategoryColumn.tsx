import { IoIosArrowBack } from "react-icons/io";
import { NavItem as NavItemType } from "./NavItem";
const SubCategoryColumn: React.FC<{
  subItems: NavItemType[];
  activeSubItemId: string | null;
  onHoverSubItem: (id: string | null) => void;
}> = ({ subItems, activeSubItemId, onHoverSubItem }) => {
  return (
    <div className="col-span-3 border-l-2 border-[var(--border)]">
      <ul className="flex flex-col">
        {subItems.map((sub) => (
          <li
            key={sub.id}
            onMouseEnter={() => onHoverSubItem(sub.id)}
            className={`w-full h-[50px] flex items-center gap-3 py-4 px-6 cursor-pointer group relative ${
              activeSubItemId === sub.id ? "bg-[#ffe9f6]" : "hover:bg-[#fff0f8]"
            }`}
          >
            <strong
              className={`transition-colors duration-200 font-[shabnamThin] ${
                activeSubItemId === sub.id ? "text-[var(--primary)]" : ""
              }`}
            >
              {sub.label}
            </strong>

            {activeSubItemId === sub.id && (
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
  );
};


export default SubCategoryColumn;