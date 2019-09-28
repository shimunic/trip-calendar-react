import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import Login from './components/Login/Login'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserLogin } from './redux/actions/userActions/actions.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.isUserLogin()
  }
  render() {
    return (
      <div id="app" className="vh-100">
        <NavBar />
        <Route name="api" path="/map" component={Map}></Route>
        <Route name="login" path="/login" component={Login}></Route>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    isUserLogin: ()=> dispatch(isUserLogin()),
  };
}

export default connect(null, mapDispatchToProps)(App)


