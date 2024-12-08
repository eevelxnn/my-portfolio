import React from 'react';
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <header className="App-header row" id="home">
        <div className="col-md-6">
        <img className="headshot" src="/images/headshot.png" alt="Picture of Evelyn"></img>
        </div>
        <div className="col-md-6">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Evelyn Martinez! I am curently attend Columbia Univeristy majoring in computer science. </p>
        </div>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>I currently go to Columbia University majoring in computer science</p>
      </section >
      <footer id="contact">
        <p>Contact me at evelynadairmartinez@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
