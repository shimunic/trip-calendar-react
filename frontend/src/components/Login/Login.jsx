import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './style.css'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
<div className="container">
            
            <Row className="valign-wrapper center-align">
            <Col s={1} >
              <a href="/api/login">
                <img width="100px" src="/src/login.png" alt />
                <p class="text-info" style={{fontSize:'x-large'}}>
                  Login with google
                </p>
              </a>
            </Col>
          </Row>
</div>
    );
  }
}

export default Login;
