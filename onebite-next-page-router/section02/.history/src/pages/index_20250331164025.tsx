import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import { InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";

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

<<<<<<< Tabnine <<<<<<<
export default function Home({ movies }: InferGetServerSidePropsType<typeof getServerSideProps>) {//-
export default function Home({ allMovies, recoMovies }: InferGetServerSidePropsType<typeof getServerSideProps>) {//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"f96d91e5-5447-4c96-a2fd-c3420d48ce01","source":"instruct"}
  console.log(movies);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommendedMovieList}>
          {recoMovies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allMoviesList}>
          {allMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
