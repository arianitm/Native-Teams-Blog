"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setCategory } from "@/store/categorySlice";
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
import Loader from "./components/Loader";

export default function HomePage() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.category.value
  );
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const pageSize = 9;

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchArticles({
        category: selectedCategory,
        page,
        pageSize,
      });
      setArticles(data.articles || []);
      setTotal(data.totalResults || 0);
      setLoading(false);
    }
    load();
  }, [selectedCategory, page]);

  const latest = articles[0];
  const rest = articles.slice(1);

  const capitalizedCategory =
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

  return (
    <div className="text-center">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="relative text-center py-8 px-4">
          <img
            src="/heart.png"
            alt="Decorative card"
            className="absolute w-12 h-12 sm:top-0 sm:left-0 lg:top-[100px] lg:left-[160px]"
          />
          <img
            src="/spinner.png"
            alt="Sparkle"
            className="absolute w-12 h-12 top-[250px] right-[10px] sm:top-[200px] sm:left-[80px] lg:top-[250px] lg:left-[220px]"
          />
          <img
            src="/spinner.png"
            alt="Spinner"
            className="absolute top-10 right-40 w-6 h-6 md:w-8 md:h-8 hidden sm:block"
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
          onSelect={(cat) => dispatch(setCategory(cat))}
        />

        {loading ? (
          <Loader />
        ) : (
          <>
            <LatestPost post={latest} category={selectedCategory} />
            <h1 className="text-2xl flex flex-left font-bold text-gray-800 pb-2 mb-6">
              {capitalizedCategory} Posts
            </h1>
            <PostList posts={rest} category={selectedCategory} />
            <Pagination
              page={page}
              total={total}
              pageSize={pageSize}
              onPageChange={setPage}
            />
          </>
        )}
      </div>

      <InfoSection />
      <Newsletter />
    </div>
  );
}
