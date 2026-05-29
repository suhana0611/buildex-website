export default function Industries() {
  const industries = [
    "Construction",
    "Infrastructure",
    "Manufacturing",
    "Power & Energy",
    "Engineering",
    "Fabrication",
  ];

  return (
    <section id="industries" className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Industries
          </p>

          <h2 className="text-5xl font-bold mt-4 text-black">
            Industries We Serve
          </h2>

          <p className="mt-6 text-black text-lg max-w-2xl mx-auto leading-8">
            Supporting construction, manufacturing and infrastructure
            projects with trusted material supply and reliable delivery.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {industries.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold text-black">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}