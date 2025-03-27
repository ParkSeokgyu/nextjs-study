import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Link>index</Link>
      </header>

      <Component {...pageProps} />
    </>
  )
}
