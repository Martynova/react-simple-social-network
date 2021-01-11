import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
    const dialogs = () => <DialogsContainer />
    const messages = () => <Profile />
    return (
        <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={dialogs}/> {/*/dialogs/spam/blabla*/}
                    <Route path='/profile' render={messages}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
        </div>
    )
}

export default App;