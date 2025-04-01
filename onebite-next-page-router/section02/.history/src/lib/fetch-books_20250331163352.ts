import { MovieData } from "@/types";

export default async function fetchBooks() : Promise<MovieData[]> {
  const url = `http://localhost:12345/movie`;

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

export default async function fetchRandomBooks() : Promise<MovieData[]> {
  const url = `http://localhost:12345/la`;

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