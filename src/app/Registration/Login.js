import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,viewfeatures,
  registrationheaderLogin,registration,forminput,submit,lasttext3,hyperlink,submitLink} from "./LayoutRegistration.css";
  import styles from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";

export class Login extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheaderLogin}>Log In</p>
      <form>

  <div class="form-group">
    <input type="email" class="form-control" id={styles.forminput}  aria-describedby="emailHelp" placeholder="Email ID" required/>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id={forminput}  placeholder="Password" required/>
  </div>

  <Link to="/DemoPage"><button type="submit" class="btn btn-light" id={submit}>
Submit
  </button></Link>

</form>
<p className={lasttext3}>Create New user? <Link to="/SignUp" className={hyperlink}>Sign Up</Link></p>
      </div>
      </div>
      </div>
      <FooterText/>
      </div>
    );
  }
}
