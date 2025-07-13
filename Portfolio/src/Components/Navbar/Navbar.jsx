import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  const navLinkStyle =
    "text-xl text-white transition-all duration-300 hover:text-cyan-400 hover:scale-105";

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative z-50">
      <span className="text-4xl font-bold tracking-wide">Portfolio</span>

      {/* Desktop & Mobile Menu */}
      <ul
        className={`${
          menu
            ? "flex flex-col items-center justify-center fixed inset-0 bg-black/60 backdrop-blur-sm z-40 space-y-8"
            : "hidden"
        } font-semibold text-center md:bg-transparent md:static md:flex md:flex-row md:space-y-0 md:space-x-10`}
      >
        <a href="#About" onClick={() => openMenu(false)}>
          <li className={navLinkStyle}>About</li>
        </a>
        <a href="#Coding" onClick={() => openMenu(false)}>
          <li className={navLinkStyle}>Coding Profiles</li>
        </a>
        <a href="#Projects" onClick={() => openMenu(false)}>
          <li className={navLinkStyle}>Projects</li>
        </a>
        <a href="#Footer" onClick={() => openMenu(false)}>
          <li className={navLinkStyle}>Contact</li>
        </a>
      </ul>

      {/* Toggle Icons */}
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 z-50 text-white"
          onClick={() => openMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 z-50 text-white"
          onClick={() => openMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
