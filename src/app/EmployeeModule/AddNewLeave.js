import React from "react";
import {labelStyle1,inputstyle,overtimePay,inputstyletextarea,radiocheck,dateStyle} from "../employee/LayoutEmployee.css";
import {formStyle} from "../employee/LayoutSettings.css";
import {Form,FormGroup,Label,Input,Row} from "reactstrap";
import {Link} from "react-router-dom";
import {savebtn} from "../Layout.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField,SelectField,MenuItem,Slider,DatePicker} from 'material-ui';

export class AddNewLeave extends React.Component{
  render(){
    return(
      <div>
      <Form className={formStyle}>
        <div class="form-row">
              <div class="col-md-5 mb-3">
               <label className={labelStyle1}>Employee ID</label>
               <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
              </div>
              <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Employee Name</label>
              <input type="text" class="form-control" id={inputstyle} placeholder="" />
              </div>
        </div>
        <div class="form-row">
              <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Leave Name</label>
              <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
              </div>
              <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Leave Type</label>
              <input type="text" class="form-control" id={inputstyle} placeholder="" />
              </div>
        </div>
        <div class="form-row">
                      <div class="col-md-5 mb-3">
                        <label className={labelStyle1}>Start Date</label>
                        <MuiThemeProvider>
                        <DatePicker hintText="date of joining"
                        className={dateStyle}
                        underlineStyle={{display:'none'}}
                        textFieldStyle={{position:'relative',bottom:'0.6vw',color:'lightgray'}}
                        style={{border:'1px solid #D0D3D4',width:'97%',backgroundColor:'white'}} />
                        </MuiThemeProvider>
                     </div>
                     <div class="col-md-5 mb-3">
                       <label className={labelStyle1}>End Date</label>
                       <MuiThemeProvider>
                       <DatePicker hintText="date of joining"
                       className={dateStyle}
                       underlineStyle={{display:'none'}}
                       textFieldStyle={{position:'relative',bottom:'0.6vw',color:'lightgray'}}
                       style={{border:'1px solid #D0D3D4',width:'97%',backgroundColor:'white'}} />
                       </MuiThemeProvider>
                    </div>
          </div>
        <FormGroup>
             <Label className={labelStyle1}>Reason</Label>
             <Input id={inputstyletextarea} type="textarea" name="text" />
           </FormGroup>

           </Form>
        <Link to="/Leaves">
        <button className="btn btn-outline-warning" id={savebtn}>
        Save</button></Link>
       </div>



    );
  }
}
