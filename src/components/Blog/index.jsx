import { BlogContainer } from "./styled";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
// import githubIcon from '@iconify-icons/logos/github-icon';
import externalLink from '@iconify-icons/feather/external-link';

const BlogSummery = () => {
    // states & latest first
    const [blogs, setBlogs] = useState({});

    useEffect(() => {
        
        async function fetchApi() {
            await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mahabubdev`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log('api_res===>', res);
                setBlogs({
                    feeds: res.feed,
                    posts: [...res.items]
                });
                console.log('after_loaded', blogs);
            })
            .catch(err => {
                console.log(err);
            })
        }

        fetchApi(); // called
    }, []);


    return (
        <BlogContainer>
            <h2>latest blogs</h2>
            
            <div className="blogs">
                {
                    blogs.posts?.length > 0 && blogs.posts.map((b, i) => (
                        // <p key={i}>{new Date(b.pub).toDateString()}</p>
                        <div className="blog_item" key={i}>
                            <div className="img_wrap">
                                <img src={b.thumbnail} alt={b.title} />
                            </div>

                            <div className="info">
                                <h4>{b.title}</h4>

                                <ul className="tags">
                                    {
                                        b.categories.map((_b, i) => (
                                            <span key={i}>{_b}</span>
                                        ))
                                    }
                                </ul>

                                <div className="links">
                                    {/* <Link to={b.repo} className="btn btn-link" target="_blank">
                                        <span>github</span>
                                        <Icon icon={githubIcon} />
                                    </Link> */}
                                    <a href={b.link} className="btn btn-link" target="_blank">
                                        <span>Read</span>
                                        <Icon icon={externalLink} />
                                    </a>
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