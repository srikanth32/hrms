import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle,savebtn,arrowIcon,orange} from "../Layout.css";
import {labelStyle,inputstyle1,formStyle,
dropDownInputStyle,buttonstyle,checkboxDiv,divStyle,radioStyle1,boxText,imageText,radioStyle,hyperLink,floatRight,radiodiv,
} from "./LayoutSettings.css";
import {labelStyle1,hyperLinkEmployee,inputstyle,inputstyletextarea,overtimePay,slidertext,radiocheck} from "../employee/LayoutEmployee.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import $ from 'jquery';

var URL = 'http://localhost:3033/';
export class AddComponent extends React.Component{
  addComponent(){
    var obj = new Object();

    obj["componentname"] = $("#componentname").val();
    obj["calc"] = $("#calc option:selected").text();
    obj["tax"] = $("#tax option:selected").text();
    obj["desc"] = $("#desc").val();
    obj["comptype"] = $("#comptype option:selected").text();
    obj["amountype"] = $("#amountype option:selected").text();
    obj["status"] =$('input:radio[name=status]:checked').val();
    //obj["check"]=$('#defaultcheck1').val();
    //obj["monthlyctc"] = $("#monthlyctc").val();
    $.ajax({
      url: URL + '/AddComponent',
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
constructor(props){
  super();
  this.state = {
    componentname:'',
    calcon:'',
    taxable:'',
    description:'',
    componenttype:'',
    amounttype:'',
    error1:false,
    showError1:false
  };
}

handleComponentChange = (evt) => {
  this.setState({
    componentname: evt.target.value,
    showError1:true
  });
}
handleCalculationChange = (evt) => {
  this.setState({
    calcon : evt.target.value

   });
}
handleTaxableChange = (evt) => {
  this.setState({
    taxable : evt.target.value,
    error1:true
   });
}
handleDescriptionChange = (evt) => {
  this.setState({
    description: evt.target.value
  });
}
handleComponenttypeChange = (evt) => {
  this.setState({
    componenttype: evt.target.value,
  });
}
handleAmounttypeChange = (evt) => {
  this.setState({
  amounttype : evt.target.value

   });
}


  render() {

    const {componentname,calcon,taxable,description,componenttype,amounttype} = this.state;
    var re1 = new RegExp("^([a-zA-Z]{2,25}(?: [a-zA-Z]+){0,2})$");

    const isEnabled =
    re1.test(componentname)&&
    description.length>0&&
    calcon.length>0&&
    taxable.length>0&&
    componenttype.length>0&&
    amounttype.length>0;

    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Salary Components</p>
<hr className={hrStyle}/>
<Row>
<Col>
     <Form className={formStyle}>
       <div class="form-row">
       <div class="col-md-10 mb-3">
         <label className={labelStyle1}>Component Name</label>
         <Input type="text"  className={inputstyle} placeholder="" pattern="[a-zA-Z]{5,25}" id="componentname"
         value={this.state.componentname} onChange={this.handleComponentChange} title="Component name must be letters only"required />
         </div>
         </div>
       <div class="form-row">
       <div class="col-md-5 mb-3">
       <label className={labelStyle1}>Calculation On</label>
       <Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" id="calc" name="calc"
       value= {this.state.calcon} onChange={this.handleCalculationChange} required>
              <option></option>
              <option>Basic Pay</option>
            </Input>
       </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Taxable</label>
<Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" id="tax" name="tax"
 value={this.state.taxable} onChange={this.handleTaxableChange} required>
       <option></option>
       <option>Yes</option>
       <option>No</option>
     </Input>
</div>
  </div>
       <FormGroup>
            <Label className={labelStyle1}>Description</Label>
            <Input className={inputstyletextarea} type="textarea" name="text" pattern="[a-zA-Z]{5,25}" id="desc" value={this.state.description} onChange={this.handleDescriptionChange} required />
          </FormGroup>
           <div class="form-row">
           <div class="col-md-5 mb-3">
           <label className={labelStyle1}>Component Type</label>
           <Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" id="comptype" name="comptype"
           value={this.state.componenttype} onChange={this.handleComponenttypeChange}required>
                  <option></option>
                  <option>Select</option>
                  <option></option>

                </Input>
           </div>
<div class="col-md-5 mb-3">
<label className={labelStyle1}>Amount Type</label>
<Input type="select" name="select" className={inputstyle} pattern="[a-zA-Z]{5,25}" id="amountype"
value={this.state.amounttype} onChange={this.handleAmounttypeChange} required>
       <option></option>
       <option>Monthly</option>
       <option>Weekly</option>
     </Input>
</div>
      </div>
          <FormGroup>
    <div class="row">
    <div class="col-sm-7">
    <Row className={overtimePay}>
    <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Status</p>
 </Row>
 <div className={radiodiv} style={{marginBottom:'-2vw'}}>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="status"  id="gridRadios1" value="Active" checked
   style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}} id={radiocheck}>
     Active
   </label>
 </div>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="status" value="InActive" id="gridRadios2"  style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw',marginLeft:'1vw'}} id={radiocheck}>
   InActive
   </label>
 </div>
 </div>
</div>
        <div class="col-sm-4" style={{marginLeft:'-11vw',marginTop:'-0.15vw'}}>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  style={{marginTop:'0.7vw'}}/>
  <label class="form-check-label" for="defaultCheck1" id={inputstyle} style={{marginTop:'0.4vw',marginLeft:'1vw',fontSize:'0.8vw',fontFamily:'arial',color:'#2C3E50'}} id={radiocheck}>
    Show in Payslip
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" style={{marginTop:'0.7vw'}}/>
  <label class="form-check-label" for="defaultCheck2" id={inputstyle} style={{marginTop:'0.4vw',marginLeft:'1vw',fontSize:'0.8vw',fontFamily:'arial',color:'#2C3E50'}} id={radiocheck}>
  Show in CTC
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" style={{marginTop:'0.7vw'}}/ >
  <label class="form-check-label" for="defaultCheck2" id={inputstyle} style={{marginTop:'0.4vw',marginLeft:'1vw',fontSize:'0.8vw',fontFamily:'arial',color:'#2C3E50'}} id={radiocheck}>
  Loss of Pay due to Employee Attendance will affect this component
  </label>
</div>
</div>
        </div>
        </FormGroup>


        {isEnabled ? <Link to="/Home"> <button  class="btn btn-primary" onClick={(e) => this.addComponent(e)}>SAVE</button> </Link> :
        <button class="btn btn-primary">SAVE</button>
          }
          </Form>
          </Col>
          <Col xs="2">
          <div className={floatRight} style={{fontSize:'0.9vw'}} id={slidertext}>
          <p style={{marginTop:'3vw'}}>
          <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
          <p><Link to="/AttendanceSettings" className={hyperLinkEmployee}>Attendance</Link></p>
          <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
          <p><Link to="/AddComponent" className={orange}>Salary Components</Link></p>
          </div>
             </Col>
             </Row>

      </div>
      <Footer/>
      </div>
    );
  }
}