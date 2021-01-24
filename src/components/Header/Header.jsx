import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
        {props.isAuth ? props.login
         : <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />}
        </header>
    )
}

export default Header;