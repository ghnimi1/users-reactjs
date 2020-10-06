import React, { useEffect, useState } from 'react';
import './App.css';
import Users from './components/Users/Users';
import { getUsers,getPosts } from './services/auth';

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  const getUsersData = async () => {
    const res = await getUsers()
    setUsers(res.data)
  }

  const getPostsData = async () => {
    const res = await getPosts()
    setPosts(res.data)
  }

  /* const AddPost = (post) => {
    post.id = Math.random()
    setPosts(posts.push(post))
  }
 */
  const deletePost = (id) => {
    setPosts(posts.filter(post=>post.id!==id))
}
  
  useEffect(() => {
    getUsersData()
    getPostsData()
  }, [])
  return (
    <div style={{backgroundColor:'#F2F3F5'}}>
      <div className='container'>
      <Users users={users} posts={posts} deletePost={deletePost} />
    </div>
    </div>
    
  );
}

export default App;
