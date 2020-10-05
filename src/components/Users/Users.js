import React from 'react';
import Posts from '../Posts/Posts';

function Users({users,posts,deletePost}) {

    const renderUsers = users.map(user=>{
        return(
            <div className='users' key={user.id}>
                <h3>{user.name}</h3>
                <Posts posts={posts} id={user.id} deletePost={deletePost}/>
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