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
                <a className="iconleft" href="" rel="noopener noreferrer" download>
                    <ImProfile className="iconborder" />
                </a>
                <a className="iconleft" href="mailto: dspark410@gmail.com" rel="noopener noreferrer">
                    <MdEmail className="iconborder" />
                </a>
                <a className="iconright" href="https://github.com/dspark410" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="iconborder" />
                </a>
                <a className="iconright" href="https://www.linkedin.com/in/david-s-park/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="iconborder" />
                </a>

            </div>
            <p>© {getYear()} David S. Park</p>

        </div>
    )
}
