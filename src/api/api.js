import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6828ec6a-ad37-4404-a612-2ea2b10d5863"
    }
});

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const profileAPI = {
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}