import React, { Component } from 'react';

class TechnologySection extends Component {
  render() {
    return (
        <section>
            <div className="header-content" id="TECHNOLOGY">
                <h1>Technologies I work with</h1>
                <hr/>
                <div className="container">
                  {/*I could make the projects clickable and they would show the projects I done in that language...*/}
                  {/*MongoDB*/}
                  {/*ExpressJS*/}
                  {/*Angular 2*/}
                  {/*NodeJS*/}
                  {/*React*/}
                  {/*Python*/}
                  {/*Bash*/}
                </div>
                <div id="moveForward">
                    <p><small>What I build with these</small></p>
                    <a href="#PROJECTS"><i id="downArrow2" className="fa fa-chevron-circle-down fa-3x" aria-hidden="true"></i></a>
                </div>
            </div>
        </section>
   )
  }
}

export default TechnologySection;
