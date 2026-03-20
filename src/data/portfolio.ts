import type { AboutCard, SkillCategory } from '@/types';

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