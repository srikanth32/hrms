import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer} from "./Employee.css";

export class EmployeeSettings extends React.Component{
  render(){
    return(
      <div>
      <EmployeeHeader/>
      <div className={displaycontainer}>
      In The Employee settings Page
      </div>
      <Footer/>
       </div>
    );
  }
}
