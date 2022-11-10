import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function BlogCard({ blog, user, blogs, setBlogs }) {
  const createdDate = new Date(blog.created_at).toLocaleDateString();
  const userNameFirstLetter = blog.user.username.substr(0, 1).toUpperCase();
  const navigate = useNavigate()

  function handleDelete(){
    fetch(`https://inforum-blog-api.herokuapp.com/blogs/${blog.id}`, {
      method: "DELETE"
    })
    .then(res=> {
      if (res.ok) {
        res.json()
        .then(() => {
          const undeletedBlogs = blogs.filter(item => item.id !== blog.id)
          setBlogs(undeletedBlogs)
          navigate('/blogs')
        })
      } else {
        res.json().then(err => err.errors)
      }
    })
  }

  return (
    <div className="blog-specific">
      <div className="blog-head">
        <div className="first-letter">{userNameFirstLetter}</div>
        <div className="blog-user-date">
          <h4>{blog.user.username}</h4>
          <p>{createdDate}</p>
          <p>{blog.minutes_to_read} min read</p>
        </div>
        <div className="blog-title">
            <h3>{blog.title}</h3>
        </div>
      </div>
      <div className="blog-summary">
          {blog.content}
      </div>
      <div className="actions">
        {user.id === blog.user.id ? <Link to={`/editblog/${blog.id}`}><MdModeEdit color="green" size="1.5em"/></Link> : null  }
        {user.id === blog.user.id ? <Link><MdDeleteOutline onClick={handleDelete} color="green" size="1.5em"/></Link> : null }
      </div>
    </div>
  );
}

export default BlogCard;
