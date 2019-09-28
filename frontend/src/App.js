import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navBar.jsx';
import Map from './components/map.jsx';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserLogin } from './redux/actions/actions.js';
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    isUserLogin: ()=> dispatch(isUserLogin()),
    // Никита - База данных
    // setData: (data) => dispatch( dataAC(data) )
  };
}

export default connect(null, mapDispatchToProps)(App)


