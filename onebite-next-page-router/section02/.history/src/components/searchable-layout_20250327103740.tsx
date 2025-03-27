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
  useEffect{() => {//-
  useEffect(() => {//+
    setSearch(q || "");
  }, [q]}//-
  }, [q]);//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"5d320a01-0910-47e6-a709-6723584687e6","source":"instruct"}

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
