import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q;

<<<<<<< Tabnine <<<<<<<
  useEffect(() => {
    setSearch(q || "");//-
    setSearch(typeof q === 'string' ? q : q?.join(''));//+
  }, [q]);
>>>>>>> Tabnine >>>>>>>// {"conversationId":"87542d13-393c-4144-a873-80dab9624c6a","source":"instruct"}

  const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if (!search) return;
    router.push(`/search?q=${search}`);
  }

  return (
    <div>
      <div>
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요 ..." />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
