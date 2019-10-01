import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Row, Col } from 'react-materialize';
import UserAvatar from '../Useravatar/UserAvatar'
import './style.css'
class TimelineElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {timeline} =this.props
    return (
      <Row className="timeLineCard z-depth-3 grey lighten-5">
        <Col s={6} className="valign-wrapper">
          <img className="cityImage" src={timeline && timeline.src} alt="" />
        </Col>
        <Col className="right-align">
          <p>{timeline && timeline.place}</p>
          <p>
            {timeline && timeline.dateStartStr}-{timeline && timeline.dateEndStr}
          </p>
          <p>{timeline && timeline.alsoThere.map((el, index) => <UserAvatar user={el} key={index} />)}</p>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(store) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelineElement);


