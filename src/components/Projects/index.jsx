import { ProjectsContainer } from "./styled";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import externalLink from '@iconify-icons/feather/external-link';

const ProjectSummery = ({ allProjects }) => {
    // states & latest first
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function calculate() {
            let latestFirstArr = await allProjects.sort((a, b) => {
                let aD = new Date(a.pub);
                let bD = new Date(b.pub);
                if (aD > bD) {
                    return -1;
                } else {
                    return 1;
                }
            })

            setProjects([...latestFirstArr.slice(0,3)]); // taking latest 3 items only
        }

        calculate();
    }, [allProjects])


    return (
        <ProjectsContainer>
            <h2>latest projects</h2>
            
            <div className="projects">
                {
                    projects.length > 0 && projects.map((pj, i) => (
                        // <p key={i}>{new Date(pj.pub).toDateString()}</p>
                        <div className="project_item" key={i}>
                            <div className="img_wrap">
                                <img src={pj.featuredImg} alt={pj.name} />
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
                <Link to="/projects" className="btn btn-pr">explore more</Link>
            </div>
        </ProjectsContainer>
    )
}

export default ProjectSummery;