import { MovieData } from "@/types";
import Link from "next/link";
import style from './movie-item.module.css'

export default function MovieItem({
  id,
  title,
  subTitle,
  description,
  releaseDate,
  company,
  genres,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`} class>
      <img src={posterImgUrl} alt={title} width={200} height={300} />
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <p>{description}</p>
      <p>개봉일: {releaseDate}</p>
      <p>제작사: {company}</p>
      <p>장르: {genres.join(', ')}</p>
      <p>상영 시간: {runtime}분</p>
    </Link>
  )
}