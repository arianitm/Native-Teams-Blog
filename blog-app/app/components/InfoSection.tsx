export default function InfoSection({
  bg = "light",
}: {
  bg?: "light" | "dark";
}) {
  const isDark = bg === "dark";
  return (
    <div
      className={`relative text-center px-6 py-20 mx-auto overflow-hidden border-b-10 border-b-indigo-500 ${
        isDark ? "bg-[#0c0e2c] text-white" : "bg-[#EBF3FF] text-gray-800"
      }`}
    >
      <div className="absolute left-0 top-0 w-1/2 h-full hidden sm:block">
        <img
          src="/white.svg"
          alt="Left pattern"
          className="h-full object-cover opacity-20"
        />
      </div>
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-end pr-4">
          <img
            src="/spinner.png"
            alt="Decoration"
            className="w-20 h-20 opacity-70"
          />
        </div>
        <h3
          className={`text-4xl font-bold mb-4 text-gray-900 text-center ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Explore Native Teams today
        </h3>
      </div>
      <p
        className={`mb-6 max-w-2xl mx-auto relative z-10 ${
          isDark ? "text-white" : "text-gray-700"
        }`}
      >
        Unlock the full potential of your teams and elevate your business or
        personal growth with Native Teams. Explore our platform today and start
        your journey towards success.
      </p>
      <button className="bg-[#5152FB] hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full relative z-10 w-full sm:w-auto">
        Learn more
      </button>
    </div>
  );
}
