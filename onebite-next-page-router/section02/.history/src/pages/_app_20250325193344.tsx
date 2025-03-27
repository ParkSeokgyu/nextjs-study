import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <link rel="stylesheet" href="" />
      </header>

      <Component {...pageProps} />
    </>
  )
}
