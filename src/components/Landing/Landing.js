import { Link } from "react-router-dom";
import "../Landing/Landing.css";
import { GiNotebook } from "react-icons/gi";

const Landing = ({ user }) => {
    return (
        <div className="landing">
        <div className="section-holder">
        <div className="text">
        <br></br>
        <h2 className="h2-landing">Give your ideas a voice.</h2>
        <br></br>
        <h3 className="h3-landing">Follow the ideas from your favourite topics <br></br> and participate in the discourse.</h3>
        { user ? <Link to="/blogs"><input className="start-reading" type="button" value="Back to blogs"/></Link> : (
        <Link to="/signup"><input className="start-reading" type="button" value="Start reading"/></Link>
        )}
        </div>
        <GiNotebook className="landing-logo" size="480px"/>
        </div>
        </div>
    );
}
 
export default Landing;
