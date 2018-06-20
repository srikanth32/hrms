import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2,plus } from 'react-icons-kit/icomoon/';
import {Link} from "react-router-dom";
import {displayContainer,arrowIconR,arrowIconL,pageHeading,hrStyle,buttonStyle,orange,skip1,bankdiv,floatRight2,savebtn1} from "../Layout.css";
import {hyperLinkEmployee,dateStyle,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {timeStyle} from "../settings/LayoutSettings.css";
import {formStyle,floatRight,enableBtn,disableBtn} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class JobHistory extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    value: new Date()
  }
}
  handleChange = (event, value) => {
   this.setState({value});
 }
  render() {
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
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Department</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Designation</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Reporting Mananger</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Start Date</label>
          <MuiThemeProvider>
    <DatePicker hintText="date of joining"
    underlineStyle={{display: 'none'}}
    textFieldStyle={{position:'relative',bottom:'0.75vw',color:'lightgray'}}
    className={dateStyle} style={{border:'1px solid #D0D3D4',height:'2vw'}}/>
        </MuiThemeProvider>
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>End Date</label>
          <MuiThemeProvider>
    <DatePicker hintText="date of joining"
    underlineStyle={{display: 'none'}}
    textFieldStyle={{position:'relative',bottom:'0.75vw',color:'lightgray'}}
    className={dateStyle} style={{border:'1px solid #D0D3D4',height:'2vw'}}/>
        </MuiThemeProvider>
        </div>
          </div>
</Form>
<div className={bankdiv}>

<Link to="/EmpDocs">
<button type="button" class="btn btn-outline-warning"  id={savebtn1}>ADD</button>
</Link>
<Link to="/EmpDocs" id={skip1}>Skip </Link>

             <span className={floatRight2}>


             <Link to="/LoginInfo" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
             <button type="button" class="btn btn-light">
             <Icon icon={arrowLeft2} className={arrowIconL} size={14} />Prev </button>
               </Link>


             <Link to="/EmpDocs" className={hyperLinkEmployee}>
             <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIconR} /></button>
             </Link>
                </span>
</div>


       </div>
       <Footer/>
       </div>

     );
   }
 }
