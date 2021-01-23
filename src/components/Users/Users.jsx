import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';


let  Users = (props) => {
    let countPages = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];
    for(let i=1; i<=countPages; i++){
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return <span onClick={() => props.setCurrentPage(p)} className={props.currentPage === p ? s.activePage : s.page} key={p}>{p}</span>
            })}
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

