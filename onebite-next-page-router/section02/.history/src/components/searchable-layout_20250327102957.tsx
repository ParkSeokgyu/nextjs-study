import { ReactNode, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.val)
  }
  return (
    <div>
      <div>
        <input type="text" placeholder="검색어를 입력하세요 ..." />
        <button>검색</button>
      </div>
      {children}
    </div>
  );
}
