import styled from 'styled-components';

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;

    @media(max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const EduCard= styled.div`
    padding: 2.2rem;

    background: var(--surface);
    box-shadow: var(--sh-sm);
    backdrop-filter: var(--blur);
    border: 1px solid var(--border);
    border-radius: 14px;

    transition: transform .28s var(--ease), box-shadow .28s, border-color .22s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--sh);
        border-color: rgba(82, 183, 136, .4);
    }
`;

export const Category = styled.div`
    margin-bottom: .7rem;

    font-family: var(--fm);
    font-size: .58rem;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--coral);
`;

export const Name = styled.div`
    margin-bottom: .3rem;

    font-family: var(--fi);
    font-style: italic;
    font-weight: 500;
    font-size: 1.9rem;
    letter-spacing: -.02em;
    color: var(--ink);
`;

export const SubInfo= styled.div`
    margin-bottom: .3rem;

    font-size: .86rem;
    color: var(--mid);
`;

export const Date = styled.div`
    font-family: var(--fm);
    font-size: .62rem;
    color: var(--dim);
`;