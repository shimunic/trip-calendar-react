import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { userLogout } from '../../redux/actions/userActions/actions';
import { connect } from 'react-redux';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user, userLogout } = this.props;
    return (
      <Navbar className="yellow accent-3" brand={<div>NomadApp</div>} alignLinks="left" centerLogo={true}>
        {user && (
          <NavLink className="link sidenav-close" to={`/user/${user._id}`}>
            {user.firstName} {user.lastName}
          </NavLink>
        )}
        {user && (
          <NavLink className="link sidenav-close" to={`/timeline/${user._id}`}>
            Timeline
          </NavLink>
        )}
        {user && (
          <NavLink className="link sidenav-close" to="/map">
            Map
          </NavLink>
        )}
        {!user && (
          <NavLink className="link sidenav-close" to={`/login/`}>
            Login
          </NavLink>
        )}
        {user && (
          <NavLink to="" className="link sidenav-close" onClick={userLogout}>
            Logout
          </NavLink>
        )}
      </Navbar>
    );
  }
}
function mapStateToProps(store) {
  return {
    user: store.userData.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
