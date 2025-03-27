import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import style from ''

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter(); // 버튼 클릭시 페이지 이동동
  const [search, setSearch] = useState("");

  // 검색창 입력내용 유지지
  const q = router.query.q as string;
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  // 
  const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  }

  // 엔터키 누르면
  const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <div>
      <div>
        <input 
          value={search} 
          onKeyDown={onKeyDown}
          onChange={onChangeSearch} 
          placeholder="검색어를 입력하세요 ..." />
        <button 
          onClick={onSubmit}
        >검색</button>
      </div>
      {children}
    </div>
  );
}
