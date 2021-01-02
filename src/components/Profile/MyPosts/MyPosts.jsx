import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let {postsPage: p, profilePage} = props.state;
    let posts = p.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type:'SET-POST'})
    }

    let changePost = () => {
        let text= newPostElement.current.value;
        props.dispatch({type: 'UPDATE-POST-MESSAGE', text});
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={changePost} value={profilePage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;