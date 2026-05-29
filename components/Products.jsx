import Image from "next/image";

const products = [
  {
    title: "Steel",
    image: "/images/steel.jpg",
    description:
      "Bulk supply of TMT bars, structural steel, plates and sheets.",
  },
  {
    title: "Aluminium",
    image: "/images/aluminium.jpg",
    description:
      "Aluminium coils, sheets and industrial metal products.",
  },
  {
    title: "Copper",
    image: "/images/copper.jpg",
    description:
      "Copper rods, wires and infrastructure-grade copper materials.",
  },
];

export default function Products() {
  return (
    <section id="materials" className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Our Materials
          </p>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Premium Construction Materials
          </h2>

          <p className="mt-4 text-slate-700 text-lg">
            Supplying high-quality industrial raw materials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-4 text-slate-700 leading-8">
                  {product.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}