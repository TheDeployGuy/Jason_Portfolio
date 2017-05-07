import React, { Component } from 'react';

class ContactSection extends Component {
  render() {
    return (
    <section>
      <div className="header-content" id="contact">
            <h1>Contact me</h1>
            <hr/>
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <form className="form-horizontal" role="form" method="post" action="index.php">
	                    <div className="form-group">
		                    <label htmlFor="name" className="col-sm-2 control-label">Name</label>
		                    <div className="col-sm-10">
			                    <input type="text" className="form-control" id="name" name="name" placeholder="First & Last Name" value="" />
		                    </div>
	                    </div>
	                    <div className="form-group">
		                    <label htmlFor="email" className="col-sm-2 control-label">Email</label>
		                    <div className="col-sm-10">
			                    <input type="email" className="form-control" id="email" name="email" placeholder="example@domain.com" value="" />
		                    </div>
	                    </div>
	                    <div className="form-group">
		                    <label htmlFor="message" className="col-sm-2 control-label">Message</label>
		                    <div className="col-sm-10">
			                    <textarea className="form-control" rows="4" name="message"></textarea>
		                    </div>
	                    </div>
	                    <div className="form-group">
		                    <div className="col-sm-offset-10 col-md-2">
			                    <input id="submit" name="submit" type="submit" value="Send" className="btn btn-primary" />
		                    </div>
	                    </div>
	                    <div className="form-group">
		                    <div className="col-sm-10 col-sm-offset-2">
			                    
		                    </div>
	                    </div>
                    </form>
                </div>
            </div>
     </div>
   </section>
    );
  }
}

export default ContactSection;
