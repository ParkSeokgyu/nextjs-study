export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{q: string}>;
}) {
  const { q } = await searchParams;
  return (
    <div>movie/[id] 상세페이지</div>
  )
}