import React, { useState } from 'react';
import User from '../Users/User';

function Users({ users, posts, deletePost, AddPost }) {
  
    const renderUsers = users.map(user => {
     
        return (
            <div className='users' key={user.id}>
               
               <User user={user} posts={posts} id={user.id} deletePost={deletePost} AddPost={AddPost}/>
               
            </div>
        )
    })
    return (
        <div >
            {renderUsers}
        </div>
    );
}

export default Users;