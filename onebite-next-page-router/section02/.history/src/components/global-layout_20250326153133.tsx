import { ReactNode } from "react";

export default function GlobalLayout({ children }:{children: ReactNode}) {
  return (
    <div>
      <header>헤ㅋ더</header>
      <main>{children}</main>
      <footer>푸터터</footer>
    </div>
  )
}