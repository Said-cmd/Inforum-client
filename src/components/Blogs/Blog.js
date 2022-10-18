// import React from "react";
// import { useParams } from "react-router-dom"
// import Comment from "./comment";


// function Blog({ blogs, comments, user }){
//     const params = useParams()

//     const blog = blogs.find(blogy=>blogy.id === params.id)
//     // console.log(user)
//     const filterdComments = comments.filter(comment=>comment.blog_id === params.id)
//     console.log(filterdComments)
//     const blogComments = filterdComments.map(comment=>{
//         return <Comment key={comment.id} comment={comment}/>
//     })
//     const comms = blog.comments.map(comm=>{
//         return <Comment key={comm.id} comment={comm}/>
//     })

//     return(
//         <div className="blog">
//             {/* <div className="blog-details">
//                 <h2>{blog.title}</h2>
//                 <h4>Author: {blog.user.username}</h4>
//                 <p>Written at: {new Date(blog.created_at).toLocaleString()}</p>
//                 <p>{blog.minutes_to_read} Miuntes read</p>
//                 <p>{blog.content}</p>
//                 <h4>Comments</h4> 
//                 {comms}
//             </div> */}
            
//         </div>
//     )
// }

// export default Blog