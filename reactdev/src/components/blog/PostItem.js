import React from 'react';
import MyButton from '../button/MyButton';
import postStyle from './post.module.css'
import MyForm from '../form/MyForm';
import MyModal from '../modal/MyModal';


const PostItem = ({post, index, deletePost, editPost}) => {
    //console.log(postItem);

    return (
        <div key={index} className='d-flex justify-content-between border border-secondary roudned m-1'>
            <div className={postStyle.postTitle}>{index + 1}. {post.title}</div>
            <div className={postStyle.postDescription}>{post.body}</div>
            <MyButton title='edit' color="warning" onClickFn={() => editPost(post)} />
            <MyModal modalTitle='Edit'><MyForm editPost={editPost} oldPost={post} isEdit='true' /></MyModal>
            <MyButton title='delete' color="danger" onClickFn={() => deletePost(post)} />
        </div>
    );
};

export default PostItem;