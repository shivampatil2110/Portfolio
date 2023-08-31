import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'
import {FaHome,FaPhone,FaMailBulk,FaLinkedinIn,FaFacebookF,FaTwitter} from 'react-icons/fa'

const Footer = () => {
    const linkedin = 'https://www.linkedin.com/in/shivam-patil-7b9540103/'
    const twiiter = 'https://twitter.com/ShivamP31306334'
    const mail = 'shivampatil2110@gmail.com'

  return (
    <Container className='cont' fluid>
      <Row>
        <Col xs={6} md={8} style={{alignContent:'center'}}>
          <FaHome size={20} style={{marginRight:'2rem'}}/>
          <div className='content'>
          <span>655,Riddhi Siddhi Residency</span>
          <p style={{}}>Kota, Rajasthan</p>
          </div>
        
          <FaPhone size={20}/>
            <div className='content'>
                <p>
                    9462551308
                </p>
            </div>

        <FaMailBulk size={20}/>
            <div className='content'>
                <p>shivampatil2110@gmail.com</p>
            </div>
        </Col>

        <Col xs={6} md={4}>
            <h4>About Me,</h4>
            <p>This is Shivam Patil. Currently pursuing B-Tech and an aspiring MERN Stack developer</p>
            <Link to={linkedin} style={{color:'white'}}><FaLinkedinIn size={33} /></Link>
            
            <Link to={mail} style={{color:'white'}}><FaMailBulk size={33}/></Link>
            
            <Link to={twiiter} style={{color:'white'}}><FaTwitter size={33}/></Link>
            
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
