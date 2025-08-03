export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-black text-white flex flex-col md:flex-row gap-12 justify-center items-start"
    >
      {/* About Me */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          About Me
        </h2>
        <p className="text-base leading-relaxed">
          I’m <strong>Abenezer Dehene (Jack)</strong>, a 4th year Mechanical Engineering student and full-stack developer with 3+ years of experience.
          <br /><br />
          I specialize in building responsive mobile apps using <span className="text-purple-400">Flutter</span> and scalable APIs using <span className="text-yellow-300">Node.js</span>, <span className="text-red-400">NestJS</span>, and <span className="text-blue-400">PostgreSQL</span> And More.
          <br /><br />
          I care deeply about clean architecture, high-performance code, and shipping work that matters.
        </p>
      </div>

      {/* Stack Diaries */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          🧠 Stack Diaries
        </h2>

        {/* Acts like a clickable preview */}
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vRAn5jNx1C5ZwkhMv8ca8MZIj56kCrWZuenneGa8rLRqUTTWopOCTJ9-Tc9g71G6beMF0HmUHlE1XFG/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-900 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.01] transition-all overflow-hidden"
        >
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vRAn5jNx1C5ZwkhMv8ca8MZIj56kCrWZuenneGa8rLRqUTTWopOCTJ9-Tc9g71G6beMF0HmUHlE1XFG/pub?embedded=true"
            className="w-full h-[280px] pointer-events-none" // disables interaction, acts like a static preview
            title="Stack Diaries Preview"
          ></iframe>
        </a>
      </div>
    </section>
  );
}
