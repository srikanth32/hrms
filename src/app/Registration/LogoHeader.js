import React from "react";
import {logo,floatingtext1,insidefloating1,hyperlink,hyperlink1} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";

export class LogoHeader extends React.Component{
  render(){
    return(
      <div>
      <Link to="/LandingPage"><h1 className={logo}>H<span style={{color:'white'}}>rms</span></h1></Link>
      <p className={floatingtext1}>
      <span className={insidefloating1}><Link to="/Login" className={hyperlink}>Log In</Link></span>
      <span><Link to="/SignUp" className={hyperlink}>Sign Up</Link></span>

      </p>
      </div>
    );
  }
}
