import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,viewfeatures,
  registrationheaderLogin,registration,forminput,submit,lasttext3,hyperlink,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";
import {Input,Button} from "reactstrap";

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
<Input type="email" className={forminput} placeholder="Email ID" />
  </div>
  <div class="form-group">
    <Input type="password"  className={forminput} placeholder="Password" />
  </div>

  <Link to="/DemoPage"> <Button outline className={submit}>Submit</Button>
</Link>

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