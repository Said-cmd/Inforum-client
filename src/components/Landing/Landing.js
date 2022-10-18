import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../Landing/Landing.css";

const Landing = ({ user }) => {
    return (
        <div className="landing">
        <div className="section-holder">
        <div className="text">
        <h1>Follow the ideas from your favourite topics.</h1>
        <h1>Participate in the discourse.</h1>
        <h1>Give your ideas a voice.</h1>
        </div>
        <div className="brand-logo">
        <GiNotebook className="logo" color="green" size="25rem"/>
        </div>
        </div>
        { user ? <Link to="/blogs"><input className="start-reading" type="button" value="Back to blogs"/></Link> : (
        <Link to="/signup"><input className="start-reading" type="button" value="Start reading"/></Link>
        )}
        <div className="footer">
        <div className="footer-content">
        <p style={{ color: "green"}}>© 2022 Inforum. All rights reserved.</p>
        <p style={{ color: "green"}}>Terms of use</p>
        <p style={{ color: "green"}}>FAQ</p>
        <p style={{ color: "green"}}>Privacy Policy</p>
        </div>
        </div>
        </div>
    );
}
 
export default Landing;