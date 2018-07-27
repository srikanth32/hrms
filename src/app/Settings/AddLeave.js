import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';

import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle,savebtn,arrowIcon,orange} from "../Layout.css";
import {overtimePay,labelStyle1,hyperLinkEmployee,inputStyle,inputstyletextarea,skipstyle,inputstyle,slidertext,radiocheck} from "../employee/LayoutEmployee.css";
import {labelStyle,formStyle,
floatRight,radiodiv} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import $ from 'jquery';

var URL = 'http://localhost:3033/';
export class AddLeave extends React.Component{
  addLeave(){
    var obj = new Object();

    obj["leavename"] = $("#leavename").val();
    obj["count"] = $("#count").val();
    obj["maxleaves"] = $("#maxleaves").val();
    obj["desc"] = $("#desc").val();
    obj["probation"] = $("#probation option:selected").text();
    obj["halfday"] = $("#halfday option:selected").text();
    obj["status"] =$('input:radio[name=status]:checked').val();
    //obj["monthlyctc"] = $("#monthlyctc").val();
    $.ajax({
      url: URL + '/AddLeave',
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
constructor(props){
  super();
  this.state = {
    leavename:'',
    totalcount:'',
    maxleave:'',
    description:'',
    probation:'',
    halfday:'',
    error1:false,
    showError1:false
  };
}

handleLeaveChange = (evt) => {
  this.setState({
    leavename: evt.target.value,
    showError1:true
  });
}
handleTotalChange = (evt) => {
  this.setState({
    totalcount : evt.target.value

   });
}
handleMaxleaveChange = (evt) => {
  this.setState({
    maxleave : evt.target.value,
    error1:true
   });
}
handleDescriptionChange = (evt) => {
  this.setState({
    description: evt.target.value
  });
}
handleProbationChange = (evt) => {
  this.setState({
    probation: evt.target.value,
  });
}
handleHalfdayChange = (evt) => {
  this.setState({
  halfday : evt.target.value

   });
}

  render() {

    const {leavename,totalcount,maxleave,description,probation,halfday} = this.state;
    var re1 = new RegExp("^([a-zA-Z]{2,25}(?: [a-zA-Z]+){0,2})$");

    const isEnabled =
    re1.test(leavename)&&
    description.length>0&&
    totalcount.length>0&&
    maxleave.length>0&&
    probation.length>0&&
    halfday.length>0;


    return(
      <div>
      <Header/>
      <div className={displayContainer}>

<p className={pageHeading}>Leaves</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
     <Form className={formStyle}>

       <div class="form-row">
       <div class="col-md-10 mb-3">

         <label className={labelStyle1}>Leave Name</label>
           <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}" id="leavename"
           value={this.state.leavename} onChange={this.handleLeaveChange} title="Leave Name Should be letters Only"required/>
         </div>
         </div>

       <div class="form-row">
         <div class="col-md-5 mb-3">
           <label className={labelStyle1}>Total Count</label>
            <Input type="text"  className={inputstyle} placeholder="" pattern="[0-9]{1,25}" id="count"
            value={this.state.totalcount} onChange={this.handleTotalChange}  title="use numbers only" required />

         </div>
         <div class="col-md-5 mb-3">
           <label className={labelStyle1}>Maximum Leaves Per Month</label>
          <Input type="text"  className={inputstyle} placeholder="" pattern="[0-9]{2,25}" id="maxleaves"
          value={this.state.maxleave} onChange={this.handleMaxleaveChange}  title="use numbers only" required />

         </div>
         </div>
       <FormGroup>
            <Label className={labelStyle1}>Description</Label>
            <Input className={inputstyletextarea} type="textarea" name="text" pattern="[a-zA-Z0-9]{5,25}" id="desc"
            value={this.state.description} onChange={this.handleDescriptionChange} required/>
          </FormGroup>
           <div class="form-row">
           <div class="col-md-5 mb-3">
           <label className={labelStyle1}>In Probation</label>
           <Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" id="probation"
           value={this.state.probation} onChange={this.handleProbationChange} required>
           <option></option>
       <option>Yes</option>
       <option>No</option>

     </Input>
           </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Half Day</label>
<Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" id="halfday"
value={this.state.halfday} onChange={this.handleHalfdayChange} required>
       <option></option>
       <option>Approved</option>
       <option>Rejected</option>

     </Input>
</div>
      </div>
      <Row className={overtimePay}>
      <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Status</p>
   <div  style={{marginLeft:'3vw'}}>
   <div class="form-check">
     <input class="form-check-input" type="radio" name="status" id="gridRadios1" value="Active" checked/>
     <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
       Active
     </label>
   </div>
   <div class="form-check">
     <input class="form-check-input" type="radio" name="status" id="gridRadios2" value="InActive" />
     <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
     InActive
     </label>
   </div>
   </div>
      </Row>
      {isEnabled ? <Link to="/AddComponent"> <button  class="btn btn-primary" onClick={(e) => this.addLeave(e)}>SAVE</button> </Link> :
      <button class="btn btn-primary">SAVE</button>
        }
          </Form>
          </Col>
          <Col>
          <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
          <p><Link to="/AttendanceSettings" className={hyperLinkEmployee}>Attendance</Link></p>
          <p><Link to="/AddLeave" className={orange}>Leave Types</Link></p>
          <p><Link to="/AddComponent" className={hyperLinkEmployee}>Salary Cmponents</Link></p>
          </div>
          </Col>
          </Row>


      </div>
      <Footer/>
      </div>
    );
  }
}