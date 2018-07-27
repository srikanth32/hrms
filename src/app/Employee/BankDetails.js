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
import $ from 'jquery';

var URL = 'http://localhost:3033/';
export class BankDetails extends React.Component{
  addBank(){
    var obj = new Object();

    obj["accname"] = $("#accname").val();
    obj["bankname"] = $("#bankname").val();
    obj["branch"] = $("#branch").val();
    obj["accno"] = $("#accno").val();
    obj["ifsc"] = $("#ifsc").val();
    obj["acctype"] = $("#acctype").val();
    obj["annualctc"] = $("#annualctc").val();
    obj["monthlyctc"] = $("#monthlyctc").val();
    $.ajax({
      url: URL + '/BankDetails',
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
    this.nextmanual=this.nextmanual.bind(this);
    this.nextauto=this.nextauto.bind(this);

    this.state = {
      manualcomponents:false,
      autocomponents:false,
      AnnualCTC:'',
      accountholdername:'',
      bankname:'',
      branchname:'',
      accounttype:'',
      accountno:'',
      ifsccode:'',
      annualctc:'',
      monthlyctc:''
    };
  }
  handleaccountholdernameChange = (evt) =>{
    this.setState({
      accountholdername:evt.target.value
    });
  }
  handlebanknameChange = (evt) =>{
this.setState({
  bankname:evt.target.value
});
  }
  handlebranchnameChange = (evt) =>{
    this.setState({
      branchname:evt.target.value
    });
  }
  handleaccounttypeChange = (evt) =>{
    this.setState({
      accounttype:evt.target.value
    })
  }
  handleaccountnoChange = (evt) =>{
    this.setState({
      accountno:evt.target.value
    })
  }
  handleifsccodeChange = (evt) =>{
    this.setState({
      ifsccode:evt.target.value
    })
  }
  handleannualctcChange = (evt) =>{
    this.setState({
      annualctc:evt.target.value
    })
  }
  handlemonthlyctcChange = (evt) =>{
    this.setState({
      monthlyctc:evt.target.value
    })
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
        <Manual/>
      );
    }
  }
    autodisplay(){
      if(this.state.autocomponents){
        return(
        <Auto/>
        );
      }
    }

  render() {
var manualcomponents = this.manualdisplay();
var autocomponents = this.autodisplay();
const { accountholdername,bankname,branchname,accounttype,accountno,ifsccode,annualctc,monthlyctc } = this.state;

var re1 = new RegExp("^([a-zA-Z]{5,25}(?: [a-zA-Z]+){0,2})$");
var re2 = new RegExp("[0-9]{12}$");

var re4 = new RegExp("[0-9]{4,10}$");
var re3 = new RegExp("^[A-Za-z]{4}[0-9]{6,7}$");

const isEnabled =
      re1.test(accountholdername) &&
      re1.test(bankname) &&
      re1.test(branchname) &&
      re1.test(accounttype) &&
      re2.test(accountno) &&
      re3.test(ifsccode) &&
      re4.test(annualctc) &&
      re4.test(monthlyctc);

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
          <Input type="text"  className={inputstyle} id="accname"
          value={this.state.acountholder}
          onChange={this.handleaccountholdernameChange}
          pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
          title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"

           required />
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Bank Name</label>
    <Input type="text"  className={inputstyle} id="bankname"
    value={this.state.bankname}
    onChange={this.handlebanknameChange}
    pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
    title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"

    required/>
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Branch Name</label>
  <Input type="text"  className={inputstyle} id="branch"
  value={this.state.branchname}
  onChange={this.handlebranchnameChange}
  pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
  title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"

   required />
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Account Number</label>
            <Input type="text"  className={inputstyle} placeholder="12 digit A/c no" id="accno"
            value={this.state.accountno}
            onChange={this.handleaccountnoChange}
            pattern="[0-9]{12}$"
            title="Account should be 12 digits"

              required/>
          </div>
          </div>
        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>IFSC Code</label>
        <Input type="text"  className={inputstyle}  placeholder="IFSC Code" id="ifsc"
        value={this.state.ifsccode}
        onChange={this.handleifsccodeChange}
        pattern="^[A-Za-z]{4}[0-9]{6,7}$"
        title="IFSC should start with letters(4) not > 11 digits"

         required />
          </div>
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Account Type</label>
          <Input type="text"  className={inputstyle} placeholder="Type of Account" id="acctype"
          value={this.state.accounttype}
          onChange={this.handleaccounttypeChange}
          pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
          title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"
           required/>
          </div>
          </div>

<p className={pageHeading} style={{marginTop:'2vw'}}>Salary Component</p>

<div class="form-row">
  <div class="col-md-3 mb-3">
    <label className={labelStyle1}>Annual CTC</label>
    <Input type="text"  className={inputstyle} id="annualctc"
    value={this.state.annualctc}
    onChange={this.handleannualctcChange}
    pattern="^[0-9]{4,25}$"
    title="should not have characters shoudn't be < 4 > 25"


     required/>
  </div>
  <div class="col-md-3 mb-3">
    <label className={labelStyle1}>Monthly CTC</label>
  <Input type="text"  className={inputstyle} id="monthlyctc"
  value={this.state.monthlyctc}
  onChange={this.handlemonthlyctcChange}
  pattern="^[0-9]{4,25}$"
  title="should not have characters shoudn't be < 4 > 25"
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

{isEnabled ?
  <Link to="/LoginInfo">
  <button  class="btn btn-primary" onClick={(e) => this.addBank(e)}>SAVE</button>
  </Link> :
  <button class="btn btn-primary">SAVE</button>
}

            </Form>

       </div>
       <Footer/>
       </div>
     );
   }
 }