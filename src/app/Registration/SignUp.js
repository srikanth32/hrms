import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,forminput,submit,lasttext,hyperlink,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";
import {Input,Button} from "reactstrap";
import $ from 'jquery';
var URL = 'http://localhost:3033/';
export class SignUp extends React.Component{
  signUpdata(){
    var obj = new Object();

    
    obj["name"] = $("#name").val();
    obj["email"] = $("#email").val();
    obj["phone"] = $("#phone").val();
    console.log(obj)
    $.ajax({
        url: URL + '/SignUp',
        type: 'GET',
        data: { json: JSON.stringify(obj) },
        cache: false,
        success: function (response) {
            response = JSON.parse(response);
            console.log(response)
            if (response.Status === 'true') {
                alert(response.Message);
            } else {
                alert(response.Message);
            }
        },
        error: function () {
            alert('Unable to update job details !!!');
        },
        complete: function () {
            //self.container.dataLoader('hide');
        }
    });
}
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
      <Input type="text"  className={forminput} id="name" placeholder="Name" />
      </div>
  <div class="form-group">
  <Input type="email"  className={forminput} id="email" placeholder="Email ID" />
  </div>
  <div class="form-group">
  <Input type="phone" className={forminput} id="phone" placeholder="Phone" />
  </div>
  <Link to="/VerifyAccount"><Button outline className={submit} onClick={(e) => this.signUpdata(e)}>Submit</Button>
  </Link>
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