import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,arrowRight2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIcon,hrStyle,pageHeading,orange,radiostyle,radioinput,radiorow} from "../Layout.css";
import {inputstyle,formStyle,skipstyle,inputstyletextarea,inputstylename,inputstyle1,
labelStyle1,hyperLinkEmployee,slideremp,sliderline,sliderlineorange,slidertext,dateStyle,errormsg,radiocheck,genderstyle,genderlabel} from "./LayoutEmployee.css";
import {Header} from "../Header";
import styles from "../Layout.css";
import styles1 from "./LayoutEmployee.css";
import {Footer} from "../Footer";import $ from 'jquery';

var URL = 'http://localhost:3033/';

export class PersonalDetails extends React.Component{
  
  registerData(){
    var obj = new Object();

    obj["fathersname"] = $("#fathersname").val();
    obj["dob"] = $("#dob").val();
    obj["gender"] = $('input:radio[name=gender]:checked').val(); 
    obj["phone"] = $("#phone").val();
    obj["add"] = $("#add").val();
    obj["nationality"] = $("#nationality").val();
    obj["status"] = $("#status").val();
    obj["contactname"] = $("#contactname").val();
    obj["emergencyphone"] = $("#emergencyphone").val();
    obj["relationship"] = $("#relationship").val();
    obj["email"] = $("#email").val(); 
    // var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    // if($("#fathersname").val() == "" ){
    //   $("#fathersname").focus();
    //   $("#errorBox").html("enter the Fathers Name");
    //   return false;
    //  }else if($("#dob").val() == "" ){
    //    $("#dob").focus();
    //    $("#errorBox").html("enter the Last Name");
    //    return false;
    //  }else if($('input[name=gender]:checked').length<=0){
    //   $("#errorBox").html("Select gender");
    //   return false;
    //  }else if($('#phone').val() == ""){
    //   $("#phone").focus();
    //   $("#errorBox").html(" enter the  mobile number");
    //   return false;
    // }
    // else if($('#add').val() == ""){
    //   $("#add").focus();
    //   $("#errorBox").html("enter the  address");
    //   return false;
    // }else if($('#nationality').val() == ""){
    //   $("#nationality").focus();
    //   $("#errorBox").html("enter the  nationality");
    //   return false;
    // }else if($('#status').val() == ""){
    //   $("#status").focus();
    //   $("#errorBox").html("enter the  status");
    //   return false;
    // }else if($('#contactname').val() == ""){
    //   $("#contactname").focus();
    //   $("#errorBox").html("enter the  contact name");
    //   return false;
    // }else if($('#emergencyphone').val() == ""){
    //   $("#emergencyphone").focus();
    //   $("#errorBox").html("enter the  Emergency phone number");
    //   return false;
    // }
    //  else if($('#relationship').val() == ""){
    //    $("#relationship").focus();
    //    $("#errorBox").html("Enter the password");
    //    return false;
    //  }else if($('#email').val() == ""){
    //   $("#email").focus();
    //   $("#errorBox").html("enter the  email");
    //   return false;
    // }else if($(fathersname != '' && dob != '' && gender != '' && phone != '' && add != '' && nationality != '' && status != ''&& contactname != ''&& emergencyphone != ''&& relationship != ''&& email != '')){
    //   $("#errorBox").html("form submitted successfully")
    //   }
    //console.log(obj)
    $.ajax({
        url: URL + '/PersonalDetails',
        type: 'GET',
        data: { json: JSON.stringify(obj) },
        cache: false,
        success: function (response) {
            response = JSON.parse(response);
            console.log(response)
            if (response.Status === 'true') {
                //alert(response.Message);
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
constructor() {
  super();
  this.state = {
    fathersname:'',
    email: '',
    dob: '',
    phoneno1: '',
    phoneno2:'',
    permanentadress:'',
    nationality:'',
    maritalstatus:'',
    contactperson:'',
    relationship:''
  };
}
handleFathersnameChange = (evt) => {
  this.setState({ fathersname: evt.target.value });
}
handleEmailChange = (evt) => {
  this.setState({ email: evt.target.value });
}
handleDOBChange = (evt) => {
  this.setState({ dob: evt.target.value });
}
handlephoneno1Change = (evt) => {
  this.setState({ phoneno1: evt.target.value });
}
handlephoneno2Change = (evt) => {
  this.setState({ phoneno2: evt.target.value });
}
handlepermanentadressChange = (evt) => {
  this.setState({ permanentadress: evt.target.value });
}
handlenationalityChange = (evt) => {
  this.setState({ nationality: evt.target.value });
}
handlemaritalChange = (evt) => {
  this.setState({ maritalstatus: evt.target.value });
}
handlecontactpersonChange = (evt) => {
  this.setState({ contactperson: evt.target.value});
}
handlerelationshipChange = (evt) => {
  this.setState({ relationship: evt.target.value });
}
handleSubmit = () => {
  const { email, password } = this.state;
  alert(`Signed up with email: ${email} password: ${password}`);
}    
  


  render() {
    const { fathersname,email,dob,phoneno1,phoneno2,nationality,permanentadress,maritalstatus,contactperson,relationship  } = this.state;
    var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
    const isEnabled =
          re1.test(email)  &&
          fathersname.length > 0 &&
          phoneno1.length > 9 &&
          phoneno2.length > 9 &&
          nationality.length > 0 &&
          permanentadress.length > 0 &&
          maritalstatus.length > 0 &&
          contactperson.length > 0 &&
          relationship.length > 0
          dob.length > 0;
   
          return(
            <div>
            <Header/>
             <div className={styles.displayContainer}>
      <p className={styles.pageHeading}>Personal Details</p>
      <hr className={styles.hrStyle}/>
      <Row>
      <Col xs="10">
            <Form className={styles1.formStyle}>
            <p>* All fields are mandatory</p>
            <div class="form-row">
              <div class="col-md-5 mb-3">
                <label className={styles1.labelStyle1}>Fathers Name</label>
          <Input type="text"  className={styles1.inputstyle}
          placeholder="Fathers Name"
          pattern="[a-zA-Z]{5,25}"
          value={this.state.fathersname}
          onChange={this.handleFathersnameChange}
          id="fathersname"
          required
           /><br/>
              </div>
              <div class="col-md-5 mb-3">
                <label className={styles1.labelStyle1}>DOB</label>
              <Input type="date" id="dob"className={styles1.inputstyle} value={this.state.dob}
        onChange={this.handleDOBChange} required/>
              </div>
              </div>
              <div class="form-row">
                     <p className={styles.genderlabel}>Gender:</p>
                        <div class="col-md-4 mb-5" id={styles1.genderstyle}>
                        <Row className={styles1.radiorow}>
                        <FormGroup check>
                             <Label check className={styles.radioinput}>
                               <Input type="radio" value="male" name="gender" className={styles.radiostyle}/>
                               Male
                             </Label>
                           </FormGroup>
                           <FormGroup check>
                             <Label check className={styles.radioinput}>
                               <Input type="radio" value="female" name="gender" className={styles.radiostyle} />
                                 Female
                             </Label>
                           </FormGroup>
                           </Row>
                           </div>
                <div class="col-md-5 mb-3" style={{marginLeft:'1vw'}} >
                  <label className={styles1.labelStyle1}>Phone</label>
                    <Input  type="tel" pattern="^\d{10}$" id="phone" className={styles1.inputstyle} value={this.state.phoneno1}
              onChange={this.handlephoneno1Change} placeholder="Eg.8794098765" required />
                </div>
                </div>
                <div class="form-group">
            <label className={styles1.labelStyle1}>Permanent Address</label>
            <Input type="textarea" className={styles1.inputstyletextarea} id="add" pattern="[a-zA-Z0-9]{5,25}" value={this.state.permanentadress}
       onChange={this.handlepermanentadressChange} required/>
          </div>
              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Nationality</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" id="nationality" pattern="[a-zA-z]{2,25}" value={this.state.nationality}
       onChange={this.handlenationalityChange} required/>
                </div>
                <div class="col-md-5 mb-3">
                  <label className={styles1.labelStyle1}>Marital Status</label>
                <Input type="text"  className={styles1.inputstyle} placeholder="" id="status" pattern="[a-zA-Z]{5,25}" value={this.state.maritalstatus}
          onChange={this.handlemaritalChange} required/>
                </div>
                </div>
              <p className={styles.pageHeading}>Emergency Contact Details</p>
                <div class="form-row">
                  <div class="col-md-5 mb-3">
                    <label className={styles1.labelStyle1}>Contact Person Name</label>
                <Input type="text"  className={styles1.inputstyle} id="contactname" placeholder="Contact Person Name" pattern="[a-zA-Z]{5,25}" value={this.state.contactperson}
           onChange={this.handlecontactpersonChange} required/>
                  </div>
                  <div class="col-md-5 mb-3">
                    <label className={styles1.labelStyle1}>Phone</label>
                    <Input type="tel" pattern="^\d{10}$" id="emergencyphone" className={styles1.inputstyle} placeholder="Eg.8978987898"  value={this.state.phoneno2}
              onChange={this.handlephoneno2Change}   required/>
                  </div>
                  </div>
                    <div class="form-row">
                      <div class="col-md-5 mb-3">
                        <label className={styles1.labelStyle1}>Relationship</label>
                      <Input type="text"  className={styles1.inputstyle} id="relationship" placeholder="" pattern="[a-zA-z]{5,25}" value={this.state.relationship}
                onChange={this.handlerelationshipChange} required />
                      </div>
                      <div class="col-md-5 mb-3">
                        <label className={styles1.labelStyle1}>Email ID</label>
                      <Input type="email"  className={styles1.inputstyle} placeholder=""
                      value={this.state.email} id="email" 
                      onChange={this.handleEmailChange}
                      required />
      
                      </div>
                      </div>
                      <Link to="/ProfessionalDetails">
                          <button  disabled={!isEnabled} class="btn btn-primary" onClick={(e) => this.registerData(e)}>SAVE</button>
               </Link>
                </Form>
                </Col>
                <Col xs="2">  <div  style={{fontSize:'0.9vw',position:'relative',bottom:'-2.5vw'}} id={styles1.slidertext}>
                  <p>
                  <Link to="/PersonalDetails" className={styles.orange} >
                        Personal Details
                  </Link></p>
                  <p>
                  <Link to="/ProfessionalDetails" className={styles1.hyperLinkEmployee}>
                  Professional Details
                  </Link>
                  </p>
                  <p><Link to="/BankDetails" className={styles1.hyperLinkEmployee}>
                  Bank Details</Link></p>
                  <p><Link to="/LoginInfo" className={styles1.hyperLinkEmployee}>Login Information</Link></p>
                  <p><Link to="/JobHistory" className={styles1.hyperLinkEmployee}>Job History</Link></p>
                  <p><Link to="/EmpDocs" className={styles1.hyperLinkEmployee}>Employee Documents</Link></p>
                  </div>
                </Col>
                </Row>
                <div className={styles.bankdiv}>
                <Link to="/ProfessionalDetails"  id={styles1.skipstyle}>Skip</Link>
                <span className={styles.floatRight}>
         <Link to="/ProfessionalDetails" className={styles1.hyperLinkEmployee}>
                  <button type="submit" class="btn btn-light" >Next <Icon icon={arrowRight2} size={14} className={styles.arrowIcon} /></button>
                  </Link>
                </span>
                </div>
                <div>
                </div>
             </div>
             <Footer/>
             </div>
           );
         }
       }