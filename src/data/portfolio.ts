import type { AboutCard, SkillCategory, Experience, Project, Education, StoryCard } from '@/types';

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
        name: '미래엔 디지털 교과서 지원', 
        period: '2024.05 — 2024.10',
        desc: '공통 컴포넌트 유지보수 및 크로스브라우징 이슈 해결. 특정 OS 오디오 볼륨 이슈 분석·대안 제안으로 고객사 동의 획득',
        tags: ['React', 'TypeScript', 'Storybook'] 
      },
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
];

export const PROJECTS: Project[] = [
  {
    seq: '001', 
    fallback: '교과서', 
    thumbKey: null,
    galleryKeys: [],
    category: '교육 · 디지털 교과서', 
    name: '미래엔 디지털 교과서',
    desc: '공통 컴포넌트 유지보수, 크로스브라우징 이슈 해결. OS 오디오 볼륨 이슈 대안 제안',
    period: '2024.05 — 2024.07',
    goal: '디지털 교과서 서비스의 공통 컴포넌트 유지보수 및 사용자 개선 요청 대응',
    points: [
      '기 구현된 공통 컴포넌트 유지보수 진행',
      '특정 기기 HTML Audio 볼륨 조절 불가 이슈 — OS 속성 미지원 원인 파악',
      '음원 진폭 조절 방안 검토 후 음질 저하 우려로 대안 탐색',
      'PL님께 현황·원인·대안 논리적 보고 → 협력사·고객사 동의 획득 후 적용'
    ],
    stack: ['React', 'TypeScript', 'Storybook', 'Styled-components']
  },
  {
    seq: '002', 
    fallback: 'AI Class',
    thumbKey: 'textbook',
    galleryKeys: ['textbook', 'quizon', 'quizon_detail', 'student_report', 'student_report_detail', 'quizon_report', 'admin_report', 'admin_notice'],
    category: 'Edu-Tech · 미래엔', 
    name: '미래엔 AI Class',
    desc: '초·중·고 AI 학습 플랫폼. 사용자/관리자 페이지, 통합 뷰어, 차트 커스터마이징',
    period: '2023.09 — 2024.04',
    goal: '기존 미래엔의 초등 AI Class 서비스를 중·고등 대상으로 확장하며 기능 추가 및 디자인 리뉴얼 진행',
    points: [
      '팀 내 최다 페이지 담당 — AI 학습지, 퀴즈온, 학생 리포트, 퀴즈온 리포트 페이지 구현',
      '관리자 페이지 — AI Class 평가코스 관리, FAQ 관리 페이지 구현',
      'API 명세 기반 서비스·스토어 먼저 구현 후 더미데이터 적용 → 병렬 개발 제안',
      '통합 뷰어(hwp, docx, xlsx, PPT, PDF) 기술 리서치 및 백엔드 소통 주도하여 완성',
      'Chart.js, D3.js 활용 차트 커스터마이징 및 크로스브라우징 이슈 해결'
    ],
    stack: ['React', 'TypeScript', 'MobX', 'Vite', 'Chart.js', 'D3.js', 'Storybook', 'Styled-components', 'html2canvas', 'jspdf']
  },
  {
    seq: '003', 
    fallback: 'LMS Demo', 
    thumbKey: 'scatter',
    galleryKeys: ['bar', 'bubble', 'donut', 'gauge', 'line', 'radar', 'scatter'],
    category: '에듀테크 박람회 출품', name: '자사 LMS 데모 페이지',
    desc: '파트장으로 프로젝트 전체 리드. 공통 컴포넌트 설계, Storybook 도입, 차트 커스터마이징',
    period: '2022.12 — 2023.09',
    goal: '자사 LMS 제품 시연 및 에듀테크 박람회 출품을 위한 데모 페이지 구현',
    points: [
      '파트장 역할 수행 — 프로젝트 초기 설정, 배포, 일정 조율 담당',
      '공통 Basic 컴포넌트 설계 및 구현으로 코드 재사용성 향상',
      'Storybook 도입 및 팀 내 프론트엔드 컨벤션 정립으로 업무 효율 증가',
      'Chart.js, D3.js, Billboard.js 활용 디자인 가이드 기반 차트 커스터마이징',
      'Webpack → Vite 빌드 환경 전환으로 빌드 속도 대폭 개선'
    ],
    stack: ['React', 'TypeScript', 'MobX', 'Vite', 'Webpack', 'Chart.js', 'D3.js', 'Billboard.js', 'Storybook', 'Styled-components']
  },
  {
    seq: '004', 
    fallback: 'Convention', 
    thumbKey: null, 
    galleryKeys: [],
    category: '컨벤션 리더십', 
    name: '프론트엔드 컨벤션 통합',
    desc: '팀 간 이관 문제 발의·회의 주도. 빌드도구·Lint·폴더구조 표준화',
    period: '2023.01',
    goal: '팀 간 프로젝트 이관 시 발생하는 비효율 문제를 해결하기 위한 컨벤션 표준화',
    points: [
      '팀 간 이관 문제(컨벤션 부재, 라이브러리/Node 버전 차이)를 팀장에게 안건 발의',
      '각 팀 상황 파악 후 파트원 전체 소집하여 해결 방안 회의 주도',
      '코드 구조는 팀 자율성 유지 / 빌드 도구·Lint·폴더구조·Node 버전 통일 제안',
      '통일된 환경 기반 기본 프로젝트 생성·배포 → 협업 효율 및 이관 편의성 향상'
    ],
    stack: ['Vite', 'ESLint', 'Prettier', 'tsconfig', 'Node.js']
  },
  {
    seq: '005', 
    fallback: 'Talendar', 
    thumbKey: null, 
    galleryKeys: [],
    category: '사내 툴 · 풀스택',
    name: 'Talendar (일정관리)',
    desc: '연구본부 일정관리 페이지. 로그인·마이프로필 풀스택 담당. React + Spring 연계',
    period: '2022.09 — 2022.10',
    goal: '연구본부에서 사용할 일정 관리 페이지 구현',
    points: [
      '로그인, 마이 프로필 페이지 풀스택 구현',
      'React + Spring Framework 연계 개발 경험',
      'react-calendar 라이브러리 활용 일정 UI 구현'
    ],
    stack: ['React', 'MUI', 'MobX', 'Webpack', 'TypeScript', 'react-calendar', 'JAVA', 'Spring Framework']
  },
  {
    seq: '006', 
    fallback: 'Groupware', 
    thumbKey: null, 
    galleryKeys: [],
    category: 'KOSTA 교육과정 · 우수상', 
    name: '그룹웨어 웹 구현',
    desc: '팀 협업 주도로 우수상 수상. 기업용 그룹웨어 풀스택 구현',
    period: '2021.07 — 2021.09',
    goal: '소프트웨어 기술 진흥 협회 교육과정 팀 프로젝트. 기업용 그룹웨어 풀스택 구현',
    points: [
      '메인 페이지, 게시판, 임직원 정보, 나의 정보 페이지 구현',
      '팀원들의 이슈 해결을 적극 지원하고 소통을 강화하여 팀 효율 향상',
      '팀을 두 그룹으로 나눠 진행 상황 수시 공유 및 협력 주도',
      '교육 과정 내 프로젝트 우수상 수상'
    ],
    stack: ['HTML/CSS', 'JavaScript', 'JAVA', 'Spring', 'Oracle', 'jQuery']
  },
];

export const EDUCATIONS: Education[] = [
  { 
    category: 'University',  
    name: '세종대학교',      
    subInfo: '컴퓨터공학과 학사',                       
    date: '2015.03 — 2020.08' 
  },
  { 
    category: 'Training',    
    name: 'KOSTA',           
    subInfo: 'JAVA 기반 풀스택 웹 개발자 양성과정 수료', 
    date: '2021.04 — 2021.09' 
  },
  { 
    category: 'Certificate', 
    name: 'OPIC IM3', 
    subInfo: 'ACTFL',                         
    date: '2025.03 취득' 
  },
  { 
    category: 'Certificate', 
    name: '정보처리기사',     
    subInfo: '한국산업인력공단',                         
    date: '2020.12 취득' 
  },
  { 
    category: 'Certificate', 
    name: '정보처리산업기사', 
    subInfo: '한국산업인력공단',                         
    date: '2017.11 취득' 
  },
];

export const STORIES: StoryCard[] = [
  { 
    seq: '01',
    title: '통합의 주역',
    contents: '팀 간 프로젝트 이관 시 발생하는 컨벤션 부재 문제를 직접 팀장에게 발의하고 회의를 주도했습니다. 각 팀의 자율성을 지키면서도 공통 표준을 만들어 협업 효율을 크게 높였습니다.'
  },
  { 
    seq: '02',
    title: '신입의 반란',
    contents: '입사 8개월 차, 신입으로 파트장을 맡았습니다. 공통 컴포넌트 먼저 구현하고 Storybook을 도입해 팀 효율을 높였으며, 매주 진행상황을 공유하며 기한 내 성공적으로 완성했습니다.'
  },
  { 
    seq: '03',
    title: '백엔드와의 화합', 
    contents: '파일 뷰어 구현 난관에서 프론트엔드 한계를 인정하고 백엔드에 도움을 요청했습니다. Java · Python 테스트까지 직접 진행해 설득력 있는 제안으로 통합 뷰어를 완성했습니다.'
  },
  { 
    seq: '04',
    title: '기술적 창의성',
    contents: '특정 OS에서 HTML Audio 볼륨 조절이 불가한 이슈를 체계적으로 분석하고, 음원 변질 없는 대안을 PL에 논리적으로 보고해 협력사·고객사의 동의까지 이끌어냈습니다.'
  },
  { 
    seq: '05',
    title: '구조 개선 및 유지보수 효율화',
    contents: '9개 화면에 중복된 UI 코드를 공통 템플릿 구조로 통합 설계하여 코드 재사용성과 가독성을 높이고, 기능 확장 및 수정 시 발생할 수 있는 오류 가능성과 유지보수 비용을 크게 절감했습니다.'
  },
  { 
    seq: '06',
    title: '서비스 안정성 및 품질 확보',
    contents: '고객사 요청 기능 및 자사 제품 개선 사항 적용 시 테스트 케이스를 직접 설계·수행하여 기능 검증 체계를 강화하고 서비스 품질 안정성을 확보했습니다.'
  }
];
