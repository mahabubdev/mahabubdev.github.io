import { Helmet } from 'react-helmet';

function SEO ({ title, meta }) {
    return (
        <Helmet>
            <title>{title}</title>
            {
                meta.length > 0 && meta.map((mt, i) => (
                    <meta key={i} name={mt.name} content={mt.content} />
                ))
            }
        </Helmet>
    )
}

export default SEO;