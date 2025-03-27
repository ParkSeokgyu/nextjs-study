import { ReactNode } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const 
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
