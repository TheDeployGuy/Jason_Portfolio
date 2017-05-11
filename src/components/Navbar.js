import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    let menuItems;
    // For each project we map though each element and create a ProjectItem component
    if(this.props.navbarItems){
      menuItems = this.props.navbarItems.map(item =>{
        return (
          // onDelete has been set as a property that will call a function with its ID, in this case it uses an inline arrow function to create the onDeleteProps (could easily repalce this with a function)
          <MenuItem key={item} name={item} onMenuClick={this.props.onMenuClick} />
        );
      });
    }  

    return (
        <div className="navbar navbar-inverse navbar-fixed-top opaque-navbar">
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navMain">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navMain">
                <ul className="nav navbar-nav navbar-right">
                {menuItems}
                </ul>
            </div>
            </div>
        </div>
    );
  }
}

function MenuItem(props){
    return (
        <li className={(props.activeTab === props.name) ? "active" : ""}><a onClick={() => props.onMenuClick(props.name)} href={'#'+props.name}>{props.name}</a></li>
    );
}

export default Navbar;
