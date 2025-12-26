import React from "react";
import resumeSample1 from "../../assets/resume-sample1.jpg";
import resumeSample2 from "../../assets/resume-sample2.png";
import resumeSample3 from "../../assets/resume-sample3.png";
import resumeSample4 from "../../assets/resume-sample4.png";
import resumeSample5 from "../../assets/resume-sample5.png";

const Banner = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center bg-[var(--back-color)]">
      <div className="flex gap-[15px] w-full justify-center px-[10px] relative">
        {/* Box 1 → visible only on lg */}
        <div className="hidden shadow-xl lg:flex border-2 border-black rounded-3xl items-center justify-center w-full translate-y-[-70px] transition-all duration-300">
          <img
            src={resumeSample5}
            alt="sample"
            className="object-contain w-full h-full rounded-3xl"
          />
        </div>

        {/* Box 2 → visible on sm and above */}
        <div className="hidden shadow-xl sm:flex border-2 border-black rounded-3xl items-center justify-center w-full translate-y-[-20px] transition-all duration-300">
          <img
            src={resumeSample1}
            alt="sample"
            className="object-contain w-full h-full rounded-3xl"
          />
        </div>

        {/* Box 3 → always visible */}
        <div className="flex border-2 border-black shadow-xl rounded-3xl items-center justify-center w-full translate-y-[20px] transition-all duration-300">
          <img
            src={resumeSample2}
            alt="sample"
            className="object-contain w-full h-full rounded-3xl"
          />
        </div>

        {/* Box 4 → visible on sm and above */}
        <div className="hidden sm:flex border-2 shadow-xl border-black rounded-3xl items-center justify-center w-full translate-y-[-20px] transition-all duration-300">
          <img
            src={resumeSample4}
            alt="sample"
            className="object-contain w-full h-full rounded-3xl"
          />
        </div>

        {/* Box 5 → visible only on lg */}
        <div className="hidden lg:flex border-2 shadow-xl border-black rounded-3xl items-center justify-center w-full translate-y-[-70px] transition-all duration-300">
          <img
            src={resumeSample3}
            alt="sample"
            className="object-contain w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
