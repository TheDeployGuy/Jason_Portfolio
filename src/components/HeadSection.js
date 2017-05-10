import React, { Component } from 'react';

class HeadSection extends Component {
  render() {
    return (
        <header id="home">
            <div className="header-content">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <h1>My Portfolio</h1>
                        <hr />
                        <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/026/0f8/2a60dd4.jpg" className="circularImage" />
                        <p>My name is Jason Lloyd, I have been working fulltime at IBM for 3 years as a DevOps specialist. I love learning in my spare time and using new technologies. Here you will find a selection of my portfolio so you can see my work and
                            what I have done over the last few years</p>
                        <a className="btn btn-primary btn-x1 page-scroll" href="#facebook">Facebook</a>
                        <a className="btn btn-primary btn-x1 page-scroll" href="#linkedin">LinkedIn</a>
                        <a className="btn btn-primary btn-x1 page-scroll" href="#linkedin">Website</a>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default HeadSection;
