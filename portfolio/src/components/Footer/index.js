import React from 'react'
import "./style.css"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";


const getYear = () => new Date().getFullYear();

export default function Footer() {
    return (
        <div className="footer">
            <div className="icon-row">
                <a href="" rel="noopener noreferrer" download>
                    <ImProfile />
                </a>
                <a href="mailto: dspark410@gmail.com" rel="noopener noreferrer">
                    <MdEmail />
                </a>
                <a href="https://github.com/dspark410" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/david-s-park/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>


            </div>
            <p>© {getYear()} David Park</p>

        </div>
    )
}
