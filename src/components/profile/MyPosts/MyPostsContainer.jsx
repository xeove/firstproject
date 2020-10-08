import React from 'react';
import {addPostCreator} from "../../../redux/profilePageReducer";
import {connect} from "react-redux";
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    return (
        <MyPosts postData={props.postData} newPostText={props.newPostText}/>
    )
}

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)