import * as React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/images/icons/Github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/icons/Linkedin.svg';

function AboutMe() {
    return (
        <div className='about-me-container'>
            <header className='page-header'>
                    <h2>About Me</h2>
            </header>
            <main className='about-me'>
                <section>
                        <p>
                            My name is Chris and I am a hard working technician with a strong   interest in using technology to make our lives easier.
                        </p>
                </section>
                <section>
                    <p>
                        I am a graduate of the University of Arizona's coding bootcamp, which was an intensive 12 week program.
                    </p>
                </section>
                <section>
                    <p>
                        Throughout the bootcamp I started with the basics and quickly adapted to learning a new language every week. I have experience with HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, React, and more.
                    </p>
                </section>
                <section>
                        <p>
                            When I'm not coding, I am more than likely working with my hands or spending time with my family. 
                        </p>
                </section>
                <section>
                    <p>
                        I have a strong background in low voltage wiring and have worked on many projects that have helped me develop a keen attention to detail. I am always looking for ways to improve my skills and learn new things.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default AboutMe;