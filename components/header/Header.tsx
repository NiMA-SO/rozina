import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";

const Header = () => {
  return (
    <header className="w-full h-[70px] sticky top-0 border-b-2 border-[var(--border)] bg-background/95 backdrop-blur-md">
      <nav className="container h-full mx-auto flex justify-between items-center">
        <div className=" h-[40px] w-[70%] flex gap-3.5 items-center">
          <Logo />
          <Menu />
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
