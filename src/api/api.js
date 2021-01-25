import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '89ab60a6-bfbc-4a17-a450-c04329b93b48'
    }

})


export const usersApi = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`).then(res => res.data)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }

}

export const authApi = {
    getAuthUser() {
        return instance.get('/auth/me')
    }
}