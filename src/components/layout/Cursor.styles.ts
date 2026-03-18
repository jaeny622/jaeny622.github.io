import styled from 'styled-components';

export const Dot = styled.div`
  position: fixed; 
  width: 10px; 
  height: 10px;
  
  background: var(--accent); 
  border-radius: 50%;
  
  pointer-events: none; z-index:9999;
  transform: translate(-50%,-50%);
  transition: width .2s var(--ease), height .2s var(--ease),background .2s;
`;
export const Ring = styled.div`
  position: fixed; 
  width: 36px;
  height: 36px;
  
  border: 1.5px solid rgba(45,106,79,.4); 
  border-radius: 50%;
  
  pointer-events: none; 
  z-index: 9998;
  transform: translate(-50%,-50%); 
  opacity: .6;
  transition: width .3s var(--smooth), height .3s var(--smooth), opacity .3s, border-color .2s;
`;
