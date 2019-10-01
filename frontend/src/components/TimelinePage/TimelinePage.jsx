import React, { Component } from 'react';
import {connect} from 'react-redux'
import TimelineElement from '../TimelineElement/TimelineElement'
import { NavLink } from 'react-router-dom';
import { Row } from 'react-materialize';
class TimelinePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {timeline, isPageMy}=this.props
        return (
        <div>
            {isPageMy&&<NavLink to={`/addTimeline`}>
              <Row className="timelineButton timeLineCard z-depth-1 grey lighten-5">
                add timeline
                <i className="material-icons">keyboard_arrow_right</i>
              </Row>
            </NavLink>}
            {timeline ? timeline.map((el,index) => <TimelineElement timeline={el} key={index}/>) : null}
        </div>
        )
    }
}
 function mapstateToProps(state,ownProps) {
     return {
       isPageMy: ownProps.match.params.id === state.userData.user._id ? true : false,
       timeline:
         ownProps.match.params.id === state.userData.user._id
           ? state.userData.user.timeline
           : state.friendData.friend.timeline,
     };
 }
 function mapDispatchToProps(dispatch) {
     return {}
 }

export default connect(mapstateToProps,mapDispatchToProps)(TimelinePage);