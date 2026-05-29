export default function WhyChoose() {
  const features = [
    "Direct Material Sourcing",
    "Bulk Order Capability",
    "Fast Delivery",
    "Trusted Quality",
    "Reliable Supply Chain",
    "Project Support",
  ];

  return (
    <section className="py-28 bg-[#031633] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-400 font-semibold uppercase tracking-[3px]">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Why Choose BuildEX
          </h2>

          <p className="mt-6 text-white text-lg max-w-2xl mx-auto leading-8">
            Delivering quality construction materials with trusted service,
            fast delivery and reliable supply across projects.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#082044] rounded-2xl p-10 border border-slate-700"
            >
              <h3 className="text-2xl font-semibold text-white">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}