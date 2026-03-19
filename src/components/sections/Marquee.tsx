import * as S from '@/components/sections/Marquee.styles';

const MARQUEE_ITEMS = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'React', 'TypeScript', 'MobX', 'Chart.js', 'D3.js', 'Billboard.js', 'amCharts', 'Storybook', 'Vite', 'Webpack','Styled-components', 'REST API'];

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  
  return (
    <S.Wrapper>
      <S.Track>
        {items.map((item, i) => <S.MarqueeItem key={i}>{item}</S.MarqueeItem>)}
      </S.Track>
    </S.Wrapper>
  )
}
