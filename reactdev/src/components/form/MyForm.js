import React, { useRef, useState } from 'react';
import MyInput from './MyInput';
import MyButton from '../button/MyButton';

const MyForm = ({savePosts, editPost, oldPost}) => {

    console.log(oldPost);
    const [post, setPost] = useState({title: '', description: ''})
    const [isEdit, setIsEdit] = useState(false)
    const titleRef = useRef()
    const descriptionRef = useRef()

    //document.gertElementByID('myid').addEventListener('click', event => {
    //    event.target.value
    //})
    
    function createPost(event){
        event.preventDefault()

        console.log(titleRef.current.value); 
        console.log(descriptionRef.current.value); 
        const newPost = {
            id: Date.now(),
            title: titleRef.current.value,
            description: descriptionRef.current.value
        }
        savePosts(newPost)
    }

    function updatePost(){

    }
    

    return (
        <form>
            <MyInput 
                type="text"
                ref={titleRef}
                placeholder='Insert title' 
                value={ isEdit ? oldPost.title : post.title}
                onChange={event => setPost({...post, title: event.target.value })}
            />

            <MyInput 
                type="text"
                ref={descriptionRef}
                placeholder='Insert description'
                value={ isEdit ? oldPost.description : post.description }
                onChange={event => setPost({...post, description: event.target.value })}
            />

            <MyButton 
                title={ isEdit ? 'Update post' : 'Save post' }
                onClickFn={ isEdit ? updatePost : createPost}
            />
        </form>
    );
};

export default MyForm;