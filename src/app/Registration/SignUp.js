import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,forminput,submit,lasttext,hyperlink,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";
import styles from "./LayoutRegistration.css";

export class SignUp extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheader}>Registration</p>
      <form>
      <div class="form-group">
        <input type="text" class="form-control" name="name" id={styles.forminput}  placeholder="Name"/>
      </div>
  <div class="form-group">
    <input type="email" class="form-control" name="email" id={forminput}  aria-describedby="emailHelp" placeholder="Email ID"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control"  name="phone" id={forminput} placeholder="Phone"/>
  </div>
  <Link to="/VerifyAccount"><button type="submit" class="btn btn-primary" id={submit}>
  Submit
  </button></Link>
</form>
<p className={lasttext}>Existing user? <Link to="/Login" className={hyperlink}>Log In</Link></p>
      </div>
      </div>
      </div>
    <FooterText/>
      </div>
    );
  }
}
