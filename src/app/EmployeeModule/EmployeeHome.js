import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displayHome} from "../Layout.css";
import {FirstRow} from "./FirstRow";
import {ThirdRow} from "../home/ThirdRow";
import {ThirdRow1} from "./ThirdRow1";

export class EmployeeHome extends React.Component{
  render(){
    return(
      <div>
      <EmployeeHeader/>
      <div className={displayHome}>
      <FirstRow/>
      <ThirdRow/>
      <ThirdRow1/>
      </div>
      <Footer/>
      </div>
    );
  }
}
