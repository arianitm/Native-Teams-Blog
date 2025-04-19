"use client";
import { useState } from "react";

export default function Newsletter({ bg = "dark" }: { bg?: "light" | "dark" }) {
  const [submitted, setSubmitted] = useState(false);
  const isDark = bg === "dark";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className={`px-6 py-16 text-center w-full py-20 px-6 relative overflow-hidden ${
        isDark ? "bg-[#0c0e2c] text-white" : "bg-[#EBF3FF] text-gray-900"
      }`}
    >
      <img
        src="/spinner.png"
        alt="Decoration"
        className="absolute right-55 bottom-10 w-30 h-30 opacity-70 hidden md:block sm:block"
      />
      <h3 className="text-5xl font-bold mb-6">
        Never miss out our <span className="text-[#5152FB]">latest news</span>
      </h3>
      {submitted ? (
        <p className="text-sm">Thank you for subscribing!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mb-6 w-full"
        >
          <input
            type="email"
            placeholder="Email address"
            required
            className="flex-1 px-6 py-3 text-sm rounded-full bg-[#f1f3f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <button
            type="submit"
            className="bg-[ #5152FB] hover:bg-blue-700 cursor-pointer text-white text-sm font-semibold px-8 py-3 rounded-full w-full sm:w-auto"
          >
            Sign up
          </button>
        </form>
      )}
      <p className="text-sm text-white-400 mt-4 max-w-md mx-auto">
        By submitting this form, you will receive emails from Native Teams. For
        details, view our Privacy Policy.
      </p>
    </div>
  );
}
