import styled from 'styled-components';

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.4rem;

    @media(max-width: 540px) {
        grid-template-columns: 1fr;
    }
`;

export const ProjectCard = styled.div`
    overflow: hidden;

    background: var(--surface);
    backdrop-filter: var(--blur);
    box-shadow: var(--sh-sm);
    border: 1px solid var(--border);
    border-radius: 16px;
    
    transition: transform .3s var(--ease), box-shadow .3s, border-color .22s;
    cursor: none;

    &:hover {
        transform: translateY(-6px);
        box-shadow: var(--sh-lg);
        border-color: rgba(82, 183, 136, .4);

        & Overlay {
            color:red;
            background: rgba(45, 106, 79, .08);
        }

        & Thumbnail img {
            transform: scale(1.05);
            filter: saturate(1);
        }

        & ViewBtn {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        & Name {
            color: var(--accent);
        }
    }
`;

export const Thumbnail = styled.div`
    height: 205px;
    overflow: hidden;
    position: relative;

    background: linear-gradient(135deg, rgba(82,183,136,.08), rgba(45,106,79,.04));

    & img { 
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: top;
        filter: saturate(.85);
        
        transition: transform .6s var(--smooth), filter .4s;
    }
`;

export const NoImg = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--fi);
    font-style: italic;
    font-size: 2.5rem;
    font-weight: 500;
    color: rgba(45, 106, 79, .2);

    background: linear-gradient(135deg, rgba(82,183,136,.06) 0%, rgba(45,106,79,.03) 50%, rgba(201,168,76,.04) 100%);
`;

export const Sequence = styled.span`
    position: absolute;
    top: .8rem;
    left: .8rem;
    padding: .2rem .55rem;
    
    font-family: var(--fm);
    font-size: .58rem;
    letter-spacing: .1em;
    color: var(--accent);
    
    background: rgba(255, 255, 255, .85);
    backdrop-filter: blur(6px);
    border-radius: 99px;
    border: 1px solid rgba(45, 106, 79, .15);
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(45,106,79,0);

    transition: background .3s;
`;

export const ViewBtn = styled.div`
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .55rem 1.3rem;

    background: rgba(255, 255, 255, .92);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(45, 106, 79, .15);
    border: 1px solid rgba(45, 106, 79, .2);
    border-radius: 99px;

    font-family: var(--fm);
    font-size: .65rem;
    font-weight: 500;
    letter-spacing: .06em;
    color: var(--accent);

    opacity: 0;

    transform: translateY(8px) scale(.95);
    transition: opacity .3s var(--smooth), transform .3s var(--smooth);
`;

export const CardContents = styled.div`
    padding: 1.5rem 1.7rem 1.8rem;
`;

export const Category = styled.p`
    margin-bottom: .4rem;

    font-family: var(--fm);
    font-size: .58rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--dim);
`;

export const Name = styled.div`
    margin-bottom: .5rem;

    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: -.01em;
    color: var(--ink2);
    
    transition: color .2s;
`;

export const Desc = styled.p`
    margin-bottom: 1rem;

    font-size: .83rem;
    line-height: 1.8;
    color: var(--mid);
`;

export const Tech = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .35rem;
`;

export const TechTag = styled.span`
    font-family: var(--fm);
    font-size: .65rem;
    padding: .2rem .6rem;
    border-radius: 99px;
    background: rgba(45, 106, 79, .05);
    border: 1px solid rgba(45, 106, 79, .12);
    color: var(--mid);
`;