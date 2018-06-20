import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import {pageHeading,floatRight,hrStyle,contentStyle} from "../Layout.css";
import { ic_create,ic_delete  } from 'react-icons-kit/md';

export class All extends React.Component{
  render(){
    return(
        <div style={{marginTop:'3vw'}}>
    <p className={pageHeading}>All employees</p>
    <hr className={hrStyle}/>
    <table class="table table-bordered table-striped table-responsive-md" id={contentStyle}>
    <thead>
          <tr style={{color:'orange'}}>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>JOb Title</th>
              <th>Department Name</th>
              <th>Status</th>
              <th>Actions</th>
          </tr>
      </thead>

        <tbody>
           <tr>
               <td>E123</td>
               <td>Enosh David</td>
               <td>Product Manager</td>
               <td>Marketing</td>
                <td className={inProgress}>Present</td>
               <td><Icon icon={ic_create} size={20}/>
                   <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /> </td>
           </tr>
                <tr>
                    <td>E543</td>
                    <td>David</td>
                    <td>Product Manager</td>
                    <td>Information Technology</td>
                     <td className={closed}>Absent</td>
                    <td><Icon icon={ic_create} size={20}/>
                        <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /> </td>
                </tr>
</tbody>
   </table>
       </div>

    );
  }
}
