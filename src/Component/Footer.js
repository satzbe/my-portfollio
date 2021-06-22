import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Message from './FooterType';
import { SiGmail } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <Container fixed='bottom' fluid className='mt-auto foot'>
        <Row className='justify-content-center'>
          <Col>
            <Message />
          </Col>
          <Col className='mt-3'>
            <p>
              <SiGmail className='mx-3' />
              satz.b.e.17@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
