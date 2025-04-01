export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <div>
      <Searchbar>
      {children}
    </div>
  );
}


