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
import { GrMysql, GrGraphQl } from 'react-icons/gr'
import { SiApollographql } from 'react-icons/si'

import './style.css'

export default function Skills() {
  return (
    <>
      <h1
        data-aos='fade'
        style={{ marginTop: '50px', color: 'cornflowerblue' }}>
        Skills
      </h1>

      <div className='skills' data-aos='fade'>
        <FaHtml5 className='html' />
        <FaCss3Alt className='css' />
        <FaBootstrap className='bs' />
        <FaJsSquare className='js' />
        <DiJqueryLogo className='jquery' />
        <FaReact className='react' />
        <GrGraphQl className='graphql' />
        <SiApollographql className='apollo' />
        <IoLogoNodejs className='node' />
        <DiMongodb className='mongo' />
        <GrMysql className='sql' />
        <DiGitBranch className='git' />
      </div>
    </>
  )
}
