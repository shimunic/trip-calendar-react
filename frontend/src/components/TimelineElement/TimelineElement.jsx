import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './style.css'
class TimelineElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Row className="timeLineCard z-depth-3 grey lighten-5">
            <Col s={6} className="valign-wrapper">
          <img
            src="https://lh3.googleusercontent.com/-Rmudoi3nTsk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcrkDBwvcPUe7TvuEbo-onkb0SjQw/photo.jpg"
            style={{ height: '75px' }}
            alt=""
          />
        </Col>
        <Col className="right-align">
          <p>Barcelona</p>
          <p>From: 25 To: 36</p>
          <p>Also there:</p>
        </Col>
      </Row>
    );
  }
}

export default TimelineElement;
