// Contact.js
import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import Image from 'react-bootstrap/Image';
import photo from '../images/profile.jpg';

import './Me.css';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
        <FadeIn>
        <div className="container">
            <div className="header">
                <h1 > experience </h1>
                <p id="title"> some places i've part-timed at</p>
            </div>
            <hr />
            
            <div className="workcard" id="mcdonalds">
              <div className="boxparent">
                <div className="box1" id="mcdonaldslogo">

                </div>
                <div className="box2">
                  <p> McDonald's </p>
                  <p className="positiondate"> Crew Trainer <br /> 2017 - Present</p>
                </div>
              </div>
            </div>

            <div className="workcard" id="evas">
              <div className="boxparent">
                <div className="box1" id="evaslogo">

                </div>
                <div className="box2">
                  <p> Eva's Originals </p>
                  <p className="positiondate"> Shift Leader <br />  2018 - 2019</p>
                </div>
              </div>       
            </div>     

            <div className="workcard" id="baconnation">
              <div className="boxparent">
                <div className="box1" id="baconnationlogo">

                </div>
                <div className="box2">
                  <p> Bacon Nation </p>
                  <p className="positiondate"> Line Cook <br />  2017 - 2018</p>
                </div>
              </div>       
            </div>       

            <div className="workcard" id="tacsports">
              <div className="boxparent">
                <div className="box1" id="tacsportslogo">

                </div>
                <div className="box2">
                  <p> Toronto Athletic Camps </p>
                  <p className="positiondate"> Camp Counsellor <br />  2015 - 2016</p>
                </div>
              </div>       
            </div>  



        </div>
        </FadeIn>
    );
  }
}

export default Experience;