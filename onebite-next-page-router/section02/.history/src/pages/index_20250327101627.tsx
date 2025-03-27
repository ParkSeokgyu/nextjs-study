import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css"
import { ReadyCacheNode } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReactNode } from "react";

export default function Home() {
  return (
    <h1>메인 페이지</h1>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}