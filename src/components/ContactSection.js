import React from 'react';

function ContactSection() {
  return (
    <section>
      <div className="" id="CONTACT">
        <div className="container">
          <h1 className="text-center">Reaching out</h1>
          <hr className="headerHR" />
          <div className="row contactPadding">
            <div className="col-md-6 text-center">
              <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/026/0f8/2a60dd4.jpg" className="roundImage img-circle" />
              <div className="row">
                <div className="col-md-offset-1 col-md-2">
                  <a className="btn btn-default btn-lg" href="mailto:jaslloyd57@gmail.com" id="linkedinButton"><i className="fa fa-envelope fa-2x" /></a>
                  {/* https://bootsnipp.com/snippets/featured/quick-contact*/}
                </div>
                <div className="col-md-4 text-left">
                  <h3>jaslloyd@gmail.com</h3>
                </div>
              </div>
              <div className="row contactButtonPadding">
                <div className="col-md-offset-1 col-md-2">
                  <a className="btn btn-default btn-lg" href="https://www.linkedin.com/in/jason-lloyd/" id="linkedinButton"><i className="fa fa-linkedin fa-2x" /></a>
                </div>
                <div className="col-md-4 text-left">
                  <h3>Jason-Lloyd</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="form-horizontal">
                <h3>Direct message:</h3>
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-2">Name:</label>
                  <div className="col-sm-10">
                    <input type="name" className="form-control" id="name" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-sm-2">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="col-sm-2">Message:</label>
                  <div className="col-sm-10">
                    <textarea rows="5" className="form-control" id="message" />
                  </div>
                </div>
                <div className="form-group text-right">
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>

              </form>
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

export default ContactSection;
