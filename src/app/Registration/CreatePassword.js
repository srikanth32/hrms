import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,ptext,
  passwordheader,registration,forminput,formstyle,submit,lasttext,hyperlink1,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";
import {Input,Button} from "reactstrap";

export class CreatePassword extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={passwordheader}>Create Password</p>
      <p className={ptext}>Thank you for registering and acivating your account with <span style={{color:'red'}}>H</span>rms.</p>
      <form className={formstyle}>
      <div class="form-group">
          <Input type="password"  className={forminput} placeholder="Password" />
      </div>
  <div class="form-group">
      <Input type="password"  className={forminput} placeholder="Confirm" />
  </div>
  <Link to="/DemoPage"><Button outline className={submit}>Submit</Button>
</Link>
</form>

      </div>
      </div>
      </div>
      <FooterText/>
      </div>
    );
  }
}