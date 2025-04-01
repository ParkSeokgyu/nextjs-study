export default function Page({
  searchParams,
}: {
  searchParams: Promise<{q: string}>;
}) {
  return (
    <div>Search 페이지</div>
  )
}