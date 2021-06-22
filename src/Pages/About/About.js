import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => (
  <>
    <Container fluid='2xl' className='about'>
      <Container className='aboutCon'>
        <p>
          As you already knew my name <strong>Sathish Kumar</strong> from
          Madurai.
          <br />
          I'm an ECE Engineer after completing college on 2017, I started
          <br />
          my carrier as Business Development Engineer. After couple of months I
          <br />
          find business is not my thing. So on 2019 I moved to Medical billing
          <br />
          service and worked as an ArCaller.
          <br />
          <br />
          On a while gathered interest on web development. <br />
          Its already passed 3.8 years quiting is almost risking my carrier{' '}
          <br />
          After long and deep thinking I quit my job as an Arcaller on April
          2021.
          <br />
          But I beleive in myself and its never too late to startover <br />{' '}
          also trusted its worth a risk
          <br />
          <br />
          Then started learning frontend basics HTML, CSS and JavaScript.
          <br /> Completed udemy certfication on HTML and CSS. <br />
          Then I chose React and learned it.
        </p>
      </Container>
    </Container>
  </>
);

export default About;
