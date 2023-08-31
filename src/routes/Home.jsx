import React from 'react'
import { Button  } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='hero'>
      
      <div className="content">

        <h2>I<span>'</span>M</h2>
        <h1>React Devloper.</h1>

      <div>
          <Link to='/projects'><Button variant="warning">Projects</Button>{' '}</Link>
          <Link to='/about'>{' '}<Button variant="outline-light">About</Button></Link>
        </div>

      </div>
    </div>
  )
}

export default Home
