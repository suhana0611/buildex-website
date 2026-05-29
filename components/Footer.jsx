export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            Build<span className="text-orange-500">EX</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-7">
            Trusted supplier of steel, aluminium and copper
            materials for construction and industrial projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#about">About</a></li>
            <li><a href="#materials">Materials</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Materials */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Materials
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Steel</li>
            <li>Aluminium</li>
            <li>Copper</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>BuildEX Pvt Ltd</li>
            <li>Hyderabad, India</li>
            <li>info@buildex.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
        © 2026 BuildEX. All Rights Reserved.
      </div>

    </footer>
  );
}