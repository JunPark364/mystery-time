## 미스터리 타임

### 개발 서버 실행

개발 서버 열기:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 사용자 이름 변경

`app/case/layout.tsx` 파일에서 players 배열 변수 값 변경

### 문제 페이지 메뉴얼

플레이어 아이콘 클릭 : 행동 타이머 1분 추가
플레이어 이름 클릭 : 행동 타이머 초기화
플레이어 상태칸 클릭 : 플레이어 상태 / 플레이어 등수 (1등, 2등 3등) 변경

### 정답 페이지 메뉴얼

정답 페이지 진입 url : /answer/`[문제번호]`

정답 텍스트 클릭 시, 음성 해설 재생
