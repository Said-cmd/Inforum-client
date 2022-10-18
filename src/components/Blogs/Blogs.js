import React from "react";
import BlogCard from "../Blogs/BlogCard";
import Search from "../Search/Search";

function Blogs({ blogs, search, setSearch, user, setBlogs }){
    const filteredBlogs = blogs.filter(blog=>blog.title.toLowerCase().includes(search.toLowerCase()))
    const blogsDisplay = filteredBlogs.map(blog=>{
        return <BlogCard key={blog.id} blog= {blog} user={user} blogs={blogs} setBlogs={setBlogs}/>
    })
    return(
        <div className="blog-main">
            <Search setSearch={setSearch}/>
            {blogsDisplay}
        </div>
    )
}

export default Blogs