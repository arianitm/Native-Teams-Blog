"use client";
import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#0c0e2c] text-white px-6 py-30 text-center  mx-auto relative overflow-hidden">
      <img
        src="/spinner.png"
        alt="Decoration"
        className="absolute right-50 bottom-15 w-25 h-25 opacity-70 hidden sm:block"
      />
      <h3 className="text-3xl font-bold mb-6">
        Never miss out our <span className="text-[#4f46e5]">latest news</span>
      </h3>
      {submitted ? (
        <p className="text-sm">Thank you for subscribing!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
           className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-6 w-full"
        >
          <input
            type="email"
            placeholder="Email address"
            required
           className="flex-1 px-6 py-3 text-sm rounded-full bg-[#f1f3f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <button
            type="submit"
            className="bg-[#4f46e5] hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3 rounded-full w-full sm:w-auto"
          >
            Sign up
          </button>
        </form>
      )}
      <p className="text-xs text-gray-400 mt-4 max-w-md mx-auto">
        By submitting this form, you will receive emails from Native Teams. For details, view our Privacy Policy.
      </p>
    </div>
  );
}