import React from 'react';
import PostItem from './PostItem';

function Posts({posts,id,deletePost,name}) {
    
    const renderPost = posts.filter(post=>post.userId ==id)
    return (
        <div>
            {renderPost.map(post=>{
                return(
                    <div className='posts' key={post.id} >
                    <PostItem post={post} deletePost={deletePost}name={name}/>
                    </div>
                    
                )
            })}
        </div>
    );
}

export default Posts;