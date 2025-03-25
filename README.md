## 🧾 Git 커밋 & 푸시 순서 요약 (main 브랜치 기준)

```bash
# 1. Git 초기화 (한 번만)
git init

# 2. 안전 디렉토리 등록 (F 드라이브 에러 방지용)
git config --global --add safe.directory F:/nextjs-study

# 3. 원격 저장소 연결
git remote add origin https://github.com/ParkSeokgyu/nextjs-study.git

# 4. 연결 확인
git remote -v

# 5. 변경 파일 추가
git add .

# 6. 커밋 만들기
git commit -m "feat: 초기 프로젝트 설정"

# 7. 브랜치를 main으로 설정
git branch -M main

# 8. GitHub에 푸시
git push -u origin main
```

---

## ✅ 이후엔 이렇게만 하면 됩니다

```bash
git add .
git commit -m "변경 내용"
git push
```

---

