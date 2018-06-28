import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,otpdiv,
  forminputotp,submit,submitLink,lasttext1,lasttext2,hyperlink1,otptext,ios,otptext1,outline} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {Row} from "reactstrap";
import {FooterText} from "./Footertext";
import {Button} from "reactstrap";


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
    <input type="text" maxlength="1"  className={otptext}/>
    <input type="text" maxlength="1"  className={otptext}/>
    <input type="text" maxlength="1"  className={otptext}/>
    <input type="text" maxlength="1" className={otptext}/>
</form>


<Button outline className={submit}> <Link to="/CreatePassword" id={outline}>
Submit</Link>
  </Button>
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