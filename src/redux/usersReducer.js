import {usersApi} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ='SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users: [
        // {id: 1, photos:{small:'https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg'}, followed: true, fullName: 'Tom',status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photos:{small: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c52d.png'}, followed: false, fullName: 'Make',status: 'I am boss', location: {city: 'Varshava', country: 'Poland'}},
        // {id: 3, photos:{small: 'https://image.shutterstock.com/image-vector/earth-icon-trendy-logo-concept-260nw-1255581898.jpg'}, followed: true, fullName: 'Nik',status: 'I am boss', location: {city: 'Madrid', country: 'Spain'}},
    ],
    pageSize: 10,
    totalUsersCount: 57,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })],
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })],
            }
        case SET_USERS: {
            return {...state,
                    users: [...state.users, ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default:
            return state;
    }
}

export default usersReducer;

export const follow = (userId) => ({type: FOLLOW, userId})

export const unfollow = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersApi.getUsers(currentPage).then(res => {
            dispatch(setUsers(res.items));
            //this.props.setTotalUsersCount(res.data.totalCount);
            dispatch(setIsFetching(false));
        })
    }
}