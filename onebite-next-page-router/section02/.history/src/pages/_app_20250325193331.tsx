import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1>Next.js App</h1>
      </header>
      <Component {...pageProps} />
    </>
  )
}
