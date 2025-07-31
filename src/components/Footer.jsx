export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-10 border-t border-gray-700">
      <div className="flex flex-col items-center gap-4">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/abeni-fisher0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6 filter brightness-0 invert hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abenezer-ashenafi-764418314"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 filter brightness-0 invert hover:scale-110 transition"
            />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          Abenezer Dehene © 2025 — All rights reserved
        </p>
      </div>
    </footer>
  );
}
