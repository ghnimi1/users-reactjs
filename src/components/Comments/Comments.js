import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/auth';

function Comments({id,name}) {
    const [comments, setComments] = useState([])
    const getCommentsData = async (id) => {
        const res = await getComments(id)
        setComments(res.data)
      }


      useEffect(()=>{
          getCommentsData(id)
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