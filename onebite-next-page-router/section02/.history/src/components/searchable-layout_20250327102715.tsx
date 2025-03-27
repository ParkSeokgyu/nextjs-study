import { ReactNode } from 'react';

export default function SearchableLayout({
  children,
}:{
  children: ReactNode;
}) {
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      {children}
    </div>
  )
}