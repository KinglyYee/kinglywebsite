import React, { Component } from 'react';
import {Button, Collapse} from 'react-bootstrap'
import FadeIn from 'react-fade-in';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './Example';
import './Card.css';



class Card extends Component {
  state={
    open:false
  }
  render() {
    return (
        <FadeIn>
        <div className="card" style={{background: "{imagepath}" }}>
          {/* <div className="parentcell">
            <div className="cell1">hi</div>
            <div className="cell2">there</div>            
          </div> */}
          <Example title="title" children="hello there" />
            {/* <p className="projectname"> {this.props.projectname} </p> */}
          {/* <Button className="btn" onClick={!this.state.open}> Click me </Button> */}
{/* 
          <Collapse in={this.state.open}>
            <div class="content">
              <p> content </p>
            </div>                  
          </Collapse>   */}

      
        </div>
        </FadeIn>
    );
  }
}

export default Card;