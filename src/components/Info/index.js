/** @format */

import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

function Info() {
  return (
    <>
      <div className='icon-row' data-aos='fade'>
        <div className='icon-container'>
          <a
            className='icon'
            href='mailto:dspark410@gmail.com'
            rel='noopener noreferrer'>
            <HiOutlineMail
              className='iconborder'
              style={{ fontSize: '16px' }}
            />
          </a>
          <a
            className='icon'
            href={process.env.PUBLIC_URL + '/assets/David_Park_Resume.pdf'}
            rel='noopener noreferrer'
            download>
            <ImProfile className='iconborder' />
          </a>
          <a
            className='icon'
            href='https://github.com/dspark410'
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithub className='iconborder' />
          </a>
          <a
            className='icon'
            href='https://www.linkedin.com/in/david-s-park/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin className='iconborder' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Info
