
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen pt-20">

      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-white text-6xl font-bold leading-tight max-w-4xl">
            Global Metals Supply Made Simple With{" "}
            <span className="text-green-500">Confidence</span>
          </h1>

          <p className="text-white text-xl mt-6 max-w-3xl leading-8">
            Bulk supply of steel, aluminium and copper for
            construction, manufacturing and infrastructure projects.
          </p>

          <div className="mt-10 flex gap-6">

            <a
              href="/quote"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold inline-block"
            >
              Get a Quote
            </a>

            <a
              href="#contact"
              className="border border-white text-white px-8 py-4 rounded-xl inline-block"
            >
              Contact Us
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}