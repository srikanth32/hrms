
import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { filter } from 'react-icons-kit/fa/filter';
import { plus,pencil,bin,search } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle,activeStyle,orange,floatRight1,exampletable,labelStylepopup,btnstyle} from "../Layout.css";
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../Admin/LayoutAdmin.css";
import { ic_create ,ic_delete } from 'react-icons-kit/md';
import {Header} from "../Header";
import {Footer} from "../Footer";
export class Attendance extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>Attendance

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
      <a class="dropdown-item">New Joinees</a>
      <a class="dropdown-item">Department Manager</a>
      <a class="dropdown-item">Present Employees</a>
      <a class="dropdown-item">On Leave</a>
    </div>
  </div>
</form>

</span>

<table class="table table-bordered  table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Remark</th>
          <th>Reason for Absence</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E765</td>

         <td style={{textAlign:'center'}}></td>
         <td></td>
         <td></td>
         <td>
         <span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter">
           <Icon icon={ic_create} size={20}/>
         </span>
         <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLongTitle" className={orange}>Edit Attendance</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div class="modal-body">
               <div class="form-row">
                 <div class="col-md-6 mb-3">
                   <label className={labelStylepopup}>Employee Name</label>
                   <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                 </div>
                 <div class="col-md-6 mb-3">
                   <label className={labelStylepopup}>Employee ID</label>
                   <input type="text" class="form-control" id={inputstyle} placeholder="" />
                 </div>
                 </div>
                 <div class="form-row">
                   <div class="col-md-6 mb-3">
                     <label className={labelStylepopup}>Remark</label>
                     <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                   </div>
                   <div class="col-md-6 mb-3">
                     <label className={labelStylepopup}>Reason for Absence</label>
                     <input type="text" class="form-control" id={inputstyle} placeholder="" />
                   </div>
                   </div>
            </div>
                 <button type="button" class="btn btn-outline-warning" data-dismiss="modal" style={{marginLeft:'30vw',marginBottom:'3vw',width:'46%'}}>Save</button>

             </div>
           </div>
         </div>

             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     </tbody>
     </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
