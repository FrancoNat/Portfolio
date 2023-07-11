import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import projects from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={{ position: "relative", zIndex: "1" }}>
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experiencia
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Estas son algunas aplicaciones que desarrollé
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="p-4 border-4 border-gray-800 bg-gray-900 hover:opacity-75 transition-all duration-300 transform hover:scale-105"
              style={{ zIndex: "2" }}
            >
              <img
                alt="project"
                className="mb-4 object-cover object-center w-full h-44"
                src={project.image}
              />
              <h2 className="text-sm text-green-400 mb-1">{project.subtitle}</h2>
              <h1 className="text-lg font-medium text-white mb-3">{project.title}</h1>
              <p className="text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
