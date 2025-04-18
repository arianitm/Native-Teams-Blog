import Link from "next/link";
import { Article } from "../types";

export default function PostCard({ post, idx, category }: { post: Article; idx: number; category: string }) {
    return (
      <div className="bg-white border border-gray-200 hover:shadow-lg p-5 rounded-xl transition-all duration-200 flex flex-col h-full">
        {post.urlToImage && (
          <img src={post.urlToImage} alt={post.title} className="w-full h-40 object-cover rounded-md mb-3" />
        )}
        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full w-max mb-2">6 min read</span>
        <h3 className="text-left font-semibold text-gray-900 leading-tight mb-2 flex-1">{post.title}</h3>
        <Link href={`/post/${idx}?category=${category}`} className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
          Read more <span>&rarr;</span>
        </Link>
      </div>
    );
  }