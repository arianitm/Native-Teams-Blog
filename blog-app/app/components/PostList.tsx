import PostCard from "./PostCard";
import { Article } from "../types";

export default function PostList({ posts, category }: { posts: Article[]; category: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {posts.map((post, idx) => (
        <PostCard key={post.url} post={post} idx={idx + 1} category={category} />
      ))}
    </div>
  );
}
