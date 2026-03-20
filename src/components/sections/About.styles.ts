import styled from 'styled-components';

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width:900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const TopComment = styled.p`
  margin-bottom: 1.8rem;

  font-family: var(--fi);
  font-style: italic;
  font-size: 1.85rem;
  line-height: 1.4;
  color: var(--ink);

  & em {
      font-style: normal;
      color: var(--accent);
    }
`;

export const BodyComment = styled.p`
  margin-bottom: 2.5rem;

  font-size: .93rem;
  line-height: 2.05;
  color: var(--mid);
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;
  
  background: var(--surface);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  box-shadow: var(--sh-sm);
`;

export const AboutItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ItemLabel = styled.span`
  width: 48px;
  flex-shrink: 0;

  font-family: var(--fm);
  font-size: .6rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--accent-xl);
`;

export const ItemValue = styled.span`
  font-size: .88rem;
  color: var(--mid);
  font-family: var(--fm);

  & a:hover {
    color: var(--accent);
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutCard = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 1.8rem 2rem;

  background: var(--surface);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--sh-sm);
  
  transition: transform .28s var(--ease), box-shadow .28s, border-color .22s;

  &:hover {
    box-shadow: var(--sh);
    border-color: rgba(82, 183, 136, .4);
    
    transform: translateY(-4px);
  }
`;

export const Icon = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 10px;
  background: linear-gradient(135deg, rgba(45, 106, 79, .12),rgba(82, 183, 136, .08));
  border: 1px solid rgba(45, 106, 79, .15);
  font-size: 1.1rem;
`;

export const CardTitle = styled.div`
  margin-bottom: .35rem;
  
  font-size: .97rem;
  font-weight: 600;
  color: var(--ink2);
`;

export const CardDesc = styled.p`
  font-size: .83rem;
  line-height: 1.75;
  color: var(--mid);
`;