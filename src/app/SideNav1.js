import React from "react";
import {navbar,dropdownmenu,navcontenthome,navcontent,navcontentfirst,navcontentlast} from "./sidenav.css";
import { slideInDown } from "react-animations";
import Radium,{StyleRoot} from "radium";
import {Link} from "react-router-dom";
const styles={
slideInDown: {
    animation: 'x 1s',
    animationName: 'slideInDown'
  }
}
export class SideNav1 extends React.Component{

  render(){

    return(

<nav class="navbar navbar-default" role="navigation"  id={navbar}>
  <div class="container-fluid">

    <div class="collapse  navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">

        <li><Link to="/Home" id={navcontenthome}>Home</Link></li>

        <li class="dropdown">
         <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={navcontenthome}>Employees <span class="caret"></span></a>
        <ul class="dropdown-menu" role="menu" id={dropdownmenu} style={styles.slideInDown} >
         <li><Link to="/AddEmployee" id={navcontentfirst} >Add Employee</Link></li>

         <li><Link to="/ViewEmployee" id={navcontent}>Employee List</Link></li>
        </ul>
      </li>

      <li class="dropdown" style={styles.fadeInDown}>
       <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={navcontenthome}>Leaves & Time <span class="caret"></span></a>
      <ul class="dropdown-menu" role="menu" id={dropdownmenu} >
       <li><Link to="/LeaveList" id={navcontentfirst}>Leave List</Link></li>
       <li><Link to="/Attendance" id={navcontent}>Attendance List</Link></li>
      </ul>
    </li>

       <li class="dropdown" style={styles.fadeInDown}>
        <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={navcontenthome}>Claims <span class="caret"></span></a>
       <ul class="dropdown-menu" role="menu" id={dropdownmenu} >
        <li><Link to="/AddClaims" id={navcontentfirst}>Add Claims</Link></li>
        <li><Link to="ClaimList" id={navcontent}>Claims List</Link></li>
       </ul>
     </li>

     <li class="dropdown" style={styles.fadeInDown}>
      <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false" id={navcontenthome}>Payroll<span class="caret"></span></a>
     <ul class="dropdown-menu" role="menu" id={dropdownmenu} >
      <li><Link to="/Payments" id={navcontentfirst}>Payments</Link></li>
      <li><Link to="/Process" id={navcontent}>Process</Link></li>
      <li><Link to="/Statement" id={navcontentlast}>Statement</Link></li>
     </ul>
   </li>
</ul>
    </div>

  </div>
</nav>



    );
  }


}
