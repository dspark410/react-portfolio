import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
} from 'react-icons/fa'
import { DiJqueryLogo, DiMongodb, DiGitBranch } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { GrMysql } from 'react-icons/gr'
import './style.css'

export default function Skills() {
  return (
    <>
      <h1 style={{ marginTop: '50px', color: 'cornflowerblue' }}>Skills</h1>

      <div className='skills'>
        <FaHtml5 className='html' />
        <FaCss3Alt className='css' />
        <FaBootstrap className='bs' />
        <FaJsSquare className='js' />
        <DiJqueryLogo className='jquery' />
        <FaReact className='react' />
        <IoLogoNodejs className='node' />
        <img
          className='express'
          src={process.env.PUBLIC_URL + '/images/ex.png'}
          alt='expressjs'
        />
        <DiMongodb className='mongo' />
        <GrMysql className='sql' />
        <DiGitBranch className='git' />
      </div>
      {/* <div className='text'>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Bootstrap</p>
        <p>JavaScript</p>
        <p>jQuery</p>
        <p>React</p>
        <p>Node</p>
        <p>Express</p>
        <p>MongoDB</p>
        <p>MySQL</p>
        <p>Git</p>
      </div> */}
    </>
  )
}
