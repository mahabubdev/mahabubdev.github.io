import SEO from '../components/SEO';
import Svg404 from '../images/404.svg';
import { Error404 } from './styled/styled.common';


const Notfound = () => {
    return (
        <Error404>
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

            <img src={Svg404} alt="Error 404" />
            <h1>Error! Page Not found!</h1>
        </Error404>
    );
};

export default Notfound;