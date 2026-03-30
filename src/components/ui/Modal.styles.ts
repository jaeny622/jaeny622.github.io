import styled from 'styled-components';

export const Overlay = styled.div<{$open: boolean}>`
  display: none;
  position: fixed;
  inset: 0;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  
  background: rgba(26,36,32,.55);
  backdrop-filter: blur(12px);
  
  z-index: 1000;

  ${props => props.$open && 'display: flex;'}
`;

export const Panel = styled.div`
  width: 100%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;
  
  background: rgba(255, 255, 255, .96);
  backdrop-filter: blur(20px);
  box-shadow: var(--sh-lg);
  border: 1px solid var(--border);
  border-radius: 20px;

  animation: modalUp .38s var(--smooth) both;
`;

export const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.6rem;
  
  background: rgba(255, 255, 255, .92);
  backdrop-filter: blur(12px);
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid var(--border2);
`;

export const BarLabel = styled.span`
  font-family: var(--fm);
  font-size: .58rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--dim);
`;

export const CloseBtn = styled.button`
  padding: .32rem .8rem;

  font-family: var(--fm);
  font-size: .62rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--mid);

  border-radius: 99px;
  border: 1px solid var(--border2);

  transition: border-color .2s, color .2s, background .2s;
  
  cursor: none;

  &:hover {
    background: rgba(45, 106, 79, .08);
    border-color: var(--accent-xl);
    color: var(--accent);
  }
`;

export const Gallery = styled.div<{$imgLength: number}>`
  display: grid;
  gap: 1px;
  background: var(--border2);

  ${props => props.$imgLength >= 2 && 'grid-template-columns: 1fr 1fr;'};

  & img {
    width: 100%;

    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: top;

    filter: saturate(.9);
    
    transition: filter .3s;

    &:hover { 
      filter: saturate(1);
    }
  }

  @media(max-width: 540px) {
    ${props => props.$imgLength >= 2 && 'grid-template-columns: 1fr;'};
  }
`;

export const Contents = styled.div`
  padding: 2.8rem 3rem 3.5rem;

  @media(max-width: 900px) {
    padding: 1.8rem;
  }
`;

export const Category = styled.p`
  margin-bottom:.6rem;

  font-family:var(--fm);
  font-size:.6rem;
  letter-spacing:.15em;
  text-transform:uppercase;
  color:var(--dim);
`;

export const Title = styled.h2`
  margin-bottom: .5rem;

  font-family: var(--fi);
  font-style: italic;
  font-weight: 500;
  font-size: 2.6rem;
  letter-spacing: -.025em;

  @media(max-width: 900px) {
    font-size: 2rem;
  }
`;

export const Period = styled.span`
  display: inline-flex;
  padding: .25rem .7rem;
  margin-bottom: 2.2rem;
  
  font-family: var(--fm);
  font-size: .65rem;
  letter-spacing: .08em;
  color: var(--accent);
  
  background: rgba(45, 106, 79, .1);
  border:1px solid rgba(45, 106, 79, .2);
  border-radius: 99px;
`;

export const Sequence = styled.div`
  margin-bottom: 2rem;
`;

export const SequenceLabel = styled.p`
  margin-bottom: .8rem;

  font-family: var(--fm);
  font-size: .58rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--accent-xl);
`;

export const ModalText = styled.p`
  font-size: .88rem;
  line-height: 1.9;
  color: var(--mid);
`;

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .55rem;

  & li {
    position: relative;
    padding-left: 1.4rem;
    
    font-size: .86rem;
    line-height: 1.75;
    color: var(--mid);

    &::before {
      content:'›';
      position:absolute;
      left:0;
      
      font-size:1.1rem;
      line-height:1.2;
      color:var(--accent-xl);
    }
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  margin-top: .6rem;
`;

export const Tag = styled.span`
  padding: .22rem .7rem;

  font-family: var(--fm);
  font-size: .65rem;
  color: var(--accent);

  background: rgba(45, 106, 79, .07);
  border: 1px solid rgba(45, 106, 79, .18);
  border-radius: 99px;
`;