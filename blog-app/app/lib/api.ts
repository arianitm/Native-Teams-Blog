import { Article } from "../types";

interface FetchParams {
  category?: string;
  q?: string;
  page?: number;
  pageSize?: number;
}

export async function fetchArticles({
  category = '',
  q = '',
  page = 1,
  pageSize = 9
}: FetchParams): Promise<{ articles: Article[]; totalResults: number }> {
  const API_KEY = 'c9406e28bcf844599394e986ac9a3bb7';

  let url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  if (category) url += `&category=${category}`;
  if (q) url += `&q=${encodeURIComponent(q)}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}



// needed mock data for test purpuse because newsApi doesn't have unlimited request
// import { Article } from "../types";
// import mockData from "./mock-data.json"; // 👈 Import local mock

// interface FetchParams {
//   category?: string;
//   q?: string;
//   page?: number;
//   pageSize?: number;
// }

// export async function fetchArticles({
//   category = '',
//   q = '',
//   page = 1,
//   pageSize = 9,
// }: FetchParams): Promise<{ articles: Article[]; totalResults: number }> {
//   // Use local mock data
//   let articles: any[] = mockData.articles;

//   // Optional: filter by search query
//   if (q) {
//     articles = articles.filter(article =>
//       article.title.toLowerCase().includes(q.toLowerCase()) ||
//       article.description?.toLowerCase().includes(q.toLowerCase())
//     );
//   }

//   // Optional: paginate
//   const start = (page - 1) * pageSize;
//   const paginated = articles.slice(start, start + pageSize);

//   return {
//     articles: paginated,
//     totalResults: articles.length,
//   };
// }

