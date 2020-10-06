import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function PostItem({ post, deletePost,name }) {

    const [open, setOpen] = useState(false)
    const [openpost, setOpenPost] = useState(false)

    const openComment = () => {
        setOpen(!open)
    }

    const openPost = () => {
        setOpenPost(!openpost)
    }

    

    return (
        <>
           
            <h6 onClick={() => openPost()}>
                {document.title = `${post.title}`}

            </h6>
            {openpost ? <><p>{post.body}</p>
                <button className='btn btn-danger' onClick={() => deletePost(post.id)} >
                    <FontAwesomeIcon icon={faTrash} color='#fff' /> DELETE</button>

                <h5 style={{ textAlign: 'center' }} onClick={() => openComment()}>Comments</h5>


            </> : null}
            <div>
                {open ?
                    <Comments id={post.id} name={name}/>
                    : null}
            </div>
        </>
    );
}

export default PostItem;