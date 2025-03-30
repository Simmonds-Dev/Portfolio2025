import * as React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.jfif';
import { showHamburgerMenu } from '../utils/helpers';
import { hideHamburgerMenu } from '../utils/helpers';
import { ReactComponent as MenuIcon } from '../assets/images/icons/Hamburger.svg';
import { ReactComponent as CloseIcon } from '../assets/images/icons/Close.svg';


function Navbar() {
    return (
        <section className="navbar-container">
            <figure className="navbar-header">
                <img 
                    className='headshot'
                    alt='Headshot of me'
                    src={headshot}
                />
                <h1>Christopher Simmonds</h1>
            </figure>
            <nav className="navbar">
                <div className="hamContainer">
                    <ul className='hamburger-menu'>
                        <li id='closeBtnContainer' className='hideOnDesktop'>
                            <a id='closeBtn' href='#' onClick={hideHamburgerMenu}>
                                <CloseIcon />
                            </a>
                        </li>
                        <li className='hideOnDesktop'>
                            <Link id='aboutMe' to='portfolio2025/'>About Me</Link>
                        </li>
                        <li className='hideOnDesktop'>
                            <Link id='portfolio' to='portfolio2025/Portfolio'>Portfolio</Link>
                        </li>
                        <li className='hideOnDesktop'>
                            <Link id='resume' to='portfolio2025/Resume'>Resume</Link>
                        </li>
                    </ul>
                </div>
                <ul className='navbar-list'>
                    <li className='hideOnMobile'>
                        <Link to='portfolio2025/'>About Me</Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='portfolio2025/Portfolio'>Portfolio</Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='portfolio2025/Resume'>Resume</Link>
                    </li>
                    <li className='menuBtn' onClick={showHamburgerMenu}>
                        <a href='#'>
                            <MenuIcon />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;