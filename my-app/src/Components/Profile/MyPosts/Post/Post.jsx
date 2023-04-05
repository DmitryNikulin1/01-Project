import React from 'react';
import c from './Post.module.css';


const Post = (props) => {
    return (
        <div className={c.item}>
            <img src='https://avatars.mds.yandex.net/i?id=2a00000179f0b50a1c0266644bcd17f9ee9e-4322237-images-thumbs&n=13' />
            { props.message }
            <div>
                <span>Like</span>
                { props.LikesCount }
            </div>
        </div>
    )
}

export default Post;