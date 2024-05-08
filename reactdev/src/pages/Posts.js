import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PostList from '../components/blog/PostList';
import MyForm from '../components/form/MyForm';
import Button from 'react-bootstrap/Button';
import MyModal from '../components/modal/MyModal';
import MyFilter from '../components/filter/MyFilter';
import MyButton from '../components/button/MyButton';
import PostService from '../components/api/PostService';
import Pages from '../components/pagination/Pages';
import { usePosts } from '../hooks/usePosts';


function Posts() {

  const [posts, setPosts] = useState([
    { id: 1, title: 's tt le 1', body: 'body 1'},
    { id: 2, title: 'a ti tle 2', body: 'body 2'},
    { id: 3, title: 'b i tt le 3', body: 'body 3'},
  ])

  const [filter, setFilter] = useState({selectedSort: 'title', searchWord: ''})
  
  const [totalPostsCount, setTotalPostsCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentLimit, setCurrentLimit] = useState(13)
  const sortedAndSearchedPosts = usePosts(filter.searchWord, posts, filter.selectedSort)

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


  useEffect(() => {
    console.log('sort by: ', filter.selectedSort);
    getAllData()
  }, [filter.selectedSort, currentPage])

  async function getAllData(){
    const response = await PostService.getServiceResponse(currentLimit, currentPage)
    setPosts(response.data)
    // header
    setTotalPostsCount(response.headers.get('X-Total-Count'))
    //console.log(myData.getAll().data);
  }

  return (

  <div>

    <MyFilter filter={filter} setFilter={setFilter} />
    <hr /> 

    <MyModal modalTitle="Add new post"><MyForm savePosts={savePosts}/></MyModal>
    
    <PostList posts={sortedAndSearchedPosts} deletePost={deletePost} editPost={editPost}/>
    <Pages 
      totalPostsCount={totalPostsCount} 
      postsOnPage={currentLimit} 
      active={currentPage}
      setCurrentPage={setCurrentPage}
    />
    
  </div> 
);
}

export default Posts;
