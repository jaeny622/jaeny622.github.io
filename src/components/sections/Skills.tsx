import { useReveal } from '@/hooks/useReveal';

import * as C from '@/styles/Common.styles';
import * as S from '@/components/sections/Skills.styles';

import { SKILLS } from '@/data/portfolio';

export default function Skills() {
  const ref = useReveal();

  return (
    <C.SectionAlt id="skills">
      <C.SectionWrap>
        <C.Eyebrow>Tech Stack</C.Eyebrow>
        <C.SectionTitle>기술 <em>스택</em></C.SectionTitle>
        <S.GridBox ref={ref}>
          {SKILLS.map(sk => (
            <S.SkillCard key={sk.name} className='js-reveal'>
              <S.Icon>{sk.icon}</S.Icon>
              <S.Name>{sk.name}</S.Name>
              <S.SkillChipBox>
                {sk.chips.map(c => (
                  <S.Chip key={c} $hasKey={sk.key.includes(c)}>{c}</S.Chip>
                ))}
              </S.SkillChipBox>
            </S.SkillCard>
          ))}
        </S.GridBox>
      </C.SectionWrap>
    </C.SectionAlt>
  );
}
