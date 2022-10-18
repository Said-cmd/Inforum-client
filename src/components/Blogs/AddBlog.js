import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "../Blogs/AddBlog.css";

function AddBlog({ blogs, setBlogs }) {
  const [postData, setPostData] = useState({
      title: "",
      content: "",
      likes: 0,
      minutes_to_read: 0
  }) 

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  function handleChange(e){
      let name = e.target.name 
      let value = e.target.value

      setPostData({...postData, [name]: value })
  }

  function handleSubmit(e) {
      e.preventDefault()
      console.log(postData) 
      fetch("/blogs",{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
      }).then((r) => {
      if (r.ok) {
          r.json().then(data=>setBlogs([...blogs, data ]))
        navigate("/blogs");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="blog-form-div">
      <div>
        <h2>Share your idea</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="add-blog-input"
            name="title"
            type="text"
            placeholder="Title here..."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="add-blog-input"
            name="minutes_to_read"
            type="number"
            min={0}
            max={10}
            placeholder="Minutes..."
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className="add-blog-text-area"
            name="content"
            rows="7"
            placeholder="Tell your story"
            onChange={handleChange}
          >
          </textarea>
        </div>
        <input className="publish" type='button' value="Publish" onClick={handleSubmit}/>
      </form>
      <div className="error-div">
        {errors.map((err) => (
            <p key={err} style={{color: "red", alignContent: "center"}}>{err}</p>
        ))}
      </div>
    </div>
  );
}

export default AddBlog;
