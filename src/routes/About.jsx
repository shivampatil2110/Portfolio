import React from 'react'
import HeroImg from '../components/HeroImg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import html5 from '../assets/html5.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import db from '../assets/db.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import bootstrap from '../assets/bootstrap.png'
import node from '../assets/node.png'
import npm from '../assets/npm.png'
import '../styles/About.css'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


const About = () => {
  
  return (
    <>
      <HeroImg heading="ABOUT" text="This is the list of all project made by me so far..."/>

      <Container className='full-width-container' style={{color:'white'}}>
      <h2>About Me</h2>
      <br />
      <h3>I'm Shivam Patil and Web Developer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque perferendis nihil, laudantium, nemo at exercitationem impedit maxime quia, tenetur vitae suscipit? Vero est esse error eos adipisci mollitia praesentium neque. Dolores rerum pariatur odio earum eius, dignissimos eaque similique tempora porro, numquam tenetur ipsa. Odio cupiditate reprehenderit vel ratione.</p>
      <br />
      <Container>
      <Row style={{paddingLeft:'5px'}}>
        <Col xs={6} md={3} >
          <strong>Birthday:</strong> <p>21st October 2000</p>
          <strong>Website:</strong> <p>www.resume.com</p>
          <strong>Degree:</strong> <p>CSE</p>
          <strong>City:</strong> <p>Jaipur</p>
        </Col>
        <Col xs={6} md={3}>
          <strong>Age:</strong> <p>22</p>
          <strong>Email:</strong> <p>shivampatil2110@gmail.com</p>
          <strong>Phone:</strong> <p>9462551308</p>
          <strong>Freelance:</strong> <p>Available</p>
        </Col>
        <Col xs={6} md={6}>
          <Row style={{textAlign:'center'}}>
            <Col>
              <h2>Skills</h2>
            </Col>
          </Row>
          <Row style={{marginTop:'2rem'}}>
            <Col className='image-container'>
            <img src={html5} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={node} alt="" />
            <img src={db} alt="" />
            <img src={bootstrap} alt="" /> <br />
            
            </Col>
          </Row>
          <Row style={{marginTop:'1.4rem'}}>
            <Col className='image-container'>
            <img src={npm} alt="" />
            <img src={git} alt="" />
            <img src={github} alt="" />
            </Col>
          </Row>
         
        </Col>
      </Row>
      </Container>
    <br />
      <Container>
      <Row>
        <Col xs={12} md={6}>
          <h2>Education</h2>
          <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <p style={{marginBottom:0}}>10th</p>
          <p>9 CGPA</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h5>ST. Pauls Sr. Sec. School</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus reiciendis autem ad excepturi! Temporibus dolorum dolore officiis animi omnis?</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <p style={{marginBottom:0}}>12th</p>
          <p>78.4%</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent>
          <h5>ST. Pauls Sr. Sec. School</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus reiciendis autem ad excepturi! Temporibus dolorum dolore officiis animi omnis?</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <p style={{marginBottom:0}}>B-Tech</p>
          <p>8.1 CGPA</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <h5>Poornima College of Engineering</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus reiciendis autem ad excepturi! Temporibus dolorum dolore officiis animi omnis?</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </Col>
        <Col xs={6} md={6}>
          <h2>Experience</h2>
          <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <p style={{marginBottom:0}}>10th</p>
          <p>9 CGPA</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h5>ST. Pauls Sr. Sec. School</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus reiciendis autem ad excepturi! Temporibus dolorum dolore officiis animi omnis?</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <p style={{marginBottom:0}}>12th</p>
          <p>78.4%</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent>
          <h5>ST. Pauls Sr. Sec. School</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus reiciendis autem ad excepturi! Temporibus dolorum dolore officiis animi omnis?</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <p style={{marginBottom:0}}>B-Tech</p>
          <p>8.1 CGPA</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <h5>Poornima College of Engineering</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus reiciendis autem ad excepturi! Temporibus dolorum dolore officiis animi omnis?</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </Col>
      </Row>
      </Container>
      </Container>
    </>

  )
}

export default About
