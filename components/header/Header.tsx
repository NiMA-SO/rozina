'use client'
import { useMediaQuery } from "react-responsive";
import BottomNavigation from "./BottomNavigation";
import TopNavigation from "./TopNavigation";

const SiteHeader: React.FC = () => {
  function useIsDesktop(minWidth = 1024) {
    return useMediaQuery({ query: `(min-width: ${minWidth}px)` });
  }
  const isDesktop = useIsDesktop();
  return (
    <header className="w-full z-50 font-[shabnamThin]">
      {/* Top navigation (logo, search, actions) */}
      <div className={`w-full h-[100px] lg:h-[140px] ${isDesktop ? 'flex items-center' : ''} border-t-3 border-[var(--primary)] bg-[#f2f6fc] lg:bg-[var(--background)]`}>
        <TopNavigation isDesktop={isDesktop} />
      </div>

      {/* Sticky lower navigation (desktop shows full nav; mobile shows compact bar) */}
      <div className="w-full h-[80px] sticky top-0 bg-white z-[1000] mb-[20px] shadow-[0px_6px_10px_0px_rgba(255,0,199,0.07)]">
        <BottomNavigation isDesktop={isDesktop} />
      </div>
    </header>
  );
};

export default SiteHeader;
