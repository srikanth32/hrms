import React  from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider,TimePicker} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import {arrowRight2,arrowLeft2 } from 'react-icons-kit/icomoon';
import {labelStyle1,hyperLinkEmployee,overtimePay,skipstyle,inputstyle,inputstyletextarea,slidertext,radiocheck} from "../employee/LayoutEmployee.css";
import {displayContainer,pageHeading,hrStyle,arrowIcon,orange,floatRight2} from "../Layout.css";
import {formStyle,hyperLink,floatRight,
  radiodiv,timeStyle} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
export class AttendanceSettings extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value24: null, valueStart: null,valueEnd: null,valueLateMark: null};
 }

 handleChangeTimePicker24 = (event, date) => {
   this.setState({value24: date});
 };

 handleChangeTimePickerStart = (event, date) => {
   this.setState({valueStart: date});
 };
 handleChangeTimePickerEnd = (event, date) => {
   this.setState({valueEnd: date});
 };
 handleChangeTimePickerLateMark = (event, date) => {
   this.setState({valueLateMark: date});
 };
  render() {

    return(
      <div>
      <Header/>
             <div className={displayContainer}>
      <p className={pageHeading}>Attendance</p>
      <hr className={hrStyle}/>
      <Row>
      <Col xs="10">
            <Form className={formStyle}>

            <div class="form-row">
            <div class="col-md-10 mb-3">
                <label className={labelStyle1}>Shift Name</label>
                <input id={inputstyle} type="text" name="" class="form-control"  placeholder="" />
                </div>
                </div>


              <div class="form-row">
              <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Work Start Time</label>
              <MuiThemeProvider>
              <TimePicker
           format="ampm"

           value={this.state.valueStart}
           onChange={this.handleChangeTimePickerStart}
           underlineStyle={{display: 'none'}}
           className={timeStyle}
           style={{border:'1px solid #D0D3D4'}}
         />
         </MuiThemeProvider>
             </div>
             <div class="col-md-5 mb-3">
             <label className={labelStyle1}>Work End Time</label>
             <MuiThemeProvider>
             <TimePicker
          format="ampm"

          value={this.state.valueEnd}
          onChange={this.handleChangeTimePickerEnd}
          underlineStyle={{display: 'none'}}
          className={timeStyle}
          style={{border:'1px solid #D0D3D4'}}
        />
        </MuiThemeProvider>
            </div>
            </div>
              <FormGroup>
                   <Label className={labelStyle1}>Description</Label>
                   <Input id={inputstyletextarea} type="textarea" name="text"  />
                 </FormGroup>
                 <div class="form-row">
                 <div class="col-md-5 mb-3">
                 <label className={labelStyle1}>Late Mark After Time</label>
                 <MuiThemeProvider>
                 <TimePicker
              format="ampm"
              value={this.state.valueEnd}
              onChange={this.handleChangeTimePickerLateMark}
              underlineStyle={{display: 'none'}}
              className={timeStyle}
              style={{border:'1px solid #D0D3D4'}}
            />
            </MuiThemeProvider>
                </div>
                <div class="col-md-5 mb-3">
                 <label className={labelStyle1}>Over Time</label>
                 <select  class="form-control" id={inputstyle}>
                 <option>Enable</option>
                  <option>Disable</option>
                </select>
               </div>
               </div>
               <Row className={overtimePay}>
               <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Status</p>


            <div style={{marginLeft:'4vw'}}>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
              />
              <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
                Active
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
              <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginLeft:'1vw'}} id={radiocheck}>
              InActive
              </label>
            </div>
            </div>
            </Row>
                 </Form>
                 </Col>
                 <Col xs="2">
                 <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
                 <p style={{marginTop:'3vw'}}>
                 <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
                 <p><Link to="/AttendanceSettings" className={orange}>Attendance</Link></p>
                 <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
                 <p><Link to="/AddComponent" className={hyperLinkEmployee}>Salary Cmponents</Link></p>
                 </div>

                    </Col>
                 </Row>
<p style={{marginTop:'3vw'}}>
              <Link to="/AddLeave">
              <button className="btn btn-outline-warning">
              Save</button></Link>

              <Link to="/AddLeave"  id={skipstyle}>Skip</Link>
              <span className={floatRight} style={{position:'relative',top:'0.85vw'}}>


              <Link to="/CompanyDetails" className={hyperLinkEmployee}>
              <button type="button" class="btn btn-light">
              <Icon icon={arrowLeft2} className={arrowIcon} size={14} />Prev </button>
                </Link>


              <Link to="/AddLeave" className={hyperLinkEmployee} >
              <button type="button" class="btn btn-light">Next <Icon icon={arrowRight2} size={14} className={arrowIcon} /></button>
              </Link>
                 </span>
                 </p>

             </div>
             <Footer/>
             </div>


    );
  }
}
