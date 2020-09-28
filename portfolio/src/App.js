import React from 'react';
import './App.css';
import Footer from "./components/Footer"




function App() {
  return (
    <div className="container">

      <div className="main">
        <img className="profile-pic" src={"https://via.placeholder.com/150"} alt="David Park" />
        <h1>David Park</h1>

        <h2>Full Stack Web Developer</h2>

        <p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
      </div>

      <Footer />
      
    </div>



  );
}

export default App;
