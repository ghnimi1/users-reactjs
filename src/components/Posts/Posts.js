import React from 'react';
import PostItem from './PostItem';

function Posts({posts,id,deletePost}) {
    
    const renderPost = posts.filter(post=>post.userId ==id)
    return (
        <div>
            {renderPost.map(post=>{
                return(
                    <div className='posts' key={post.id} >
                    <PostItem post={post} deletePost={deletePost}/>
                    </div>
                    
                )
            })}
        </div>
    );
}

export default Posts;