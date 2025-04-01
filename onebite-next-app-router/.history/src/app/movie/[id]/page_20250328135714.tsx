export default async function Page({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const { q } = await params;
  return (
    <div>movie/[id] 상세페이지</div>
  )
}