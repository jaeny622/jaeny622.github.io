import { useReveal } from '@/hooks/useReveal';

import type { Project } from '@/types';

import * as C from '@/styles/Common.styles';
import * as S from '@/components/sections/Projects.styles';

import { PROJECTS } from '@/data/portfolio';
import { IMAGE_MAP } from '@/assets/images';

interface Props { onOpen: (p: Project) => void }

export default function Projects({ onOpen }: Props) {
  const ref = useReveal('.js-reveal');

  return (
    <C.SectionAlt id="projects">
      <C.SectionWrap>
        <C.Eyebrow>Key Projects</C.Eyebrow>
        <C.SectionTitle>주요 <em>프로젝트</em></C.SectionTitle>
        <S.GridBox ref={ref}>
          {PROJECTS.map((proj, idx) => {
            const thumb = proj.thumbKey ? IMAGE_MAP[proj.thumbKey] : null
            return (
              <S.ProjectCard
                key={proj.seq}
                className='js-reveal'
                style={{ transitionDelay: `${idx * 60}ms` }}
                onClick={() => onOpen(proj)}
              >
                <S.Thumbnail>
                  {thumb
                    ? <img src={thumb} alt={proj.name} loading="lazy" />
                    : <S.NoImg>{proj.fallback}</S.NoImg>
                  }
                  <S.Sequence>{proj.seq}</S.Sequence>
                  <S.Overlay><S.ViewBtn>상세 보기 ↗</S.ViewBtn></S.Overlay>
                </S.Thumbnail>
                <S.CardContents>
                  <S.Category>{proj.category}</S.Category>
                  <S.Name>{proj.name}</S.Name>
                  <S.Desc>{proj.desc}</S.Desc>
                  <S.Tech>
                    {proj.stack.slice(0, 5).map(tag => <S.TechTag key={tag}>{tag}</S.TechTag>)}
                    {proj.stack.length > 5 && <S.TechTag>+{proj.stack.length - 5}</S.TechTag>}
                  </S.Tech>
                </S.CardContents>
              </S.ProjectCard>
            )
          })}
        </S.GridBox>
      </C.SectionWrap>
    </C.SectionAlt>
  );
}
