"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Searchbar() {
  const router = useRouter(); 

  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input 
        value={search} 
        onKeyDown={onKeyDown}
        onChange={onChangeSearch} 
        type="text" 
      />
      <button onClick={onSubmit}>
        검색
      </button>
    </div>
  );
}
