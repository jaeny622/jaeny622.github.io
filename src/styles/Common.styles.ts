import styled from 'styled-components';

export const SectionWrap = styled.div`
    max-width: 1300px; 
    margin: 0 auto;
    padding: 7rem 2.5rem; 

    position: relative; 
    z-index: 1;
`;

export const SectionAlt = styled.section`
    background: rgba(255, 255, 255, .35); 
    backdrop-filter: blur(4px);
    border-top: 1px solid var(--border2); 
    border-bottom: 1px solid var(--border2);
`;

export const Eyebrow = styled.p`
    font-family: var(--fm); 
    font-size: .62rem; 
    letter-spacing: .2em;
    text-transform: uppercase; 
    color: var(--accent-xl);

    display: flex; 
    align-items: center; 
    gap: .7rem; 
    margin-bottom: .8rem;

    &::before {   
    content:''; 
    width:24px; 
    height:1.5px; 

    background:var(--accent-xl); 
    border-radius:2px; 
    }
`;

export const SectionTitle = styled.h2`
    font-family: var(--fi); 
    font-weight: 400; 
    font-style: italic;
    font-size: clamp(2.2rem,4vw,3.8rem); 
    letter-spacing: -.025em;
    line-height: 1.05; 
    color: var(--ink); 

    margin-bottom: 3.5rem;

    & em {
        font-style: normal; 
        color: var(--accent); 
    }
`;