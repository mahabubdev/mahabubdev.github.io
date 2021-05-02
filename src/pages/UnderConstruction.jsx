import SEO from '../components/SEO';
import UnderConImg from '../images/under_construction.svg';
import { UnderConstruction } from './styled/styled.common';


const UnderConstructionPage = () => {
    return (
        <UnderConstruction>
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

            <img src={UnderConImg} alt="under_construction" />
            <h2>This page is in under-construction!</h2>
        </UnderConstruction>
    );
};

export default UnderConstructionPage;