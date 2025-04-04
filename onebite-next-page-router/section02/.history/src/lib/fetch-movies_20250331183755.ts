import { MovieData } from "@/types";

export default async function fetchMovies() : Promise<MovieData[]> {
  let url = `http://localhost:12345/movie`;

  if(q)

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

