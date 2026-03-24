import { useReveal } from '@/hooks/useReveal';

import * as C from '@/styles/Common.styles';
import * as S from '@/components/sections/Experience.styles';

import { EXPERIENCES } from '@/data/portfolio';

export default function Experience() {
  const ref = useReveal('.js-reveal')
  return (
    <section id="experience">
      <C.SectionWrap>
        <C.Eyebrow>Work Experience</C.Eyebrow>
        <C.SectionTitle>경력 <em>사항</em></C.SectionTitle>
        <S.ExpList ref={ref}>
          {EXPERIENCES.map((exp, expIdx) => (
            <S.ExpCardBox key={exp.company} className='js-reveal' style={{ transitionDelay: `${expIdx * 100}ms` }}>
              <S.CoCard>
                <S.CoName>{exp.company}</S.CoName>
                <S.CoPeriod>{exp.period}</S.CoPeriod>
                <S.CoRole>
                  {exp.role.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
                  </S.CoRole>
              </S.CoCard>
              <S.Projects>
                {exp.projects.map(proj => (
                  <S.ProjectCard key={proj.name}>
                    <S.ProjName>{proj.name}</S.ProjName>
                    <S.ProjPeriod>{proj.period}</S.ProjPeriod>
                    <S.ProjDesc>{proj.desc}</S.ProjDesc>
                    <S.TagBox>
                      {proj.tags.map(tag => <S.Tag key={tag}>{tag}</S.Tag>)}
                    </S.TagBox>
                  </S.ProjectCard>
                ))}
              </S.Projects>
            </S.ExpCardBox>
          ))}
        </S.ExpList>
      </C.SectionWrap>
    </section>
  )
}
