import React from 'react'
import { GiWantedReward } from "react-icons/gi";
import { Link } from 'react-router-dom';
import "../NotAuthorized/NotAuthorized.css";

function NotAuthorized() {
  return (
    <div className='not-authorized-page'>
        <GiWantedReward color='green' size="15rem" style={{ marginTop: "60px"}}/>
        <h5 style={{ marginTop: "20px"}}>Oops, you're not supposed to be here.</h5>
        <h5 style={{ marginTop: "20px"}}>Login before you can view this page</h5>
        <Link to="/login" style={{ marginTop: "20px"}}><button className='get-started' style={{ outline: "none", border: "none"}}>Login</button></Link>
    </div>
  )
}

export default NotAuthorized