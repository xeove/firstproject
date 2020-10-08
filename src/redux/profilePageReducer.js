import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState =  {
    newPostText: 'itka',
    postData: [
        {id: 0, message: 'hi, im new!', likesCount: null},
        {id: 1, message: 'good time!', likesCount: null}
    ],
    userProfile: '',
    status: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: null
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, userProfile: action.userProfile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
export const setUserProfile = (userProfile) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    }
}
export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getUserProfile(userId);
                dispatch(setUserProfile(response.data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
                dispatch(setUserStatus(response.data));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateUserStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
    }
}

export default profilePageReducer;