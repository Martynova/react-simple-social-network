import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, getUsers } from '../../redux/usersReducer';
import {getUsersItems} from '../../redux/userSelectors.js'
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader'; 


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage);
        }
    }

    render() {
        return (
            <div>
            {this.props.isFetching && <Preloader/>}
            
            <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalItemsCount={this.props.totalItemsCount}
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
        users: getUsersItems(state),
        pageSize: state.usersPage.pageSize,
        totalItemsCount: state.usersPage.totalItemsCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer);
