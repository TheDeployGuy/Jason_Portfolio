import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar navbar-inverse navbar-fixed-top opaque-navbar">
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navMain">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navMain">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#experience">EXPERIENCE</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
            </div>
        </div>
    );
  }
}

export default Navbar;
