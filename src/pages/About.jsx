import SEO from "../components/SEO";

const AboutMe = () => {

    const currentEnv = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : '=development=';

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
            <h1>About Me - Online Resume!</h1>
            <p>{currentEnv}</p>
        </div>
    );
};

export default AboutMe;