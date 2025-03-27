import { ReactNode } from 'react';

export default SearchableLayout({
  children,
}:{
  children: ReactNode;
}) {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  )
}