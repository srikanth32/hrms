import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,glass2,search } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,buttonStyle,savebtn1} from "../Layout.css";
import {dateStyle,labelStyle1,inputstyle,inputstyletextarea} from "../employee/LayoutEmployee.css";
import {labelStyle,inputstyle1,formStyle,inputStyle,hyperLink} from "../settings/LayoutSettings.css";
import {addBtn,cancelBtn} from "../projects/Projects.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import $ from 'jquery';
var URL = 'http://localhost:3033/';
export class AddClaims extends React.Component{
  addClaims(){
    var obj = new Object();

    
    obj["expensename"] = $("#expensename").val();
    obj["amount"] = $("#amount").val();
    obj["date"] = $("#date").val();
    obj["desc"] = $("#desc").val();

    console.log(obj)
    $.ajax({
        url: URL + '/AddClaims',
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
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Add Claims</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <div class="form-row">
       <div class="col-md-10 mb-3">
         <label className={labelStyle1}>Expense Name</label>
         <input id={inputstyle} type="text" class="form-control" id="expensename" placeholder="" />
         </div>

         </div>

            <div class="form-row">
            <div class="col-md-5 mb-3">
            <label className={labelStyle1}>Amount</label>
            <input type="text" class="form-control" id="amount"/>
            </div>

            <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Date</label>
              <MuiThemeProvider>
        <DatePicker hintText="date of joining"
        underlineStyle={{display: 'none'}}
        textFieldStyle={{position:'relative',bottom:'0.75vw',color:'lightgray'}}
        className={dateStyle} id="date" style={{border:'1px solid #D0D3D4',height:'2vw',width:'96%'}} />
            </MuiThemeProvider>

            </div>
            </div>
            <div class="form-row">
            <div class="col-md-12 mb-3">
                 <label className={labelStyle1}>Description</label>
                 <input id={inputstyletextarea} type="textarea" class="form-control" rows="3" name="text" id="desc" />
              </div>
              </div>

           <Link to="/ClaimList"><button type="button" onClick={(e) => this.addClaims(e)} className="btn btn-outline-warning" >
           Submit</button></Link>
          </Form>
      </div>
      <Footer/>
      </div>
    );
  }
}
