import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  position: relative;
  padding: 1.6rem 2.5rem;
  z-index: 1;
  
  background: rgba(255, 255, 255, .6);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--border2);

  @media(max-width: 900px) {
    padding: 1.2rem 1.5rem;
    flex-direction: column;
    text-align: center;
  }
`;

export const CopyWriter = styled.span`
  font-family: var(--fm);
  font-size: .6rem;
  letter-spacing: .07em;
  color: var(--dim);
`;