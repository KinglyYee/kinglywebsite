import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './NavCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavCard extends Component {
  render() {
    return (
        <div>
        <div className="container-header">
            <Link to={'/Me'} style={{color: "black"}}> <p id="name">  kingly &#123; <br /> <p style={{fontSize:"3vmin"}}> aspiring developer. </p> </p> </Link>
        </div>
        <div className="flex-container">
             <div className="navbox" id="navprojects"> <Link to={'/Projects'}> <p id="subhead">  projects. </p> </Link> </div>
             <div className="navbox" id="navexperience"> <Link to={'/Experience'}><p id="subhead">  experience. </p> </Link></div> 
             <div className="navbox" id="navinvolvement"> <Link to={'/Volunteer'}><p id="subhead" style={{color: "white"}}>  involvement. </p> </Link></div> 
        </div>
        </div>
    );
  }
}

export default NavCard;