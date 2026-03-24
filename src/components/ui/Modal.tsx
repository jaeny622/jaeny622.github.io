import { useEffect } from 'react';

import type { Project } from '@/types';

import * as S from '@/components/ui/Modal.styles';

import { IMAGE_MAP } from '@/assets/images';

interface Props { project: Project | null; onClose: () => void }

export default function Modal({ project, onClose }: Props) {
  const open = project !== null

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { 
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', fn);
    document.body.style.overflow = open ? 'hidden' : '';
    
    return () => { 
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    }
  }, [open, onClose]);

  if (!project) return null;
  const imgs = project.galleryKeys.map(k => IMAGE_MAP[k]).filter(Boolean);

  return (
    <S.Overlay $open={open} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <S.Panel>
        <S.Bar>
          <S.BarLabel>Project Detail</S.BarLabel>
          <S.CloseBtn onClick={onClose}>✕ close</S.CloseBtn>
        </S.Bar>
        {imgs.length > 0 && (
          <S.Gallery $imgLength={imgs.length}>
            {imgs.map((src, idx) => 
              <img key={idx} src={src} alt={`${project.name} ${idx + 1}`} loading="lazy" />
            )}
          </S.Gallery>
        )}
        <S.Contents>
          <S.Category>{project.category}</S.Category>
          <S.Title>{project.name}</S.Title>
          <S.Period>{project.period}</S.Period>
          <S.Sequence>
            <S.SequenceLabel>Project Goal</S.SequenceLabel>
            <S.ModalText>{project.goal}</S.ModalText>
          </S.Sequence>
          <S.Sequence>
            <S.SequenceLabel>Key Contributions</S.SequenceLabel>
            <S.ModalList>{project.points.map((point, idx) => <li key={idx}>{point}</li>)}</S.ModalList>
          </S.Sequence>
          <S.Sequence>
            <S.SequenceLabel>Tech Stack</S.SequenceLabel>
            <S.TagBox>{project.stack.map(stack => <S.Tag key={stack}>{stack}</S.Tag>)}</S.TagBox>
          </S.Sequence>
        </S.Contents>
      </S.Panel>
    </S.Overlay>
  )
}
