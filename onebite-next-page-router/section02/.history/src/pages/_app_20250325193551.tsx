import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        <Link href={"/search"}>index</Link>
        <Link href={"/movie/11"}>index</Link>

        <div>
          <button>/text 페이지로 이동</button>
        </div>
      </header>

      <Component {...pageProps} />
    </>
  )
}
