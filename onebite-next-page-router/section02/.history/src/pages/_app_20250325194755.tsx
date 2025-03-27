import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
  };

  return (
    <>
      <header>
        {/* 네비게이션 링크 */}
        <Link href={"/"}>index</Link>
        <Link href={"/search"}>index</Link>
        <Link href={"/movie/11"}>index</Link>

        <div>
          <button onClick={onClickButton}>/text 페이지로 이동</button>
        </div>
      </header>

      <Component {...pageProps} />
    </>
  )
}
