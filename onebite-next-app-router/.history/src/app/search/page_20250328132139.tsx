<<<<<<< Tabnine <<<<<<<
export default function Page({//-
export default async function Page({//+
  searchParams,
}: {
  searchParams: Promise<{q: string}>;
}) {
  const { q } = await searchParams;
  return (
    <div>Search 페이지 {q}</div>
  )
}
>>>>>>> Tabnine >>>>>>>// {"conversationId":"a30dab33-f9cd-491b-8273-36d0f3a22ecf","source":"instruct"}