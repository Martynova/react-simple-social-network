import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

    getUsers = () => {
        if(this.props.users.length === 0) {
                axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                    console.log(res)
                    this.props.setUsers(res.data.items)
                })
        }
    }

    render() {
        return (
            <div>
                {
                this.props.users.map(user => <div className={s.wraperUser} key={user.id}>
                    <div className={s.wraperPhoto}>
                        <img className={s.userPhoto} src={user.photos.small}/>
                        {user.followed ? <button onClick={() => {this.props.unfollow(user.id)}}>follow</button> : <button onClick={() => {this.props.follow(user.id)}}>unfollow</button>}
                    
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

}

export default Users