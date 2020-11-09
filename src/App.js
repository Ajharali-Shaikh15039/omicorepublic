import React from 'react';
import './App.css';
import Footer from "./components/footer";
import MainContent from "./components/mainContent";
import Body from "./components/body";
import Contactus from "./components/contactus";
import Upcoming from "./components/upcoming";
import { Link, Route, Router, Switch } from "react-router-dom";
import Aboutus from './components/aboutus';

function App() {
  return (
    <div>
      {/* Header starts from here */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand" to="/home" style={{fontFamily:'serif'}}><img src="./images/logo_omicore.png" alt="OmicoreArt"></img>OMICORE ART GALLERY</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav" style={{fontFamily:'serif'}}>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active " >
                <Link className="nav-link" to ="/home">HOME <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to ="/product">PRODUCT</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to ="/upcoming">UPCOMING</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to ="/aboutus">ABOUT US</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to ="/contactus">CONTACT US</Link>
            </li>
            </ul>
        </div>
        </nav>
      <Route exact path="/"><MainContent /><Body /><Aboutus /><Contactus/><Footer/></Route>
      <Route exact path="/home"><MainContent /><Body /><Aboutus /><Contactus/><Footer/></Route>
      <Route exact path="/product"><Body /><Footer/></Route>
      <Route exact path="/upcoming"><Upcoming/><Footer/></Route>
      <Route exact path="/aboutus"><Aboutus /><Footer/></Route>
      <Route exact path="/contactus"><Contactus /><Footer/></Route>
    </div>
  );
}

export default App;

