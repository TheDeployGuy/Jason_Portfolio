import React, { Component } from 'react';

class ContactSection extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      contactPayload: {},
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      contactPayload: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,

      },
    }, () => {
      this.props.sendContactQuery(this.state.contactPayload);
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
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
                  <div className="col-md-offset-1 col-xs-2 col-sm-2 col-md-2">
                    <a className="btn btn-default btn-lg" href="mailto:jaslloyd57@gmail.com" id="linkedinButton"><i className="fa fa-envelope fa-2x" /></a>
                  </div>
                  <div className="col-xs-4 col-sm-4 ol-md-4 text-left">
                    <h3>jaslloyd@gmail.com</h3>
                  </div>
                </div>
                <div className="row contactButtonPadding">
                  <div className="col-md-offset-1 col-xs-2 col-sm-2 col-md-2">
                    <a className="btn btn-default btn-lg" href="https://www.linkedin.com/in/jason-lloyd/" id="linkedinButton"><i className="fa fa-linkedin fa-2x" /></a>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 text-left">
                    <h3>Jason-Lloyd</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <form className="form-horizontal" onSubmit={e => this.handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-2">Name:</label>
                    <div className="col-sm-10">
                      <input type="name" name="name" className="form-control" id="name" onChange={e => this.handleChange(e)} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="col-sm-2">Email:</label>
                    <div className="col-sm-10">
                      <input type="email" name="email" className="form-control" id="email" onChange={e => this.handleChange(e)} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="col-sm-2">Message:</label>
                    <div className="col-sm-10">
                      <textarea rows="5" name="message" className="form-control" id="message" onChange={e => this.handleChange(e)} required />
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
}

export default ContactSection;
