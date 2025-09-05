"use client";

import Link from "next/link";
import { ComponentProps, useEffect, useState } from "react";
import HamburgerMenu from "./hamburger-menu";
import HeaderCTAs from "./header-ctas";
import HeaderLinks from "./header-links";
import Logo from "./logo";

type HeaderProps = ComponentProps<"header">;

const Header = ({ className, ...props }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`sticky top-0 z-50 text-zinc-800 ${
        scrolled ? "shadow-md" : "bg-transparent"
      } ${className || ""}`}
      {...props}
    >
      <nav className="mx-auto flex max-w-[1080px] items-center px-4 py-2">
        <div className="flex flex-1 md:justify-start">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <ul className="hidden md:flex md:justify-center md:gap-10">
          <HeaderLinks />
        </ul>
        <div className="hidden gap-4 md:flex md:flex-1 md:items-center md:justify-end">
          <HeaderCTAs />
        </div>
        <div className="flex md:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
