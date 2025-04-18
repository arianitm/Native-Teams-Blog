import Link from "next/link";
import { Article } from "../types";

export default function PostCard({
  post,
  idx,
  category,
}: {
  post: Article;
  idx: number;
  category: string;
}) {
  return (
    <div className="bg-white border border-gray-200 hover:shadow-lg p-5 rounded-xl transition-all duration-200 flex flex-col h-full">
      
      {/* 📸 Image container - always occupies space */}
      <div className="w-full h-40 mb-3 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
        {post.urlToImage ? (
          <img
            src={post.urlToImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-300 text-xs italic">No image</span>
        )}
      </div>

      {/* 📄 Content */}
      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full w-max mb-2">
        6 min read
      </span>
      <h3 className="text-left font-semibold text-gray-900 leading-tight mb-2 flex-1">
        {post.title}
      </h3>
      <Link
        href={`/post/${idx}?category=${category}`}
        className="text-blue-600 text-sm font-medium flex items-center gap-1"
      >
        Read more <img src="/vector.svg" className="w-2 ml-2" />
      </Link>
    </div>
  );
}
