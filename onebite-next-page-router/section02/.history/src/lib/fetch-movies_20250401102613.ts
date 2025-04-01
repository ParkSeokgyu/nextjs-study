import { MovieData } from "@/types";

export default async function fetchMovies(q?: string) : Promise<MovieData[]> {
  let url = `http://localhost:12345/movie`;

  if(q) {
    url += `/search?1=${q}`
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

