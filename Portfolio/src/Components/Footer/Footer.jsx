import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-[#1f2a48] text-white px-8 py-12 md:px-24 md:py-16 flex flex-col md:flex-row justify-between items-start gap-10"
    >
      {/* Contact Section */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Get in Touch</h1>
        <p className="text-sm md:text-lg text-gray-300">
          I'd love to hear from you. Let's connect!
        </p>
      </div>

      {/* Links Section */}
      <ul className="space-y-4 text-sm md:text-lg">
        <li className="flex items-center gap-2 hover:text-cyan-400 transition-all">
          <MdOutlineEmail size={22} />
          <a href="mailto:myemail@gmail.com" className="underline">
            myemail@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2 hover:text-cyan-400 transition-all">
          <CiLinkedin size={22} />
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/username
          </a>
        </li>
        <li className="flex items-center gap-2 hover:text-cyan-400 transition-all">
          <FaGithub size={22} />
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github.com/username
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
