import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter/Counter';
import { useEffect, useState } from 'react';
import PostList from './components/blog/PostList';
import MyForm from './components/form/MyForm';
import Button from 'react-bootstrap/Button';
import MyModal from './components/modal/MyModal';
import MyFilter from './components/filter/MyFilter';
import MyButton from './components/button/MyButton';
import PostService from './components/api/PostService';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 's tt le 1', body: 'body 1'},
    { id: 2, title: 'a ti tle 2', body: 'body 2'},
    { id: 3, title: 'b i tt le 3', body: 'body 3'},
  ])

  const [selectedSort, setSelectedSort] = useState('title')

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
    posts.forEach(p => {
        if (p.id === post.id){
          p.title = post.title
          p.body = post.body
          return p
        }
      }
    )
    setPosts([...posts])
    console.log(posts);
  }

  const searchPosts = (word) => {
    console.log('searching....', word);

    if (word == undefined)
    {
      return posts
    } else {
      //const postsFound = posts.filter(p => p.title.toLowerCase().includes(word.toLowerCase().trim()))
      return [...posts].filter(p => p.title.toLowerCase().includes(word.toLowerCase().trim()))
    }
  }

  const sortPosts = () => {

    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))

  }

  useEffect(() => {
    console.log('sort by: ', selectedSort);
    getAllData()
  }, [selectedSort])

  async function getAllData(){
    setPosts(await PostService.getAll())
    //console.log(myData.getAll().data);
  }

  return (

  <div>

    <MyFilter searchPosts={searchPosts} setSelectedSort={setSelectedSort} />
    <hr /> 

    <MyModal modalTitle="Add new post"><MyForm savePosts={savePosts}/></MyModal>
    
    <PostList posts={sortPosts()} deletePost={deletePost} editPost={editPost}/>
    
  </div> 
);
}

export default App;
