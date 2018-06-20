import React from "react";
import {displayContainer,pageHeading,hrStyle} from "../Layout.css";
import {
  formStyle,inputStyle,labelStyle,buttonstyle} from "../settings/LayoutSettings.css";
import {Form,FormGroup, Label, Input,Button} from "reactstrap";
import {labelStyle1,inputstyle} from "../employee/LayoutEmployee.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
export class Profile extends React.Component{
  render() {
    return(
      <div>
      <Header/>
  <div className={displayContainer}>
  <p className={pageHeading}>Profile Settings</p>
  <hr className={hrStyle}/>
<Form className={formStyle}>
  <div class="form-row">
  <div class="col-md-5 mb-3">
  <label className={labelStyle1}>First Name</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  <div class="col-md-5 mb-3">
  <label className={labelStyle1}>Last Name</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  </div>
  <div class="form-row">
  <div class="col-md-10 mb-3">
    <label className={labelStyle1}>Designation</label>
    <input id={inputstyle} class="form-control" type="text" name=""  placeholder="" />
</div>
</div>
  <div class="form-row">
  <div class="col-md-5 mb-3">
  <label className={labelStyle1}>Location</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  <div class="col-md-5 mb-3">
  <label className={labelStyle1}>Phone</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  </div>
  <div class="form-row">
  <div class="col-md-10 mb-3">
    <label className={labelStyle1}>Email ID</label>
    <input id={inputstyle} class="form-control" type="text" name=""  placeholder="" />
  </div>
  </div>
  <Button className="btn btn-outline-warning">
  Save</Button>
  <p style={{marginTop:'1vw',fontWeight:'bold'}}>Change Password</p>
  <div class="form-row">
  <div class="col-md-5 mb-3">
  <label className={labelStyle1}>Enter New Password</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  <div class="col-md-5 mb-3">
  <label className={labelStyle1}>Confirm Password</label>
  <input type="text" class="form-control" id={inputstyle}/>
  </div>
  </div>
  <Button className="btn btn-outline-warning">
  Save</Button>
</Form>

  </div>
  <Footer/>
  </div>
    );

  }
}
