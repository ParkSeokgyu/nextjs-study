import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const movies = await fetchMovies(q as string);

  return {
    props: {
      movies,
    },
  };
};

export default function Page({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  // const { q } = router.query;
  // const keyword = (q as string)?.toLowerCase() || "";

  // // 검색어에 따라 영화 필터링
  // const filtered = useMemo(() => {
  //   if (!keyword) return [];
  //   return movies.filter((movie) => {
  //     return (
  //       movie.title.toLowerCase().includes(keyword) ||
  //       movie.subTitle.toLowerCase().includes(keyword) ||
  //       movie.description.toLowerCase().includes(keyword)
  //     );
  //   });
  // }, [keyword]);
  // console.log(router);

  return (
    <div className={style.searchMovieList}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
