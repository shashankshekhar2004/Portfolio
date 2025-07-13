import React from "react";
import ProjectCard from "./ProjectCard";
import voting from "../../assets/voting.jpg";
import chat from "../../assets/chat.png";
import portfolio from "../../assets/portfolio.jpeg";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="bg-gradient-to-br from-[#1a1f3b] to-[#121827] text-white px-6 py-16 md:px-24 relative z-10"
    >
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-[150px] opacity-20 z-0"></div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 border-b-4 border-cyan-400 inline-block pb-2">
          Projects
        </h1>

        <div className="py-10 flex flex-wrap gap-8 justify-center">
          <ProjectCard
            title="Online Voting"
            main="SmartVote – MERN Voting App: A secure full-stack voting platform where users can easily create, manage, and participate in polls with real-time updates and authentication."
            bannerImg={voting}
            demoLink="https://votingshashank.netlify.app/login"
            sourceLink="https://github.com/shashankshekhar2004/Voting"
          />
          <ProjectCard
            title="Chat App"
            main="Chatify – Real-Time Chat App: A sleek chat application built with MERN stack & Socket.IO for instant messaging, user authentication, and real-time updates."
            bannerImg={chat}
            demoLink="https://shashankchatify.netlify.app/login"
            sourceLink="https://github.com/shashankshekhar2004/ChatApp"
          />
          <ProjectCard
            title="Portfolio"
            main="Personal Portfolio: A responsive single-page React app showcasing my projects, coding profiles, and skills — built with clean design and smooth user experience."
            bannerImg={portfolio}
            demoLink="#"
            sourceLink="https://github.com/shashankshekhar2004/Portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
