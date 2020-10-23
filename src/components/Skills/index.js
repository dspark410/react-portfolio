import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'
import { DiJqueryLogo, DiMongodb, DiGitBranch } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { GrMysql } from 'react-icons/gr'

export default function Skills() {
  return (
    <>
      <h1 style={{ marginTop: '50px', color: 'cornflowerblue' }}>Skills</h1>

      <div
        style={{
          fontSize: '30px',
          color: 'lightgrey',
          display: 'flex',
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'space-between',
          width: '60%',
          margin: 'auto',
          paddingTop: '30px',
        }}
      >
        <FaHtml5 />
        <FaCss3Alt />
        <FaJsSquare />
        <DiJqueryLogo />
        <FaReact />
        <IoLogoNodejs />
        <DiMongodb />
        <GrMysql />
        <DiGitBranch />
      </div>
    </>
  )
}
