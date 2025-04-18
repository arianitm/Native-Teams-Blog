import { fetchArticles } from "@/app/lib/api";
import InfoSection from "@/app/components/InfoSection";
import Newsletter from "@/app/components/Newsletter";

interface Props {
  params: { id: string };
  searchParams: { category: string };
}

export default async function PostPage({ params, searchParams }: Props) {
  const category = searchParams.category || "general";
  const id = parseInt(params.id);
  const data = await fetchArticles({ category });
  const article = data.articles[id];

  if (!article) {
    return <div className="text-center py-20 text-gray-500">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-4">
        <span className="text-blue-600">News</span> &gt;{" "}
        <span>{article.title}</span>
      </nav>

      {/* Post Content */}
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-600 text-sm mb-6">
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • 6 min read
      </p>

      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full rounded-xl mb-6"
        />
      )}


      {/* To wrap up */}
      <div className="mb-10">
        <h3 className="font-semibold text-lg mb-2">To wrap up</h3>
        <p className="text-gray-700 text-sm">{article.content}</p>
      </div>

      {/* Dynamic Author Section */}
      {/* {article.author && ( */}
        <div className="bg-[#1e2360] text-white p-6 rounded-xl text-center mt-16 relative">
          <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
            <img
              src="/author.png" // fallback avatar or dynamically load if available
              // alt={article.author}
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="mt-12">
            <h3 className="font-semibold text-lg">{article.author}</h3>
            <p className="text-xs text-blue-300 mb-2 uppercase tracking-wide">
              Author
            </p>
            <p className="text-sm text-gray-300">
              {article.description || "No author description available."}
            </p>
          </div>
        </div>
      {/* )} */}
      <InfoSection bg="dark" />
      <Newsletter bg="light"/>
    </div>
  );
}
