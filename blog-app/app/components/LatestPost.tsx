import Link from "next/link";
import { Article } from "../types";

export default function LatestPost({ post }: { post: Article }) {
  if (!post) return null;

  return (
    <div className="bg-[#e6f0ff] border border-blue-100 p-20 rounded-xl mb-16 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm">
      <img
        src={post.urlToImage || "/placeholder-hero.png"}
        alt={post.title || "Article Image"}
        className="w-full md:max-w-lg  object-cover h-64 md:h-auto"
      />
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="bg-[#4f46e5] text-white text-xs font-semibold px-3 py-1 rounded-md w-max mx-auto md:mx-0">
          6 min read
        </span>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          {post.title}
        </h2>
        <p className="text-gray-700 text-sm max-w-xl">
          {post.description}
        </p>
        <Link
          href={`/post/0?category=general`}
          className="text-[#4f46e5] font-semibold text-sm hover:underline flex items-center gap-1 justify-center md:justify-start"
        >
          Read more <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
