export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{id: string}>;
}) {
  const { q } = await searchParams;
  return (
    <div>movie/[id] 상세페이지</div>
  )
}