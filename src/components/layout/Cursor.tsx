import { useCursor } from '@/hooks/useCursor'
import * as S from './Cursor.styles'

export default function Cursor() {
  const { dotRef, ringRef } = useCursor();
  return (
    <>
      <S.Dot id="c-dot" ref={dotRef} />
      <S.Ring id="c-ring" ref={ringRef} />
    </>
  )
}
