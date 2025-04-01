export default async function Page({
  arams,
}: {
  arams: Promise<{id: string}>;
}) {
  const { q } = await arams;
  return (
    <div>movie/[id] 상세페이지</div>
  )
}