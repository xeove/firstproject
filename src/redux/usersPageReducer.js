import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETHICNG = 'TOGGLE_IS_FETHICNG';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState =  {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    isFollowing: []
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, usersData: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }

        case TOGGLE_IS_FETHICNG: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSucces = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowSucces = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setUsersTotalCount = (totalUsersCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETHICNG,
        isFetching
    }
}
export const toggleIsFollowing = (isFollowing, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFollowing,
        userId
    }
}

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))

        let data = await usersAPI.requestUsers(currentPage, pageSize);
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
    }
}

const followUnfollow = (userId, apiMethod, succes) =>  {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        let response = await apiMethod;
        if (response.data.resultCode === 0) {
            dispatch(succes);
        }
        dispatch(toggleIsFollowing(false, userId));
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow(userId);
        let succes = dispatch(followSucces(userId));
        followUnfollow(userId, apiMethod, succes);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow(userId);
        let succes = dispatch(unfollowSucces(userId));
        followUnfollow(userId, apiMethod, succes);
    }
}

export default usersPageReducer;