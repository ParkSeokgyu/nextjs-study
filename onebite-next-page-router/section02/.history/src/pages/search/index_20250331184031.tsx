import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  
  return {
    props: {},
  };
};

export default function Page() {
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
      {filtered.length > 0 ? (
        filtered.map((movie) => <MovieItem key={movie.id} {...movie} />)
      ) : (
        <p className={style.noResult}>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
