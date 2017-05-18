import React, { Component } from 'react';

class TechnologySection extends Component {
  render() {
    return (
        <section>
            <div className="header-content" id="TECHNOLOGY">
                <h1>Technologies I work with</h1>
                <hr/>
                  <div className="row">
                      <div className="col-md-4">
                            <img alt="mean_stack" src="img/mean.png" className="techImage" />
                            
                            {/*<img alt="expressjs" src="img/expressjs.png" className="techImage" />
                            <img alt="angular_2" src="img/angular_2.jpg" className="techImage" />
                            <img alt="nodejs" src="img/nodejs_2.png" className="techImage" />*/}
                      </div>
                      <div className="col-md-4">
                            <img alt="reactjs" src="img/reactjs.png" className="techImage" />
                      </div>
                      <div className="col-md-4">
                        <img alt="python" src="img/python.png" className="techImage" />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                        {/*Python*/}
                        
                        {/*Bash*/}
                      </div>
                  </div>
                </div>
                <div className="container text-center">
                    <div id="moveForward ">
                        <p><small>What I build with these</small></p>
                        <a href="#PROJECTS"><i id="downArrow2" className="fa fa-chevron-circle-down fa-3x" aria-hidden="true"></i></a>
                    </div>
                </div>
        </section>
   )
  }
}

export default TechnologySection;
