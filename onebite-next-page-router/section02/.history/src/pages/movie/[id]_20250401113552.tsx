import style from "./[id].module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movies";

// SSR
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));

  return {
    props: {
      movie,
    },
  };
};

export default function Page({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!movie) return "문제가 발생했습니다. 다시 시도해주세요.";

  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;


  return (
    <div className={style.page}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.text_area}>
        <h1 className={style.logo}>ONEBITE CINEMA</h1>
        <h2 className={style.title}>{title}</h2>
        <p className={style.info}>
          {releaseDate} / {genres.join(", ")} / {runtime}분
        </p>
        <p className={style.company}>{company}</p>
        <p className={style.subTitle}>{subTitle}</p>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}
