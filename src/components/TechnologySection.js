import React, { Component } from 'react';

class TechnologySection extends Component {
  render() {
    return (
        <section>
            <div className="header-content" id="TECHNOLOGY">
                <h1>My Expertise</h1>
                <hr/>
                  <div className="row">
                      <div className="col-md-4">
                        <img alt="mean_stack" src="img/mean.png" className="techImage" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dictum sem, quis consequat enim. Ut quis nulla tempor, gravida neque in, pharetra mi.</p>
                      </div>
                      <div className="col-md-4">
                        <img alt="reactjs" src="img/reactjs.png" className="techImage" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam libero, accumsan ac nisl at, lacinia pulvinar enim. Praesent viverra, massa vel euismod tristique.</p>
                      </div>
                      <div className="col-md-4">
                        <img alt="python" src="img/python.png" className="techImage" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet placerat nisi id egestas. Nunc sed arcu ut massa vestibulum maximus faucibus id est.</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">

                      </div>
                  </div>
                </div>
                <div className="container text-center">
                    <div id="moveForward ">
                        <p><small>Projects built with these</small></p>
                        <a href="#PROJECTS"><i id="downArrow2" className="fa fa-chevron-circle-down fa-3x" aria-hidden="true"></i></a>
                    </div>
                </div>
        </section>
   )
  }
}

export default TechnologySection;
