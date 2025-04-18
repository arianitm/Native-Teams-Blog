export default function InfoSection() {
  return (
    <div className="relative bg-[#e6f0ff] text-center px-6 py-30  mx-auto overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img src="/white.png" alt="Left pattern" className="h-full object-cover opacity-20" />
      </div>
      <div className="absolute right-15 top-8">
        <img src="/spinner.png" alt="Decoration" className="w-20 h-20 opacity-70" />
      </div>
      <h3 className="text-3xl font-bold mb-4 text-gray-900 relative z-10">
        Explore Native Teams today
      </h3>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto relative z-10">
        Unlock the full potential of your teams and elevate your business or personal growth with Native Teams.
        Explore our platform today and start your journey towards success.
      </p>
      <button className="bg-[#4f46e5] hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full relative z-10">
        Learn more
      </button>
    </div>
  );
}