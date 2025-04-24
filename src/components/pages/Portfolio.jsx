import * as React from 'react';
import Project1 from '../../assets/images/couchPotato.webp';
import Project2 from '../../assets/images/HandleThis.png';
import Project3 from '../../assets/images/Code3Graphix.png';

const projects = [
    {
        title: 'Couch Potato Assistant 2.0',
        description: 'An app that helps you find movies to watch based on your mood.',
        image: Project1,
        link: 'https://simmonds-dev.github.io/Couch-Potato-Assistant-2.0/',
    },
    {
        title: 'Handle This',
        description: 'A blog site that uses Handlebars, Express-Session and SQL.',
        image: Project2,
        link: "https://handle-this-0664649bb26b.herokuapp.com/"
    },
    {
        title: 'Code3Graphix',
        description: 'A website for a local graphic design business. Coming Soon!',
        image: Project3,
    },
]

function Portfolio() {
    return (
        <div className='portfolio-container'>
            <header className='page-header'>
                <h2>Portfolio</h2>
            </header>
            <main className='portfolio'>
                <section className='projects'>
                    {projects.map((project, index) => (
                        <card 
                            className='projects'
                            key={index}
                        >
                            <h3>{project.title}</h3>
                            <a 
                                href={project.link}
                                target='_blank'
                                >
                                <img
                                    className = 'project-image'
                                    src={project.image}
                                    alt={project.title}
                                    />
                            </a>
                            <p>{project.description}</p>
                        </card>
                    ))}
                </section>
            </main>

        </div>
    )
}

export default Portfolio;