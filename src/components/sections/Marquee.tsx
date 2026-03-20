import * as S from '@/components/sections/Marquee.styles';

import { MARQUEE_ITEMS } from '@/data/portfolio'; 

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
