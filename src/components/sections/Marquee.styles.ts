import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  
  padding: .7rem 0;
  overflow: hidden;
  
  background: var(--accent);
`;

export const Track = styled.div`
  display: flex;
  white-space: nowrap;
  
  animation: marqueeRun 22s linear infinite;
`;

export const MarqueeItem = styled.span`
  font-family: var(--fd);
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: rgba(255,255,255,.8);
  
  padding: 0 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4rem;

  &::after {
    content: '✦'; 
    color: rgba(255,255,255,.4); 
    font-size: .55rem;
  }
`;