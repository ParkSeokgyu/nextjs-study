import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";
import { InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-books";
import fetchRandomMovie from "@/lib/fetch-books";

// SSR
export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies()
  ])

  return {
    props: {
      allMovies,
      recoMovies
    },
  };
};

