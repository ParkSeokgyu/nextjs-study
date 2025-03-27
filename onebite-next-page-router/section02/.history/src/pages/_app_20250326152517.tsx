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
    <div>
      <header>
        헤더
      </header>

      <Component {...pageProps} />

      <footer>푸터터</footer>
    </div>
  );
}
