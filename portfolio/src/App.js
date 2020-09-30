import React from 'react';
import './App.css';
import Footer from "./components/Footer"
// import Portfolio from './components/Portfolio';




function App() {
  return (
    <div className="container">

      <div className="main">
        <img className="profile-pic" src={"https://via.placeholder.com/150"} alt="David Park" />
        <h1 className="name">David S. Park</h1>

        <h2 className="title" style={{ textTransform: "uppercase", color: "cornflowerblue", fontWeight: "600", fontSize: "1.0rem" }}>Full Stack Web Developer</h2>

        <div className="summary-container">
          <p className="summary">Recent bootcamp graduate from the UC Berkeley Extension Full Stack Web Development Program</p>
        </div>
        <div className="summary-container">
          <p className="summary2">During my free time I love to cook and eat lots of food. I am a personally certified Food Adventurer.</p>
        </div>
        <h1 className="projects">Projects</h1>
        <div className="card-container">

          <div className="card-body">
            <img className="logo" src="/images/hihologo.png" alt="Hi Ho Logo"/>
            <a href="https://hi-ho-frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p> Hi Ho</p></a>
          </div>

          <div className="card-body">
            <img className="logo2" src="/images/smasual.jpg" alt="Smasual Logo"/>
            <a href="https://radiant-spire-72704.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>Smasuals</p></a>
          </div>

          <div className="card-body">
            <img className="logo" src="/images/hihologo.png" alt="Nurse Logo"/>
           
            <a href="https://staffbotsteve.github.io/lazy-loaders/" target="_blank" rel="noopener noreferrer"><p>Travel Nurses App</p></a>
          </div>
        </div>
      </div>

      <Footer />
    </div>



  );
}

export default App;
