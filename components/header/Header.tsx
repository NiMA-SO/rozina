import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="w-full h-[140px] sticky top-0  bg-background/95 backdrop-blur-md border-t-3 border-[var(--primary)]">
      <nav className="container h-full mx-auto flex justify-between items-center px-5 ">
        <div className=" h-[40px] w-[60%] flex gap-3.5 items-center justify-center">
          <Logo />
          <Menu />
          <SearchBar />
        </div>
        <div className=" h-[40px] w-[30%] flex justify-center gap-6 items-center">
          <LoginBtn />
          <CartBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
