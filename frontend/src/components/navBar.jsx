import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user = 'Okunev Alexey';
    return (
      <Navbar className="yellow accent-3" brand={<div>NomadApp</div>} alignLinks="left" centerLogo={true}>
        <NavLink to={`/timeline${user}`}>Timeline</NavLink>
        <NavLink to="/map">Map</NavLink>
        <NavLink to={`/api/${user}`}>UserPage</NavLink>
      </Navbar>
    );
  }
}

export default NavBar;
