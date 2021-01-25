import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUsersProfile} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileApi } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        
        profileApi.getProfile(userId).then(res => {
                    this.props.setUsersProfile(res.data)
                    //this.props.setIsFetching(false);
                })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithRouterProfileContainer)