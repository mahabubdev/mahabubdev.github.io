import SEO from "../components/SEO";
import { AboutPage, AboutPageInfo } from './styled/styled.common';
import meImg from '../images/me___pakshiiii-removebg-preview__cropped.png';
import { Link } from "react-router-dom";


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
                            <img alt="mahabubdev" src={meImg} />
                        </div>
                    </div>

                    <div className="content_side">
                        <h2>bio data</h2>
                        <div className="bios">
                            <p className="bio_item">
                                <strong>Full Name:</strong>
                                <span>Md Mahabub Alam</span>
                            </p>

                            <p className="bio_item">
                                <strong>DoB:</strong>
                                <span>2000-11-22</span>
                            </p>

                            <p className="bio_item">
                                <strong>Address:</strong>
                                <span>Keshabpur, Jashore</span>
                            </p>

                            <p className="bio_item">
                                <strong>Phone:</strong>
                                <span>(880)1571209784</span>
                            </p>

                            {/* <p className="bio_item">
                                <strong>Email:</strong>
                                <span>mahabub10121013@gmail.com</span>
                            </p>

                            <p className="bio_item">
                                <strong>Full Name:</strong>
                                <span>Md Mahabub Alam</span>
                            </p> */}
                        </div>

                        <div className="btns">
                            <a className="btn btn-pr" href="https://drive.google.com/u/0/uc?id=10I3sC1f4uK23Xmmtt_gp4UmKUc1I2dPe&export=download">get resume</a>
                            <Link target="_blank" className="btn btn-out" to="//linkedin.com/in/mahabub2000/">hire me</Link>
                        </div>
                    </div>
                </div>


                <AboutPageInfo>
                    <div className="education_info">
                        <h2>education</h2>
                        <ul className="info">
                            <li>
                                <p className="info_title">
                                    <h4>National University</h4>
                                    <small>2019 - Present</small>
                                </p>

                                <p className="info_text">
                                    <small>Bachelor in Science (B.Sc.)</small>
                                    <small>Statistics</small>
                                </p>
                            </li>

                            <li>
                                <p className="info_title">
                                    <h4>Education Borad - Jessore</h4>
                                    <small>2016 - 2018</small>
                                </p>

                                <p className="info_text">
                                    <small>HSC - Higher School Certificate</small>
                                    <small>Science</small>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="training_n_cert">
                        <h2>trainings & certifications</h2>

                        <ul className="info">
                            <li>
                                <p className="info_title">
                                    <h4>Complete Web Development with J.M.</h4>
                                    <small>Dec 2020 - Present</small>
                                </p>

                                <p className="info_text">
                                    <small>Bootcamp training</small>
                                    <small>Bootcamp training</small>
                                </p>
                            </li>

                            <li>
                                <p className="info_title">
                                    <h4>APIs and Microservices - freeCodeCamp</h4>
                                    <small>Jan 2021 - Mar 2021</small>
                                </p>

                                <p className="info_text">
                                    <small>300 hours of coursework <Link target="_blank" to="//freecodecamp.org/certification/mahabubdev/apis-and-microservices"s>(credential url)</Link></small>
                                    <small>Certification</small>
                                </p>
                            </li>
                        </ul>
                    </div>
                </AboutPageInfo>
            </AboutPage>
        </div>
    );
};

export default AboutMe;