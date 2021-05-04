import SEO from "../components/SEO";
import { AboutPage, AboutPageInfo } from './styled/styled.common';
import { Link } from "react-router-dom";
import { data } from '../data/about';
import { context } from '../data/global';


const AboutMe = () => {

    // const currentEnv = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : '=development=';

    return (
        <div>
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


            <AboutPage>
                <div className="summary_part">
                    <div className="visual_side">
                        <div className="img_wrap">
                            <img alt="mahabubdev" src={data.photo} />
                        </div>
                    </div>

                    <div className="content_side">
                        <h2>bio data</h2>
                        <div className="bios">
                            {
                                data.bio.map((b,i) => (
                                    <p className="bio_item" key={i}>
                                        <strong>{b.label}:</strong>
                                        <span>{b.value}</span>
                                    </p>
                                ))
                            }
                        </div>

                        <div className="btns">
                            <a className="btn btn-pr" href={context.resume}>get resume</a>
                            <a target="_blank" className="btn btn-out" href={context.hire_link}>hire me</a>
                        </div>
                    </div>
                </div>


                <AboutPageInfo>
                    <div className="education_info">
                        <h2>education</h2>
                        <ul className="info">
                            {
                                data.education.map((ed, i) => (
                                    <li key={i}>
                                        <p className="info_title">
                                            <h4>{ed.institute}</h4>
                                            <small>{ed.timeline}</small>
                                        </p>

                                        <p className="info_text">
                                            <small>{ed.degree}</small>
                                            <small>{ed.context}</small>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="training_n_cert">
                        <h2>trainings & certifications</h2>

                        <ul className="info">
                            {
                                data.trc.map((tc, i) => (
                                    <li key={i}>
                                        <p className="info_title">
                                            <h4>{tc.title}</h4>
                                            <small>{tc.timeline}</small>
                                        </p>

                                        <p className="info_text">
                                            <small>
                                                {tc.subTitle + ' '}
                                                {
                                                    tc.credential.length > 5 ?
                                                    (<Link to={tc.credential} target="_blank">verify</Link>)
                                                    : (null)
                                                }
                                            </small>
                                            <small>{tc.type}</small>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </AboutPageInfo>
            </AboutPage>
        </div>
    );
};

export default AboutMe;