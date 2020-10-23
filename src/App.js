import React from 'react'
import './App.css'
import Footer from './components/Footer'
import ProjectBtn from './components/ProjectBtn'
import Skills from './components/Skills'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <div className='main'>
        <div className='box'>
          <img
            className='profile-pic'
            width='200px'
            height='200px'
            src={process.env.PUBLIC_URL + '/images/profilepic.jpg'}
            alt='David Park'
          />

          <div className='border2'></div>
        </div>

        <h1 className='name'>David S. Park</h1>

        <h2
          className='title'
          style={{
            textTransform: 'uppercase',
            color: 'cornflowerblue',
            fontWeight: '600',
            fontSize: '1.0rem',
          }}
        >
          Full Stack Web Developer
        </h2>
        <div className='mainsummary-container'>
          <div className='summary-container'>
            <p
              style={{ color: 'black', fontWeight: 'bold' }}
              className='summary'
            >
              Recent bootcamp graduate from the UC Berkeley Extension Full Stack
              Web Development Program
            </p>
          </div>
          <div className='summary-container'>
            <p
              style={{ color: 'black', fontWeight: 'bold' }}
              className='summary'
            >
              During my free time I love to play video games, cook, and eat lots
              of food.
            </p>
          </div>
          <div className='summary-container'>
            <p
              style={{ color: 'black', fontWeight: 'bold' }}
              className='summary'
            >
              I'm also a personally certified Food Adventurer & Eater.
            </p>
          </div>
        </div>

        <div className='icon-row'>
          <a
            className='iconleft'
            href='mailto:dspark410@gmail.com'
            rel='noopener noreferrer'
          >
            <HiOutlineMail
              className='iconborder'
              style={{ fontSize: '16px' }}
            />
          </a>
          <a
            className='iconleft'
            href={process.env.PUBLIC_URL + '/assets/DPark_Resume.pdf'}
            rel='noopener noreferrer'
            download
          >
            <ImProfile className='iconborder' />
          </a>
          <a
            className='iconright'
            href='https://github.com/dspark410'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='iconborder' />
          </a>
          <a
            className='iconright'
            href='https://www.linkedin.com/in/david-s-park/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='iconborder' />
          </a>
        </div>
        <Skills />
        <h1 className='projects'>
          <ProjectBtn />
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default App
