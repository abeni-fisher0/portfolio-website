import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  const techIcons = [
    { src: "/icons/docker.svg", alt: "Docker" },
    { src: "/icons/express.svg", alt: "Express" },
    { src: "/icons/flutter.svg", alt: "Flutter" },
    { src: "/icons/javascript.svg", alt: "JavaScript" },
    { src: "/icons/mongodb.svg", alt: "MongoDB" },
    { src: "/icons/mysql.svg", alt: "MySQL" },
    { src: "/icons/nextdotjs.svg", alt: "Next.js" },
    { src: "/icons/nodedotjs.svg", alt: "Node.js" },
    { src: "/icons/postgresql.svg", alt: "PostgreSQL" },
    { src: "/icons/react.svg", alt: "React" },
    { src: "/icons/tailwindcss.svg", alt: "Tailwind CSS" },
    { src: "/icons/typeorm.svg", alt: "TypeORM" },
    { src: "/icons/typescript.svg", alt: "TypeScript" },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-[100vh] px-4 bg-black text-white overflow-hidden"
    >
      {/* Floating Tech Icons */}
      <div className="absolute w-full h-full top-0 left-0 z-0 pointer-events-none">
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-12 opacity-50">
          {techIcons.map((icon, i) => (
            <div
              key={i}
              className="w-24 h-24 rounded-full bg-white p-4 flex items-center justify-center animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center">
        <div className="w-48 h-48 border-4 border-white rounded-full mb-6 overflow-hidden">
          <img
            src="/my-photo.jpg"
            alt="Abenezer"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-lg md:text-xl font-medium text-gray-400 mb-2">
          Abenezer Dehene <span className="text-sm text-gray-500">(Jack)</span>
        </h2>

        <h1 className="text-xl md:text-3xl font-bold leading-snug max-w-2xl text-gray-200">
          "A jack of all trades is a master of none, but often better than a master of one."
        </h1>

        <p className="mt-4 max-w-xl text-gray-400 text-sm md:text-base">
          4th year Mechanical Engineering student & Full-Stack Developer with 3+ years of experience building full-stack web apps.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="/Abenezer_Dehene_CV.pdf"
            download="Abenezer_Dehene_CV.pdf"
            className="bg-white text-black px-4 py-2 rounded shadow hover:scale-105 transition-transform duration-300"
          >
            Download CV
          </a>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="border border-white text-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Contact me
          </ScrollLink>
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
