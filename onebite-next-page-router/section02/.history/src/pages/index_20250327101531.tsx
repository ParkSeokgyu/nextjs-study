import style from "./index.module.css"

export default function Home() {
  return (
    <h1>메인 페이지</h1>
  );
}

Home.getLayout = (page: ReachNode) => {
  return <SearchableLayout>{page</SearchableLayout>
}