import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import {displayContainer,pageHeading,hrStyle,buttonStyle} from "../Layout.css";
import {labelStyle1,formStyle,inputstyle} from "../employee/LayoutEmployee.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Process extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Process</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <div class="form-row">
       <div class="col-md-5 mb-3">
       <label className={labelStyle1}>Payment Type</label>
       <select id="" class="form-control" id={inputstyle}>
       <option>Monthly</option>
       <option>Weekly</option>
       <option>Yearly</option>
       <option>Quarterly</option>
       </select>
       </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Select Period</label>
<select id="" class="form-control" id={inputstyle}>
<option></option>
</select>
</div>
  </div>
  <div class="form-row">
  <div class="col-sm-5">
  <label className={labelStyle1}>Select Employees</label>
  <select id="" class="form-control" id={inputstyle}>
  <option>Based on Designation</option>
  <option>Based on Department</option>
  </select>
  </div>
  </div>
          </Form>
    <button className="btn btn-outline-warning" style={{marginRight:'0.5vw'}}>Process</button>
    <button className="btn btn-outline-warning">Cancel</button>
      </div>
      <Footer/>
      </div>
    );
  }
}
