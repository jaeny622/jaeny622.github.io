import styled from 'styled-components';

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 1rem;

  @media(max-width: 900px) {
    grid-template-columns: 1fr 1fr; 
  }

  @media(max-width: 540px) {
    grid-template-columns: 1fr; 
  }
`;

export const SkillCard = styled.div`
  padding: 2rem; 
  position: relative; 
  overflow: hidden;
  
  background: var(--surface);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border); 
  border-radius: 14px;
  box-shadow: var(--sh-sm);
  
  transition: transform .28s var(--ease), box-shadow .28s;

  &::after {
    content:''; 
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    height: 3px;

    background: linear-gradient(90deg, var(--accent), var(--accent-xl));
    border-radius: 2px 2px 0 0;

    transform: scaleX(0); 
    transform-origin: left; 
    transition: transform .35s var(--smooth);
  }

  &:hover {
    transform: translateY(-4px); 
    box-shadow: var(--sh);
  }
`;

export const Icon = styled.div`
  margin-bottom: .8rem;
  font-size: 1.5rem;
`;

export const Name = styled.div`
  margin-bottom: 1rem;
  
  font-family: var(--fm); 
  font-size: .6rem; 
  letter-spacing: .14em; 
  text-transform: uppercase; 
  color: var(--accent); 
`;

export const SkillChipBox = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  gap: .4rem;
`;

export const Chip = styled.span<{$hasKey : boolean}>`
  padding: .25rem .7rem; 
  
  font-family: var(--fm); 
  font-size: .68rem; 
  border-radius: 99px; 
  border: 1px solid rgba(45,106,79,.15); 
  background: rgba(45,106,79,.04); 
  color: var(--mid); 
  
  transition: all .2s;

  ${props => props.$hasKey && `
    background: rgba(45, 106, 79, .1); 
    border-color: rgba(45, 106, 79, .28); 
    color: var(--accent); 
    font-weight: 500;`
  };
`;