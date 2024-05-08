import React from 'react';
import MyButton from '../button/MyButton';
import postStyle from './post.module.css'
import MyForm from '../form/MyForm';
import MyModal from '../modal/MyModal';
import { Link } from 'react-router-dom';


const PostItem = ({post, index, deletePost, editPost}) => {
    //console.log(postItem);

    return (
        <div key={index} className='d-flex justify-content-between border border-secondary roudned m-1'>
            <div className={postStyle.postTitle}>{post.id}. {post.title}</div>
            <div className={postStyle.postDescription}>{post.body}</div>
            <Link to={"/post-details/" + post.id} className='btn btn-warning'>Post details</Link>
            <MyModal modalTitle='Edit'><MyForm editPost={editPost} oldPost={post} isEdit='true' /></MyModal>
            <MyButton title='delete' color="danger" onClickFn={() => deletePost(post)} />
        </div>
    );
};

export default PostItem;