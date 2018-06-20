import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {displayContainer} from "./Layout.css";
import {Row} from "reactstrap";

export class ContactUs extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
      <div style={{float:'left',marginRight:'30vw',marginBottom:'3vw'}}>
      <strong>India</strong>
      <p>ACSESTECH Consulting Services  Pvt. Ltd.</p>
    <p>Unit 621, Manjeera Majestic Commercial</p>
    <p>KPHB Colony,Hyderabad  500085</p>
    <p>Phone : 040-6588 8090, 040-48554851, 040-48527667, 040-48530131</p>
     </div>
<div style={{float:'left',marginRight:'30vw',marginBottom:'3vw'}}>
    <strong>USA</strong>
    <p>ACSESTECH LLC.</p>
    <p>321, Brandywine Plaza West Building</p>
    <p>1521, Concorde Pike, Wilmington, DE 19803</p>
    <p>Phone : (804)-545-8045</p>
</div>
<div style={{float:'left',marginRight:'30vw',marginBottom:'3vw'}}>
    <strong>Singapore</strong>
    <p>ACSESTECH Consulting Services  Pte. Ltd.</p>
    <p>#05-02, 420 North Bridge Centre</p>
    <p>North Bridge Road, Singapore   188727</p>
    <p>Phone : +65-9891 7168</p>
    </div>

<div style={{float:'left'}}>
  <p style={{color:'orange'}}>  Mail :

    For General information: info@acsestech.com</p>

       </div>
       </div>
       <Footer/>
       </div>
    );

  }
}
