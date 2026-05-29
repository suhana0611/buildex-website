export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <a href="/" className="text-4xl font-bold text-slate-800">
          Build<span className="text-orange-500">EX</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-700">
          <a href="#about">About</a>
          <a href="#materials">Materials</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/quote"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold inline-block"
        >
          Get Quote
        </a>

      </div>
    </header>
  );
}