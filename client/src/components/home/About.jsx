import React from "react";
import aboutImage from "../../assets/about-resumebuddy.png"; // replace with your own image

const About = () => {
  return (
    <>
      <section id="about" className="w-full min-h-[85vh] text-white flex flex-col md:flex-row justify-center items-center px-8 md:px-16 py-12 gap-10 bg-[var(--back-color)]">
        {/* Left side - Image / Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative md:w-auto md:h-96 rounded-2xl overflow-hidden">
            <img
              src={aboutImage}
              alt="ResumeBuddy illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right side - About Content */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-5">
          <h2 className="text-2xl lg:text-5xl font-bold text-blue-950">
            About ResumeBuddy
          </h2>
          <p className="text-gray-600 text-sm leading-normal text-justify">
            <span className="text-[var(--highlight-color)] font-semibold">
              ResumeBuddy
            </span>{" "}
            is an AI-powered resume builder designed to help job seekers craft
            professional, ATS-friendly resumes effortlessly. Whether you’re a
            fresher or an experienced professional, ResumeBuddy simplifies the
            process with intelligent suggestions and modern templates.
          </p>
          <ul className="text-gray-800 text-sm leading-[15px] list-disc list-inside space-y-2 text-justify">
            <li>AI-powered resume optimization</li>
            <li>Auto bullet point generation</li>
            <li>Smart job description refinement</li>
            <li>Role-specific resume tailoring</li>
            <li>Recruiter-focused profile boost</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
