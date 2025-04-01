import { useRouter } from "next/router";
import style from "./[id].module.css"

// SSR
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params
  return {
    props: {
      movies,
    },
  };
};

export default function Page() {
  // const router = useRouter();
  // const { id } = router.query;
= mockData;

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
