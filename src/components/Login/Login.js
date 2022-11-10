import React, {useState} from "react";
import "./Login.css";
import { IoNewspaperSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user))
        .then(() => navigate('/blogs'))

      } 
      else{
        r.json().then((err) => setErrors([err.errors]));
      }
    });
  }
  
  return (
    <div className="loginform">
      <div className="login-head">
      <IoNewspaperSharp color="green" size="4rem" />
      <h1 className="brand-header-login">Inforum</h1>
      <h5 className="brand-text">Give your ideas a voice.</h5>
      </div> 
      <form onSubmit={handleSubmit}>
        <input type="text"  
           placeholder="Username" 
           autoComplete="off"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           required 
           />
            <br></br> 
        <input 
            type="password" 
            placeholder="Password" 
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            />
        <div>
          <input type="submit" value={isLoading ? "Loading..." : "Continue"} />
        </div>
        <div>
        {errors.map((err) => (
          <p className="error" key={err}>{err}</p>
        ))
        }
        </div>
        <p>Don't have an account?</p>
        <Link to="/signup" style={{ textDecoration: 'none', color: "green" }}>Sign up</Link>
          </form>
    </div>
  );
}; 

export default LoginForm;