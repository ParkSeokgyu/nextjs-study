import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    router.push('')
  }

  return (
    <div>
      <div>
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요 ..." />
        <button>검색</button>
      </div>
      {children}
    </div>
  );
}
