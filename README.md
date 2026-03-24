# 오지수 포트폴리오

React + TypeScript + Vite 프로젝트입니다.

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## 폴더 구조

```
src/
├── assets/images/          # 스크린샷 JPG + index.ts (IMAGE_MAP)
├── components/
│   ├── layout/             # Cursor / Navbar / Footer  (각 .tsx + .styles.ts)
│   ├── sections/           # Hero Marquee About Skills Experience
│   │                         Projects Education Story Contact
│   └── ui/                 # Modal
├── data/portfolio.ts       # ★ 모든 콘텐츠 데이터 수정은 여기
├── hooks/                  # useCursor / useNavScroll / useReveal
├── styles/global.css       # CSS 변수 · 리셋 · 키프레임 · 공통 유틸
├── types/index.ts          # TypeScript 인터페이스
├── App.tsx
└── main.tsx
```