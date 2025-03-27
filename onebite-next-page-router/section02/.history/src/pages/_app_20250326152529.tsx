import "@/styles/globals.css";
import type { AppProps } from "next/app";
t { useRouter } from "next/router"; // ✅ 프로그래밍 방식의 이동을 위한 훅

export default function App({ Component, pageProps }: AppProps) {


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
