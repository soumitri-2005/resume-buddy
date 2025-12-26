import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 mt-2 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-[var(--back-color)] backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-lg bg-white/30" : ""
        }`}
      >
        <a href="/">
          <img src={logo} alt="ResumeBuddy" className="h-11 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-800">
          <a
            href="#"
            className="hover:text-[var(--highlight-color)] transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[var(--highlight-color)] transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--highlight-color)] transition"
          >
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          {!user && (
            <>
              <Link
                to="/app?state=register"
                className="px-6 py-2 bg-[var(--highlight-color)] hover:bg-indigo-950 active:scale-95 transition-all rounded-full text-white"
              >
                Sign Up
              </Link>

              <Link
                to="/app?state=login"
                className="px-6 py-2 border active:scale-95 hover:bg-slate-200 transition-all rounded-full text-slate-700 hover:text-slate-900"
              >
                Login
              </Link>
            </>
          )}

          {user && (
            <Link
              to="/app"
              className="px-6 py-2 bg-[var(--highlight-color)] hover:bg-indigo-950 active:scale-95 transition-all rounded-full text-white ring-offset-2 ring-1 ring-indigo-950 duration-300"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          href="/"
          className="text-white text-xl"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="/#about"
          className="text-white text-xl"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="/#contact"
          className="text-white text-xl"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        {/* AUTH BUTTONS – MOBILE */}
        {!user && (
          <>
            <Link
              to="/app?state=register"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 bg-[var(--highlight-color)] hover:bg-indigo-950 transition-all rounded-full text-white"
            >
              Sign Up
            </Link>

            <Link
              to="/app?state=login"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 border hover:bg-slate-200 transition-all rounded-full text-white"
            >
              Login
            </Link>
          </>
        )}

        {user && (
          <Link
            to="/app"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 bg-[var(--highlight-color)] hover:bg-indigo-950 transition-all rounded-full text-white"
          >
            Dashboard
          </Link>
        )}

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-6 px-4 py-2 text-xl bg-[var(--highlight-color)] rounded-full hover:bg-indigo-950 transition text-white"
        >
          X
        </button>
      </div>
    </>
  );
};

export default Navbar;
