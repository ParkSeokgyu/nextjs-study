import { ReactNode } from "react";

export default function GlobalLayout({ children }:{children: ReactNode}) {
  return (
    <div>
      <header>헤더</header>
      <main></main>
    </div>
  )
}