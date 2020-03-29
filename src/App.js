import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
// import logo from './logo.svg';

import Home from './components/Home'; 
import Me from './components/Me';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Volunteer from './components/Volunteer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <FadeIn>
      <div className="App">
        <div>
          <header className="App-header">
          <meta charset = "UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=1" />
            <Router>
                <Navbar style = {{width: "100%", padding: "5px", marginBottom: "20px"}} bg="transparent" className="navbar navbar-expand-lg navbar-light bg-light"> 
                <Navbar.Brand className="mr-auto"> <Link to={'/'} className="nav-link" style={{color: "black"}}> home </Link> </Navbar.Brand>
                <ul className="navbar-nav ml-auto"> 
                    <li> <Link to={'/'} className = "nav-link"> home </Link> </li>
                    <li style={{fontWeight:"bold"}}> <Link to={'/Me'} className="nav-link"> kingly. </Link> </li>
                    <li> <Link to={'/Projects'} className="nav-link"> projects </Link> </li>
                    <li> <Link to={'/Experience'} className="nav-link"> experience </Link> </li>
                    <li> <Link to={'/Volunteer'} className="nav-link"> involvement </Link> </li>
                </ul>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/me' component={Me} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/volunteer' component={Volunteer} />
                    <Route path = '/'> </Route>
                </Switch>
            </Router>
          </header>
        </div>
      </div>
      </FadeIn>
    );
    }
}

export default App;
