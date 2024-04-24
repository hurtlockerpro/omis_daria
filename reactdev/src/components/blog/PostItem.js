import React from 'react';
import MyButton from '../MyButton/MyButton';
import postStyle from './post.module.css'


const PostItem = ({post, index}) => {
    //console.log(postItem);
    return (
        <div key={index} className='d-flex justify-content-between border border-secondary roudned m-1'>
            <div className={postStyle.postTitle}>{index + 1}. {post.title}</div>
            <div className={postStyle.postDescription}>{post.description}</div>
            <MyButton title='edit' />
            <MyButton title='delete' />
        </div>
    );
};

export default PostItem;