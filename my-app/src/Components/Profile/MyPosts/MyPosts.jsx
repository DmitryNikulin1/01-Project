import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.massages} LikesCount={p.likesCount} />);

    let newPostEl = React.createRef();
    // debugger;
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        // debugger;
        let text = newPostEl.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText} />
                    </div>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>

                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)


}

export default MyPosts;