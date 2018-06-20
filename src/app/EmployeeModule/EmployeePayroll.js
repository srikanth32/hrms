import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer} from "./Employee.css";


export class EmployeePayroll extends React.Component{
  render(){
    return(
      <div>
      <EmployeeHeader/>
      <div className={displaycontainer}>
      In the Payroll Page
      </div>
      <Footer/>
      </div>
    );
  }
}
