import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter/Counter';
import { useState } from 'react';
import PostList from './components/blog/PostList';
import MyForm from './components/form/MyForm';
import Button from 'react-bootstrap/Button';
import MyModal from './components/modal/MyModal';
import MyFilter from './components/filter/MyFilter';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 's tt le 1', description: 'description 1'},
    { id: 2, title: 'a ti tle 2', description: 'description 2'},
    { id: 3, title: 'b i tt le 3', description: 'description 3'},
  ])

  function savePosts(newPost){
    console.log('post changing...');
    posts.push(newPost)
    setPosts([...posts])
    console.log(posts);
  }

  const deletePost = (post) => {
    console.log('post deleting...', post);
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const editPost = (post) => {
    console.log('post editing...', post);
    setPosts(posts.forEach(p => {
        if (p.id === post.id){
          p.title = post.title
          p.desciption = post.description
          return p
        }
      })
    )
  }

  const searchPosts = (word) => {
    console.log('searching....', word);
    const postsFound = posts.filter(p => p.title.toLowerCase().includes(word.toLowerCase().trim()))
    console.log('postsFound', postsFound);
    //setPosts(postsFound)
  }


  return (

  <div>

    <MyFilter searchPosts={searchPosts} />
    <hr /> 

    <MyModal modalTitle="Add new post"><MyForm savePosts={savePosts}/></MyModal>
    
    <PostList posts={posts} deletePost={deletePost} editPost={editPost}/>
    
  </div> 
);
}

export default App;
