import React from "react";
import leetcodeImg from "../../assets/leetcode.png";
import gfgImg from "../../assets/gfg.jpeg";
import codechefImg from "../../assets/codechef.jpg"; // ensure this file exists and has the correct extension
import codeforcesImg from "../../assets/codeforces.png";

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
      name: "Codeforces",
      image: codeforcesImg,
      link: "https://codeforces.com/profile/shashank_007",
    },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
        Coding Profiles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-8 rounded-3xl w-full flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg"
          >
            <img
              src={platform.image}
              alt={platform.name}
              className="w-60 h-50 object-contain mb-6"
            />
            <span className="text-white text-xl font-bold">
              {platform.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
