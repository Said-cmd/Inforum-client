import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

function EditBlog({ blogs, setBlogs }){
    const [errors, setErrors] = useState([]);
    const params = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState({
      id: 0,
      title: "",
      minutes_to_read: 0,
      likes: 0,
      content: "",
      created_at: "",
      comments: [],
      user: {
        id: 0,
        username: "",
        image_url: "",
        email: "",
      },
    });

    useEffect(() => {
      fetch(`/blogs/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data)
        }
          );
    }, [params.id]);

    const [updateData, setUpdateData] = useState({
        title: blog.title,
        minutes_to_read: blog.minutes_to_read,
        content: blog.content
    })

    useEffect(() => {
      setUpdateData({
      title: blog.title,
      minutes_to_read: blog.minutes_to_read,
      content: blog.content,
      })
    },[blog])

    function handleChange(e){
        let name = e.target.name 
        let value = e.target.value 
        setUpdateData({[name]: value})
    }


    function handleSubmit(e){
        e.preventDefault()
        fetch(`/blogs/${blog.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData)
        })
        .then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    const updatedBlogs = blogs.map(item=>{
                        if (item.id === data.id ){
                            return data
                        } else{
                            return item
                        }
                    }) 
                    setBlogs(updatedBlogs)
                    navigate('/blogs')  
                })
            } else {
                res.json().then(err=>setErrors(err.errors))
            }
        })
    }
    return (
      <div className="blog-form-div">
      <div>
        <h2>Edit your story</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="add-blog-input"
            type="text"
            name="title"
            placeholder="Title here..."
            value={updateData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="add-blog-input"
            type="number"
            name="minutes_to_read"
            min={0}
            max={10}
            placeholder="Minutes..."
            value={updateData.minutes_to_read}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className="add-blog-text-area"
            rows="7"
            name="content"
            placeholder="Tell your story"
            value={updateData.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <input className="publish" type='button' value="Publish" onClick={handleSubmit}/>
      </form>
      <div>
        {errors.map((err) => (
            <p key={err} style={{color: "red"}}>{err}</p>
        ))}
      </div>
    </div>
    )
}

export default EditBlog