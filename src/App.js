import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Users from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  const getUsers = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
  }
  const getPosts = () => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post=>post.id!==id))
}

  
  useEffect(() => {
    getUsers()
    getPosts()
  }, [])
  return (
    <div className='container'>
      <Users users={users} posts={posts} deletePost={deletePost}/>
    </div>
  );
}

export default App;
