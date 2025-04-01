import { MovieData } from "@/types";

export default async function fetchBoos() : Promise<MovieData[]> {
  const url = `http://localhost:12345/landom`;

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