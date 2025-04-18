"use client";
import { useEffect, useState } from "react";
import { fetchArticles } from "./lib/api";
import { categories } from "./lib/categories";
import CategoryList from "./components/CategoryList";
import LatestPost from "./components/LatestPost";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import InfoSection from "./components/InfoSection";
import Newsletter from "./components/Newsletter";
import SearchBar from "./components/SearchBar";
import { Article } from "../app/types";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    async function load() {
      const data = await fetchArticles({
        category: selectedCategory,
        page,
        pageSize,
      });
      setArticles(data.articles || []);
    }
    load();
  }, [selectedCategory, page]);

  const latest = articles[0];
  const rest = articles.slice(1);

  const handleSelectCategory = (category: string) => {
    localStorage.setItem("lastCategory", category);
    setSelectedCategory(category);
  };

  return (
    <div className="text-center">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative text-center py-12 px-4">
          <img
            src="/heart.png"
            alt="Decorative card"
            className="absolute top-20 left-40 w-12 h-12 "
          />

          <img
            src="/spinner.png"
            alt="Sparkle"
            className="absolute left-45 top-60 transform -translate-y-1/2 w-15 h-15"
          />
          <img
            src="/spinner.png"
            alt="Spinner"
            className="absolute top-20 right-20 w-6 h-6 md:w-8 md:h-8"
          />
          <p className="text-2xl text-blue-600 font-bold mt-4 mb-6">
            Native Teams Blog
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto mb-6">
            Resources, Tips and Tricks About the Modern Way of Working
          </h1>
        </div>
        <SearchBar />
        <CategoryList
          categories={categories}
          selected={selectedCategory}
          onSelect={handleSelectCategory}
        />
        <LatestPost post={latest} />
        <PostList posts={rest} category={selectedCategory} />
        <Pagination
          page={page}
          total={50}
          pageSize={pageSize}
          onPageChange={setPage}
        />
      </div>

      <InfoSection />
      <Newsletter />
    </div>
  );
}
