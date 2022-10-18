import React from "react"; 

function Comment({comment}){
    return(
        <div>
            <p>{comment.user.username}</p>
            <p>{comment.comment}</p>
        </div>
    )
} 

export default Comment