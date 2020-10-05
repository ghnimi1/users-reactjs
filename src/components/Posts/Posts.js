import React from 'react';
import Comments from '../Comments/Comments';
import PostItem from './PostItem';

function Posts({posts,id,deletePost}) {
    
    const renderPost = posts.filter(post=>post.userId ==id)
    return (
        <div>
            {renderPost.map(post=>{
                return(
                    <div className='posts'>
                    <PostItem post={post} key={post.id} deletePost={deletePost}/>
                    </div>
                    
                )
            })}
        </div>
    );
}

export default Posts;