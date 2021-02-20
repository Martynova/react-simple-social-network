import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator/Paginator';
import s from './Users.module.css';


let  Users = (props) => {
    return (
        <div>
            <Paginator {...props}/>
            {
            props.users.map(user => <div className={s.wraperUser} key={user.id}>
                <div className={s.wraperPhoto}>
                    <NavLink to={'/profile/'+user.id}>
                        <img className={s.userPhoto} src={user.photos.small}/>
                    </NavLink>
                    {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>follow</button> : <button onClick={() => {props.follow(user.id)}}>unfollow</button>}
                
                </div>
            <div className={s.wraperInfo}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                
            </div>
            )
            }
        </div>
    )
}

export default Users

