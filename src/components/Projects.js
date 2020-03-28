// About.js

import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import { Button } from 'react-bootstrap';
import { FaReact, FaHtml5, FaCss3, FaAws, FaJsSquare, FaBootstrap, FaGit , FaGithub} from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Me.css';
import './Projects.css'

class Projects extends Component {
  render() {
    return (
        <FadeIn>
        <div className="container">
            <div className="header">
                <h1 > projects </h1>
                <p id="title"> some things i've made</p>
            </div>
            <hr />
            
            <div className="card" id="card1">
              <div className="parentcell">
                  <div className="cell1">
                    <p className="projectname">  
                      KizukiQ Check-In 
                    </p>
                    <p className="projecttype">
                      Front-end Web Development </p>
                    <p className="projecticons">
                      <FaHtml5 /> <FaCss3 /> <FaJsSquare /> <FaBootstrap /> <FaReact /> <FaGit />  <FaAws /> 
                    </p>
                    <br />
                    <p className="projectdescription">
                      Remote check in queueing solution for Kizuki Ramen & Izakaya. 
                      Created in collaboration with seattle based start-up Cakewalk.
                      Version controlled with Git, implemented with React in TypeScript, 
                      using Bootstrap and AWS Amplify libraries, integrated with AWS services such as Cognito, 
                      AppSync and DynamoDB.
                    </p>
                  </div>
                  <div className="cell2" id="project1">
                    {/* Image for project */}
                  </div>

              </div>
              <form method="get" target="_blank" action="https://cakewalkapp.com/">
                      <Button variant="outline-secondary" type="submit"> View it</Button>
              </form>
            </div>

            <div className="card">
              <div className="parentcell">
                  <div className="cell1">
                    <p className="projectname">  
                      Personal Website
                    </p>
                    <p className="projecttype">Front-end Web Development </p>
                    <p className="projecticons">
                      <FaHtml5 /> <FaCss3 /> <FaJsSquare /> <FaReact /> <FaBootstrap / >
                    </p>
                    <br />
                    <p className="projectdescription">
                      Modern, responsive and clean. This personal website was created
                      to showcase my projects and experience. Written with React and Bootstrap
                    </p>
                  </div>
                  <div className="cell2" id="project2">
                    {/* Image for project */}
                  </div>
              </div>
              <form method="get" target="_blank" action="https://www.google.ca/">
                      <Button variant="outline-secondary" type="submit">View source <FaGithub /></Button>
              </form>
            </div>

            <div className="card" id="weatherbox">
              <div className="parentcell">
                  <div className="cell1">
                    <p className="projectname">  
                      Weather Application
                    </p>
                    <p className="projecttype">Front-end Web Development </p>
                    <p className="projecticons">
                      <FaHtml5 /> <FaCss3 /> <FaJsSquare /> <FaReact /> 
                    </p>
                    <br />
                    <p className="projectdescription">
                      The start of my personal projects. This weather website was created
                      to familiarize myself with React components and API calls (OpenWeatherAPI)
                    </p>

                  </div>
                  <div className="cell2" id="project3">
                    {/* Image for project */}
                  </div>
              </div>
              <form method="get" target="_blank" action="https://github.com/KinglyYee/weatherapp">
                      <Button variant="outline-secondary" type="submit">View source <FaGithub /></Button>
              </form>
            </div>


        </div>
        </FadeIn>
    );
  }
}

export default Projects;