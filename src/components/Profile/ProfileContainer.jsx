import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile, getStatusProfile, updateStatus} from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }

        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

//let WithRouterProfileContainer = withRouter(AuthRedirectComponent);



//export default connect(mapStateToProps, {getUserProfile})(WithRouterProfileContainer)

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatus }),
    withRouter,withAuthRedirect)
    (ProfileContainer)