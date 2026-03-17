import styled from 'styled-components';

export const Nav = styled.nav<{scrolled: boolean}>`
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 200;
  
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  padding: 0 2.5rem; height:62px;
  
  transition: background .4s,box-shadow .4s,border-color .4s;
  
  ${props=>props.scrolled && `
    background: rgba(238,245,240,.9); 
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border2);
    box-shadow: 0 1px 20px rgba(45,106,79,.08);
  `}

  @media (max-width:900px) {
    padding: 0 1.5rem;
}
`;

export const Logo = styled.div`
  display: flex; 
  align-items: center; 
  gap: .6rem; 
  
  font-family: var(--fd); 
  font-size: .95rem; 
  font-weight: 700; 
  color: var(--ink);
`;

export const Leaf = styled.div`
  width: 28px; 
  height: 28px; 
  
  background: var(--accent);
  border-radius: 70% 30% 70% 30% / 30% 70% 30% 70%;
  
  display: flex; 
  align-items: center; 
  justify-content: center;
  
  font-size: .7rem; 
  color: #fff; 
  animation: leafSway 4s ease-in-out infinite;
`;

export const Links = styled.ul<{open: boolean}>`
  display: flex;
  
  @media (max-width:900px) {
    display: none; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    gap: 2rem; 
    z-index: 99;
    
    position: fixed; 
    inset: 0;
    
    background: rgba(238,245,240,.97); 
    backdrop-filter: blur(20px);

    ${props => props.open && `display: flex;`}
  }
`;

export const Link = styled.a`
  font-family: var(--fm); 
  font-size: .63rem; 
  letter-spacing: .06em; 
  color: var(--mid);
  
  padding: .55rem .95rem; 
  position: relative; 
  transition: color .2s;

  &::after {
    content: ''; 
    position: absolute; 
    bottom: 7px; 
    left: .95rem;
    
    width: 0; 
    height: 1.5px; 
    
    background: var(--accent); 
    border-radius: 2px;
    transition: width .28s var(--smooth);
  }
  &:hover { color: var(--accent); }
  &:hover::after { width: calc(100% - 1.9rem); }

  @media (max-width: 900px) {
    font-size: .88rem;
  }
`;

export const Hamburger = styled.button<{open: boolean}>`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;

  span {
    display: block;
    width: 22px;
    height : 1.5px;
    background: var(--ink);
    border-radius: 2px;
    transition: all .3s;
  }
  ${props => props.open && `
    span:nth-child(1) { transform: rotate(45deg) translate(4.5px,4.5px); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: rotate(-45deg) translate(4.5px,-4.5px); }
  `}
  @media (max-width: 900px) {
    display: flex;
  }
`;