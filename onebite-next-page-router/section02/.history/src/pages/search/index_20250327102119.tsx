import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  console.log(router);

  return <h1>영화 검색 결과 : {q}</h1>;
}


// 서치바
Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}