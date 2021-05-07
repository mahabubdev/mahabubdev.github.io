import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { IntroBio, IntroSection, IntroPhoto, AboutSummery } from './styled/styled.common';
import { Icon } from '@iconify/react';
import { skills } from '../data/skills';
import SkillSection from '../components/Skills';
import ProjectSummery from '../components/Projects';
import { projects } from '../data/projects';
import BlogSummery from '../components/Blog';
import ContactArea from '../components/Contact';
import ReactTypingEffect from 'react-typing-effect';
import { context } from '../data/global';
import ImageLoader from 'react-loading-image';
import Skeleton from 'react-loading-skeleton';





const HomePage = () => {
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

            <IntroSection>
                <IntroBio>
                    <blockquote>Hello! I am</blockquote>
                    <h1>Md Mahabub Alam</h1>
                    <h3>
                        <ReactTypingEffect
                            text={context.roleStrArr}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            typingDelay={100}
                            cursorRenderer={cursor => <>{cursor}</>}
                            displayTextRenderer={(text, i) => {
                            return (
                                <span key={i}>
                                {text.split('').map((char, j) => {
                                    // const key = `${i}`;
                                    return (
                                        <span key={j}>{char}</span>
                                    );
                                })}
                                {` Developer`}
                                </span>
                            );
                            }}        
                        />
                    </h3>
                    <ul className="tags">
                        {context.roleTags.map((r, i) => (
                            <li key={i}>{r}</li>
                        ))}
                    </ul>

                    <ul className="social_links">
                        {
                            context.social_links.map((sl, i) => (
                                <li key={i}>
                                    <Link target="_blank" to={sl.link}>
                                        <Icon icon={sl.icon} />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="btns">
                        <a rel="noopener noreferrer" className="btn btn-pr" href={context.resume}>get resume</a>
                        <Link className="btn btn-out" to='/about'>about me</Link>
                    </div>
                </IntroBio>

                <IntroPhoto>
                    <img src={context.githubPhoto} alt="mahabubdev" />
                </IntroPhoto>
            </IntroSection>



            <AboutSummery>
                <div className="visual_side">
                    <div className="img_wrap">
                        {/* <img alt="mahabubdev" src={context.photo} /> */}
                        <ImageLoader
                            style={{
                                minWidth: '250px',
                                height: 'auto'
                            }}
                            src={context.photo}
                            loading={() => <Skeleton width={250} height={280} />}
                        />
                    </div>
                </div>

                <div className="content_side">
                    <h2>about me</h2>
                    <p>{context.bioText}</p>
                    <div>
                        <Link to="/about" className="btn btn-pr">learn more</Link>
                    </div>
                    
                </div>
            </AboutSummery>


            <SkillSection allSkills={skills} />

            <ProjectSummery allProjects={projects} />

            <BlogSummery />

            <ContactArea />
        </>
    );
};

export default HomePage;