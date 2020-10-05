import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])
  const [posts, setPosts] = useState([])
         console.log('users',users)
         console.log('Posts',posts)
         console.log('comments',comments)
  const getUsers = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>setUsers(response.data))
  }
  const getPosts = () => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>setPosts(response.data))
  }
  const getComments = (id) =>{
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response=>setComments(response.data))
  }
useEffect(()=>{
    getUsers()
    getPosts()
    getComments()
},[])
  return (
    <div>
       wel
    </div>
  );
}

export default App;
