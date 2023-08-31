import React from 'react'
import HeroImg from '../components/HeroImg'
import {Card,Button, CardGroup,Row,Col, Container} from 'react-bootstrap';
import projectsData from '../assets/projectsData.json'
import image from '../assets/intro-bg.jpg'
import '../styles/Projects.css'


const Projects = () => {
  return (
    <>
      <HeroImg heading="PROJECTS" text="This is the list of all project made by me so far..."/>
      
      <Container className="full-width-container">
        <Row className="full-width-row">
          <span style={{color:'white',fontSize:'2.5rem'}}>Projects</span>
          {projectsData.map((data)=>(
            <Col key={data.id} sm={12} md={6} lg={4} xl={3}>
                <Card className='my-3 p-3 rounded' bg='dark' text='light'>
                  <Card.Img src={image} variant='top'/>
                    <Card.Body>
                          <Card.Title as='div' className='product-title'>
                              <h2>{data.title}</h2>
                          </Card.Title>
                          <Card.Text as='h6'>
                              {data.description}
                          </Card.Text>
                    </Card.Body>
                    <Button variant='warning'>Git-Hub</Button>
                </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </>
  )
}

export default Projects
