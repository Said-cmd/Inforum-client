import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Blog from '../Blogs/Blog';
import Login from '../Login/Login';
import AddBlog from '../Blogs/AddBlog'; 
import SignUp from '../SignUp/SignUp'
import Landing from '../Landing/Landing';
import EditBlog from '../Blogs/EditBlog';
import { IoNewspaperSharp } from "react-icons/io5";

function App() {
  const [blogs, setBlogs] = useState([]) 
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]) 
  
  useEffect(()=>{
    fetch("/blogs")
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }); 
  }, []);

  useEffect(()=>{
    fetch("/comments")
    .then(res => res.json())
    .then(data => setComments(data))
  },[])

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
    <div>
      <nav>
      <div className="spacer-left"></div>
        <Link to="/" style={{ textDecoration: 'none', color: "green" }}>
          <div className="brand">
              <IoNewspaperSharp color="green" size="4rem" />
              <h1 className="brand-header">Inforum</h1>
              </div>
              </Link>
              <div className="spacer"></div>
        {user ? (
        <>
          <Link className="nav-item" to="/blogs" style={{ textDecoration: 'none', color: "green" }}>Blogs</Link>
          <Link className="nav-item" to="/new-idea" style={{ textDecoration: 'none', color: "green" }}>Write</Link>
          <Link className="nav-item" to="/" onClick={handleLogoutClick} style={{ textDecoration: 'none', color: "green" }}><input className="get-started" type="button" value="Logout"/></Link>
          <div className="spacer-right"></div>
        </>
        )
        :
        (
          <>
            <Link className="nav-item" to="/login" style={{ textDecoration: 'none', color: "green" }}>Sign in</Link>
            <Link className="nav-item" to="/signup" style={{ textDecoration: 'none', color: "green" }}><input className="get-started" type="button" value="Get started"/></Link>
            <div className="spacer-right"></div>
          </>
        )
        }
        <div className="nav-toggle">
          <div className="bar"></div>
        </div>
      </nav>
    <div className='main'>
      <Routes>
        <Route exact path='/' element={<Landing user={user}/>}/>
        <Route exact path='/login' element={<Login onLogin={setUser}/>}/>
        <Route exact path='/blogs' element={<Blogs blogs={blogs} setSearch={setSearch} search={search} user={user}/>}/>
        <Route exact path='/new-idea' element={<AddBlog setBlogs={setBlogs} blogs={blogs}/>}/>
        <Route exact path='/blogs/:id' element={<Blog blogs={blogs} comments={comments} user={user} setBlogs={setBlogs}/>}/>
        <Route exact path='/signup' element={<SignUp onLogin={setUser}/>}/>
        <Route exact path='/editblog/:id' element={<EditBlog blogs={blogs} setBlogs={setBlogs}/>}/>
      </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
