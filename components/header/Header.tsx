import React, { Fragment } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Fragment>
      <header className="w-full h-[140px]   border-t-3 border-[var(--primary)] z-[10000] font-[shabnamThin]">
        <nav className="container h-[130px] mx-auto flex justify-between items-center px-5 ">
          <div className=" h-[40px] w-[60%] flex gap-[40px] items-center">
            <Logo />
            <Menu />
            <SearchBar />
          </div>
          <div className=" h-[40px] w-[30%] flex justify-end gap-6 items-center">
            <LoginBtn />
            <CartBtn />
          </div>
        </nav>
        {/* bg-[var(--background)]/95 backdrop-blur-md */}
      </header>
      <div className="w-full h-[60px] sticky top-0 bg-white z-[10001] mb-[20px] shadow-[0px_6px_10px_0px_rgba(255,0,199,0.07)]">
        <Navigation />
      </div>
    </Fragment>
  );
};

export default Header;
