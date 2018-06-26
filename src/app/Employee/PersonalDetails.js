import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,arrowRight2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIcon,hrStyle,pageHeading,orange} from "../Layout.css";
import {inputstyle,formStyle,skipstyle,inputstyletextarea,
labelStyle1,hyperLinkEmployee,slideremp,sliderline,sliderlineorange,slidertext} from "./LayoutEmployee.css";
  import {Header} from "../Header";
  import {Footer} from "../Footer";
  import $ from 'jquery';
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

var URL = 'http://localhost:3033/';
export class PersonalDetails extends React.Component{
   registerData(){
    var obj = new Object();

    alert($("#fathersname").val());
    obj["fathersname"] = $("#fathersname").val();
    obj["dob"] = $("#dob").val();
    obj["gender"] = $("#gender").val();
    obj["phone"] = $("#phone").val();
    obj["add"] = $("#add").val();
    obj["nationality"] = $("#nationality").val();
    obj["status"] = $("#status").val();
    obj["contactname"] = $("#contactname").val();
    obj["emergencyphone"] = $("#emergencyphone").val();
    obj["relationship"] = $("#relationship").val();
    obj["email"] = $("#email").val();
    console.log(obj)
    $.ajax({
        url: URL + '/PersonalDetails',
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
  render() {
    return(
      <div>
      <Header/>

       <div className={displayContainer}>
<p className={pageHeading}>Personal Details</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
      <Form className={formStyle} >
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Fathers Name</label>
          <input type="text" class="form-control"  name= "fathersname" id="fathersname" placeholder="" required/>

        </div>
        <div class="col-md-5 mb-3" style={{marginRight:'3vw'}}>
          <label className={labelStyle1}>DOB</label>
          <input type="text" class="form-control" id="dob" name="dob"  placeholder="" />
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Gender</label>
            <input type="text" class="form-control" id="gender" name="gender" placeholder="" />
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Phone</label>
            <input type="text" class="form-control" id="phone" name="phone" placeholder="" />
          </div>
          </div>
          <div class="form-group">
      <label className={labelStyle1}>Permannet Address</label>
      <textarea class="form-control" id={inputstyletextarea} id="add" name="add"rows="3"></textarea>
    </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Nationality</label>
            <input type="text" class="form-control" id="nationality" name="nationality"  placeholder=""/>

          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Marital Status</label>
            <input type="text" class="form-control"id="status" name="status" placeholder="" />
          </div>
          </div>
           </Form>
        <p className={pageHeading}>Emergency Contact Details</p>
        <Form className={formStyle} >
          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Contact Person Name</label>
              <input type="text" class="form-control" id="contactname" name="contactname"  placeholder=""/>
            </div>
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Phone</label>
              <input type="text" class="form-control" id="emergencyphone" name="emergencyphone" placeholder="" />
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <label className={labelStyle1}>Relationship</label>
                  <input type="text" class="form-control"  id="relationship"name="relationship" placeholder=""/>
                </div>
                <div class="col-md-5 mb-3">
                  <label className={labelStyle1}>Email ID</label>
                  <input type="text" class="form-control" id="email"name="email"  placeholder="" />
                </div>
                </div>
          </Form>
          </Col>
          <Col xs="2">  <div  style={{fontSize:'0.9vw',position:'relative',bottom:'-2.5vw'}} id={slidertext}>
            <p >

            <Link to="/PersonalDetails" className={orange} >
      Personal Details
            </Link></p>
            <p>
            <Link to="/ProfessionalDetails" className={hyperLinkEmployee}>

            Professional Details
            </Link>
            </p>
            <p><Link to="/BankDetails" className={hyperLinkEmployee}>

            Bank Details</Link></p>
            <p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
            <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
            <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
            </div>
          </Col>
          </Row>
    <Link to="/ProfessionalDetails" >  <button type="button" onClick={(e) => this.registerData(e)} class="btn btn-outline-warning" >
             Save</button></Link>
          <Link to="/ProfessionalDetails"  id={skipstyle}>Skip</Link>
          <span className={floatRight}>
          <Link to="/ProfessionalDetails" className={hyperLinkEmployee}>
          <button type="submit" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIcon} /></button>
          </Link>
          </span>
          <div>
          </div>
       </div>
       <Footer/>
       </div>
     );
   }
 }
