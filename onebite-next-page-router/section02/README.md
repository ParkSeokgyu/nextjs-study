# Page Router 핵심정리

## # 페이지 라우팅 설정하기
### 라우팅 경로 정리
```bash
src/
└── pages/
    ├── index.tsx          → /                    # 홈 페이지
    ├── 404.tsx            → 404 페이지            # 없는 경로 접근 시 보여줄 커스텀 에러 페이지
    ├── _app.tsx           → 전역 설정 파일        # 모든 페이지 공통 레이아웃/스타일 설정
    ├── _document.tsx      → HTML 커스터마이징     # <html>, <body> 구조 제어 (서버사이드 전용)
    ├── search/index.tsx   → /search              # 검색 페이지
    ├── test/index.tsx     → /test                # 테스트 페이지
    ├── movie/
    │   └── [id].tsx       → /movie/123           # 영화 ID에 따른 상세 페이지 (동적 라우팅)
    └── api/               → /api/*               # API 라우트, 서버리스 함수 위치

```

#### src/pages/index.tsx
```tsx
// "/" 경로에 해당하는 홈 페이지
export default function Home() {
  return (
    <h1>ONEBITE CINEMA</h1>
  );
}
```

#### src/pages/search/index.tsx - 예: /search?q=avengers → "영화 검색 결과 : avengers" 출력
```tsx
import { useRouter } from "next/router";

// "/search?q=영화제목" 형태로 쿼리 파라미터를 받아서 처리하는 페이지
export default function Page() {
  const router = useRouter();         // 라우터 객체 접근
  const { q } = router.query;        // 주소창의 ?q= 검색어 추출

  console.log(router);               // 라우터 객체 전체 확인 (개발 시 디버깅용)

  return <h1>영화 검색 결과 : {q}</h1>;
}
```

#### src/pages/movie/[id].tsx -  예: /movie/11 → "11 영화 상세페이지" 렌더링됨
```tsx
import { useRouter } from "next/router";

// "/movie/123"처럼 URL에 따라 영화 상세 페이지를 동적으로 렌더링
export default function Page() {
  const router = useRouter();        // 라우터 객체 접근
  const { id } = router.query;       // URL 파라미터 중 id 추출 (예: /movie/11 → id = 11)

  console.log(router);               // 라우터 정보 확인용 (디버깅)

  return <h1>{ id } 영화 상세페이지</h1>;
}
```



---

## # 네비게이팅
```tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link"; // ✅ 페이지 이동을 위한 Next.js 전용 컴포넌트
import { useRouter } from "next/router"; // ✅ 프로그래밍 방식의 이동을 위한 훅

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter(); // ✅ useRouter 훅을 통해 라우터 객체 사용

  // ✅ 버튼 클릭 시 "/test" 경로로 이동
  const onClickButton = () => {
    router.push("/test"); // 프로그래밍 방식으로 페이지 이동
  };

  return (
    <>
      <header>
        {/* ✅ Link 컴포넌트: 클라이언트 사이드 페이지 이동을 처리함 */}
        <Link href={"/"}>index</Link> {/* 클릭 시 / (홈)으로 이동 */}
        <Link href={"/search"}>index</Link> {/* 클릭 시 /search 페이지로 이동 */}
        <Link href={"/movie/11"}>index</Link> {/* 클릭 시 /movie/11 페이지로 이동 */}

        <div>
          {/* ✅ 버튼 클릭 시 onClickButton 실행 → /test 페이지로 이동 */}
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>

      {/* ✅ 현재 페이지의 컴포넌트 렌더링 */}
      <Component {...pageProps} />
    </>
  );
}
```

---

## # 프리페칭
- 프리페칭 제외, 추가 등.

---

## # 스타일링
```
📁 pages/
├── index.tsx           👉 페이지 컴포넌트
└── index.module.css    👉 해당 컴포넌트 전용 스타일
```


## 🧾 1. CSS 파일 (`index.module.css`)

```css
.h1 {
  color: red;
  font-size: 2rem;
}
```

> ✅ `.h1` 클래스는 이 파일 안에서만 사용됨 (다른 곳과 충돌 없음)


## 🧩 2. 컴포넌트 파일 (`index.tsx`)

```tsx
import style from "./index.module.css";

export default function Home() {
  return <h1 className={style.h1}>ONEBITE CINEMA</h1>;
}
```

> ✅ `style.h1`을 통해 해당 CSS 클래스 안전하게 적용됨


## 📌 핵심 요약

| 항목 | 설명 |
|------|------|
| `.module.css` | CSS Module용 파일 (파일명 규칙 필수) |
| `import style from "./index.module.css"` | 모듈 가져오기 |
| `className={style.클래스명}` | JSX에서 스타일 적용 방법 |




---

## # 글로벌 레이아웃 설정하기

---

## # 페이지별 레이아웃 설정하기

---

## # 검색기능 및 버튼 기능 정리 코드
```tsx
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
```

---

## # 111