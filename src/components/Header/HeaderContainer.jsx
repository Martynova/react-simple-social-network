import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../redux/authReducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, { withCredentials: true }).then(res => {
                    if (res.data.resultCode === 0) {
                        let {id: userId, email, login} = res.data.data;
                        this.props.setAuthUserData(userId, email, login)
                    }
                })
    }
    
    render () {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);