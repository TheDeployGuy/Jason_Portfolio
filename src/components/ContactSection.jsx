import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactSection extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const contactPayload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    this.props.sendContactQuery(contactPayload);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <section>
        <div className="container">
          <h1 className="text-center">Contact me</h1>
          <hr className="hr--orange" />
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-2">Name:</label>
                  <div className="col-sm-10">
                    <input type="name" name="name" className="form-control" id="name" onChange={e => this.handleChange(e)} required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-2">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" name="email" className="form-control" id="email" onChange={e => this.handleChange(e)} required />
                  </div>
                </div>
                <div className="form-group row">
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
            <h4>Designed & Developed by Jason Lloyd</h4>
          </div>
        </footer>
      </section>
    );
  }
}

export default ContactSection;

ContactSection.propTypes = {
  sendContactQuery: PropTypes.func.isRequired,
};
