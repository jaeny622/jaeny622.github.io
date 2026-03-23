import type { AboutCard, SkillCategory, Experience } from '@/types';

export const MARQUEE_ITEMS = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'React', 'TypeScript', 'MobX', 'Chart.js', 'D3.js', 'Billboard.js', 'AmCharts', 'Storybook', 'Vite', 'Webpack', 'Styled-components','REST API'];
export const TECH_PILLS = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'React', 'TypeScript', 'MobX', 'Chart.js', 'D3.js', 'Billboard.js', 'Amcharts', 'Storybook', 'Vite', 'Styled-components'];

export const ABOUT_CARDS: AboutCard[] = [
  { icon: '✍️', title: '꼼꼼한 기록자',     desc: '배운 것, 해결한 것들을 꼼꼼하게 기록하는 습관. 문서화로 팀 전체 생산성에 기여합니다.' },
  { icon: '🤝', title: '적극적인 소통가',   desc: '백엔드·기획·디자인 등 다양한 직군과 능동적으로 소통하며 프로젝트의 공동 목표를 달성합니다.' },
  { icon: '♻️', title: 'Clean Code 신봉자', desc: '공통 컴포넌트 설계, Storybook 도입 등 재사용성과 유지보수성을 높이는 구조를 추구합니다.' },
];

export const SKILLS: SkillCategory[] = [
  { icon: '🖥',  name: 'Language & Framework', chips: ['HTML/CSS','JavaScript','TypeScript','React.js','MobX','jQuery'],  key: ['TypeScript','React.js'] },
  { icon: '📊',  name: 'Data Visualization',   chips: ['Chart.js','D3.js','Billboard.js','amCharts'],                     key: ['Chart.js','D3.js'] },
  { icon: '⚙️', name: 'Build & Version',       chips: ['Webpack','Vite','Babel','Git','GitLab'],                          key: ['Vite'] },
  { icon: '🎨',  name: 'UI & Styling',          chips: ['Styled-components','Bootstrap','MUI'],                            key: ['Styled-components'] },
  { icon: '🧪',  name: 'Test & Tooling',        chips: ['Storybook','Notion','Jira'],                                     key: ['Storybook'] },
  { icon: '🔌',  name: 'API & Communication',   chips: ['REST API','Axios','Ajax'],                                       key: ['REST API'] },
];

export const EXPERIENCES: Experience[] = [
  {
    company: '쓰리에스소프트',
    period: '2025.02 — 현재',
    role: '제1연구소 · 전임 연구원\n프론트엔드 개발',
    projects: [
      {
        name: 'Kakao 협업 프로젝트 유지보수', 
        period: '2025.02 — 2025.04',
        desc: '발생 이슈 사항 대응 지원 및 추가 요구사항에 대한 새로운 화면·기능 구현',
        tags: ['JavaScript','jQuery','Ajax'] 
      },
      { 
        name: '자사 제품 유지보수', 
        period: '2025.02 — 현재',
        desc: '대시보드 디자인 리뉴얼 및 amCharts 기반 차트 커스터마이징, 고객사 요구사항 기능 구현, 품질 안정성 확보',
        tags: ['JavaScript','jQuery','Ajax','amCharts5'] 
      }
    ],
  },
  {
    company: '티맥스알지 (TmaxRG)',
    period: '2022.04 — 2024.10',
    role: 'RG연구본부 · 연구원\n프론트엔드 개발',
    projects: [
      { 
        name: '미래엔 AI Class 사업',
        period: '2023.09 — 2024.04',
        desc: '팀 내 최다 페이지 담당. 사용자 페이지(AI 학습지, 퀴즈온, 리포트) 및 관리자 페이지 구현. 통합 뷰어 기술 리서치 및 백엔드 소통 주도',
        tags: ['React',' TypeScript', 'MobX', 'Vite', 'Chart.js', 'D3.js']
      },
      { 
        name: '자사 LMS 데모 페이지 구현',
        period: '2022.12 — 2023.09',
        desc: '에듀테크 박람회 출품용 데모 페이지. 파트장 역할 수행. 공통 컴포넌트 설계·구현, Storybook 도입, 컨벤션 정립',
        tags: ['React', 'TypeScript', 'MobX', 'Storybook', 'Billboard.js', 'Chart.js', 'D3.js']
      },
      { 
        name: '연구본부 프론트엔드 컨벤션 통합',
        period: '2023.01',
        desc: '팀 간 이관 시 발생하는 문제 해결을 위해 컨벤션 통합 의견 발의 및 회의 주도. 빌드도구·Lint·폴더구조·Node 버전 표준화',
        tags: ['Vite', 'ESLint', 'Prettier', 'tsconfig']
      },
      { 
        name: 'Talendar 구현 / KDB Editor 유지보수',
        period: '2022.04 — 2022.12',
        desc: '연구본부 일정관리 페이지 풀스택 구현 (로그인·마이프로필). KDB Editor 이관 받아 코드 분석 및 이슈 문서화',
        tags: ['React', 'MobX', 'MUI', 'JAVA', 'Spring']
      },
    ],
  },
]