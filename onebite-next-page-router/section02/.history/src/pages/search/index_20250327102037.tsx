import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  console.log(router);

  return <h1>영화 검색 결과 : {q}</h1>;
}


Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}