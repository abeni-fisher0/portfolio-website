export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center px-6 py-4 font-semibold">
      <h1 className="text-lg">Abeni's Portfolio</h1>

      <ul className="flex justify-center gap-6">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>

      <div></div>
    </nav>
  );
}
