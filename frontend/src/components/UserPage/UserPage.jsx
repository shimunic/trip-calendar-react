import React, { Component } from 'react';
import { Row, Col, TextInput } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import TimelineElement from '../TimelineElement/TimelineElement';
import { connect } from 'react-redux';
import './style.css';
import { userDataUpdate } from '../../redux/actions/userActions/actions';
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: this.props.user.company,
      website: this.props.user.website,
    };
  }
  inputChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  updateFields = e => {
    const { user, updateUser } = this.props;
    const { company, website } = this.state;
    e.preventDefault();
    updateUser(user._id, { company, website });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ company: this.props.user.company, website: this.props.user.website });
    } else {
      return null;
    }
  }

  render() {
    const { user, isPageMy } = this.props;
    return (
      <div>
        <Row className="center-align" style={{ marginTop: '20px' }}>
          <Col>
            <img src={user.photo} className="avatar" alt="" />
          </Col>
        </Row>
        <Row className="mb5">
          <TextInput disabled={true} label={'Name'} value={`${user.firstName} ${user.lastName}`} />
        </Row>
        <Row className="mb5">
          <TextInput className="mb5" disabled={true} label={'Email'} value={`${user.email}`} />
        </Row>
        <Row className="mb5">
          <form className="fullWidth" onSubmit={this.updateFields}>
            <TextInput
              className="mb5"
              name="company"
              onChange={this.inputChanged}
              disabled={!isPageMy}
              label={'Company'}
              value={this.state.company || ''}
            />
          </form>
        </Row>
        <Row className="mb5">
          <form className="fullWidth" onSubmit={this.updateFields}>
            <TextInput
              name="website"
              onChange={this.inputChanged}
              disabled={!isPageMy}
              label={'Website'}
              value={this.state.website || ''}
            />
          </form>
        </Row>

        <NavLink to={`/timeline/${this.props.user._id}`}>
          <Row className="timelineButton timeLineCard z-depth-1 grey lighten-5">
            Timeline
            <i className="material-icons">keyboard_arrow_right</i>
          </Row>
        </NavLink>

        <p style={{ padding: '10px' }}>Nearest:</p>
        <TimelineElement timeline={user.timeline && user.timeline[0]} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: ownProps.match.params.id === state.userData.user._id ? state.userData.user : state.friendData.friend,
    isPageMy: ownProps.match.params.id === state.userData.user._id ? true : false,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateUser: (userId, data) => dispatch(userDataUpdate(userId, data)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);
