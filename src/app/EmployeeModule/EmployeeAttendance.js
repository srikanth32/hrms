import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer} from "./Employee.css";
import {Row} from "reactstrap";
import {DatePicker,TextField}  from 'material-ui/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import {filter} from "react-icons-kit/fa/filter";
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight1,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle,orange,exampletable,btnstyle} from "../Layout.css";
import { ic_create,ic_delete  } from 'react-icons-kit/md';
import {dateStyle} from "../employee/LayoutEmployee.css";


export class EmployeeAttendance extends React.Component{
  state = {
    value:''
  }
  render(){
    return(
      <div>
      <EmployeeHeader/>
<div className={displaycontainer}>

<p className={pageHeading}>Attendance

</p>



<hr className={hrStyle}/>
<Row style={{marginLeft:'0.2vw'}}>
<select type="text" onChange={event => this.setState({value: event.target.value})} style={{width:'10%'}}>

 <option>JAN-2018</option>
 <option>FEB-2018</option>
 <option>MAR-2018</option>
 <option>APR-2018</option>
 <option>MAY-2018</option>
 <option>JUN-2018</option>
 <option>JUL-2018</option>
 <option>AUG-2018</option>
 <option>SEP-2018</option>
 <option>OCT-2018</option>
 <option>NOV-2018</option>
 <option>DEC-2018</option>
</select>
<p style={{marginLeft:'1vw'}}>{this.state.value}</p>
</Row>



<table class="table table-bordered  table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>SNo</th>
          <th>Date</th>
          <th>Late Mark After Time</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Time Duration</th>
          <th>Overtime</th>

      </tr>
  </thead>
  <tbody>
     <tr>
        <td>1</td>
        <td>01/05/2018</td>
        <td></td>
        <td>9:30 am</td>
        <td>6:30 pm</td>
        <td>9 Hours </td>
        <td>Present</td>


     </tr>
     <tr>
        <td>2</td>
        <td>02/05/2018</td>
        <td>30 minutes</td>
        <td>10:00 am</td>
        <td>6:30 pm</td>
        <td>8 hours 30 minutes </td>
        <td>Present</td>

     </tr>
     <tr>
        <td>3</td>
        <td>03/05/2018</td>
        <td>15 minutes</td>
        <td>9:45 am</td>
        <td>6:30 pm</td>
        <td>8 hours 45 minutes </td>
        <td>Present</td>

     </tr>



     </tbody>
     </table>




 </div>
 <Footer/>
 </div>

    );
  }
}
