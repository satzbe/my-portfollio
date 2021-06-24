import React from 'react';
import WeA from '../../Assets/weapp.png';
import { Container, Card, Button } from 'react-bootstrap';
import './Project.css';
const Projects = () => {
  return (
    <Container fluid className='project'>
      <h1>Project...</h1>
      <Container className='justify-content-center'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={WeA} />
          <Card.Body>
            <Card.Title>Weather APP</Card.Title>
            <Card.Text>
              A simple app build in React js and OpenWeather Api to Search
              current weather
            </Card.Text>
            <Button href='https://satzbe.github.io/projects_MERN'>
              Try it
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Projects;
