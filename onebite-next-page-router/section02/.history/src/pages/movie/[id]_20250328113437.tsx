import { useRouter } from "next/router";

const mockData

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  console.log(router)

  return <h1>{ id } 영화 상세페이지</h1>;
}
