import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm } from 'redux-form'

const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

    let addPost = (value) => {

        props.addPost(value.newPostElement);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostElement' />
            </div>
                <div>
                    <button>Add post</button>
                </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'myPost'
})(PostForm)