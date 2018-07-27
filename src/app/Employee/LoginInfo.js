import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';

import Icon from 'react-icons-kit';
import {arrowRight2,arrowLeft2,plus } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,arrowIconR,arrowIconL,savebtn1,pageHeading,hrStyle,buttonStyle,orange,floatRight2,skip1,bankdiv} from "../Layout.css";
import {hyperLinkEmployee,slideremp,labelStyle1,inputstyle,slidertext} from "./LayoutEmployee.css";
import {formStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle} from "./LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {default as UUID} from "node-uuid";
import $ from 'jquery';
var URL = 'http://localhost:3033/';
export class LoginInfo extends React.Component{
  invite(){
  // $('.btn btn-primary').click(function() {
  //   $.ajax({
  //     type: 'POST',
  //     url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  //     data: {
  //       'key': '7eccc25077e7c6238f0bdb0e77abc2c0-us18',
  //       'message': {
  //         'from_email': 'acsestech@gmail.com',
  //         'to': [{
  //             'email': $('.email').val(), // get email from form
  //             'pass': $('.pass').val(), // get name from form
  //             'type': 'to'
  //           }
  //           /*, {
  //                         'email': 'RECIPIENT_NO_2@EMAIL.HERE',
  //                         'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
  //                         'type': 'to'
  //                       }*/
  //         ],
  //         // optional merge variables. must also be setup on the list management side of mandrill
  //         'merge_vars': [{
  //           'rcpt': $('.email').val(),
  //         'autotext': 'true',
  //         'subject': 'Auto Generated Password',
  //         'html': "Hey *|rcpt|*, Kindly reset your password.", // example of how to use the merge tags
  //         'track_opens': true,
  //         'track_clicks': true,
  //       }]
  //     }
  //   });
  // });
  // }
  var em=document.getElementById('email').value;
  //$url = 'https://mandrillapp.com/api/1.0/messages/send.json';

  $.ajax({
    type: "POST",
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      "key": "7eccc25077e7c6238f0bdb0e77abc2c0-us18",
      "message": {
        "from_email": "acsestech@gmail.com",
        "to": [
            {
              "email": $("#email").val(),
              //'name': 'RECIPIENT NAME (OPTIONAL)',
              "type": "to"
            }
          ],
        "autotext": "true",
        "subject": "Password Reset",
        "html": "YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!"
      }
    }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
   });
  // var link = 'mailto:em?subject=Password'
  //            +'&body='+'acsestech@gmail.com';
  //   window.location.href = link;
// var inputTwo = $("#name");
// inputTwo.val(inputOne.val());
  
  // meta
}

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email:''
    }
  }
  handlenameChange = (evt) =>{
    this.setState({
      name:evt.target.value
    });
  }
  handleEmailChange = (evt) =>{
    this.setState({
      email:evt.target.value
    })
  }
  componentWillMount() {
     this.id = UUID.v4();
   }
  render()
    {
      var re1 = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$");
      var re2 = new RegExp("^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$");
      const {email,name  } = this.state;
      const isEnabled =
        re1.test(email) &&
        re2.test(name);
    return(
      <div>
      <Header/>
       <div className={displayContainer}>
<p className={pageHeading}>Login Information</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
  <Form className={formStyle} action="/" method="POST">
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Name</label>
      <Input type="text"  className={inputstyle} id="name" name="name"
      value={this.state.name}
      onChange={this.handlenameChange}
      pattern="^([a-zA-Z]{4,25}(?: [a-zA-Z]+){0,2})$"
      title="Name cannot have letters,symbols cannot be < 4 or > 25 characters"

      required />
        </div>
        <div class="col-md-5 mb-3">
          <label className={labelStyle1}>Email ID</label>
        <Input type="email"  className={inputstyle} placeholder="" id="email" name="email"
        value={this.state.email}
        onChange={this.handleEmailChange}

        required />
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-10 mb-3">
          <label className={labelStyle1}>Auto Generated Password</label>
      <Input type="text"  className={inputstyle} value={this.id} placeholder="" disabled id="pass" name="pass" />
          </div>
          </div>
          {isEnabled ?
            <Link to="/JobHistory">
                <button  class="btn btn-primary" onClick={(e) => this.invite(e)}>SAVE</button>
                </Link> :
                <button class="btn btn-primary">SAVE</button>
          }

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

       </div>
       <Footer/>
       </div>
     );
   }
 }  