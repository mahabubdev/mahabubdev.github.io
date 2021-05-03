import styled from 'styled-components';
import dotDotImg from '../../images/svg1.svg';


export const IntroSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - 100px);
    overflow: hidden;

    /* Responsive */
    @media only screen and (max-width: 991.9px) {
        justify-content: center;
        flex-direction: column-reverse;
        padding: 60px 0;
        gap: 5rem 0;
        /* align-items: center; */
    }
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


     /* Responsive */
    @media only screen and (max-width: 991.9px) {
        align-items: center;
    }

    @media only screen and (max-width: 499.9px) {
        h1 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 1.25rem;
        }
        h1, h3 {
            text-align: center;
        }
    }

    @media only screen and (max-width: 399.9px) {
        .tags {
            gap: 1.5rem 0;
            flex-direction: column;
            align-items: center;

            li {
                text-align: center;

                &:before {
                    top: calc(1rem + 50%);
                    left: calc(50% - .25rem);
                    width: .5rem;
                    height: .5rem;
                }
                &:first-child {
                    &:before {
                        display: inline-block;
                    }
                }
                &:last-child {
                    &:before {
                        display: none;
                    }
                }
            }
        }


        .btns {
            flex-direction: column;
            gap: .8rem 0;
        }
    }


    @media only screen and (max-width: 319.9px) {
        h1 {
            font-size: 2rem;
        }
        h3 {
            font-size: 1rem;
        }
    }
`;


export const IntroPhoto = styled.div`
    display: flex;
    position: relative;
    max-width: 360px;
    height: auto;
    /* justify-content: flex-end; */
    /* background-color: red; */
    padding: 1em;
    z-index: 1;

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        border-radius: 50%;
        border: 2px solid rgba(35, 55, 35, 0.5);
        box-shadow: 0 0 1em 0 rgba(0,0,0,0.05);
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

    /* Responsive */
    @media only screen and (max-width: 499.9px) {
        max-width: inherit;
        width: 80%;
        padding: .5rem;
        flex-wrap: wrap;
        /* background-color: red; */

        &:before {
            width: 160%;
            height: 160%;
            top: -65%;
            left: -50%;
        }
    }
`;


export const AboutSummery = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px;
    margin: 5em auto;
    justify-content: center;
    align-items: center;
    gap: 0 3rem;
    border-radius: 1rem;
    box-shadow: 0 0 1.5em 0 rgba(0,0,0,0.06);
    padding: 6rem 3rem;
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
        p {
            color: #4a4a4a;
            line-height: 1.5rem;
        }
    }


    /* responsive */
    @media only screen and (max-width: 991.9px) {
        flex-direction: column;
        justify-content: inherit;
        /* align-items: center; */
        gap: 3rem 0;

        .visual_side {
            .img_wrap {
                max-width: inherit;
            }
        }

        .content_side {
            div {
                display: block;
                text-align: center;
            }

            p {
                font-size: 1rem;
                line-height: 1.7rem;
            }
        }
    }


    @media only screen and (max-width: 849.9px) {
        padding: 3rem 1.5rem;
    }
`;



export const Error404 = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding: 100px 0;

    img {
        width: 100%;
        margin-top: 1rem;
        object-fit: cover;
        max-width: 400px;
        height: auto;
    }
`;


export const UnderConstruction = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding: 100px 0;

    h2 {
        font-size: 2.5rem;
        color: #4aa363;
    }

    img {
        width: 100%;
        margin-top: 1rem;
        object-fit: cover;
        max-width: 400px;
        height: auto;
    }
`;


export const AboutPage = styled.section`
    display: block;
    padding: 60px 0;

    .summary_part {
        display: flex;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        gap: 0 5rem;
        border-radius: 1rem;
        box-shadow: 0 0 1.5em 0 rgba(0,0,0,0.06);
        padding: 6rem 3rem;
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

            .btns {
                display: flex;
                gap: 0 1rem;
            }
            
            .bios {
                display: grid;
                margin-top: 1rem;
                grid-template-columns: repeat(2, 1fr);
                /* place-items: center; */
                justify-content: center;
                align-items: center;
                gap: 1rem 2.5rem;

                .bio_item {
                    display: inline-flex;
                    align-items: center;
                    gap: .7rem;
                    font-size: 1rem;
                }
            }
        }


        /* responsive */
        @media only screen and (max-width: 991.9px) {
            flex-direction: column;
            justify-content: inherit;
            /* align-items: center; */
            gap: 3rem 0;

            .visual_side {
                .img_wrap {
                    max-width: inherit;
                }
            }

            .content_side {
                div {
                    display: block;
                    text-align: center;
                }

                p {
                    font-size: 1rem;
                    line-height: 1.7rem;
                }
            }
        }


        @media only screen and (max-width: 849.9px) {
            padding: 3rem 1.5rem;

            h2 {
                display: inline-block;
                margin: 0 auto;
            }

            .content_side {
                .btns {
                    justify-content: center;
                }

                .bios {
                    grid-template-columns: repeat(1, 1fr);
                    place-items: center;
                }
            }
        }


        @media only screen and (max-width: 499.9px) {
            .bios {
                gap: 1.5rem 0 !important;

                .bio_item {
                    flex-direction: column;
                    gap: .7rem;
                }
            }

            .btns {
                flex-direction: column;
            }
        }
    }
`;


export const AboutPageInfo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding: 100px 0;

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
    p {
        color: #4a4a4a;
        line-height: 1.5rem;
    }


    .education_info,
    .training_n_cert {
        display: flex;
        flex-direction: column;
        min-width: 40%;
        /* background-color: lightblue; */
        
        .info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem 0;
            padding: 30px 30px 60px 0;

            li {
                display: flex;
                flex-direction: column;
                gap: .5rem 0;
                background-color: #f6fbf8;
                padding: 1rem .75rem;
                border-radius: .5rem;
                box-shadow: 0 0 1rem 0 rgba(0,0,0,0.035);
            }

            .info_title, .info_text {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 0 1.5rem;

                h4 {
                    color: #53b66e;
                    font-size: 1.2rem;
                }

                small {
                    color: #4d5d74;
                    font-size: 1rem;

                    &:last-child {
                        color: #99a2af;
                        font-size: .85rem;
                    }
                }
            }
        }
    }


    @media only screen and (max-width: 849.9px) {
        flex-direction: column;

        .education_info,
        .training_n_cert {
            width: 100%;
            gap: 3rem;
        }

        h4{
            text-align: center;
        }

        .info_title, .info_text {
            flex-direction: column;
        }
    }
`;