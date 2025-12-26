import React from "react";

const Contact = () => {
  return (
    <div className="relative w-full h-[50vh] flex justify-center items-center overflow-hidden">
      {/* === Background Overlay === */}
      <div className="absolute inset-0 -z-10 bg-[var(--back-color)]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 60% at center, rgba(0,150,199,0.35) 0%, rgba(0,150,199,0.1) 40%, #fbfbfb 90%)",
          }}
        />
      </div>

      {/* === Contact Content === */}
      <div
        id="contact"
        className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center p-3"
      >
        <h2 className="text-2xl lg:text-5xl font-bold text-blue-950 mb-4">
          Got Something to {" "}
          <span className="text-[var(--highlight-color)]">Say?</span>
        </h2>
        <p className="text-gray-700 mx-auto mb-6 max-w-md text-sm lg:text-base">
          For collaborations, feedback or inquiries feel free to reach out
          anytime.
        </p>
        <a
          href="mailto:soumitrimishra1@gmail.com"
          className="text-[var(--highlight-color)] text-sm lg:text-base font-medium hover:underline"
        >
          soumitrimishra1@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
