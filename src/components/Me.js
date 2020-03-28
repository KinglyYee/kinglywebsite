// Me.js

import React, { Component } from 'react';
import FadeIn from 'react-fade-in';


import pdf from '../assets/Resume-Kingly_Yee.pdf';
import Image from 'react-bootstrap/Image';
import photo from '../images/profile.jpg';
import './Me.css'

class Me extends Component {
  render() {
    return (
        <FadeIn>
        <div className="container">
            <div className="header">
                <h1 > kingly yee </h1>
                <p id="title"> some things about me</p>
            </div>
            <hr />
            <div className="wholething" style={{borderRadius: "10px 10px 0px 0px"}}>
            <div className="taskbar" style={{border: "1px solid gray", backgroundColor: "F3F3F3", height:"30px", borderRadius:"10px 10px 0px 0px", padding: "3px 3px 3px 3px"}}>
               <span class="dot" id="red" /> <span class="dot" id="yellow" /> <span class="dot" id="green" />
            </div>
            <div className="texteditor"style={{color: "white", padding: "10px", backgroundColor: "#7A7A7A"}}>
                
                <div className="photo"> 
                    <Image className="indphoto" src={photo} style={{float: "right", width: "30%", height: "20%"}}rounded/>
                </div>

                {/* <div style={{backgroundColor: "white"}}> */}
                {/* <div className="texteditor" style={{textAlign: "right", color: "white", border: "1px solid black", height: "50vmin", padding: "10px", backgroundColor: "#5a5d7a"}}>  */}
                <p className = "code" style={{fontFamily: "Century Gothic"}}>  
                &#62; Kingly.getAboutMe()
                <br/>
                <p className="output">"Always up for a challenge, ready to learn new things. I enjoy working on front-end
                    development projects with a keen eye for UI/UX but is open to new projects."</p>
                <br /> <br />
                &#62; Kingly.getLocation()
                <br />
                <p className="output">"Toronto, Ontario"</p>
                <br /> <br />
                
                &#62; Kingly.getResume()
                <br />
                <p className="output">
                "<a href={pdf} target="_blank" style={{color:"lightblue"}}>KinglyResume.pdf</a>"
                </p>
                <br /> <br />
                &#62; Kingly.getContactInfo()
                <br />
                <p className="output">
                  [
                  "<a href="https://www.linkedin.com/in/kingly-yee/" target="_blank" style={{color: "lightblue"}}> LinkedIn </a>", 
                  "<a href="mailto:kingly.yee@ryerson.ca" rel="noopener noreferrer" style={{color: "lightblue"}}>Kingly.yee@ryerson.ca</a>",
                  "<a href="https://github.com/KinglyYee" target="_blank" style={{color: "lightblue"}}> GitHub </a>",
                  ]
                </p>
                <br /> <br />
                &#62; Kingly.getEducation()
                <br />
                <p className="output">"B.Sc. Computer Science (Co-op) - Ryerson University"</p>
                <br /> <br />
                &#62; Kingly.getSkills()
                <p className="output">["Java", "Python", "HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "C", "C#"] </p>
                </p>

              </div>
                {/* </div> */}
                
              {/* </div> */}

                {/* <p className="body"> Hey there, pleasure to meet you! Come learn more about me 
                     <br /> <br />
                    📌 Location: Toronto, Ontario  
                    <br />
                    🎓 Education: Computer Science (Co-op), Ryerson University 
                    <br />
                    🕹️ Interests: Eating, Exercise, Ultimate Frisbee, Dance, Website Development
                    <br />
                    💻 Skills: Java, Python, HTML, CSS, JavaScript, ReactJS, Bootstrap, C, C#
                    <br /> <br />
                    Always up for a challenge, ready to learn new things. I enjoy working on front-end
                    development projects with a keen eye for UI/UX but is open to new projects. 
                    <br /> <br />
                    Most of the time, you will most likely find me stuffing myself with food or at the gym...
                    Currently looking for an opportunity to work this upcoming summer of 2020 as an intern. 
                    Please do not hesitate to contact me through LinkedIn or send an email!   
                </p> */}
            </div>
        </div>
        </FadeIn>
    );  
  }
}

export default Me;