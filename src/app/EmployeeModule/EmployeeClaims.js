import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer} from "./Employee.css";

export class EmployeeClaims extends React.Component{
  render(){
    return(

      <div>
      <EmployeeHeader/>
       <div className={displaycontainer}>
      Claims Page
      </div>
      <Footer/>
      </div>
    );
  }
}
