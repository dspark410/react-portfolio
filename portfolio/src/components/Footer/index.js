import React from 'react'
import "./style.css"
import EmailBtn from "../EmailBtn"


const getYear = () => new Date().getFullYear();

export default function Footer() {
    return (
        <div className="footer">
            
            <p>© {getYear()} David S. Park</p>
            <EmailBtn />
           
       </div>
    )
}
