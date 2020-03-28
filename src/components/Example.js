// Collapsible.js
import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Collapsible extends React.Component {
    constructor(props){

    super(props);
    this.state = {
        open: false
    }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }
    render() {
    return (
    <div style = {{position: "absolute", bottom: '0', width: '100%'}}>
    <div onClick={(e)=>this.togglePanel(e)} className='header' style ={{
cursor: "pointer",
border: "solid 1px #f2f2f2",
padding: "15px",
backgroundColor: "#0089CC",
color: "#FFF",
fontFamily: "Muli sans-serif",
}}>
        {this.props.title}
    </div>
    {this.state.open ? (<div className='content' style={{
        cursor: 'pointer',
        borderLeft: 'solid 1px #f2f2f2',
        borderRight: 'solid 1px #f2f2f2',
        borderBottom: 'solid 1px #f2f2f2',
        // borderRadius: '0 0 5px 5px',
        padding: '15px',
        fontFamily: "Muli sans-serif",
        fontSize: '40px',
    }}>
    {this.props.children}
    </div>) : null}
    </div>);
    }
}
export default Collapsible;