export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/images/hero.jpg"
            alt="about"
            className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>

        <div>

          <p className="text-orange-500 font-semibold uppercase">
            Welcome To BuildEX
          </p>

          <h2 className="text-5xl font-bold mt-4 text-black">
            Trusted Construction Materials Supplier
          </h2>

          <p className="mt-6 text-black text-lg leading-8">
            We provide high-quality construction materials,
            steel products, and machinery rentals with fast
            delivery and trusted service across projects.
          </p>

          <a
            href="#materials"
            className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl"
          >
            Learn More
          </a>

        </div>
      </div>
    </section>
  );
}