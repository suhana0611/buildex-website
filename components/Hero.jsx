import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 md:pt-24">

        <h1 className="text-white font-bold leading-tight text-4xl md:text-6xl max-w-4xl">
          Global Metals Supply
          <br />
          Made Simple With
          <br />
          <span className="text-green-500">Confidence</span>
        </h1>

        <p className="text-white text-lg md:text-2xl mt-6 max-w-3xl leading-8">
          Bulk supply of steel, aluminium and copper for
          construction, manufacturing and infrastructure projects.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/quote"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Get a Quote
          </a>

          <a
            href="#contact"
            className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}