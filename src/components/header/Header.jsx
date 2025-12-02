import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";
const navItems = [
  { href: "#home", label: "Home", key: 1 },
  { href: "#about", label: "About", key: 2 },
  { href: "#properties", label: "Properties", key: 3 },
  { href: "#blog", label: "Blog", key: 4 },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [activeLink, setActiveLink] = useState("#home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };
 const linkClasses = (link) => (link === activeLink
  ? "text-[#FF5B28] font-bold hover:text-[#FF5B28] duration-200"
  : "text-[#000000] font-semibold hover:text-[#FF5B28] duration-200")
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">

      <div className="max-w-screen-2xl mx-auto py-4 px-5 flex justify-between items-center">
        {/* LOGO */}
        <a href="/">
          <img src="/public/logo.png" alt="" className="w-28" />
        </a>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="text-2xl " />
            ) : (
              <MdMenu className="text-2xl text-[#ff5b28]" />
            )}
          </button>
        </div>
        {/* Navbar for large Devices*/}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-9 ">
              {navItems.map((link) => (
                <li key={link.href}>
                  <a
                    onClick={() => handleLinkClick(link.href)}
                    href={link.href}
                    className={linkClasses(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Contact Us Button */}
        <div className="hidden lg:block">
          <button className="text-white  font-semibold bg-zinc-900 border-transparent border-2 rounded-lg px-4 py-2">
            <a href="#contact" className="flex items-center gap-2">
              Contact Us{" "}
              <span>
                {" "}
                <LuMousePointerClick/>
              </span>
            </a>
          </button>
        </div>
        {/* Mobile Menu Drawer*/}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border py-8 shadow-md z-50">
            <nav>
              <ul className="flex flex-col items-center gap-8 ">
                {navItems.map((link) => (
                  <li key={link.href}>
                    <a
                      onClick={() => handleLinkClick(link.href)}
                      href={link.href}
                      className={
                        link === activeLink
                          ? "text-[#FF5B28] font-bold hover:text-[#FF5B28] duration-200"
                          : "text-[#000000] font-semibold hover:text-[#FF5B28] duration-200"
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
