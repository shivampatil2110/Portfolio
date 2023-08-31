import React from 'react'
import HeroImg from '../components/HeroImg'
import { Form,Button } from 'react-bootstrap'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <>
    <HeroImg heading="CONTACT" text="This is the list of all project made by me so far..."/>

    <Form className='dark-form'>
    <Form.Group className="my-2" controlId="formBasicEmail">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Your Name" />
      
    </Form.Group>

    <Form.Group className="my-2" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="my-2" controlId="formBasicPassword">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={9} placeholder="Enter your message here" type='password' />
    </Form.Group>


    <Button variant="warning" type="submit" className='my-2'>
      Submit
    </Button>
  </Form>      
    </>
  )
}

export default Contact
