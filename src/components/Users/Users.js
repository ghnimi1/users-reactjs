import React from 'react';
import Posts from '../Posts/Posts';

function Users({ users, posts, deletePost }) {

    const renderUsers = users.map(user => {
        return (
            <div className='users' key={user.id}>
                <div className='user'>
                    <img className='avatar' src='https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png' alt='user' />
                    <h3>{user.name}</h3>
                </div>

                <Posts posts={posts} id={user.id} deletePost={deletePost} />
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