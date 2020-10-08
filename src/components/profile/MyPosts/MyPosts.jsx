import React, {useEffect} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostsAddForm from "./MyPostAddForm";

const MyPosts = (props) => {

    let likePost = (values) => {
        values.newLikesCount = 1;
        props.likePost(values.newLikesCount)
    }

    let postsElements = props.postData.map( post => <Post message={post.message} id={post.id} likesCount={post.likesCount} onSubmit={likePost} />);

    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <h3>my posts</h3>
            <MyPostsAddForm onSubmit={addPost}/>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;