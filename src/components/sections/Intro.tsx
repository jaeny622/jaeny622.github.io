import * as S from '@/components/sections/Intro.styles';

import { TECH_PILLS, EXPERIENCES } from '@/data/portfolio'; 


export default function Intro() {
  const today = new Date();

  const careerYears = today.getFullYear() - 2021 + 1;

  const STATS = [
    { num: careerYears, sup: '+', label: 'Years Exp' },
    { num: `${EXPERIENCES.reduce((sum, cur) => sum + cur.projects.length, 0)}`, sup: '+', label: 'Projects' },
    { num: `${EXPERIENCES.length}`,  sup: '',  label: 'Companies' },
  ];

  return (
    <S.IntroSection id="intro">
      <S.Leftbox>
        <S.Badge>
          <S.Dot />
          Frontend Developer · {careerYears}년차
        </S.Badge>
        <S.Name>오<em>지수</em><br />포트폴리오</S.Name>
        <S.Description>
          적극적으로 소통하고, 능동적으로 참여하며<br />
          사용자 중심으로 생각하는 프론트엔드 개발자입니다.
        </S.Description>
        <S.CTA>
          <S.BtnSecondary href="#experience">경력 보기</S.BtnSecondary>
        </S.CTA>
      </S.Leftbox>

      <S.Panel>
        <S.Card>
          <S.CardLabel>Career Overview</S.CardLabel>
          <S.Stats>
            {STATS.map(stat => (
              <div key={stat.label}>
                <S.StatNum>{stat.num}{stat.sup && <sup>{stat.sup}</sup>}</S.StatNum>
                <S.StatLabel>{stat.label}</S.StatLabel>
              </div>
            ))}
          </S.Stats>
        </S.Card>
        <S.TechCard>
          <S.TechLabel>Core Technologies</S.TechLabel>
          <S.Pills>
            {TECH_PILLS.map(tech => <S.Pill key={tech}>{tech}</S.Pill>)}
          </S.Pills>
        </S.TechCard>
      </S.Panel>
    </S.IntroSection>
  )
}
