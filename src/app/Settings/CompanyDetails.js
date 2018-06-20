import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {Link} from "react-router-dom";
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon';
import {displayContainer,hrStyle,pageHeading,buttonStyle,savebtn,arrowIcon,orange} from "../Layout.css";
import {dateStyle,labelStyle1,hyperLinkEmployee,inputstyletextarea,slidertext,inputstyle} from "../employee/LayoutEmployee.css";
import {formStyle,floatRight} from "./LayoutSettings.css";
  import {Header} from  "../Header";
  import {Footer} from "../Footer";

 export class CompanyDetails extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       controlledDate:null
     };
   }
   handleChange = (event,date) => {
     this.setState({
       controlledDate: date,
     });
   };
   render() {
     return(
       <div>
       <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Organization Details</p>
<hr className={hrStyle}/>
<Row>
<Col>
      <Form className={formStyle}>

        <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Organization Name</label>
          <input id={inputstyle} type="text" class="form-control" name=""  placeholder="" />
        </div>
        <div class="col-md-5 mb-3">

          <label className={labelStyle1}>Website URL</label>
          <input id={inputstyle} type="text" name="" class="form-control"  placeholder="" />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Financial Year Start Month</label>
          <MuiThemeProvider>
    <DatePicker value={this.state.controlledDate}
     onChange={this.handleChange}
     underlineStyle={{display: 'none'}} className={dateStyle} style={{border:'1px solid #D0D3D4'}}
     textFieldStyle={{position:'relative',bottom:'0.6vw',color:'grey'}}/>
        </MuiThemeProvider>
        </div>
      <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Business Type</label>
      <select id="" class="form-control" id={inputstyle}>
      <option>Full Time</option>
      <option>Part Time</option>
      </select>
      </div>
      </div>
        <div class="form-row">
        <div class="col-md-12 mb-3">
          <label className={labelStyle1}>Address</label>
          <input id={inputstyletextarea} type="textarea" rows="3" class="form-control" name=""  placeholder="" />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
         <label className={labelStyle1}>State</label>
         <select class="form-control" id={inputstyle}>
         <option>Telangana</option>
         <option>AP</option>
         </select>
       </div>
     <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Country</label>
      <select id="" class="form-control" id={inputstyle}>
      <option>India</option>
      <option>England</option>
     </select>
    </div>
  </div>
<FormGroup>
<Label className={labelStyle1}>Description</Label>
<Input id={inputstyletextarea} type="textarea" name="text"  />
 </FormGroup>
  <div class="form-row">
    <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Phone Number</label>
      <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
    </div>
    <div class="col-md-5 mb-3">
      <label className={labelStyle1}>Email ID</label>
      <input type="text" class="form-control" id={inputstyle} placeholder="" />
    </div>
    </div>
           </Form>
           </Col>
           <Col xs="2">
           <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
           <p style={{marginTop:'3vw'}}>
           <Link to="/CompanyDetails" className={orange}>Organization Details</Link></p>
           <p><Link to="/AttendanceSettings" className={hyperLinkEmployee}>Attendance</Link></p>
           <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
           <p><Link to="/AddComponent" className={hyperLinkEmployee}>Salary Cmponents</Link></p>
           </div>

              </Col>
              </Row>

        <p className={pageHeading} style={{marginTop:'2vw'}}>Registration Details</p>
        <hr className={hrStyle}/>
<Form className={formStyle}>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label className={labelStyle1}>Registration Number</label>
              <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

            </div>
            <div class="col-md-4 mb-3">
              <label className={labelStyle1}>PAN</label>
              <input type="text" class="form-control" id={inputstyle} placeholder="" />
            </div>
            </div>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label className={labelStyle1}>TAN</label>
                <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
              </div>
              <div class="col-md-4 mb-3">
                <label className={labelStyle1}>TAN Circle Number</label>
                <input type="text" class="form-control" id={inputstyle} placeholder="" />
              </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label className={labelStyle1}>TDS Location</label>
                  <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                </div>
                <div class="col-md-4 mb-3">
                  <label className={labelStyle1}>Form 16 Signatory</label>
                  <input type="text" class="form-control" id={inputstyle} placeholder="" />
                </div>
                </div>
                        <p><Link to="/AttendanceSettings"><button type="button" class="btn btn-outline-warning" id={savebtn} >
                        Save</button></Link>
                        <span className={floatRight} style={{position:'relative',top:'0.85vw'}}>
                        <Link to="/AttendanceSettings" className={hyperLinkEmployee}>
                        <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIcon} /></button>
                        </Link>
                        </span>

                        </p>

          </Form>
       </div>
       <Footer/>
       </div>
     );
   }
 }
