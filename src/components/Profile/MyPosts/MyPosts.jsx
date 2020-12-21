import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let {postsPage: p} = props.state;
    let posts = p.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

    let refText = React.createRef();

    let textMessage = () => {
        let textValue= refText.current.value;
        props.setPost(textValue)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={refText} ></textarea>
                </div>
                <div>
                    <button onClick={textMessage}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;