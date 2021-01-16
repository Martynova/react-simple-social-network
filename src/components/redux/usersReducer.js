const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ='SET_USERS';

let initialState = {
    users: [
        // {id: 1, photos:{small:'https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg'}, followed: true, fullName: 'Tom',status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photos:{small: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c52d.png'}, followed: false, fullName: 'Make',status: 'I am boss', location: {city: 'Varshava', country: 'Poland'}},
        // {id: 3, photos:{small: 'https://image.shutterstock.com/image-vector/earth-icon-trendy-logo-concept-260nw-1255581898.jpg'}, followed: true, fullName: 'Nik',status: 'I am boss', location: {city: 'Madrid', country: 'Spain'}},
    ],
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
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})