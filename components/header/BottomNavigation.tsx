import Link from "next/link";
import { RiMenu3Fill, RiUserLine } from "react-icons/ri";
import NavigationMain from "./Navigation/NavigationMain";

type BottomNavigationProps = {
  isDesktop: boolean;
};

 const BottomNavigation: React.FC<BottomNavigationProps> = ({ isDesktop }) => {
  if (isDesktop) {
    return (
      <nav aria-label="Secondary navigation" className="h-full">
        <div className="container mx-auto h-full flex items-center px-1.5">
          <NavigationMain />
        </div>
      </nav>
    );
  }

  if (isDesktop == false) return (
    <nav aria-label="Mobile quick actions" className="h-full">
      <div className="container mx-auto h-full flex items-center justify-between px-1.5">
        <button
          type="button"
          aria-label="Open menu"
          className="p-4 text-[25px] cursor-pointer hover:text-[var(--primary-foreground)] transition duration-300 bg-[#f2f6fc] hover:bg-[var(--primary)] flex justify-center items-center rounded-[20px]"
        >
          <RiMenu3Fill aria-hidden="true" />
        </button>

        <Link
          href="/account"
          className="h-[60px] px-[20px] cursor-pointer transition duration-300 bg-[var(--primary)] flex justify-around items-center gap-2.5 rounded-[20px] shadow-[0_8px_24px_rgba(149,157,165,0.2)]"
          aria-label="Sign in or register"
        >
          <span className="text-[var(--primary-foreground)]">ورود و عضویت</span>

          <div className="w-[35px] h-[35px] text-[18px] bg-[var(--background)] flex justify-center items-center rounded-full">
            <RiUserLine aria-hidden="true" />
          </div>
        </Link>
      </div>
    </nav>
  );
};


export default BottomNavigation;