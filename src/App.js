import React, { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import ProjectBtn from './components/ProjectBtn'
import Skills from './components/Skills'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3900)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='container app_container'>
          <div className='main'>
            <div className='box'>
              <img
                data-aos='fade'
                className='profile-pic'
                width='200px'
                height='200px'
                src={process.env.PUBLIC_URL + '/images/profilepic.jpg'}
                alt='David Park'
              />

              <div data-aos='fade' className='border2'></div>
            </div>

            <h1 data-aos='fade' className='name'>
              David S. Park
            </h1>

            <h2
              data-aos='fade'
              className='title'
              style={{
                textTransform: 'uppercase',
                color: 'cornflowerblue',
                fontWeight: '600',
                fontSize: '1.0rem',
              }}
            >
              Web Developer
            </h2>
            <div className='mainsummary-container'>
              <div className='summary-container'>
                <p
                  style={{ color: 'black', fontWeight: 'bold' }}
                  className='summary'
                  data-aos='fade'
                >
                  Hey! My name is David and I'm a web developer with a passion
                  for the front end. I'm a bootcamp graduate from the UC
                  Berkeley Extension Full Stack Web Development Program looking
                  for opportunities in front end development.
                </p>
              </div>
              <div className='summary-container'>
                <p
                  style={{ color: 'black', fontWeight: 'bold' }}
                  className='summary'
                  data-aos='fade'
                >
                  When I'm not coding I love to cook, explore different foods
                  from various restaurants, weight train, and play video games.
                </p>
              </div>
              <div className='summary-container'>
                <p
                  style={{ color: 'black', fontWeight: 'bold' }}
                  className='summary'
                  data-aos='fade'
                >
                  I'm also a certified personal trainer and exercise
                  physiologist.
                </p>
              </div>
            </div>

            <div className='icon-row' data-aos='fade'>
              <div className='icon-container'>
                <a
                  className='icon'
                  href='mailto:dspark410@gmail.com'
                  rel='noopener noreferrer'
                >
                  <HiOutlineMail
                    className='iconborder'
                    style={{ fontSize: '16px' }}
                  />
                </a>
                <a
                  className='icon'
                  href={
                    process.env.PUBLIC_URL + '/assets/David_Park_Resume.pdf'
                  }
                  rel='noopener noreferrer'
                  download
                >
                  <ImProfile className='iconborder' />
                </a>
                <a
                  className='icon'
                  href='https://github.com/dspark410'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='iconborder' />
                </a>
                <a
                  className='icon'
                  href='https://www.linkedin.com/in/david-s-park/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin className='iconborder' />
                </a>
              </div>
            </div>
            <Skills />
          </div>
          <ProjectBtn />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
