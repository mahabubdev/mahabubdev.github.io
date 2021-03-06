import styled from 'styled-components';


export const HeaderArea = styled.header`
    display: block;
    /* background-color: white; */
    color: #3a3a3a;
    padding: 0;
    /* border-bottom: .1em solid rgba(0,0,0,0.05);
    box-shadow: 0 0 1em 0 rgba(0,0,0,0.05); */
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    width: 85%;
    margin: 0 auto;
`;



export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    margin: 0;
    padding: 1em 0 0;

    li {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;

        a, .btn {
            display: inline-flex;
            align-items: center;
            gap: 0 .25em;
            text-decoration: none;
            text-transform: capitalize;
            padding: .7em 1.4em;
            color: #3a3a3a;
            font-size: 1.05em;
            margin: 0;

            &:hover {
                text-decoration: underline;
                transform: translateY(0);
            }
        }

        .btn-pr {
            color: white;
        }
    }

    @media only screen and (max-width: 991.9px) {
        display: none;
        visibility: hidden;
    }
`;








export const MobileNavMenu = styled.ul`
    display: none;
    position: fixed;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    top: 0;
    right: 0;
    background: linear-gradient(45deg, #52b56e, #4aa363);
    list-style: none;
    flex-direction: column;
    gap: 1em;
    margin: 0;
    padding: 1em 0 0;

    .menu_switch {
        display: flex;
        justify-content: flex-start;
        padding-left: 1rem;
        color: white;
        font-size: 2rem;
    }


    li {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;

        a, .btn {
            display: flex;
            width: 100%;
            align-items: center;
            gap: 0 .25em;
            text-decoration: none;
            text-transform: capitalize;
            padding: .7em 1.4em;
            color: white;
            font-size: 1.05em;
            margin: 0;

            &:hover {
                text-decoration: underline;
                transform: translateY(0);
            }
        }

        .btn-pr {
            color: white;
        }
    }

    &.active {
        display: flex;
        z-index: 999;
        animation: easyCome .3s;
        transition: all 0.2s ease;
    }
    @keyframes easyCome {
        from {
            right: -301px;
        }
        to {
            right: 0;
        }
    }



    @media only screen and (max-width: 991.9px) {
        display: none;
    }
`;


export const MobileNav = styled.nav`
    display: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 1.5rem;
    background-color: white;


    .nav_logo_img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

    span {
        font-size: 2rem;
    }


    @media only screen and (max-width: 991.9px) {
        display: flex;
    }
`;