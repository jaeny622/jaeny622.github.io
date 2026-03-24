import { useReveal } from '@/hooks/useReveal';

import * as C from '@/styles/Common.styles';
import * as S from '@/components/sections/Story.styles';

import { STORIES } from '@/data/portfolio';

export default function Story() {
  const ref = useReveal('.js-reveal');

  return (
    <C.SectionAlt id="story">
      <C.SectionWrap>
        <C.Eyebrow>My Story</C.Eyebrow>
        <C.SectionTitle>나를 만든 <em>경험들</em></C.SectionTitle>
        <S.GridBox ref={ref}>
          {STORIES.map((story, idx) => (
            <S.StoryCard key={story.seq} className='js-reveal' style={{ transitionDelay: `${idx * 80}ms` }}>
              <S.Sequence>{story.seq}</S.Sequence>
              <S.Title>{story.title}</S.Title>
              <S.Contents>{story.contents}</S.Contents>
            </S.StoryCard>
          ))}
        </S.GridBox>
      </C.SectionWrap>
    </C.SectionAlt>
  )
}
