import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
// CSS 모듈 스타일을 불러옴
import style from './searchable-layout.module.css'

/**
 * 검색 기능을 제공하는 레이아웃 컴포넌트
 * - 검색어 상태 관리
 * - 엔터키/버튼 클릭 시 페이지 이동
 * - 기존 검색어 유지
 */
export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Next.js의 라우터 훅
  // 페이지 이동이나 query 파라미터를 확인/변경할 때 사용
  const router = useRouter(); 

  // 검색어 상태
  const [search, setSearch] = useState("");

  // 라우터의 query 파라미터 중 "q"를 추출
  // (예: /search?q=hello → q = "hello")
  const q = router.query.q as string;

  // 컴포넌트가 마운트되거나 q 값이 바뀔 때,
  // search 상태를 q로 동기화
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  /**
   * 인풋이 변경될 때 실행
   * - e.target.value를 search 상태에 저장
   */
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  /**
   * 검색어 제출 시 실행
   * - 현재 search 상태와 기존 q가 같으면 아무것도 하지 않음
   * - 다르면 /search?q={search}로 라우팅
   */
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  /**
   * 인풋에서 엔터키를 누를 때 실행
   * - key가 'Enter'이면 onSubmit() 호출
   */
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div>
      {/* 검색창 컨테이너 (CSS 모듈 스타일 사용) */}
      <div className={style.searchbar_container}>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요 ..." 
        />
        <button onClick={onSubmit}>
          검색
        </button>
      </div>

      {/* 자식 컴포넌트 렌더링 영역 */}
      {children}
    </div>
  );
}
