import { ReactComponent as GithubIcon } from '../assets/images/icons/Github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/images/icons/Linkedin.svg';
import { ReactComponent as EmailIcon } from '../assets/images/icons/Email.svg';

function Footer() {
    return (
        <div className='footer-container'>
            <footer className='footer'>
                <div className='contactInfo'>
                    <p>
                        Please feel free to check out my GitHub, LinkedIn, or send me an email! I'd love to connect.
                    </p>
                </div>
                    <section className="iconGroup">
                        <a className='icons' href='https://github.com/Christoph551' target='_blank'>
                            <GithubIcon />
                        </a>
                        <a className='icons' href='https://www.linkedin.com/in/christopher-simmonds' target='_blank'>
                            <LinkedInIcon />
                        </a>
                        <a className='icons' href='mailto:christophersimmonds551@gmail.com' target='_blank'>
                            <EmailIcon />
                        </a>
                    </section>
            </footer>
        </div>
    )
}

export default Footer;