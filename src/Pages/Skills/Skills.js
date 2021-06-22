import React from 'react';
import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ImHtmlFive2 } from 'react-icons/im';
import {
  SiRedux,
  SiReact,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiStyledComponents,
} from 'react-icons/si';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaNode, FaEtsy } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';

const Skills = () => {
  return (
    <>
      <Container fluid className='ski'></Container>
      <Container fluid className='skillSet'>
        <Row className='justify-content-center'>
          <h2>Frontend</h2>
        </Row>
        <Row className='justify-content-center'>
          <Col xs lg='0.5'>
            <Container>
              <ImHtmlFive2 className='icon' />
              <p>Html</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <IoLogoCss3 className='icon' />
              <p>CSS</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <IoLogoJavascript className='icon' />
              <p>JavaScript</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <SiReact className='icon' />
              <p>React</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <SiRedux className='icon' />
              <p>Redux</p>
            </Container>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <h2>CSS Frameworks</h2>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col xs>
            <Container>
              <BsBootstrap className='icon' />
              <p>Bootstrap</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <SiTailwindcss className='icon' />
              <p>Tailwind CSS</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <SiStyledComponents className='icon' />
              <p>Styled Components</p>
            </Container>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <h2>Backend</h2>
        </Row>
        <Row className='justify-content-md-center text-align-center'>
          <Col xs lg='0.5'>
            <Container>
              <FaNode className='icon' />
              <p>Node JS</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <FaEtsy className='icon' />
              <p>Express JS</p>
            </Container>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <h2>DataBase</h2>
        </Row>
        <Row className='justify-content-center'>
          <Col xs lg='0.5'>
            <Container>
              <SiMysql className='icon' />
              <p>MySQL</p>
            </Container>
          </Col>
          <Col xs lg='0.5'>
            <Container>
              <SiMongodb className='icon' />
              <p>MongoDB</p>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
