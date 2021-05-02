import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0; padding: 0; box-sizing: border-box;
    }

    .btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: .85rem 1.6rem;
        margin-top: 1rem;
        color: #3a3a3a;
        border-radius: .3rem;
        text-decoration: none;
        text-transform: capitalize;
        border: .15rem solid rgba(0,0,0,0.125);
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(-.15rem);
        }
    }

    .btn-pr {
        background-color: #1eb46e;
        color: white;
        border: .1rem solid rgba(30, 180, 110, 0.125);
    }

    .btn-out {
        border: .1rem solid rgba(30, 180, 110, 1);
    }

    .btn-switch {
        border: .1rem solid rgba(30, 180, 110, .75);
    }
    .btn-switch.active {
        background-color: #1eb46e;
        color: white;
    }

`;

export const PageWrapper = styled.div`
    display: block;
    min-height: 100vh;
    background-color: #FEFEFE;
`;

export const PageContainer = styled.div`
    display: block;
    margin: 0 auto;
    width: 85%;
    max-width: 1500px;
    min-height: calc(100vh - 60px);
`;