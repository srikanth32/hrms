import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {CardTemplate} from "../employee/CardTemplate";
import {CardTemplate1} from "../employee/CardTemplate1";
import {empDesign,empPhone,empId} from "../employee/LayoutEmployee.css";
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import { ic_create,ic_delete } from 'react-icons-kit/md';
import {pageHeading,hrStyle,contentStyle,floatRight,hyperLink,orange,displayContainer,exampletable,buttonStyle} from "../Layout.css";
import {labelStyle2,inputstyle,modalbutton,savebtn,labelStyle1} from "./LayoutAdmin.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class AdminUsers extends React.Component{
  render() {
    return(
      <div>
      <Header/>

      <div className={displayContainer}>
<p><span className={pageHeading}>Admin Users</span></p>
<hr className={hrStyle}/>

      <div class="row" style={{marginLeft:'0.4vw',marginTop:'5vw'}}>

 <CardTemplate text={"Kate"}>
  <p className={empDesign}>Test engineer</p>
  <p className={empId}>E153</p>
  <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate1 text={"David"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate1>
</div>
      </div>
      <Footer/>
      </div>
    );
  }
}
