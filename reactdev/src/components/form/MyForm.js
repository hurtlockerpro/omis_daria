import React, { useRef, useState } from 'react';
import MyInput from './MyInput';
import MyButton from '../button/MyButton';

const MyForm = ({savePosts, editPost, oldPost, isEdit}) => {

    
    const [post, setPost] = useState({title: '', body: ''})
    //const [isEdit, setIsEdit] = useState(false)
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
            body: descriptionRef.current.value
        }
        savePosts(newPost)
    }

    function updatePost(){
        console.log(oldPost);
        editPost(oldPost)
    }

    return (
        <form>
            <MyInput 
                type="text"
                ref={titleRef}
                placeholder='Insert title' 
                value={ isEdit ? oldPost.title : post.title}
                onChange={event => setPost( isEdit ? 
                    oldPost.title = event.target.value : 
                    {...post, title: event.target.value }
                )}
            />

            <MyInput 
                type="text"
                ref={descriptionRef}
                placeholder='Insert body'
                value={ isEdit ? oldPost.body : post.body }
                onChange={event => setPost(
                    isEdit ? 
                    oldPost.body = event.target.value :
                    {...post, body: event.target.value }
                )}
            />

            <MyButton 
                title={ isEdit ? 'Update post' : 'Save post' }
                onClickFn={ isEdit ? updatePost : createPost}
            />
        </form>
    );
};

export default MyForm;