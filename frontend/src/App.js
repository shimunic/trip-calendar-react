import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import Login from './components/Login/Login';
import UserPage from './components/UserPage/UserPage';
import TimelinePage from './components/TimelinePage/TimelinePage';
import AddTimelinePage from './components/AddTimeLinePage/AddTimeLinePage';
import { AnimatedSwitch } from 'react-router-transition';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserLogin } from './redux/actions/userActions/actions.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.isUserLogin();
  }
  render() {
    return (
      <div id="app" className="vh-100">
        <NavBar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route name="api" path="/map" component={Map}></Route>
          <Route name="login" path="/login" component={Login}></Route>
          <Route name="userPage" path="/user/:id" component={UserPage}></Route>
          <Route name="timeline" path="/timeline/:id" component={TimelinePage}></Route>
          <Route name="addTimeline" path="/addTimeline/" component={AddTimelinePage}></Route>
        </AnimatedSwitch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    isUserLogin: () => dispatch(isUserLogin()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
