import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css"
import { ReactNode } from "react";
import movies from '@/'

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        {}
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}