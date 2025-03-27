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
        <Link href={"/search"}>Search</Link> {/* 클릭 시 /search 페이지로 이동 */}
        <Link href={"/movie/11"}>Movi</Link> {/* 클릭 시 /movie/11 페이지로 이동 */}

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
