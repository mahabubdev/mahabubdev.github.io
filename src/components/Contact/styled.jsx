import styled from 'styled-components';


export const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 0;

    h2 {
        position: relative;
        text-transform: uppercase;
        padding-left: 1rem;
        color: #011738;
        margin-bottom: 2rem;

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


export const ContactElements = styled.div`
    display: flex;
    /* min-height: 300px; */
    width: 100%;
    max-width: 700px;
    margin-top: 2rem;
    gap: 3rem;
    padding: 5rem 3rem;
    background: linear-gradient(180deg, #52b56e, #469b5f);
    border-radius: 1rem;


    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            input, textarea {
                padding: .75rem .75rem .75rem 1.5rem;
                outline: none;
                border: none;
                border-radius: .35rem;
            }

            textarea {
                min-height: 100px;
            }
        }

        .bottom {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            button[type="submit"] {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0 .5rem;
                border: none;
                outline: 0;
                padding: .85rem 3rem;
                text-transform: uppercase;
                border-radius: .3rem;
                cursor: pointer;
                transition: all .2s ease;

                &:hover {
                    transform: translateY(-.1rem);
                    background: #52b56e;
                    color: white;
                    box-shadow: 0 0 1rem 0 rgba(255, 255, 255, 0.1);
                }
            }
        }
    } 



    @media only screen and (max-width: 499.9px) {
        padding: 2.5rem 1.5rem;
    }
`;