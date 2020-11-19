import React, { useState, useEffect } from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Row, Col } from 'react-bootstrap'
import Modal from 'react-modal'
import { CgClose } from 'react-icons/cg'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow: '0px 0px 6px 2px #e9e9e9',
  },
}

Modal.setAppElement('#root')

export default function ProjectBtn() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modal2IsOpen, setIsOpen2] = useState(false)
  const [modal3IsOpen, setIsOpen3] = useState(false)
  const [modal4IsOpen, setIsOpen4] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function openModal2() {
    setIsOpen2(true)
  }

  function openModal3() {
    setIsOpen3(true)
  }
  function openModal4() {
    setIsOpen4(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function closeModal2() {
    setIsOpen2(false)
  }

  function closeModal3() {
    setIsOpen3(false)
  }

  function closeModal4() {
    setIsOpen4(false)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <div data-aos='fade' className='project-header mb-4'>
        <span className='projects'>Projects</span>
      </div>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          className='justify-content-center'
        >
          <div className='image-container'>
            <button onClick={openModal} className='image-button'>
              <img
                data-aos='fade-up'
                className='project-image mb-2'
                src={process.env.PUBLIC_URL + '/images/covidtracker.png'}
                alt='Covid-19 Tracker'
              />
            </button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <div className='modal-container'>
                <h3 className='modal-header'>Covid-19 Tracker</h3>
                <img
                  className='modal-image m-auto'
                  src={process.env.PUBLIC_URL + '/images/covidtracker.png'}
                  alt='Covid-19 Tracker'
                />
                <p className='font-weight-bold w-75 description'>
                  In light of the situation in 2020 and the Coronavirus, I
                  decided to make a Covid-19 tracker that displays live data for
                  the world and each country.
                </p>
                <p className='font-weight-bold'>
                  Technologies Used:
                  <span className='font-weight-normal'>
                    {' '}
                    React.js, React-Leaflet, Chart.js, Bootstrap
                  </span>
                </p>
                <div className='button-container'>
                  <a
                    href='https://main.d3tcy20w66t5z5.amplifyapp.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      View Site
                    </button>
                  </a>
                  <a
                    href='https://github.com/dspark410/covid-19-tracker'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      GitHub
                    </button>
                  </a>
                </div>
                <div className='modal-footer'>
                  <button
                    className='modal-footer-button'
                    style={{
                      fontFamily: 'Jura, sans-serif',
                    }}
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
                <button className='close-button' onClick={closeModal}>
                  <CgClose />
                </button>
              </div>
            </Modal>
          </div>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          className='justify-content-center'
        >
          <div className='image-container'>
            <button onClick={openModal2} className='image-button'>
              <img
                data-aos='fade-up'
                className='project-image '
                src={process.env.PUBLIC_URL + '/images/hiho.png'}
                alt='Hi Ho'
              />
            </button>
            <Modal
              isOpen={modal2IsOpen}
              onRequestClose={closeModal2}
              style={customStyles}
            >
              <div className='modal-container'>
                <h3 className='modal-header'>Hi Ho</h3>
                <img
                  className='modal-image m-auto'
                  src={process.env.PUBLIC_URL + '/images/hiho.png'}
                  alt='Hi Ho'
                />
                <p className='font-weight-bold w-75 description'>
                  For my final group project during bootcamp, we created a job
                  search application using ZipRecruiter's API to retrieve job
                  listing info and the Numbeo API to display cost of living info
                  for the city searched.
                </p>
                <p className='font-weight-bold'>
                  Technologies Used:
                  <span className='font-weight-normal'>
                    {' '}
                    MongoDB, Express.js, React.js, Node.js, Material-UI
                  </span>
                </p>
                <p className='font-weight-bolder'>
                  Note:{' '}
                  <span className='font-weight-normal'>
                    {' '}
                    Due to ZipRecruiter API key access expiration, the job
                    searching functionality is currently unavailable.
                  </span>
                </p>
                <div className='button-container'>
                  <a
                    href='https://hi-ho-frontend.herokuapp.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      View Site
                    </button>
                  </a>
                  <a
                    href='https://github.com/dspark410/Hi-Ho-Frontend'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      GitHub
                    </button>
                  </a>
                </div>
                <div className='modal-footer'>
                  <button
                    className='modal-footer-button'
                    style={{
                      fontFamily: 'Jura, sans-serif',
                    }}
                    onClick={closeModal2}
                  >
                    Close
                  </button>
                </div>

                <button className='close-button' onClick={closeModal2}>
                  <CgClose />
                </button>
              </div>
            </Modal>
          </div>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          className='justify-content-center '
        >
          <div className='image-container '>
            <button onClick={openModal3} className='image-button'>
              <img
                data-aos='fade-up'
                className='project-image '
                src={process.env.PUBLIC_URL + '/images/smasual.png'}
                alt='Smasual'
              />
            </button>
            <Modal
              isOpen={modal3IsOpen}
              onRequestClose={closeModal3}
              style={customStyles}
            >
              <div className='modal-container'>
                <h3 className='modal-header'>Smasual</h3>
                <img
                  className='modal-image m-auto'
                  src={process.env.PUBLIC_URL + '/images/smasual.png'}
                  alt='Smasual'
                />
                <p className='font-weight-bold w-75 description'>
                  For my second group project during bootcamp, we created a
                  simple dating application that allowed the user to find a date
                  by gender orientation, age preference, and location using
                  zipcode. The user could then contact a potential match via
                  email.
                </p>
                <p className='font-weight-bold'>
                  Technologies Used:
                  <span className='font-weight-normal'>
                    {' '}
                    MySQL, HTML, CSS, JavaScript, Express.js, Node.js,
                    Nodemailer.js, Firebase
                  </span>
                </p>
                <p className='font-weight-bolder'>
                  Note:{' '}
                  <span className='font-weight-normal'>
                    {' '}
                    Due to a limited database there may be unavailable matches
                    based on user specified criteria.
                  </span>
                </p>
                <div className='button-container'>
                  <a
                    href='https://radiant-spire-72704.herokuapp.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      View Site
                    </button>
                  </a>
                  <a
                    href='https://github.com/dspark410/Smasual'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      GitHub
                    </button>
                  </a>
                </div>
                <div className='modal-footer'>
                  <button
                    className='modal-footer-button'
                    style={{
                      fontFamily: 'Jura, sans-serif',
                    }}
                    onClick={closeModal3}
                  >
                    Close
                  </button>
                </div>

                <button className='close-button' onClick={closeModal3}>
                  <CgClose />
                </button>
              </div>
            </Modal>
          </div>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          className='justify-content-center '
        >
          <div className='image-container '>
            <button onClick={openModal4} className='image-button'>
              <img
                data-aos='fade-up'
                className='project-image '
                src={process.env.PUBLIC_URL + '/images/nurse.png'}
                alt='Travel Nurse App'
              />
            </button>
            <Modal
              isOpen={modal4IsOpen}
              onRequestClose={closeModal4}
              style={customStyles}
            >
              <div className='modal-container'>
                <h3 className='modal-header'>Travel Nurses Job Spot</h3>
                <img
                  className='modal-image m-auto'
                  src={process.env.PUBLIC_URL + '/images/nurse.png'}
                  alt='Travel Nurse App'
                />
                <p className='font-weight-bold w-75 description'>
                  My first group project during bootcamp was an application
                  dedicated for travel nurses. The application allowed the user
                  to select two cities and compare the salary and cost of living
                  expenses, which ultimately, led the user to make a more
                  informed decision about the job.
                </p>
                <p className='font-weight-bold'>
                  Technologies Used:
                  <span className='font-weight-normal'> HTML, CSS, jQuery</span>
                </p>
                <p className='font-weight-bolder'>
                  Note:{' '}
                  <span className='font-weight-normal'>
                    {' '}
                    Due to CORS, the city selection menu will load very slowly
                    after the application is loaded.
                  </span>
                </p>
                <div className='button-container'>
                  <a
                    href='https://dspark410.github.io/Travel-Nurse-App/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      View Site
                    </button>
                  </a>
                  <a
                    href='https://github.com/dspark410/Travel-Nurse-App'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <button
                      className='footer-button'
                      style={{
                        fontFamily: 'Jura, sans-serif',
                      }}
                    >
                      GitHub
                    </button>
                  </a>
                </div>
                <div className='modal-footer'>
                  <button
                    className='modal-footer-button'
                    style={{
                      fontFamily: 'Jura, sans-serif',
                    }}
                    onClick={closeModal4}
                  >
                    Close
                  </button>
                </div>

                <button className='close-button' onClick={closeModal4}>
                  <CgClose />
                </button>
              </div>
            </Modal>
          </div>
        </Col>
      </Row>
    </>
  )
}
