import Link from "next/link";
import { Article } from "../types";

export default function LatestPost({
  post,
  category,
}: {
  post: Article;
  category: string;
}) {
  if (!post) return null;

  return (
    <div className="bg-[#e6f0ff] border border-blue-100 p-6 md:p-10 rounded-xl mb-16 flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-start shadow-sm">
      {/* 📸 Image First on Desktop, Below on Mobile */}
      <img
        src={post.urlToImage || "/placeholder-hero.png"}
        alt={post.title || "Article Image"}
        className="w-full md:w-1/2 rounded-md object-cover h-56 md:h-auto"
      />

      {/* 📝 Text Block */}
      <div className="flex flex-col gap-4 text-left w-full md:w-1/2">
        <span className="bg-[#5152FB] text-white text-xs font-semibold px-3 py-1 rounded-md w-max hidden sm:block">
          6 min read
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          {post.title}
        </h2>
        <p className="text-gray-700 text-sm md:text-base">{post.description}</p>
        <Link
          href={`/post/0?category=${category}`}
          className="text-[# #5152FB] font-semibold text-sm hover:underline flex items-center gap-1"
        >
          Read more <img src="/vector.svg" className="w-2 ml-1" />
        </Link>
      </div>
    </div>
  );
}
