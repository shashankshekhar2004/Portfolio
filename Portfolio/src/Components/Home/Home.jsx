import React from "react";
import avatarImg from "../../assets/Image1.jpg";
import resumeFile from "../../assets/SHASHANK_Resume.pdf";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20">
      {/* Left Section */}
      <div className="md:w-2/4 md:pt-10 flex flex-col justify-center">
        <h1 className="text-xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          Hi, I'm Shashank
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mb-6">
          A passionate Full Stack Developer dedicated to building responsive,
          user-friendly web applications that solve real-world problems.
        </p>

        <div className="flex gap-4 flex-wrap">
          <div className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-green-800">
            Turning ideas into reality through code
          </div>

          {/* Improved Resume Button */}
          <a
            href={resumeFile}
            download="SHASHANK_Resume.pdf"
            className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl
            bg-gradient-to-r from-cyan-500 to-blue-700 border border-cyan-400
            shadow-md hover:shadow-xl hover:scale-105 hover:from-cyan-400 hover:to-blue-600
            transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section (Avatar) */}
      <div className="mb-10 md:mb-0 md:flex md:items-center md:justify-center md:w-2/4">
        <img
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          src={avatarImg}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Home;
