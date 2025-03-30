import * as React from 'react';
import Project1 from '../../assets/images/CouchPotato.png';
import Project2 from '../../assets/images/Code3Graphix.png';
import Project3 from '../../assets/images/Password-Generator.png';

const projects = [
    {
        title: 'Couch Potato Assistant',
        description: 'An app that helps you find movies to watch based on your mood.',
        image: Project1,
        link: 'https://christoph551.github.io/Couch-Potato-Assistant/',
    },
    {
        title: 'Code3Graphix',
        description: 'A website for a local graphic design business.',
        image: Project2,
    },
    {
        title: 'Password Generator',
        description: 'A simple password generator.',
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