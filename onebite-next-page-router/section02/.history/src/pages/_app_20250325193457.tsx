import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        <Link href={"/search"}>index</Link>
        <Link href={"/movie/11"}>index</Link>

        <div>
          bu
        </div>
      </header>

      <Component {...pageProps} />
    </>
  )
}
