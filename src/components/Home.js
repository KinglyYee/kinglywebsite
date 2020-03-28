// Home.js

import React, { Component } from 'react';
import NavCard from './NavCard';
import FadeIn from 'react-fade-in';
import './Home.css';
// import Card from './Card';

class Home extends Component {
  render() {
    return (
        <FadeIn>
        <div className="header">
          {/* <h2 style = {{float: "none", marginTop:"50px"}}> aspiring <br id="linebreak" style={{display: "static"}} />developer.</h2> */}
          <NavCard />
        </div>
        </FadeIn>
    );  
  }
}

export default Home;