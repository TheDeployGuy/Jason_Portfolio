import React, { Component } from 'react';

class ContactSection extends Component {
  render() {
    return (
      <section>
        <div className="" id="CONTACT">
          <div className="container text-center">
            <h1>Reaching out</h1>
            <hr className="headerHR" />
            <div className="row">
              <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/026/0f8/2a60dd4.jpg" className="roundImage img-circle" />
            </div>
            <div className="row">
              <div className="col-md-offset-4 col-md-1">
                <a className="btn btn-default btn-lg" href="mailto:jaslloyd57@gmail.com" id="linkedinButton"><i className="fa fa-envelope fa-2x" /></a>
                {/* https://bootsnipp.com/snippets/featured/quick-contact*/}
              </div>
              <div className="col-md-4 text-left">
                <h2>jaslloyd@gmail.com</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-4 col-md-1">
                <a className="btn btn-default btn-lg" href="https://www.linkedin.com/in/jason-lloyd/" id="linkedinButton"><i className="fa fa-linkedin fa-2x" /></a>
              </div>
              <div className="col-md-4 text-left">
                <h2>Jason-Lloyd</h2>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container text-right">
            Designed & Developed by Jason Lloyd
          </div>
          </footer>
        </div>
      </section>
    );
  }
}

export default ContactSection;
