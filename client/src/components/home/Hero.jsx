import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div className="h-[57vh] pb-20">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute inset-0 -z-10 bg-[var(--back-color)]">
            <div
              className="absolute inset-0 "
              style={{
                background:
                  "radial-gradient(ellipse 40% 60% at center, rgba(0,150,199,0.35) 0%, rgba(0,150,199,0.1) 40%, #fbfbfb 90%)",
              }}
            />
          </div>
          {/* Headline + CTA */}
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-4xl text-center mt-10 md:leading-[40px] lg:leading-[65px]">
            Land your dream job with{" "}
            <span className=" bg-gradient-to-r from-[var(--highlight-color)] to-indigo-950 bg-clip-text text-transparent text-nowrap">
              AI-powered{" "}
            </span>{" "}
            resumes.{" "}
          </h1>

          <p className="max-w-md text-center text-[12px] md:text-base my-7">
            Create, edit and download professional resumes with AI-powered
            assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 ">
            <Link
              to="/app?state=register"
              className="bg-[var(--highlight-color)] text-[15px] hover:bg-indigo-950 transition-all duration-400 text-white rounded-full px-6 h-10 m-1 ring-offset-2 ring-1 ring-indigo-950 flex items-center"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
