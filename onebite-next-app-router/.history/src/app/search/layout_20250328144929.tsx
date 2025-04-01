export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
}


// 공통된 경로로 시작하지 않는 페이지들에도 동일한 레이아웃 설정.

// 특정 페이지만 적용되는 공통 레이아웃 14분 30