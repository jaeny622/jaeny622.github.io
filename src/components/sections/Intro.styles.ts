import styled from 'styled-components';

export const IntroSection = styled.section`
  display: grid; 
  grid-template-columns: 1fr 460px;
  align-items: center; 
  gap: 4rem; 
  
  padding: 80px 2.5rem 3rem;
  margin: 0 auto;
  
  position: relative; 
  z-index: 1; 
  
  min-height: 100vh; 
  max-width: 1400px;
  
  @media (max-width:1100px) {
    grid-template-columns: 1fr;
    max-width: 700px;
  }
    
  @media (max-width:900px) {
    padding: 80px 1.5rem 3rem;
  }
`;

export const Leftbox = styled.div`
  padding: 2rem 0;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  background: rgba(45, 106, 79, 0.08);
  border: 1px solid rgba(45, 106, 79, 0.18);
  border-radius: 99px;

  padding: 0.4rem 1rem;
  margin-bottom: 2rem;

  font-family: var(--fm);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--accent);

  animation: heroFadeIn 0.7s 0.15s ease both;
`;

export const Dot = styled.div`
  width: 7px;
  height: 7px;

  border-radius: 50%;
  background: var(--accent);

  animation: pulseGreen 2.5s ease infinite;
`;

export const Name = styled.h1`
  font-family: var(--fi);
  font-weight: 500;
  font-style: italic;
  font-size: clamp(4rem, 9vw, 8rem);
  line-height: 0.92;
  letter-spacing: -0.03em;
  color: var(--ink);

  margin-bottom: 1.8rem;

  animation: heroFadeUp 0.9s 0.3s var(--smooth) both;

  & em {
    font-style: normal;
    color: var(--accent);
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.9;
  color: var(--mid);

  max-width: 460px;
  margin-bottom: 2.5rem;

  animation: heroFadeUp 0.8s 0.5s var(--smooth) both;
`;

// 필요할지 모르겟음
export const CTA = styled.div`
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;

  animation: heroFadeUp 0.8s 0.65s var(--smooth) both;
`;

export const DefaultBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  padding: 0.85rem 2rem;

  font-family: var(--fd);
  font-size: 0.8rem;
  border-radius: 99px;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const BtnPrimary = styled(DefaultBtn)`
  background: var(--accent);
  color: #fff;
  box-shadow: 0 4px 20px rgba(45, 106, 79, 0.3);
  
  transition: background 0.22s, transform 0.2s, box-shadow 0.22s;

  &:hover {
    background: var(--accent-l);
    box-shadow: 0 8px 28px rgba(45, 106, 79, 0.35);
  }
`;

export const BtnSecondary = styled(DefaultBtn)`
  background: var(--glass);
  color: var(--mid);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border2);

  transition: border-color 0.22s, color 0.22s, transform 0.2s, background 0.22s;

  &:hover {
    border-color: var(--accent-l);
    color: var(--accent);
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const Panel = styled.div`
  animation: heroSlideLeft 0.9s 0.45s var(--smooth) both;
`;

export const Card = styled.div`
  background: var(--surface);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--sh-lg);

  padding: 2.4rem;
  margin-bottom: 1.2rem;

  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;

    width: 140px;
    height: 140px;

    border-radius: 50%;
    background: radial-gradient(circle, rgba(82, 183, 136, 0.15) 0%, transparent 70%);
  }
`;

export const CardLabel = styled.p`
  font-family: var(--fm);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--dim);

  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '●';
    color: var(--accent-xl);
    font-size: 0.5rem;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width:900px) {
    gap: 0.8rem;
  }
`;

export const StatNum = styled.div`
  font-family: var(--fi);
  font-style: italic;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 1;
  color: var(--accent);
  letter-spacing: -0.03em;
  text-align: center;

  & sup {
    font-size: 0.5em;
    vertical-align: super;
    font-style: normal;
  }

  @media (max-width:900px) {
    font-size: 2.2rem;
  }
`;

export const StatLabel = styled.div`
  font-family: var(--fm);
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  color: var(--dim);
  
  margin-top: 0.35rem;
`;

export const TechCard = styled.div`
  background: var(--surface-s);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--sh-sm);

  padding: 1.6rem 2rem;
`;

export const TechLabel = styled.p`
  font-family: var(--fm);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dim);

  margin-bottom: 1rem;
`;

export const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Pill = styled.span`
  font-family: var(--fm);
  font-size: 0.67rem;

  padding: 0.28rem 0.8rem;
  
  border-radius: 99px;
  background: rgba(45, 106, 79, 0.07);
  border: 1px solid rgba(45, 106, 79, 0.15);
  color: var(--accent);
`;