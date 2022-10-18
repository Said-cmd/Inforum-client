import { Link } from "react-router-dom";
import { IoNewspaperSharp } from "react-icons/io5";

const Navbar = ({ user, setUser }) => {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
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
        </nav>
    );
}
 
export default Navbar;