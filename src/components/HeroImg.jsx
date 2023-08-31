import React from 'react'
import '../styles/Heroimg.css'
import { Container,Stack } from 'react-bootstrap'

const HeroImg = (props) => {
  return (
    <Container className='hero-img' fluid style={{ marginLeft: 0, marginRight: 0 }}> 
        <Stack gap={0} fluid >
            <div className="p-2 heading"><h1>{props.heading}</h1></div>
            <div className="p-2 para"><p>{props.text}</p></div>
        </Stack>
    </Container>
  )
}

export default HeroImg
