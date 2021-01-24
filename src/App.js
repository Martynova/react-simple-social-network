import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
    const dialogs = () => <DialogsContainer />
    const messages = () => <ProfileContainer />
    const usersContainer = () => <UsersContainer/>
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
                </div>
        </div>
    )
}

export default App;