import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-tr from-[#1f2a48] to-[#273656] text-white px-8 py-12 md:px-24 md:py-16 flex flex-col md:flex-row justify-between items-start gap-10"
    >
      {/* Contact Section */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Get in <span className="text-cyan-400">Touch</span>
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-sm">
          I’d love to hear from you — whether you have a question, opportunity,
          or just want to connect.
        </p>
      </div>

      {/* Links Section */}
      <ul className="space-y-4 text-sm md:text-lg font-medium">
        <li className="flex items-center gap-3 group">
          <div className="bg-cyan-500/20 p-2 rounded-full group-hover:bg-cyan-500 transition">
            <MdOutlineEmail
              size={22}
              className="text-cyan-400 group-hover:text-white transition"
            />
          </div>
          <a
            href="mailto:shashank2002shekhar@gmail.com"
            className="text-gray-300 hover:text-cyan-400 underline underline-offset-4 transition"
          >
            Email
          </a>
        </li>

        <li className="flex items-center gap-3 group">
          <div className="bg-cyan-500/20 p-2 rounded-full group-hover:bg-cyan-500 transition">
            <CiLinkedin
              size={22}
              className="text-cyan-400 group-hover:text-white transition"
            />
          </div>
          <a
            href="https://www.linkedin.com/in/shashank-shekhar-3b029024b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 underline underline-offset-4 transition"
          >
            LinkedIn
          </a>
        </li>

        <li className="flex items-center gap-3 group">
          <div className="bg-cyan-500/20 p-2 rounded-full group-hover:bg-cyan-500 transition">
            <FaGithub
              size={22}
              className="text-cyan-400 group-hover:text-white transition"
            />
          </div>
          <a
            href="https://github.com/shashankshekhar2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 underline underline-offset-4 transition"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
