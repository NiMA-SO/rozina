"use client";
import BottomNavigation from "./BottomNavigation";
import TopNavigation from "./TopNavigation";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
function useIsDesktop(minWidth = 1024) {
  return useMediaQuery({ query: `(min-width: ${minWidth}px)` });
}
const SiteHeader: React.FC = () => {
  return (
    <Fragment>
      <header className="w-full font-[shabnamThin]">
        {/* Top navigation (logo, search, actions) */}
        <div
          className="w-full h-[100px] lg:h-[140px] flex items-center border-t-3 border-[var(--primary)] bg-[#f2f6fc] lg:bg-[var(--background)]"
        >
          <TopNavigation  />
        </div>
      </header>

      {/* Sticky lower navigation (desktop shows full nav; mobile shows compact bar) */}
      <div className="w-full h-[80px] sticky top-0 left-0 bg-white z-[10000] mb-[20px] shadow-[0px_6px_10px_0px_rgba(255,0,199,0.07)]">
        <BottomNavigation />
      </div>
    </Fragment>
  );
};

export default SiteHeader;
