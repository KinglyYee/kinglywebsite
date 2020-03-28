import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import Image from 'react-bootstrap/Image';
// import { FaHtml5, FaCss3, FaJsSquare} from 'react-icons/fa';

// import r3p2 from '../images/r3p2.jpg';
import KizukiLogo from '../images/KizukiLogo.jpg';
import navexperience from '../images/navexperience.jpg';
import navprojects from '../images/navprojects.jpg';
import navinvolvement from '../images/navinvolvement.jpg';
import tools from '../images/tools.jpg';

import r3p21 from '../images/r3p21.jpg';
import r3p22 from '../images/r3p22.jpg';
import r3p23 from '../images/r3p23.jpg';

import frisbee1 from '../images/frisbee1.jpg';
import frisbee2 from '../images/frisbee2.jpg';
import frisbee3 from '../images/frisbee3.jpg';

import strings1 from '../images/strings1.jpg';

import './Me.css';
import './Volunteer.css'


class Volunteer extends Component {
  render() {
    return (
      <FadeIn>
        <div>
        <div className="container">
            <div className="header">
                <h1 > involvement </h1>
                <p id="title"> some groups i've helped with</p>
            </div>
            <hr />

            <div class="row">
              <div class="column">
                <figure>
                  <Image src={r3p21} />
                  <figcaption> Robotics Team </figcaption>
                </figure> 
                <Image id="subimg" src={r3p22} />
                <Image id="subimg" src={r3p23} />
              </div>
              <div class="column">
                <figure>
                  <Image src={navexperience} />
                    <figcaption> Student Council </figcaption>
                </figure>
                <Image id="subimg" src={tools} />
                <Image id="subimg" src={KizukiLogo} />
              </div>
              <div class="column">
                <figure> 
                  <Image src={strings1} />
                  <figcaption> Strings Executives </figcaption>
                </figure>
                <Image id="subimg" src={navexperience} />
                <Image id="subimg" src={tools} />
              </div>
              <div class="column">
                <figure> 
                  <Image src={frisbee1} />
                  <figcaption> Raiders Ultimate Team </figcaption>
                </figure>
                <Image id="subimg" src={frisbee2} />
                <Image id="subimg" src={frisbee3} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Volunteer;