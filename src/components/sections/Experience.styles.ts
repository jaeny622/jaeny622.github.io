import styled from 'styled-components';

export const ExpList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const ExpCardBox = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 3.5rem;
    align-items: start;

    @media(max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const CoCard = styled.div`
    position: sticky;
    top: 80px;
    padding: 1.8rem;

    background: var(--surface);
    backdrop-filter: var(--blur);
    box-shadow: var(--sh-sm);
    border-radius: 14px;
    border: 1px solid var(--border);

    @media(max-width: 900px) {
        position: static;
    }
`;

export const CoName = styled.div`
    margin-bottom: .6rem;

    font-family: var(--fi);
    font-style: italic;
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: -.02em;
    line-height: 1.15;
    color: var(--ink);
`;

export const CoPeriod = styled.span`
    display: inline-flex;
    margin-bottom: .7rem;
    padding: .25rem .65rem;

    font-family: var(--fm);
    font-size: .6rem;
    letter-spacing: .08em;
    color: var(--accent);

    background: rgba(45, 106, 79, .1);
    border: 1px solid rgba(45, 106, 79, .2);
    border-radius: 99px;
`;

export const CoRole = styled.div`
    font-family: var(--fm);
    font-size: .63rem;
    line-height: 1.7;
    color: var(--dim);
`;

export const Projects = styled.div`
    display: flex;
    flex-direction: column;
    gap: .9rem;
`;

export const ProjectCard = styled.div`
    padding: 1.5rem 1.7rem;

    background: var(--surface);
    backdrop-filter: blur(10px);
    box-shadow: var(--sh-sm);
    border: 1px solid var(--border);
    border-radius: 12px;

    transition: transform .25s var(--ease), box-shadow .25s, border-color .22s;

    &:hover {
        box-shadow: var(--sh);
        border-color: rgba(82, 183, 136, .35);
        
        transform: translateX(6px);
    }
`;

export const ProjName = styled.div`
    margin-bottom: .3rem;
    
    font-size: .92rem;
    font-weight: 600;
    color: var(--ink2);
`;

export const ProjPeriod = styled.div`
    margin-bottom: .6rem;

    font-family: var(--fm);
    font-size: .58rem;
    letter-spacing: .08em;
    color: var(--dim);
`;

export const ProjDesc = styled.p`
    margin-bottom: .8rem;

    font-size: .83rem;
    line-height: 1.8;
    color: var(--mid);
`;

export const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .35rem;
`;

export const Tag = styled.span`
    padding: .18rem .58rem;

    font-family: var(--fm);
    font-size: .62rem;
    color: var(--accent);
    
    background: rgba(45, 106, 79, .07);
    border: 1px solid rgba(45, 106, 79, .18);
    border-radius: 99px;
`;
