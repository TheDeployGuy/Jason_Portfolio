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
                    <li className={(this.props.activeTab === "home") ? "active" : ""}><a href="#home">HOME</a></li>
                    <li className={(this.props.activeTab === "experiences") ? "active" : ""}><a onClick={() => this.props.onMenuClick("experiences")} href="#experience">EXPERIENCES</a></li>
                    <li className={(this.props.activeTab === "projects") ? "active" : ""}><a onClick={() => this.props.onMenuClick("projects")} href="#projects">PROJECTS</a></li>
                    <li className={(this.props.activeTab === "contact") ? "active" : ""}><a onClick={() => this.props.onMenuClick("contact")} href="#contact">CONTACT</a></li>
                </ul>
            </div>
            </div>
        </div>
    );
  }
}

export default Navbar;
