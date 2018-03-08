import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactSection extends Component {
  state = {
      name: '',
      email: '',
      message: '',
  };

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

  renderModal() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">Contact me</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                  <input type="name" name="name" className="form-control" id="name" onChange={e => this.handleChange(e)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Email:</label>
                  <input type="email" name="email" className="form-control" id="email" onChange={e => this.handleChange(e)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Message:</label>
                  <textarea rows="5" name="message" className="form-control" id="message" onChange={e => this.handleChange(e)} required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="contact">
        {this.renderModal()}
      </section>
    );
  }
}

export default ContactSection;

ContactSection.propTypes = {
  sendContactQuery: PropTypes.func.isRequired,
};
