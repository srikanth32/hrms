import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField,SelectField,MenuItem,Slider,DatePicker} from 'material-ui';
import Icon from 'react-icons-kit';

 import { longRight } from 'react-icons-kit/entypo/longRight';
import { arrowRight2, arrowLeft2,plus } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIconR,arrowIconL,pageHeading,hrStyle,buttonStyle,floatRight2,savebtn1,orange,skip1} from "../Layout.css";
import {inputstyle,formStyle,inputStyle,hyperLinkEmployee,
  inputStyle1,labelStyle1,enableBtn,disableBtn,skipstyle,
  overtimeDiv,slideremp,dateStyle,overtimePay,enableBtnactive,disableBtnactive,radiocheck,slidertext} from "./LayoutEmployee.css";
  import {timeStyle} from "../settings/LayoutSettings.css";
  import {Header} from "../Header";
  import {Footer} from "../Footer";
export class ProfessionalDetails extends React.Component{
  constructor(props){
    super(props);
  this.enabletest = this.enabletest.bind(this);
  this.disabletest =this.disabletest.bind(this);
    this.state={
      enable:false,
      disable:false
    };
  }
  enabletest(){
    this.setState({
      enable:true,
      disable:false
    })
  }
  disabletest(){
    this.setState({
      disable:true,
      enable:false
    })
  }
  enablefunc(){
    if(this.state.enable){
      return <div><div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
        style={{marginTop:'0.7vw'}}/>
        <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.4vw',marginLeft:'1vw'}} id={radiocheck}>
          On Holidays
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
        <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}} id={radiocheck}>
        On Week Off
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
        <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.4vw',marginLeft:'1vw'}} id={radiocheck}>
         Daily
        </label>
      </div></div>;
    }
  }
  disablefunc(){
    if(this.state.disable){
      return <div></div>;
    }
  }
  render() {
    var enable = this.enablefunc();
    var disable =this.disablefunc();
    return(
      <div>
      <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Professional Details</p>
<hr className={hrStyle}/>
<Row>
  <Col xs="10">
      <Form className={formStyle}>

      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>First Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Last Name</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-10 mb-3">
        <label className={labelStyle1}>Email ID</label>
        <input type="text" class="form-control" id={inputstyle} placeholder=""/>
        </div>
        </div>

        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Employee ID</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Designation</label>
          <select id="" class="form-control" id={inputstyle}>
          <option>Manager</option>
          <option>Admin</option>
          </select>
          </div>
          </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
        <label className={labelStyle1}>Department</label>
        <select id="" class="form-control" id={inputstyle}>
        <option>Information Technology</option>
        <option>Marketing</option>
        <option>Finance</option>
        </select>
        </div>
        <div class="col-md-5 mb-3">
        <label className={labelStyle1}>Employment Type</label>
        <select id="" class="form-control" id={inputstyle}>
        <option>Full Time</option>
        <option>Part Time</option>
        </select>
        </div>
          </div>
          <div class="form-row">
          <div class="col-md-10 mb-3">
          <label className={labelStyle1}>Reporting Manager</label>
          <input type="text" class="form-control" id={inputstyle} placeholder=""/>
          </div>
          </div>
          <div class="form-row">
            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Date of Joining</label>
              <MuiThemeProvider>
        <DatePicker hintText="date of joining"
       className={dateStyle}
       underlineStyle={{display:'none'}}
       textFieldStyle={{position:'relative',bottom:'0.6vw',color:'lightgray'}}
       style={{border:'1px solid #D0D3D4'}} />
            </MuiThemeProvider>
            </div>
            <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Location</label>
            <select id="" class="form-control" id={inputstyle}>
            <option>Hyderabad</option>
            <option>Banglore</option>
            </select>
            </div>
            </div>
           </Form>

    <Row className={overtimePay}>
    <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Overtime Pay</p>
    <span onClick={this.enabletest.bind(this)}>
   {this.state.enable?
    <span><button type="btn btn-light" className={enableBtnactive} >Enable</button></span>:
    <span><button type="btn btn-light" className={enableBtn} >Enable</button></span>
   }

    </span>
    <span onClick={this.disabletest.bind(this)}>
   {this.state.disable?
    <span><button type="button" className={disableBtnactive}>Disable</button></span>:
    <span><button type="btn btn-light" className={disableBtn}>Disable</button></span>
   }

    </span>


 </Row>
 <div className={overtimeDiv}>
{enable}
{disable}
<Link to="/BankDetails">
<button type="button" class="btn btn-outline-warning"  id={savebtn1}>Save</button>
</Link>
<Link to="/BankDetails" id={skip1}>Skip </Link>

             <span className={floatRight2}>


             <Link to="/PersonalDetails" className={hyperLinkEmployee}>
             <button type="button" class="btn btn-light">
             <Icon icon={arrowLeft2} className={arrowIconL} size={14} />Prev </button>
               </Link>


             <Link to="/BankDetails" className={hyperLinkEmployee} >
             <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIconR} /></button>
             </Link>
                </span>
 </div>


          </Col>
          <Col>
          <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
          <p><Link to="/ProfessionalDetails" className={orange}>Professional Details</Link></p>
          <p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
          <p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
          <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
          <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
          </div>




             </Col>
             </Row>
       </div>
       <Footer/>
       </div>
     );
   }
}