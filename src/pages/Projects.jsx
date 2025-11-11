import React from "react";
import { Link } from "react-router-dom";
import projects from "../components/projectsData";
import CTA from "../components/CTA";

const isExternal = (url) => {
  try {
    const u = new URL(url, window.location.href);
    return u.origin !== window.location.origin;
  } catch {
    // If URL constructor fails, fallback to a simple check
    return /^(https?:)?\/\//.test(url);
  }
};

const Projects = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container py-28">
          <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 lg:mt-16">
            {projects.map(({ id, name, image, link }) => {
              const external = isExternal(link);
              const content = (
                <>
                  <div className="group overflow-hidden h-full rounded-2xl">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <span className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4">
                    {name}
                  </span>
                </>
              );

              return external ? (
                <a
                  key={id}
                  href={link}
                  className="overflow-hidden flex flex-col"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <Link key={id} to={link} className="overflow-hidden flex flex-col">
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
};

export default Projects;
