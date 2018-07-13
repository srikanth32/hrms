import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';

import Icon from 'react-icons-kit';
import {arrowLeft2, arrowRight2,pencil,search} from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import { ic_create,ic_delete } from 'react-icons-kit/md';
import {displayContainer,arrowIconL,arrowIconR,tableinput,contentStyle1,right,hrStyle,pageHeading,savebtn1,skip1,floatRight2,orange,bankdiv} from "../Layout.css";
import {hyperLinkEmployee,btnManual,btnAuto,labelStyle1,slidertext,inputstyle} from "./LayoutEmployee.css";
import {formStyle,floatRight,enableBtn,disableBtn} from "./LayoutSettings.css";
import {Manual} from "./Manual";
import {Auto} from "./Auto";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class BankDetails extends React.Component{
  constructor(props) {
    super(props);
    this.nextmanual=this.nextmanual.bind(this);
    this.nextauto=this.nextauto.bind(this);


    this.state = {
      manualcomponents:false,
      autocomponents:false,
      AnnualCTC:''
    };
  }
  nextmanual(){
    this.setState({
  manualcomponents:!this.state.manualcomponents,
  autocomponents:false
    });
  }
  nextauto(){
    this.setState({
      autocomponents:!this.state.autocomponents,
      manualcomponents:false
    })
  }
  manualdisplay(){
    if(this.state.manualcomponents){
      return(
        <Auto/>
      );
    }
  }
    autodisplay(){
      if(this.state.autocomponents){
        return(
        <Manual/>
        );
      }
    }

  render() {
var manualcomponents = this.manualdisplay();
var autocomponents = this.autodisplay();
    return(
      <div>
      <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Bank Details</p>
<hr className={hrStyle}/>
  <Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw',marginTop:'1.5vw'}} id={slidertext}>
<p>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={orange}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>


      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Account Holder Name</label>
          <Input type="text"  className={inputstyle}  pattern="[A-Za-z]{1,25}$"  required />
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Bank Name</label>
    <Input type="text"  className={inputstyle} pattern="[A-Za-z]{1,25}$" required/>
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Branch Name</label>
  <Input type="text"  className={inputstyle} pattern="[A-Za-z]{1,25}$" required />
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Account Number</label>
            <Input type="text" pattern="^\d{12}$" className={inputstyle} placeholder="12 digit A/c no"  required/>
          </div>
          </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>IFSC Code</label>
        <Input type="text"  className={inputstyle} pattern="^\d{11}$" placeholder="IFSC Code" maxlength={11} required />
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Account Type</label>
          <Input type="text"  className={inputstyle} placeholder="Type of Account" maxlength={25} required/>
          </div>
          </div>

<p className={pageHeading} style={{marginTop:'2vw'}}>Salary Component</p>

<div class="form-row">
  <div class="col-md-3 mb-3">
    <label className={labelStyle1}>Annual CTC</label>
    <Input type="text"  className={inputstyle} pattern="^\d{1,10}$"


     required/>
  </div>
  <div class="col-md-3 mb-3">
    <label className={labelStyle1}>Monthly CTC</label>
  <Input type="text"  className={inputstyle}  maxlength={25}

  required/>
  </div>
  </div>
  <div class="form-inline">
<div class="form-group">
<label for="inputPassword6" className={labelStyle1}>Salary Break up</label>
<button class="btn btn-outline-warning" onClick={this.nextmanual.bind(this)} id={btnManual}>Manual</button>
<button class="btn btn-outline-warning" onClick={this.nextauto.bind(this)} id={btnAuto}>Auto</button>
</div>
</div>
{manualcomponents}
{autocomponents}
<div className={bankdiv}>

  <Input type="submit" value="SAVE"  className={savebtn1} style={{width:'20%'}}/>

<Link to="/LoginInfo" id={skip1}>Skip </Link>

             <span className={floatRight2}>


             <Link to="/ProfessionalDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
             <button type="button" class="btn btn-light">
             <Icon icon={arrowLeft2} className={arrowIconL} size={14} />Prev </button>
               </Link>


             <Link to="/LoginInfo" className={hyperLinkEmployee}>
             <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIconR} /></button>
             </Link>
                </span>
                </div>
            </Form>

       </div>
       <Footer/>
       </div>
     );
   }
 }