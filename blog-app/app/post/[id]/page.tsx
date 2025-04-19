import { fetchArticles } from "@/app/lib/api";
import InfoSection from "@/app/components/InfoSection";
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
    return (
      <div className="text-center py-20 text-gray-500">Post not found.</div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <nav className="text-sm text-gray-500 mb-4">
          <span className="text-blue-600">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>{" "}
          &gt; <span className="text-gray-600">{article.title}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          {article.title}
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          | 6 min read
        </p>

        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full rounded-xl mb-12"
          />
        )}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            {article.content}
          </p>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt=""
              className="w-full rounded-lg mb-6"
            />
          )}
        </div>
        <div className="mb-20">
          <h3 className="font-semibold text-xl mb-2">To wrap up</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {article.content}
          </p>
        </div>
        <div className="bg-[#1e2360] text-white rounded-xl text-center py-18 px-6 relative mb-20">
          <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
            <img
              src="/author.png"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="mt-12">
            <h3 className="text-lg font-semibold">{article.author}</h3>
            <p className="uppercase text-xs text-gray-300 tracking-wide mb-2">
              Author
            </p>
            <p className="text-sm text-gray-300 max-w-lg mx-auto">
              {article.description || "No author description available."}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <InfoSection bg="dark" />
      </div>
    </div>
  );
}
