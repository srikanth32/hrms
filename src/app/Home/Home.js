import React from "react";
import {displayHome} from "../Layout.css";
import {FirstRow} from "./FirstRow";
import {SecondRow} from "./SecondRow";
import {ThirdRow} from "./ThirdRow";
import {FourthRow} from "./FourthRow";
import {Header}  from "../Header";
import {Footer} from "../Footer";


export class Home extends React.Component {

  render() {

     return(
       <div>
       <Header/>
       <div className={displayHome}>
     <FirstRow />
      <SecondRow/>
      <ThirdRow/>
      <FourthRow/>
      </div>
        <Footer/>
   </div>
     );
  }
}
