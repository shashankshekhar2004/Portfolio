import React from "react";
import AboutImg from "../../assets/jejd.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-50 rounded-3xl shadow-2xl mx-4 md:mx-20 my-10 p-10 md:p-16 backdrop-blur-lg border border-white/10"
    >
      <div className="flex-shrink-0">
        <img
          className="h-72 w-72 object-cover rounded-3xl shadow-lg"
          src={AboutImg}
          alt="About"
        />
      </div>

      <div className="mt-10 md:mt-0 md:ml-14 max-w-xl">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          About Me
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4 group hover:translate-x-1 transition-all duration-300">
            <IoArrowForward size={26} className="text-pink-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">DSA Enthusiast</h3>
              <p className="text-sm text-zinc-300">
                Solved 700+ Data Structures & Algorithms problems across
                platforms like LeetCode, GeeksforGeeks, and Codeforces. I enjoy
                optimizing solutions and deep-diving into problems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group hover:translate-x-1 transition-all duration-300">
            <IoArrowForward size={26} className="text-green-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
              <p className="text-sm text-zinc-300">
                Skilled in MongoDB, Express, React, and Node.js. I've built
                scalable and responsive web apps with authentication, API
                integrations, and intuitive UI/UX.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group hover:translate-x-1 transition-all duration-300">
            <IoArrowForward size={26} className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">CS Fundamentals</h3>
              <p className="text-sm text-zinc-300">
                Solid foundation in Operating Systems, DBMS, Computer Networks,
                and Object-Oriented Programming. I strive to apply these
                principles in real-world development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
