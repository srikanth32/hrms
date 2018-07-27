import React  from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';

import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import {arrowRight2,arrowLeft2 } from 'react-icons-kit/icomoon';
import {labelStyle1,hyperLinkEmployee,overtimePay,skipstyle,inputstyle,inputstyletextarea,slidertext,radiocheck} from "../employee/LayoutEmployee.css";
import {displayContainer,pageHeading,hrStyle,arrowIcon,orange,floatRight2} from "../Layout.css";
import {formStyle,hyperLink,floatRight,
  radiodiv,timeStyle} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import $ from 'jquery';

var URL = 'http://localhost:3033/';
export class AttendanceSettings extends React.Component {
  addAttendance(){
    var obj = new Object();

    obj["shiftname"] = $("#shiftname").val();
    obj["start"] = $("#start").val();
    obj["end"] = $("#end").val();
    obj["desc"] = $("#desc").val();
    obj["late"] = $("#late").val();
    obj["overtime"] = $("#overtime option:selected").text();
    obj["status"] =$('input:radio[name=status]:checked').val();
    //obj["monthlyctc"] = $("#monthlyctc").val();
    $.ajax({
      url: URL + '/AttendanceSettings',
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
   super();
   this.state = {
     shiftname:'',
     starttime:'',
     endtime:'',
     description:'',
     latetime:'',
     overtime:'',
     error1:false,
     showError1:false
   };
 }

 handleShiftChange = (evt) => {
   this.setState({
     shiftname: evt.target.value,
     showError1:true
   });
 }
 handleStartChange = (evt) => {
   this.setState({
     starttime : evt.target.value

    });
 }
 handleEndChange = (evt) => {
   this.setState({
     endtime : evt.target.value,
     error1:true
    });
 }
 handleDescriptionChange = (evt) => {
   this.setState({
     description: evt.target.value
   });
 }
 handleLateChange = (evt) => {
   this.setState({
     latetime: evt.target.value,
     showError1:true
   });
 }
 handleOverChange = (evt) => {
   this.setState({
     overtime : evt.target.value

    });
 }
  render() {


    const {shiftname,starttime,endtime,description,latetime,overtime} = this.state;
    var re1 = new RegExp("^([a-zA-Z]{2,25}(?: [a-zA-Z]+){0,2})$");

    const isEnabled =
    re1.test(shiftname)&&
    description.length>0;

    return(


      <div>
      <Header/>
             <div className={displayContainer}>
      <p className={pageHeading}>Attendance</p>
      <hr className={hrStyle}/>
      <Row>
      <Col xs="10">
            <Form className={formStyle}>

            <div class="form-row">
            <div class="col-md-10 mb-3">
                <label className={labelStyle1}>Shift Name</label>
        <Input type="text" className={inputstyle} placeholder="" value={this.state.shiftname} id="shiftname"
        onChange={this.handleShiftChange} pattern="[a-zA-Z]{5,25}" title="name must be letters only" required />
                </div>
                </div>
              <div class="form-row">
              <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Work Start Time</label>
              <Input className={inputstyle} type="time" name="text" id="start"
          value={this.state.starttime} onChange={this.handleStartChange} required  />
             </div>
             <div class="col-md-5 mb-3">
             <label className={labelStyle1}>Work End Time</label>
             <Input className={inputstyle} type="time" name="text" id="end"
           value={this.state.endtime} onChange={this.handleEndChange} required  />
            </div>
            </div>
              <FormGroup>
                   <Label className={labelStyle1}>Description</Label>
                   <Input className={inputstyletextarea} type="textarea" name="text" pattern="[a-zA-Z]{5,25}" id="desc"
                   value={this.state.description} onChange={this.handleDescriptionChange} required  />
                 </FormGroup>
                 <div class="form-row">
                 <div class="col-md-5 mb-3">
                 <label className={labelStyle1}>Late Mark After Time</label>
                 <Input className={inputstyle} type="time" name="text" id="late"
             value={this.state.latetime} onChange={this.handleLateChange} required  />
                </div>
                <div class="col-md-5 mb-3">
                 <label className={labelStyle1}>Over Time</label>
                 <Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" id="overtime"
                  value={this.state.overtime} onChange={this.handleOverChange}   required>
                 <option></option>
                      <option>Enable</option>
                      <option>Disable</option>
                    </Input>
               </div>
               </div>
               <Row className={overtimePay}>
               <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Status</p>


            <div style={{marginLeft:'4vw'}}>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" id="gridRadios1" value="Active" checked
              />
              <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
                Active
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" id="gridRadios2" value="InActive"/>
              <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
              InActive
              </label>
            </div>
            </div>
            </Row>
            {isEnabled ? <Link to="/AddLeave"> <button  class="btn btn-primary" onClick={(e) => this.addAttendance(e)}>SAVE</button> </Link> :
            <button class="btn btn-primary">SAVE</button>
              }
                 </Form>
                 </Col>
                 <Col xs="2">
                 <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
                 <p style={{marginTop:'3vw'}}>
                 <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
                 <p><Link to="/AttendanceSettings" className={orange}>Attendance</Link></p>
                 <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
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