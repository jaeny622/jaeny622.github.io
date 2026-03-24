import { useState } from 'react';
import { useNavScroll } from '@/hooks/useNavScroll';

import * as S from './Navbar.styles';

const LINKS = [
  {href: '#about', label: 'About'},
  {href: '#skills', label: 'Skills'},
  {href: '#experience', label: 'Experience'},
  {href: '#projects', label: 'Projects'},
  {href: '#education', label: 'Education'},
  {href: '#story', label: 'Story'}
]

export default function Navbar() {
  const scrolled = useNavScroll();
  const [open, setOpen] = useState(false);

  return (
    <S.Nav $scrolled={scrolled} $open={open}>
      <S.Logo>
        <S.Leaf>J</S.Leaf>오지수
      </S.Logo>
      <S.Links $open={open}>
        {LINKS.map(link => (
          <S.Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </S.Link>
        ))}
      </S.Links>
      <S.Hamburger $open={open} onClick={() => setOpen(v => !v)} aria-label="메뉴">
        <span /><span /><span />
      </S.Hamburger>
    </S.Nav>
  )
}
