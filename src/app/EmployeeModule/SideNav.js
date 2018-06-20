import React from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {iconcolor,dropDownStylesidenav,dropDownLeavessidenav,dropDownClaimssidenav,dropDownPayrollsidenav} from "../Header.css";
import {navitemStyleHome1,navitemStyle1,dropDownLeaves,dropDownClaims,dropDownPayroll,
  downIcon,dropDownStyle,dropItem,hyperLink} from "../Layout.css";
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import {angleDown } from 'react-icons-kit/fa';
import { fadeInRight } from "react-animations";
import Radium,{StyleRoot} from "radium";
const styles={
  fadeInRight: {
    animation: 'x 3s',
    animationName: 'fadeInRight'

  }
}

export class SideNav extends React.Component{
  render(){
    return(
      <div >
      <Navbar >
      <ul>
      <li style={{color:'#2C3E50'}}><UncontrolledDropdown navbar className={navitemStyleHome1}>
      <DropdownToggle nav style={{color:'white'}}>
      <Link to="/EmployeeHome" className={iconcolor} style={{padding:'5vw'}}>HOME</Link>
      </DropdownToggle>
      </UncontrolledDropdown></li>
    <li style={{color:'#2C3E50'}}>  <UncontrolledDropdown navbar className={navitemStyle1} >
        <DropdownToggle nav  style={{color:'white'}}>EMPLOYEES<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
          <DropdownMenu className={dropDownStylesidenav}>
            <DropdownItem id={dropItem}><Link to="/AddEmployee" id={hyperLink}>Add Employee</Link></DropdownItem>
            <DropdownItem id={dropItem}><Link to="/ViewEmployee" id={hyperLink}>Employees List</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown></li>
        <li style={{color:'#2C3E50'}}>
        <UncontrolledDropdown navbar  className={navitemStyle1} >
              <DropdownToggle nav style={{color:'white'}}>LEAVES & TIME<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
            <DropdownMenu className={dropDownLeavessidenav}>
              <DropdownItem id={dropItem}><Link to="/Leaves" id={hyperLink}>Leave List</Link></DropdownItem>
          <DropdownItem id={dropItem}><Link to="/Attendance" id={hyperLink}>Attendance List</Link></DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
          </li>
          <li style={{color:'#2C3E50'}}>
          <UncontrolledDropdown navbar  className={navitemStyle1} >
              <DropdownToggle nav  style={{color:'white'}}>CLAIMS<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
              <DropdownMenu className={dropDownClaimssidenav} >
                <DropdownItem id={dropItem}><Link to="/AddClaims" id={hyperLink}>Add Claims</Link></DropdownItem>
                <DropdownItem id={dropItem}><Link to="/ClaimList" id={hyperLink}>Claims List</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </li>
            <li style={{color:'#2C3E50'}}>
            <UncontrolledDropdown navbar  className={navitemStyle1}>
              <DropdownToggle nav style={{color:'white'}}>PAYROLL<Icon icon={angleDown} className={downIcon}/></DropdownToggle>
            <DropdownMenu className={dropDownPayrollsidenav}>
              <DropdownItem id={dropItem}><Link to="/Payments" id={hyperLink}>Payments</Link></DropdownItem>
              <DropdownItem id={dropItem}><Link to="/Process" id={hyperLink}>Process</Link></DropdownItem>
              <DropdownItem id={dropItem}><Link to="/Statement" id={hyperLink}>Statement</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          </li>
        </ul>
      </Navbar>



      </div>
    );
  }
}
