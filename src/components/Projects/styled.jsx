import styled from 'styled-components';


export const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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


    .projects {
        display: grid;
        grid-template-columns: ${props => props.detailsPage ? 'repeat(2, 1fr)' : 'repeat(3, minmax(360px, 1fr)'};
        /* ${props => (
            props.detailsPage === true ? `grid-template-columns: repeat(2, 1fr));`
            : `grid-template-columns: repeat(3, minmax(360px, 1fr));`
        )} */
        gap: 3rem;
        place-items: center;
        margin-top: 2rem;

        .project_item {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            overflow: hidden;
            min-height: 400px;
            background-color: #f5faff;
            border-radius: .7rem;
            box-shadow: 0 0 1.5em 0 rgba(0,0,0,0.05);
            transition: all 0.3s ease;

            &:hover {
                .img_wrap {
                    img {
                        transform: scale(1.1);
                    }
                }
            }


            .img_wrap {
                width: 100%;
                cursor: pointer;
                overflow: hidden;

                img {
                    width: 100%;
                    max-width: 100%;
                    object-fit: cover;
                    transition: all 0.2s ease;
                }
            }

            .info {
                padding: 1rem;

                .tags {
                    display: flex;
                    margin-top: .5rem;
                    align-items: center;
                    gap: .5rem;
                    flex-wrap: wrap;

                    span {
                        display: inline-block;
                        padding: .35rem .5rem;
                        background-color: #d4eddb;
                        color: #316d42;
                        border-radius: .25rem;
                        text-transform: capitalize;
                        font-size: .8rem;
                    }
                }

                .links {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1rem;

                    .btn {
                        display: flex;
                        padding: .5rem;
                        gap: 0 .35rem;
                        font-size: .85rem;
                    }

                    .btn-link {
                        background-color: #eef8f1;
                    }
                }
            }
        }
    }

    .btn_line {
        display: flex;
        margin-top: 2rem;
        width: 100%;
        justify-content: center;
        align-items: center;
        align-content: center;
    }


    /* responsive */
    @media only screen and (max-width: 1299.9px) {
        .projects {
            grid-template-columns: repeat(3, minmax(300px, 1fr));
            gap: 2rem;
        }
    }

    @media only screen and (max-width: 1049.9px) {
        .projects {
            grid-template-columns: repeat(3, minmax(250px, 1fr));
            gap: 2rem;
        }
    }

    @media only screen and (max-width: 849.9px) {
        .projects {
            grid-template-columns: repeat(1, 1fr);
            gap: 3.5rem 0;
        }
    }
`;