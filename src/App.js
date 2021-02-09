import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login.jsx'
import { connect } from 'react-redux';
import {initialazeApp} from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {
    componentDidMount = () => {
        this.props.initialazeApp()
    }
    render() {
        const dialogs = () => <DialogsContainer />
        const messages = () => <ProfileContainer />
        const usersContainer = () => <UsersContainer/>
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={dialogs}/> 
                        <Route path='/profile/:userId?' render={messages}/>
                        <Route path='/news'/>
                        <Route path='/music'/>
                        <Route path='/settings'/>
                        <Route path='/users' render={usersContainer}/>
                        <Route path='/login' render={ () => <Login/>}/>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter, connect(mapStateToProps, {initialazeApp}))(App);