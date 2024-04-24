import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter/Counter';
import { useState } from 'react';
import PostList from './components/blog/PostList';
import MyForm from './components/form/MyForm';


function App() {

  const [posts, setPosts] = useState([
    { title: 'title 1', description: 'description 1'},
    { title: 'title 2', description: 'description 2'},
    { title: 'title 3', description: 'description 3'},

  ])


  return (

  <div>
    Hello react !
    <Counter />

    <PostList posts={posts} />
    <MyForm />
    
  </div> 
);
}

export default App;
