import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {
    const dialogs = () => <DialogsContainer />
    const messages = () => <Profile />
    const usersContainer = () => <UsersContainer/>
    return (
        <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={dialogs}/> 
                    <Route path='/profile' render={messages}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                    <Route path='/users' render={usersContainer}/>
                </div>
        </div>
    )
}

export default App;