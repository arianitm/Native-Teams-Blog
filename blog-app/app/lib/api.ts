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
