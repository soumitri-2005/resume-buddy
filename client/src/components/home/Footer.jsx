import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center justify-around w-full py-6 text-sm bg-blue-950">
        <img src={logo} alt="ResumeBuddy" className="h-12" />
        <p className="mt-3 text-center text-[var(--highlight-color)] px-3">
          Copyright © 2025 <a href="/">ResumeBuddy</a>. All
          rights reserved.
        </p>
        <p className="text-center font-medium text-[12px] text-[var(--highlight-color)]">
          Made by <a href="https://github.com/soumitri-2005">Soumitri Mishra</a>.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
