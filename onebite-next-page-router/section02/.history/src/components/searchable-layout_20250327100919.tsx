import { ReactNode } from 'react';

export default SearchableLayout({
  children,
}:{
  children: ReactNode;
}) {
  return (
    <div>
      <input type="text" placeholder="Search..." />
    </div>
  )
}