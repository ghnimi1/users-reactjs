import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Comments({id}) {
    const [comments, setComments] = useState([])
    const getComments = (id) => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          .then(response => setComments(response.data))
      }
      useEffect(()=>{
          getComments(id)
      })
    return (
        <div>
            {comments.map(comment=>{
                return(
                    <>
                    <p className='comment'>{comment.body}</p>
                    </>
                )
            })}
        </div>
    );
}

export default Comments;