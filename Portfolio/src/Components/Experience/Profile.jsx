import React from "react";
import leetcodeImg from "../../assets/leetcode.png";
import gfgImg from "../../assets/gfg.jpeg";
import codechefImg from "../../assets/codechef.jpg";
import codingNinjasImg from "../../assets/ninjas.jpg";

const CodingProfiles = () => {
  const platforms = [
    {
      name: "LeetCode",
      image: leetcodeImg,
      link: "https://leetcode.com/u/Shashank_shekhar_07/",
    },
    {
      name: "GeeksforGeeks",
      image: gfgImg,
      link: "https://www.geeksforgeeks.org/user/shashank0007/",
    },
    {
      name: "CodeChef",
      image: codechefImg,
      link: "https://www.codechef.com/users/shashankcric",
    },
    {
      name: "Coding Ninjas",
      image: codingNinjasImg,
      link: "https://www.naukri.com/code360/profile/2c74fc66-9b63-4fd2-a4ea-ba2421693c8b",
    },
  ];

  return (
    <div
      id="Coding"
      className="relative z-10 bg-gradient-to-br from-[#1a1f3b] to-[#121827] px-6 py-20 md:px-24 text-white"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-500 opacity-20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 opacity-20 blur-[140px] rounded-full -z-10" />

      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-14 border-b-4 border-cyan-400 inline-block pb-2">
        Coding Profiles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit my ${platform.name} profile`}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl w-72 flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl hover:bg-white/10"
          >
            <img
              src={platform.image}
              alt={`${platform.name} banner`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-center items-center">
              <span className="text-white text-xl font-semibold tracking-wide mb-1 hover:text-cyan-400 transition-colors">
                {platform.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
