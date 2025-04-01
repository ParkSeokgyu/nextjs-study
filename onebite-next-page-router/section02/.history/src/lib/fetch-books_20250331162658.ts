export default async function fetchBooks() {
  const url = `http://localhost:12345/movie`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}