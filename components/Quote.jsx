"use client";

import { useState } from "react";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8f8f8] py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-lg">

        {!submitted ? (
          <>
            <h1 className="text-4xl font-bold text-black text-center">
              Request a Quote
            </h1>

            <p className="text-center mt-4 text-black text-lg">
              Fill in your material requirement and our team will contact you.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-5 py-4 text-black placeholder:text-black"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-xl px-5 py-4 text-black placeholder:text-black"
              />

              <input
                type="text"
                placeholder="Material Required"
                className="w-full border rounded-xl px-5 py-4 text-black placeholder:text-black"
              />

              <input
                type="text"
                placeholder="Quantity"
                className="w-full border rounded-xl px-5 py-4 text-black placeholder:text-black"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-5 py-4 text-black placeholder:text-black"
              />

              <textarea
                rows="5"
                placeholder="Additional Details"
                className="w-full border rounded-xl px-5 py-4 text-black placeholder:text-black"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
              >
                Submit Quote Request
              </button>

            </form>
          </>
        ) : (
          <div className="text-center py-16">

            <h2 className="text-4xl font-bold text-green-600">
              Submitted Successfully! 🎉
            </h2>

            <p className="mt-6 text-black text-xl">
              Thank you for reaching out. Our team will contact you soon 📞
            </p>

          </div>
        )}

      </div>
    </main>
  );
}