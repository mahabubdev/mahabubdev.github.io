import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { projects } from '../data/projects';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import externalLink from '@iconify-icons/feather/external-link';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ProjectsContainer } from "../components/Projects/styled";

const Projects = () => {
    // states & latest first
    const [projectArr, setProjectArr] = useState([]);

    useEffect(() => {
        async function calculate() {
            let latestFirstArr = await projects.sort((a, b) => {
                let aD = new Date(a.pub);
                let bD = new Date(b.pub);
                if (aD > bD) {
                    return -1;
                } else {
                    return 1;
                }
            })

            setProjectArr([...latestFirstArr]); // taking all items only
        }

        calculate();
    }, [projects])



    return (
        <>
            <SEO title="React, MERN stack developer | Md Mahabub Alam (mahabubdev)"
                meta={[
                    {
                        name: 'position',
                        content: 'React | MERN stack developer'
                    },
                    {
                        name: 'author',
                        content: 'Md Mahabub Alam <mahabub10121013@gmail.com>'
                    },
                    {
                        name: 'og:title',
                        content: 'React, MERN stack developer'
                    },
                    {
                        name: 'og:description',
                        content: 'I am a passionate react, mern stack developer. I love JavaScript and React based web technologies.'
                    },
                ]}
            />
            {/* <h1>Projects page</h1> */}


            <ProjectsContainer detailsPage={true}>
                <h2>latest projects</h2>
                
                <div className="projects">
                    {
                        projectArr.length > 0 && projectArr.map((pj, i) => (
                            // <p key={i}>{new Date(pj.pub).toDateString()}</p>
                            <div className="project_item" key={i}>
                                <div className="img_wrap">
                                    <LazyLoadImage
                                        src={pj.featuredImg} alt={pj.name}
                                        effect="blur"
                                        threshold={50}
                                        delayMethod="throttle"
                                    />
                                    {/* <img src={pj.featuredImg} alt={pj.name} /> */}
                                </div>

                                <div className="info">
                                    <h4>{pj.name}</h4>

                                    <ul className="tags">
                                        {
                                            pj.tags.map((_tg, i) => (
                                                <span key={i}>{_tg}</span>
                                            ))
                                        }
                                    </ul>

                                    <div className="links">
                                        <Link to={pj.repo} className="btn btn-link" target="_blank">
                                            <span>github</span>
                                            <Icon icon={githubIcon} />
                                        </Link>
                                        <Link to={pj.live} className="btn btn-link" target="_blank">
                                            <span>live preview</span>
                                            <Icon icon={externalLink} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="btn_line">
                    <Link to="//github.com/mahabubdev?tab=repositories" className="btn btn-pr">my github repositories</Link>
                </div>
            </ProjectsContainer>
        </>
    );
};

export default Projects;