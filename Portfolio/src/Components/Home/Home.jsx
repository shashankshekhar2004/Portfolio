import React from "react";
import avatarImg from "../../assets/jejd.jpg";
import TextChange from "../../TextChange";
import resumeFile from "../../assets/Resume.pdf";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20">
      {/* Left Section */}
      <div className="md:w-2/4 md:pt-10 flex flex-col justify-center">
        <h1 className="text-xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mb-6">
          A passionate Full Stack Developer dedicated to building responsive,
          user-friendly web applications that solve real-world problems.
        </p>

        <div className="flex gap-4 flex-wrap">
          {/* Contact Button */}
          <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-red-800">
            Contact Me
          </button>

          {/* Resume Button */}
          <a
            href={resumeFile}
            download="Your_Name_Resume.pdf"
            className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl border-2 bg-green-700 border-[#465697]"
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
