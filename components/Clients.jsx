"use client";

import Image from "next/image";

const clients = [
  "/images/client1.png",
  "/images/client2.png",
  "/images/client3.png",
  "/images/client4.png",
  "/images/client5.png",
];

export default function Clients() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Our Clients
          </p>

          <h2 className="text-5xl font-bold mt-4 text-black">
            Trusted By Leading Companies
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-16 w-max items-center">

            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="w-52 h-28 flex items-center justify-center bg-white border rounded-xl px-6"
              >
                <Image
                  src={logo}
                  alt="client logo"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}