import React, { useState } from 'react';
import Posts from '../Posts/Posts';

function User({user,id,deletePost,posts,AddPost}) {
  /*   const [title,setTitle]=useState('')  
   const add = (e) => {
    e.preventDefault();
    AddPost(title)
        } */
    return (
        <>
             <div className='user'>
                    <img className='avatar' src='https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png' alt='user' />
                    <h3>{user.name}</h3>
                   
                </div> 
               {/*  <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className='btn btn-primary' onClick={add}>ADD POST</button> */}
                 <Posts posts={posts} id={id} deletePost={deletePost} name={user.name}/>
        </>
    );
}

export default User;