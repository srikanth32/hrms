import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,otpdiv,
  forminputotp,submit,submitLink,lasttext1,lasttext2,hyperlink1,otptext,ios,otptext1,outline} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {Row} from "reactstrap";
import {FooterText} from "./Footertext";

export class VerifyAccount extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheader}>Verify Account</p>
<p className={otptext1}>OTP has been sent on your phone Number 8106414656. Please enter it below</p>

<div className={otpdiv}>
<form id={ios}>
    <input type="text" maxlength="1"  id={otptext}/>
    <input type="text" maxlength="1"  id={otptext}/>
    <input type="text" maxlength="1"  id={otptext}/>
    <input type="text" maxlength="1" id={otptext}/>

</form>
<button type="submit" class="btn btn-light" id={submit}>  <Link to="/CreatePassword" id={outline}>
Submit</Link>
  </button>
  <p className={lasttext1}>Resend OTP<span ><Link to="/SignUp" className={lasttext2}>Change Number</Link></span></p>
  </div>


      </div>
      </div>
      </div>
      <FooterText/>
      </div>
    );
  }
}
