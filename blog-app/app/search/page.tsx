"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Article } from "../types";
import { fetchArticles } from "../lib/api";
import PostList from "../components/PostList";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("general"); 

  useEffect(() => {
    const storedCategory = localStorage.getItem("lastCategory") || "general";
    setCategory(storedCategory);
    async function getResults() {
      try {
        setLoading(true);
        const { articles } = await fetchArticles({ q: query });
        setResults(articles);
      
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }


    if (query) getResults();
  
  }, [query]);

  
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-6">
      Search results for: <span className="text-blue-600">"{query}"</span>
    </h1>
  
    {loading ? (
      <p>Loading...</p>
    ) : results.length === 0 ? (
      <p className="text-gray-600">No results found.</p>
    ) : (
      <PostList posts={results} category={category} />
    )}
  </div>
  
  );
}
