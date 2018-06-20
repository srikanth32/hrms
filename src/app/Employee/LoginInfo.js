import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,Slider,TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import {arrowRight2,arrowLeft2,plus } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,arrowIconR,arrowIconL,savebtn1,pageHeading,hrStyle,buttonStyle,orange,floatRight2,skip1,bankdiv} from "../Layout.css";
import {hyperLinkEmployee,slideremp,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {formStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class LoginInfo extends React.Component{
  render() {
    return(
      <div>
      <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Login Information</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
  <Form className={formStyle}>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Email ID</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-10 mb-3">
          <label className={labelStyle1}>Auto Generated Password</label>
          <input id={inputstyle} type="text" class="form-control" name="" placeholder="" />
          </div>
          </div>

      </Form>

      </Col>
      <Col>
      <div className={floatRight} style={{fontSize:'0.9vw',marginTop:'2.5vw'}} id={slidertext}>
      <p>
      <Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
      <p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
      <p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
      <p><Link to="/LoginInfo" className={orange}>Login Information</Link></p>
      <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
      <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
      </div>

         </Col>
         </Row>
      <div className={bankdiv}>

      <Link to="/JobHistory">
      <button type="button" class="btn btn-outline-warning"  id={savebtn1}>Invite</button>
      </Link>
      <Link to="/JobHistory" id={skip1}>Skip </Link>

                   <span className={floatRight2}>


                   <Link to="/BankDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
                   <button type="button" class="btn btn-light">
                   <Icon icon={arrowLeft2} className={arrowIconL} size={14} />Prev </button>
                     </Link>


                   <Link to="/JobHistory" className={hyperLinkEmployee}>
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
