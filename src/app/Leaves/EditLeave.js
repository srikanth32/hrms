import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import {Link} from "react-router-dom";
import {Header1} from "../Header";
import {Footer} from "../Footer";
import {displayContainer,hrStyle,pageHeading,buttonStyle} from "../Layout.css";
import {inputstyle1,inputStyle,inputstyle,textAreaStyle,
dropDownInputStyle,buttonstyle,divStyle,hyperLink} from "../settings/LayoutSettings.css";
import {labelStyle1,formStyle} from "../employee/LayoutEmployee.css";

export class EditLeave extends React.Component{
  render() {

    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Leaves</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <div class="form-row">
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Employee ID</label>
           <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
         </div>
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Employee Name</label>
           <input type="text" class="form-control" id={inputstyle} placeholder="" />
         </div>
         </div>
            <div class="form-row">
              <div class="col-md-3 mb-3">
                <label className={labelStyle1}>Leave Name</label>
                <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
              </div>
              <div class="col-md-3 mb-3">
                <label className={labelStyle1}>Leave Type</label>
                <input type="text" class="form-control" id={inputstyle} placeholder="" />
              </div>
              </div>
                     <div class="form-row">
                       <div class="col-md-3 mb-3">
                         <label className={labelStyle1}>Start Date</label>
                         <input type="date" class="form-control"  id={inputstyle} placeholder=""/>
                       </div>
                       <div class="col-md-3 mb-3">
                         <label className={labelStyle1}>End Date</label>
                         <input type="date" class="form-control" id={inputstyle} placeholder="" />
                       </div>
                       </div>
       <FormGroup>
            <Label className={labelStyle1}>Reason</Label>
            <Input className={textAreaStyle} type="textarea" name="text" id="" />
          </FormGroup>
 <label className={labelStyle1}>Status</label>
<select id="" class="form-control" id={inputstyle} style={{width:'50%'}}>
<option>Approved</option>
<option>Rejected</option>
<option>Pending</option>
</select>
          </Form>
       <Link to="/Leaves">
       <button className="btn btn-outline-warning" id={buttonStyle}>
       Save</button></Link>
      </div>
      <Footer/>
      </div>
    );
  }
}
