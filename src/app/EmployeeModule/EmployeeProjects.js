import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer} from "./Employee.css";


export class EmployeeProjects extends React.Component{
  render() {
    return(
     <div>
     <EmployeeHeader/>
     <div className={displaycontainer}>

     </div>
     <Footer/>
     </div>

    );
  }
}
