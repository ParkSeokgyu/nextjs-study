import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);


  const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if (!search) return;
    router.push(`/search?q=${search}`);
  }

  const onKeyDown = (e : React.KeyboradEvent) => {
    if(e.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <div>
      <div>
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요 ..." />
        <button 
          onClick={onSubmit}
          on
        >검색</button>
      </div>
      {children}
    </div>
  );
}
