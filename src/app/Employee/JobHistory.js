import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2 } from 'react-icons-kit/icomoon/';
import {Link} from "react-router-dom";
import {displayContainer,arrowIconR,arrowIconL,pageHeading,hrStyle,buttonStyle,orange,skip1,bankdiv,floatRight2,savebtn1} from "../Layout.css";
import {hyperLinkEmployee,dateStyle,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {formStyle,floatRight,enableBtn,disableBtn} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import $ from 'jquery';

var URL = 'http://localhost:3033/';

export class JobHistory extends React.Component{
  addJob(){
    var obj = new Object();

    obj["companyname"] = $("#companyname").val();
    obj["department"] = $("#dept").val();
    obj["designation"] = $("#desg").val();
    obj["reportmanager"] = $("#report").val();
    obj["doj"] = $("#doj").val();
    obj["dor"] = $("#dor").val();
    $.ajax({
      url: URL + '/JobHistory',
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
  constructor(props) {
  super(props);
  this.state = {
    value: new Date(),
    companyname:'',
    department:'',
    designation:'',
    reportingmanager:'',
    dob1:'',
    dob2:''
  }
}
handlecompanynameChange = (evt) =>{
  this.setState({
    companyname:evt.target.value
  })
}
handledepartmentChange = (evt) =>{
  this.setState({
    department:evt.target.value
  })
}
handledesignationChange = (evt) =>{
  this.setState({
    designation:evt.target.value
  })
}
handlereportingmanagerChange = (evt) =>{
  this.setState({
    reportingmanager:evt.target.value
  })
}
handledobchange1 = (evt) =>{
  this.setState({
    dob1:evt.target.value
  })
}
handledobchange2 = (evt) =>{
  this.setState({
    dob2:evt.target.value
  })
}
  handleChange = (event, value) => {
   this.setState({value});
 }
  render() {
    var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
    var re2 = new RegExp("^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$");
    const {companyname,department,designation,reportingmanager,dob1,dob2 } = this.state;
    const isEnabled =
      re2.test(companyname) &&
      re2.test(department) &&
      re2.test(designation) &&
      re2.test(reportingmanager) &&
      dob1.length > 0 &&
      dob2.length > 0
      ;
    return(
  <div>
  <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Job History</p>
<hr className={hrStyle}/>
<Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
<p style={{marginTop:'1.5vw'}}>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={orange}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Company Name</label>
          <Input type="text"  className={inputstyle} placeholder="" id="companyname"
          value={this.state.companyname}
          onChange={this.handlecompanynameChange}
          pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
          title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"
           required/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Department</label>
  <Input type="text"  className={inputstyle} placeholder="" id="dept"
  value={this.state.department}
  onChange={this.handledepartmentChange}
  pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
  title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"
   required/>
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Designation</label>
            <Input type="text"  className={inputstyle} placeholder="" id="desg"
            value={this.state.designation}
            onChange={this.handledesignationChange}
            pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
            title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"
             required/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Reporting Mananger</label>
          <Input type="text"  className={inputstyle} placeholder="" id="report"
          value={this.state.reportingmanager}
          onChange={this.handlereportingmanagerChange}
          pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
          title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"       pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
                 title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"
          required/>
          </div>
          </div>

        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Date Of Joining</label>
            <Input type="date"  className={inputstyle} placeholder="" id="doj"
            value={this.state.dob1}
            onChange={this.handledobchange1}


             required/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Date of Releiving</label>
          <Input type="date"  className={inputstyle} placeholder="" id="dor"
          value={this.state.dob2}
          onChange={this.handledobchange2}

          required/>
          </div>
          </div>
            {isEnabled ?
              <Link to="/EmpDocs">
                <button  class="btn btn-primary" onClick={(e) => this.addJob(e)}>SAVE</button>
                </Link> :
                  <button  class="btn btn-primary">SAVE</button>

            }
</Form>

       </div>
       <Footer/>
       </div>

     );
   }
 }