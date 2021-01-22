import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Common/Preloader/Preloader'; 

class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        this.props.setIsFetching(true);
        if(this.props.users.length === 0) {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then(res => {
                    this.props.setUsers(res.data.items);
                    //this.props.setTotalUsersCount(res.data.totalCount);
                    this.props.setIsFetching(false);
                })
        }
    }

    render() {
        return (
            <div>
            {this.props.isFetching && <Preloader/>}
            
            <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setCurrentPage={this.props.setCurrentPage}
            />
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
