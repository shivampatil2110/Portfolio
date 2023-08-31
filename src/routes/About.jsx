import React from 'react'
import HeroImg from '../components/HeroImg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image from '../assets/intro-bg.jpg'


const About = () => {
  return (
    <>
      <HeroImg heading="ABOUT" text="This is the list of all project made by me so far..."/>

      <Container style={{backgroundColor:'grey',paddingTop:'2rem'}}>
      <Row>
        <Col md={4} style={{textAlign:'center', }}>
          <h1 >Who Am I?</h1>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quidem itaque aliquid cum quae id qui excepturi nobis quia sunt.</p>
        </Col>
        <Col md={{ span: 6, offset: 2 }}>
        <Image src={image} rounded fluid/>
        </Col>
      </Row>
      </Container>
    </>

  )
}

export default About
