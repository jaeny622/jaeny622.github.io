import { useReveal } from '@/hooks/useReveal';

import * as C from '@/styles/Common.styles';
import * as S from '@/components/sections/Education.styles';

import { EDUCATIONS } from '@/data/portfolio';

export default function Education() {
  const ref = useReveal('.js-reveal')
  return (
    <section id="education">
      <C.SectionWrap>
        <C.Eyebrow>Education &amp; Cert</C.Eyebrow>
        <C.SectionTitle>학력 &amp; <em>자격</em></C.SectionTitle>
        <S.GridBox ref={ref}>
          {EDUCATIONS.map((edu, idx) => (
            <S.EduCard key={edu.name} className='js-reveal' style={{ transitionDelay: `${idx * 80}ms` }} data-hover="">
              <S.Category>{edu.category}</S.Category>
              <S.Name>{edu.name}</S.Name>
              <S.SubInfo>{edu.subInfo}</S.SubInfo>
              <S.Date>{edu.date}</S.Date>
            </S.EduCard>
          ))}
        </S.GridBox>
      </C.SectionWrap>
    </section>
  )
}
