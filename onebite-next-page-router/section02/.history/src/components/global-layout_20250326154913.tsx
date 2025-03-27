import Link from "next/link";
import { ReactNode } from "react";
import 

export default function GlobalLayout({ children }:{children: ReactNode}) {
  return (
    <div>
      <header>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
      <footer>푸터</footer>
    </div>
  )
}