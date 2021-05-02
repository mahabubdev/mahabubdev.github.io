import { BlogContainer } from "./styled";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import externalLink from '@iconify-icons/feather/external-link';

const BlogSummery = ({ allBlogs }) => {
    // states & latest first
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function calculate() {
            let latestFirstArr = await allBlogs.sort((a, b) => {
                let aD = new Date(a.pub);
                let bD = new Date(b.pub);
                if (aD > bD) {
                    return -1;
                } else {
                    return 1;
                }
            })

            setBlogs([...latestFirstArr.slice(0,3)]); // taking latest 3 items only
        }

        calculate();
    }, [allBlogs])


    return (
        <BlogContainer>
            <h2>latest blogs</h2>
            
            <div className="blogs">
                {
                    blogs.length > 0 && blogs.map((b, i) => (
                        // <p key={i}>{new Date(b.pub).toDateString()}</p>
                        <div className="blog_item" key={i}>
                            <div className="img_wrap">
                                <img src={b.featuredImg} alt={b.name} />
                            </div>

                            <div className="info">
                                <h4>{b.name}</h4>

                                <ul className="tags">
                                    {
                                        b.tags.map((_b, i) => (
                                            <span key={i}>{_b}</span>
                                        ))
                                    }
                                </ul>

                                <div className="links">
                                    <Link to={b.repo} className="btn btn-link" target="_blank">
                                        <span>github</span>
                                        <Icon icon={githubIcon} />
                                    </Link>
                                    <Link to={b.live} className="btn btn-link" target="_blank">
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
                <Link to="/blog" className="btn btn-pr">explore more</Link>
            </div>
        </BlogContainer>
    )
}

export default BlogSummery;