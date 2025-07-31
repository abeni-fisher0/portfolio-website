import { useEffect } from "react";

const knownIcons = [
  "react",
  "firebase",
  "tailwindcss",
  "flutter",
  "telebot",
  "python",
  "riverpod",
  "nextdotjs",
  "typescript",
  "nodejs",
  "express",
  "docker",
  "mongodb",
  "mysql",
  "postgresql",
  "typeorm",
];


export default function ProjectModal({ project, onClose }) {
  // Escape key closes modal
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 text-white z-50 flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl"
        >
          &times;
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="rounded mb-4 w-full object-cover h-48"
        />

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

        <div className="flex gap-2 mb-4 flex-wrap items-center">
          {project.stack.map((tech, i) => {
            const fileName = tech.toLowerCase().replace(/\s+/g, "");
            const hasIcon = knownIcons.includes(fileName);

            return hasIcon ? (
              <img
                key={i}
                src={`/icons/${fileName}.svg`}
                alt={tech}
                title={tech}
                className="w-6 h-6 invert"
              />
            ) : (
              <span
                key={i}
                className="px-2 py-1 text-sm bg-white text-black rounded"
              >
                {tech}
              </span>
            );
          })}
        </div>

        <p className="mb-4">{project.description}</p>

        <h3 className="font-semibold text-lg mt-4">What I Learned:</h3>
        <p className="text-sm mb-2">{project.learnings}</p>

        <h3 className="font-semibold text-lg mt-4">Hardships:</h3>
        <p className="text-sm">{project.hardships}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 bg-white text-black rounded hover:scale-105 transition"
          >
            Go to this project
          </a>
        )}
      </div>
    </div>
  );
}
