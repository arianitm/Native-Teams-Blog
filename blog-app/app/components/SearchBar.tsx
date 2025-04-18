import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-6 lg:w-lg sm: w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for posts"
          className="flex-1 px-6 py-3 text-sm rounded-full bg-[#f1f3f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button
          type="submit"
          className="bg-[#4f46e5] hover:bg-blue-700 text-white cursor-pointer text-sm font-semibold px-8 py-3 rounded-full w-full sm:w-auto"
        >
          Search
        </button>
      </div>
    </form>
  );
}
