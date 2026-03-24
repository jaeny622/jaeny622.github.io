import styled from 'styled-components';

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;

    @media(max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const StoryCard = styled.div`
    position: relative;
    padding: 2.6rem;
    overflow: hidden;
    
    background: var(--surface);
    backdrop-filter: var(--blur);
    box-shadow: var(--sh-sm);
    border: 1px solid var(--border);
    border-radius: 14px;
    
    transition: transform .28s var(--ease), box-shadow .28s, border-color .22s;

    &::before {
        content: '';
        position: absolute;
        bottom: -30px;
        right: -30px;
        
        width: 120px;
        height: 120px;
        
        border-radius: 50%;
        background: radial-gradient(circle, rgba(82, 183, 136, .1) 0%, transparent 70%);
        
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--sh);
        border-color: rgba(82, 183, 136, .4);
    }
`;

export const Sequence = styled.div`
    margin-bottom: .4rem;

    font-family: var(--fi);
    font-style: italic;
    font-size: 5rem;
    font-weight: 500;
    color: rgba(45,106,79,.1);
    line-height: 1;
    letter-spacing: -.04em;
`;

export const Title = styled.div`
    margin-bottom: .9rem;

    font-size: 1.1rem;
    font-weight: 600;
    color: var(--ink2);
`;

export const Contents = styled.p`
    font-size: .86rem;
    color: var(--mid);
    line-height: 1.95;
`;