import { MovieData } from "@/types";

export default async function fetchMovies(id?: number) : Promise<MovieData[]> {
  let url = `http://localhost:12345/movie/[id]`;

  if(id) {
    url += `/search?id=${id}`
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

