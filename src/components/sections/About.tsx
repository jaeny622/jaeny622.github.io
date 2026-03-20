import { useReveal } from '@/hooks/useReveal';

import * as C from '@/styles/Common.styles';
import * as S from '@/components/sections/About.styles';

import { ABOUT_CARDS } from '@/data/portfolio';

export default function About() {
  const ref = useReveal();
  return (
    <section id="about">
      <C.SectionWrap>
        <C.Eyebrow>About Me</C.Eyebrow>
        <C.SectionTitle>안녕하세요,<br/><em>오지수</em>입니다.</C.SectionTitle>
        <S.Grid ref={ref}>
          <div>
            <S.TopComment>
              즉각적인 변화를 눈으로 볼 수 있는<br/>
              <em>프론트엔드 개발</em>에 열정을 가진 개발자입니다.
            </S.TopComment>
            <S.BodyComment>
              풀스택 개발을 시작으로 현재는 프론트엔드 개발에 집중하고 있습니다.
              꼼꼼함과 성실함을 바탕으로 배운 것들을 기록하는 습관이 있으며,
              재사용성 높은 코드와 Clean Code에 대해 끊임없이 고민합니다.
              <br/>
              빠른 이슈 대응 능력과 다른 직군과의 원활한 소통이 좋은 서비스를 만드는
              핵심이라고 생각하며, 능동적으로 팀원들과 협력하는 개발자가 되고자 합니다.
            </S.BodyComment>
            <S.Contact>
              <S.Item><S.ItemLabel>email</S.ItemLabel><S.ItemValue><a href="mailto:jaeny96@naver.com">jaeny96@naver.com</a></S.ItemValue></S.Item>
              <S.Item><S.ItemLabel>phone</S.ItemLabel><S.ItemValue>010-6641-9235</S.ItemValue></S.Item>
              <S.Item><S.ItemLabel>birth</S.ItemLabel><S.ItemValue>1996.10.16</S.ItemValue></S.Item>
            </S.Contact>
          </div>
          <S.CardBox className='js-reveal' style={{ transitionDelay:'100ms' }}>
            {ABOUT_CARDS.map(c => (
              <S.Card key={c.title} data-cur="">
                <S.Icon>{c.icon}</S.Icon>
                <div>
                  <S.CardTitle>{c.title}</S.CardTitle>
                  <S.CardDesc>{c.desc}</S.CardDesc>
                </div>
              </S.Card>
            ))}
          </S.CardBox>
        </S.Grid>
      </C.SectionWrap>
    </section>
  )
}
