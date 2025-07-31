import { useState } from "react";
import ProjectModal from "./ProjectModal";


const projects = [
  {
    title: "Wander Oromia",
    image: "/assets/wander_oromia.jpg",
    description:
      "A full-stack mobile app that helps users explore tourist destinations across Oromia. It features user authentication, location mapping, and real-time tour guide interactions.",
    stack: ["Flutter", "Nodejs", "Express", "MongoDB", "Cloudinary"],
    learnings:
      "Gained hands-on experience integrating secure JWT-based auth, managing file uploads via Cloudinary, and implementing structured state management in Flutter using BLoC. Learned how to organize a large-scale app using clean architecture on both frontend and backend.",
    hardships:
      "Faced challenges syncing secure storage tokens across sessions in Flutter, handling image upload errors from low-bandwidth devices, and configuring CORS and environment variables correctly in production.",
    link: "https://github.com/yourusername/wander-oromia",
  },
  {
    title: "TechNotes",
    image: "/assets/TechNotes.jpg",
    description:
      "A full-stack note-taking and user management system built with the MERN stack. Supports authentication, role-based access, and optimized UI for managing users, notes, and assignments.",
    stack: ["MongoDB", "Express", "React", "Nodejs"],
    learnings:
      "Learned how to structure scalable full-stack applications using MERN. Implemented secure authentication with JWT, role-based access control, and clean Redux Toolkit state management.",
    hardships:
      "Faced issues managing token expiration and refresh flows, optimizing API calls with Redux, and syncing backend error handling with frontend feedback in real-time.",
    link: "https://github.com/yourusername/tech-notes",
  },
  {
    title: "QuickTask API",
    image: "/assets/QuickTask api.jpg",
    description:
      "A robust backend API built with NestJS for managing tasks and user roles. Features include secure JWT authentication, PostgreSQL database integration, and auto-generated Swagger API documentation.",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Swagger", "Jest"],
    learnings:
      "Developed a strong understanding of modular backend architecture using NestJS. Learned how to structure scalable codebases, implement database relationships with TypeORM, and document REST APIs with Swagger.",
    hardships:
      "Faced challenges with managing TypeORM migrations and integrating Passport strategies for custom role-based authentication. Also had to fine-tune testing with Jest for better coverage reporting.",
    link: "https://github.com/yourusername/quicktask-api",
  },
  {
    title: "Queue Management System",
    image: "/assets/WQMS.jpg",
    description:
      "A full-stack system to manage queues for services like clinics or offices. Features include user authentication, admin notifications via email, and real-time queue status updates.",
    stack: ["React", "Vite", "Tailwind CSS", "Express", "MongoDB"],
    learnings:
      "Learned how to structure a modern full-stack app with Vite for lightning-fast dev workflow and Tailwind for UI efficiency. On the backend, I implemented secure JWT authentication, email notifications using Nodemailer, and MongoDB schema design with Mongoose.",
    hardships:
      "Integrating email notifications with nodemailer and managing async behavior for queue updates was tricky. Also faced CORS-related issues when syncing the frontend with backend during development.",
    link: "https://github.com/yourusername/queue-management-system",
  },
  {
    title: "RepairShop",
    image: "/assets/RepairShop.jpg",
    description:
      "A full-stack web application for managing repair services and client requests. Built with Next.js and integrated with Drizzle ORM, Kinde Auth, and NeonDB, the platform allows admins to track orders, manage service types, and handle real-time updates with an elegant UI.",
    stack: [
      "Nextjs",
      "React",
      "Drizzle ORM",
      "PostgreSQL",
      "Kinde Auth",
      "Tailwind CSS",
      "Zod",
      "Radix UI",
    ],
    learnings:
      "Mastered full-stack development with Next.js App Router. Implemented secure serverless authentication using Kinde, form validation with Zod and React Hook Form, and real-time PostgreSQL integration via Drizzle ORM and Neon. Enhanced debugging and monitoring with Sentry.",
    hardships:
      "Faced setup conflicts with types in early React 19 releases, and wrestled with database schema migrations and Drizzle's stricter typing. Also had to handle tricky edge-case errors when syncing server actions with client-side updates.",
    link: "https://github.com/yourusername/repairshop",
  },
  {
    title: "ChatApp",
    image: "/assets/ChatApp.jpg",
    description:
      "A real-time messaging application built with Flutter. Features include emoji reactions, image/video sharing, camera integration, and persistent local storage. Designed to provide a clean and responsive chat experience across Android and iOS.",
    stack: [
      "Flutter",
      "Dart",
      "Socket.IO",
      "Camera",
      "Shared Preferences",
      "Video Player",
    ],
    learnings:
      "Learned how to integrate real-time communication using Socket.IO, manage persistent local state with SharedPreferences, and handle image/video streaming and file paths efficiently in Flutter. Also gained experience customizing UI with SVGs and custom fonts.",
    hardships:
      "Faced compatibility issues with camera and video plugins across devices. Setting up socket events for bidirectional real-time messaging required careful debugging. UI performance optimization with emojis and media previews also posed challenges.",
    link: "https://github.com/yourusername/chatapp",
  },
  {
    title: "Music Controller App",
    image: "/assets/Music.jpg",
    description:
      "A collaborative music controller web app that lets users create and join rooms to manage Spotify playback remotely in real-time. Combines Django for backend logic with a React-based frontend.",
    stack: [
      "Django",
      "Django REST Framework",
      "React",
      "Material-UI",
      "Webpack",
      "Spotify API",
    ],
    learnings:
      "Learned how to integrate third-party APIs securely (Spotify), build RESTful APIs using Django REST Framework, and manage frontend routing and state with React. Also got a solid grip on bundling React into Django using Webpack.",
    hardships:
      "Setting up cross-origin communication between Django and React was tricky. Debugging Spotify's OAuth flow and token refresh took time. Webpack configs were a pain — getting Babel and React to cooperate wasn't easy.",
    link: "https://github.com/yourusername/music-controller",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const getIconPath = (tech) => `/icons/${tech.toLowerCase()}.svg`;

  return (
    <section id="projects" className="px-8 py-16 bg-black text-white">
      <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setActiveProject(project)}
            className="group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all bg-black"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4 bg-black">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex gap-2 mt-2 flex-wrap text-sm items-center">
                {project.stack.map((tech, i) => {
                  const iconPath = getIconPath(tech);
                  return (
                    <div key={i} className="flex items-center gap-1">
                      <img
                        src={iconPath}
                        alt={tech}
                        className="w-5 h-5 invert brightness-0"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="text-sm text-white">{tech}</span>
                    </div>
                  );
                })}
              </div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center px-4 transition-opacity">
                <p className="text-sm text-white">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}

      <div className="text-center mt-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-gray-400 hover:text-white underline"
        >
          Like what you see? Browse more on my GitHub →
        </a>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
