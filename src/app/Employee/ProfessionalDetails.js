import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowRight2, arrowLeft2} from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import styles from "../Layout.css";
import styles1 from "./LayoutEmployee.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import $ from 'jquery';
var URL = 'http://localhost:3033/';
export class ProfessionalDetails extends React.Component{
  addProfessional(){
    var obj = new Object();
    var inputOne = $("#firstname");
    
    obj["firstname"] = $("#firstname").val();
    obj["lastname"] = $("#lastname").val();
    obj["email"] = $("#email").val();
    obj["empid"] = $("#empid").val();
    obj["designation"] = $("#desg option:selected").text();
    obj["department"] = $("#dept option:selected").text();
    obj["emptype"] = $("#emptype option:selected").text();
    obj["reportingmanager"] = $("#report").val();
    obj["doj"] = $("#doj").val();
    obj["location"] = $("#location option:selected").text();
    obj["overtime"] = $('input:radio[name=overtime]:checked').val(); 


    console.log(obj)
    $.ajax({
        url: URL + '/ProfessionalDetails',
        type: 'GET',
        data: { json: JSON.stringify(obj) },
        cache: false,
        success: function (response) {
            response = JSON.parse(response);
            //console.log(response)
            if (response.Status === 'true') {
                alert(response.Message);
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
  constructor(props){
    super(props);
  this.enabletest = this.enabletest.bind(this);
  this.disabletest =this.disabletest.bind(this);
    this.state={
      enable:false,
      disable:false,
      location:'',
      email: '',
      firstname: '',
      lastname: '',
      location:'',
      designation: '',
      department:'',
      employmenttype: '',
      reportingmanager:'',
      empid: '',
      dob:'',
      errors:false,
      showErrors:false
    };
  }

     handledobChange = (evt) => {
    this.setState({ dob: evt.target.value });
  }
    handlefirstnameChange = (evt) => {
      this.setState({
        firstname: evt.target.value,
        errors:true,
        showErrors:true

       });
    }
    handlelastnameChange = (evt) => {
      this.setState({
        lastname : evt.target.value,
        errors:true,
        showErrors:true
       });
    }
    handleempidChange = (evt) => {
      this.setState({ empid: evt.target.value });
    }
    handlereportingmanagerChange = (evt) => {
      this.setState({ reportingmanager: evt.target.value });
    }
  handledesignationChange = (evt) => {
    this.setState({ designation: evt.target.value});
  }
    handledepartmentChange = (evt) => {
      this.setState({department : evt.target.value });
    }
    handleemploymenttypeChange = (evt) => {
      this.setState({employmenttype : evt.target.value });
    }
    handlelocationChange = (evt) => {
      this.setState({ location: evt.target.value });
    }
    handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value });
    }
    handleSubmit(){
      alert('input submitted')
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

  render() {

    var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
    var re2 = new RegExp("^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$");
    var re3 = new RegExp("^([a-zA-Z]{1,10}([0-9]{0,10}))$");
      const fncheck = re2.test(firstname);
      const lncheck = re2.test(lastname);
    const { location,email,firstname,lastname,employmenttype,reportingmanager,department,designation,empid,dob } = this.state;
    const isEnabled =
      re1.test(email) &&
      re2.test(firstname) &&
      re2.test(lastname) &&
      re2.test(reportingmanager) &&
      re2.test(location) &&
      re2.test(department) &&
      re3.test(empid) &&

      dob.length > 0;

    return(
      <div>
      <Header/>
       <div className={styles.displayContainer}>
<p className={styles.pageHeading}>Professional Details</p>
<hr className={styles.hrStyle}/>
<Row>
  <Col xs="10">
      <Form className={styles1.formStyle} onSubmit={this.handleSubmit}>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>First Name</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" id="firstname"
          value={this.state.firstname}
         onChange={this.handlefirstnameChange}
         pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
         title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"
           required/>

        </div>
        <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Last Name</label>
          <Input type="text"  className={styles1.inputstyle} placeholder="" id="lastname "
          value={this.state.lastname}
          onChange={this.handlelastnameChange}
          pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
          title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"
           required/>

        </div>
        </div>
        <div class="form-row">
        <div class="col-md-10 mb-3">
        <label className={styles1.labelStyle1}>Email ID</label>
        <Input type="email"  className={styles1.inputstyle} id="email"
        value={this.state.email}
        onChange={this.handleEmailChange}

         placeholder="" required />
        </div>
        </div>

        <div class="form-row">
          <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Employee ID</label>
              <Input type="text"  className={styles1.inputstyle} placeholder="" id="empid"
              value={this.state.empid}
              onChange={this.handleempidChange}
              pattern="^[A-Z]{1}[0-9]{1,3}$"
              title="Eg.E098"

               required />
          </div>
          <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Designation</label>
          <Input type="select" id="desg"className={styles1.inputstyle}

           required>
          <option></option>
          <option>Manager</option>
          <option>Team Lead</option>
        </Input>
          </div>
          </div>
        <div class="form-row">
        <div class="col-md-5 mb-3">
        <label className={styles1.labelStyle1}>Department</label>
        <Input type="select" id="dept" className={styles1.inputstyle}
        value={this.state.department}
        onChange={this.handledepartmentChange}
         required>
        <option></option>
        <option>Marketing</option>
        <option>Finance</option>
      </Input>
        </div>
        <div class="col-md-5 mb-3">
        <label className={styles1.labelStyle1}>Employment Type</label>
        <Input type="select" id="emptype" className={styles1.inputstyle}

         required>
         <option></option>
        <option>Full Time</option>
        <option>Part Time</option>
      </Input>

        </div>
          </div>
          <div class="form-row">
          <div class="col-md-10 mb-3">
          <label className={styles1.labelStyle1}>Reporting Manager</label>
            <Input type="text"  className={styles1.inputstyle} placeholder="" id="report"
            value={this.state.reportingmanager}
            onChange={this.handlereportingmanagerChange}
            pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
            title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"

           required/>
          </div>
          </div>
          <div class="form-row">
          <div class="col-md-5 mb-3">
          <label className={styles1.labelStyle1}>Date Of Joining</label>
            <Input type="date" id="doj"  className={styles1.inputstyle} placeholder=""
            value={this.state.dob}
            onChange={this.handledobChange}

            required/>
          </div>
            <div class="col-md-5 mb-3">
            <label className={styles1.labelStyle1}>Location</label>
            <Input type="select" id="location" name="location"className={styles1.inputstyle} pattern="[a-zA-Z]{5,25}"
            value={this.state.location}
            onChange={this.handlelocationChange}

            required>
            <option></option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
          </Input>
            </div>
            </div>
            <Row className={styles.overtimePay}>
                <p style={{fontWeight:'lighter',fontSize:'0.9vw',marginLeft:'1vw'}}>Overtime Pay</p>
                <div class="col-md-4 mb-5" id={styles1.genderstyle}>
                <FormGroup check>
                     <Label check className={styles.radioinput}>
                       <Input type="radio" value="on Holidays" name="overtime" className={styles.radiostyle}/>
                       On Holidays
                     </Label>
                   </FormGroup>
                   <FormGroup check>
                     <Label check className={styles.radioinput}>
                       <Input type="radio" value="On Weekoff" name="overtime" className={styles.radiostyle} />
                         On Weekoff
                     </Label>
                   </FormGroup>
                   <FormGroup check>
                     <Label check className={styles.radioinput}>
                       <Input type="radio" value="Daily" name="overtime" className={styles.radiostyle} />
                         Daily
                     </Label>
                   </FormGroup>
                   <FormGroup check>
                     <Label check className={styles.radioinput}>
                       <Input type="radio" value="None" name="overtime" className={styles.radiostyle} />
                         None
                     </Label>
                   </FormGroup>

                   </div>
             </Row>


{isEnabled ?
  <Link to="/BankDetails">
  <button class="btn btn-primary" onClick={(e) => this.addProfessional(e)}>SAVE</button>
  </Link> :
  <button class="btn btn-primary">SAVE</button>
}



      </Form>
          </Col>
          <Col>
          <div className={styles.floatRight} style={{fontSize:'0.9vw'}} id={styles1.slidertext}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/PersonalDetails" className={styles1.hyperLinkEmployee}>Personal Details</Link></p>
          <p><Link to="/ProfessionalDetails" className={styles.orange}>Professional Details</Link></p>
          <p><Link to="/BankDetails" className={styles1.hyperLinkEmployee}>Bank Details</Link></p>
          <p><Link to="/LoginInfo" className={styles1.hyperLinkEmployee}>Login Information</Link></p>
          <p><Link to="/JobHistory" className={styles1.hyperLinkEmployee}>Job History</Link></p>
          <p><Link to="/EmpDocs" className={styles1.hyperLinkEmployee}>Employee Documents</Link></p>
          </div>
             </Col>
             </Row>
       </div>
       <Footer/>
       </div>
     );
   }
 }