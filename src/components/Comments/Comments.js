import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Comments({id,name}) {
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
                    <div className='comment'>
                    <h4>{name}</h4>
                    <p >{comment.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Comments;