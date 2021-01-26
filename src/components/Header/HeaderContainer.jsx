import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthUserData} from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        
        this.props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);