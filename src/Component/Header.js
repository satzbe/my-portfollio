import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import './Header.css';
import { animateScroll as Scroll, Link } from 'react-scroll';

const Header = () => {
  const toTop = () => Scroll.scrollToTop();
  return (
    <Navbar className='header' bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand>
        <h3 onClick={toTop}>SK</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link>
            {' '}
            <Link to='project' smooth={true} duration={500}>
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='skill' smooth={true} duration={500}>
              Skills
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='about' smooth={true} duration={500}>
              About Me
            </Link>
          </Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/sathish-kumar-r-290596'>
            <FiLinkedin className='icons' />
          </Nav.Link>
          <Nav.Link href='https://github.com/satzbe/'>
            <FiGithub className='icons' />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
