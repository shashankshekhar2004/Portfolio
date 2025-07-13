import React from "react";
import AboutImg from "../../assets/jejd.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="relative bg-gradient-to-br from-[#1e1f34] to-[#10131c] text-white mx-4 md:mx-20 my-16 p-8 md:p-16 rounded-3xl shadow-xl overflow-hidden"
    >
      {/* Decorative Blur Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] rounded-full -z-10" />

      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={AboutImg}
            alt="About"
            className="h-72 w-72 object-cover rounded-3xl shadow-lg border border-white/10"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8">
            About Me
          </h2>

          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-all duration-300">
              <IoArrowForward size={26} className="text-pink-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">DSA Enthusiast</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Solved 700+ Data Structures & Algorithms problems on platforms
                  like LeetCode, GFG, and Codeforces. I enjoy deep-diving into
                  logical problems and optimizing solutions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-all duration-300">
              <IoArrowForward size={26} className="text-green-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Experienced in building full-stack apps using MongoDB,
                  Express, React, and Node.js. I’ve worked on scalable web apps
                  with modern UI, JWT authentication, and RESTful APIs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-all duration-300">
              <IoArrowForward size={26} className="text-cyan-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">CS Fundamentals</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Strong knowledge of Operating Systems, DBMS, OOP, and Computer
                  Networks. I enjoy applying theoretical concepts into practical
                  backend and systems-level solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
