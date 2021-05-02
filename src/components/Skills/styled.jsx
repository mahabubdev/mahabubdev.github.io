import styled from 'styled-components';

export const SkillSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;

    h2 {
        position: relative;
        text-transform: uppercase;
        padding-left: 1rem;
        color: #011738;

        &:before {
            display: inline-block;
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: .3rem;
            height: 100%;
            background-color: #64d9a2;
        }
    }
`;


export const SkillNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 .85rem;
    list-style: none;
    margin-top: 2rem;
`;



export const SkillsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;



export const AllSkills = styled.div`
    display: grid;
    width: 100%;
    margin-top: 3rem;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 4rem;

    .skill_item {
        display: flex;
        width: 100%;
        padding: 1rem;
        background-color: #f6fbf8;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 0 1rem;
        min-height: 150px;
        border-radius: .8rem;
        box-shadow: 0 0 1.5rem 0 rgba(0,0,0,0.08);

        span {
            font-size: 3em;
        }
        small {
            font-size: 1.25em;
        }
    }
`;