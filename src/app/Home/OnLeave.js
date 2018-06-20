import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle} from "../Layout.css";;
import { ic_create,ic_delete  } from 'react-icons-kit/md';


export class OnLeave extends React.Component{
  render() {
    return(
      <div style={{marginTop:'3vw'}}>
<p className={pageHeading}>Employees on leave<span className={floatRight}><Icon icon={search}/></span></p>
<hr className={hrStyle}/>

<h1> No Data to Show </h1>
      </div>
    );
  }
}
