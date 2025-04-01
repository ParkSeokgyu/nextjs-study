export default function Page({
  searchParams,
}: {
  searchParams: Promise<{q: string}>;
}) {
  const { q } = await searchParams;
  return (
    <div>Search 페이지 {</div>
  )
}