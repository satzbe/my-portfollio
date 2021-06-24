import React from 'react';
import { Container } from 'react-bootstrap';
import Projects from '../Projects/Projects';
import './Home.css';
import Type from './Type';
import { Link, Element } from 'react-scroll';

const Home = () => (
  <>
    <Container fluid className='home'></Container>
    <Container fluid className='home-content'>
      <h1>
        Hi <strong>! </strong>I'm Sathish Kumar
      </h1>
      <p>Self taught Web developer and Welcome to my portfolio... </p>
      <p>
        <Type />
      </p>

      <button>
        <Link to='project' smooth={true} duration={500}>
          MyWorks
        </Link>
      </button>
    </Container>
    <Element id='project'>
      <Projects />
    </Element>
   
  </>
);

export default Home;
