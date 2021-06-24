import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => (
  <>
    <Container fluid='2xl' className='about'></Container>
    <Container className='aboutCon'>
      <p>
        As you already knew my name <strong>Sathish Kumar</strong> from Madurai.{' '}
      </p>
      <p>
        {' '}
        I'm an ECE Engineer after completing college on 2017, I started my
        carrier as Business Development Engineer. After couple of months I find
        business is not my thing.
      </p>{' '}
      <p>
        So on 2019 I moved to Medical billing service and worked as an ArCaller.
        On a while gathered interest on web development. Its already passed 3.8
        years quiting is almost risking my carrier After long and deep thinking
        I quit my job as an Arcaller on April 2021.
      </p>{' '}
      <p>
        But I beleive in myself and its never too late to startover also trusted
        its worth a risk Small interest became passion Then started learning
        frontend basics HTML, CSS and JavaScript. Completed udemy certfication
        on HTML and CSS. Finally chose this path of web developer. Let begin a
        new chapter.
      </p>
    </Container>
  </>
);

export default About;
