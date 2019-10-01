import React, { Component } from 'react';
import {connect} from 'react-redux'
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { getFriendData, getFriendTimeLine } from '../../redux/actions/friendActions/actions';
import './style.css'
class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    goToUserPage= async () => {
    await Promise.all([
      this.props.getFriendData(this.props.user._id),
      this.props.getFriendTimeLine(this.props.user._id)
    ])
    this.props.history.push(`/user/${this.props.user._id}`)
    }
    render() { 
        const {user} =this.props
        return <img onClick={this.goToUserPage}className="useravatarSmall" src={user.photo} alt={user.fullName} title={user.fullName} />;
    }
}
 
function mapStateToProps(store) {
  return {};
}

function mapDispatchToProps(dispatch,ownProps) {
  return {
    getFriendData: userId => dispatch(getFriendData(userId)),
    getFriendTimeLine: userId => dispatch(getFriendTimeLine(userId)),
  };
}

export default compose(withRouter,connect(
  mapStateToProps,
  mapDispatchToProps,
))(UserAvatar);