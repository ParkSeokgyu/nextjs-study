import Link from "next/link";
import { ReactNode } from "react";

export default function GlobalLayout({ children }:{children: ReactNode}) {
  return (
    <div>
      <header>
        <Link>ONEBITE CI</Link>
      </header>
      <main>{children}</main>
      <footer>푸터</footer>
    </div>
  )
}