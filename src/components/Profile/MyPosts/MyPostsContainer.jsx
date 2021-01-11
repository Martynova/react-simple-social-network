import React from 'react';
import {addPostCreator, changePostCreator} from '../../redux/profileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(changePostCreator(text));
    }
    
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;