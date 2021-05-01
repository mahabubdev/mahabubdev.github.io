import styled from 'styled-components';
import dotDotImg from '../../images/svg1.svg';


export const IntroSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - 100px);
    overflow: hidden;
`;

export const IntroBio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em 0;

    blockquote {
        color: #4d5f78;
        font-size: 1.5rem;
    }

    h1 {
        font-size: 3rem;
        color: #011A3E;
    }

    h3 {
        font-size: 1.5rem;
        color: #1eb46e;
    }

    .tags {
        display: inline-flex;
        list-style: none;
        gap: 0 1.5rem;

        li {
            display: inline-flex;
            position: relative;
            text-transform: capitalize;
            color: #99a3b2;
            /* background-color: red; */

            &:before {
                display: inline-block;
                position: absolute;
                content: '';
                clear: both;
                top: calc(50% - .25rem);
                left: -1rem;
                width: .5rem;
                height: .5rem;
                /* background-color: #222FB9; */
                background-color: #21c87a;
                border-radius: 50%;
            }

            &:first-child {
                &:before {
                    display: none;
                }
            }
        }
    }

    .social_links {
        display: inline-flex;
        align-items: center;
        list-style: none;
        gap: 0 1rem;
        padding: .3em 0;

        li a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            transition: all 0.2s ease;

            &:hover {
                transform: translateY(-1px);
            }
        }
    }

    .btns {
        display: flex;
        gap: 0 2rem;
    }
`;


export const IntroPhoto = styled.div`
    display: flex;
    position: relative;
    max-width: 360px;
    height: auto;
    justify-content: flex-end;
    /* background-color: red; */
    padding: 1em;
    z-index: 1;

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        border-radius: 50%;
        border: 2px solid rgba(35, 55, 35, 0.5);
        box-shadow: 0 0 1em 0 rgba(0,0,0,0.1);
    }

    &:before {
        display: block;
        position: absolute;
        top: -23%;
        left: -23%;
        content: '';
        clear: both;
        width: calc(100% + 200px);
        height: calc(100% + 200px);
        background-image: url(${dotDotImg});
        transform: rotate(30deg);
        z-index: -1;
        animation: svgAnimation 5s infinite;
        /* https://discord.gg/DXbpS4fc */
    }

    @keyframes svgAnimation {
        0% {
            transform: rotate(30deg);
            top: -23%;
            left: -23%;
        }
        35% {
            transform: rotate(33deg);
            top: -24%;
            left: -25%;
        }
        70% {
            transform: rotate(36deg);
            top: -22%;
            left: -24%;
        }
        100% {
            transform: rotate(30deg);
            top: -23%;
            left: -23%;
        }
    }
`;


export const AboutSummery = styled.div`
    display: flex;
    width: 80%;
    margin: 3.5rem auto;
    justify-content: center;
    align-items: center;
    gap: 0 3rem;
    border-radius: 1rem;
    box-shadow: 0 0 1.5em 0 rgba(0,0,0,0.06);
    padding: 5rem 3rem;
    /* background-color: #f5fcf8; */
    background-color: white;
    color: #011A3E;

    .visual_side {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;

        .img_wrap {
            display: block;
            position: relative;
            width: 100%;
            max-width: 300px;
            height: auto;
            z-index: 1;

            img {
                width: 100%;
                object-fit: cover;
                border-radius: .85rem;
                box-shadow: 0 0 1em 0 rgba(30, 180, 110, .1);
            }

            &:before {
                display: block;
                position: absolute;
                content: '';
                top: .5rem;
                left: -1rem;
                width: 100%;
                height: 100%;
                border-radius: .85rem;
                border: 3px dashed #79d9a1;
                z-index: -1;
                opacity: .6;
            }
        }
    }


    .content_side {
        display: flex;
        flex-direction: column;
        gap: 1rem 0;
        width: 80%;
        max-width: 500px;

        h2 {
            position: relative;
            text-transform: uppercase;
            padding-left: 1rem;

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
        p {
            color: #4a4a4a;
            line-height: 1.5rem;
        }
    }
`;