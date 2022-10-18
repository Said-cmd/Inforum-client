import React, { useState } from "react";
import "../SignUp/SignUp.css";
import { IoNewspaperSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrors([]);
      fetch('/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          image_url: profilePhoto,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) =>{
            onLogin(user)
            navigate('/blogs')
          } )
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }

    return (
            <div className="signup-form">
              <div className="signup-head">
              <div className="brand">
              <IoNewspaperSharp color="green" size="4rem" />
              <h1 className="brand-header">Inforum</h1>
              </div>
              <h5>Give your ideas a voice.</h5>
              </div>
              <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Username" 
                required 
                onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <input 
                type="email" 
                placeholder="Email" 
                required 
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>  
                <input 
                type="password" 
                placeholder="Password" 
                required 
                onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <input 
                type="password" 
                placeholder="Confirm Password" 
                required 
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br></br>
                <input 
                type="text" 
                placeholder="Profile Photo" 
                required 
                onChange={(e) => setProfilePhoto(e.target.value)}
                />
                <div>
                  {errors.map((err) => (
                    <p style={{ color: 'red'}}key={err}>{err}</p>
                  ))}
                </div>
                <div>
                <input 
                  type="submit" 
                  value={isLoading ? "Loading..." : "Continue"} 
                  />
                </div>
                <p>Already have an account?</p>
                <Link to="/login" style={{ textDecoration: 'none', color: "green" }}>Sign in</Link>
              </form>
            </div>
          );
}
 
export default SignUp;
