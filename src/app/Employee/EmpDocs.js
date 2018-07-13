import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2, plus  } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {hyperLinkEmployee,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {displayContainer,arrowIconR,arrowIconL,skip1,savebtn1,floatRight2,hrStyle,pageHeading,orange,bankdiv,floatRight} from "../Layout.css";
import {inputstylefile,formStyle,enableBtn,disableBtn} from "./LayoutSettings.css";
  import {Header} from "../Header";
  import {Footer} from "../Footer";

export class EmpDocs extends React.Component{
  render() {
    return(
<div>
<Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Employee Documents</p>
<hr className={hrStyle}/>
<Form className={formStyle}>

<div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
<p style={{marginTop:'1.5vw'}}>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={orange}>Employee Documents</Link></p>
</div>

      <Row>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Document Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
        <label className={labelStyle1}></label>
        <input type="file" class="form-control" id={inputstyle} placeholder="" />


        </div>

        </Row>


</Form>

<div className={bankdiv} style={{marginTop:'10vw'}}>

<Link to="/ViewEmployee">
<button type="button" class="btn btn-outline-warning"  id={savebtn1}>Submit</button>
</Link>
<Link to="/ViewEmployee" id={skip1}>Skip </Link>

             <span className={floatRight2}>


             <Link to="/JobHistory" className={hyperLinkEmployee} >
             <button type="button" class="btn btn-light">
             <Icon icon={arrowLeft2} className={arrowIconL} size={14}/>Prev</button>
               </Link>



                </span>
</div>
       </div>
       <Footer/>
       </div>
     );
   }
}