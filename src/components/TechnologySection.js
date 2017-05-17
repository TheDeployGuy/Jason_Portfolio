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
            </div>
        </section>
   )
  }
}

export default TechnologySection;
