import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import {filter} from "react-icons-kit/fa/filter";
import { ic_mail,ic_delete } from 'react-icons-kit/md/';
import { plus,bin,search,bin2,glass2, eye } from 'react-icons-kit/icomoon/';
import {Link} from "react-router-dom";
import {inProgress,closed} from "../Projects/Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight1,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle,orange,exampletable,btnstyle} from "../Layout.css";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Statement extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Statement
</p>
<hr className={hrStyle}/>
<span  className={floatRight1}>
<form class="form-row">

	<input type="search"  placeholder="Search" />
  <div class="dropdown" style={{position:'relative',left:'-1vw'}} >
    <button class="btn  btn-outline-light" type="button" id={btnstyle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <Icon icon={filter} />
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item">Employee ID</a>
      <a class="dropdown-item">Job Title</a>
      <a class="dropdown-item">CTC</a>
      <a class="dropdown-item">PAN Number</a>
    </div>
  </div>
</form>
</span>

<table class="table table-bordered table-striped table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Job Title</th>
          <th>PAN Number</th>
          <th>CTC</th>
          <th>Earnings</th>
          <th>Deductions</th>
          <th>Net salary</th>
          <th>Bank Account Number</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E123</td>
         <td>Enosh David</td>
         <td >Product Manager</td>
         <td>AWKPD86348</td>
         <td>1,00,000</td>
         <td>67585</td>
         <td>7585</td>
         <td>60000</td>
         <td>6574874312</td>
         <td><Icon icon={ic_mail}/>
          <Icon icon={ic_delete}/>
         <Icon icon={eye} /></td>
     </tr>
     <tr>
         <td>E321</td>
         <td>Carol</td>
         <td>Reporting Manager</td>
         <td>AWHPD86596</td>
         <td>1,00,000</td>
         <td>77585</td>
         <td>7585</td>
         <td>70000</td>
         <td>5474877698</td>
         <td><Icon icon={ic_mail}/>
          <Icon icon={ic_delete}/>
         <Icon icon={eye} /></td>
     </tr>
     </tbody>
     </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
