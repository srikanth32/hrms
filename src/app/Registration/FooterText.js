import React from "react";
import {Link} from "react-router-dom";
import {copyrighticon,link} from "../Layout.css";
import {footerLine,footercontent,footerSpan} from "./LayoutRegistration.css";
import Icon from 'react-icons-kit';
import { ic_copyright } from 'react-icons-kit/md/ic_copyright';

export class FooterText extends React.Component{
  render(){
    return(
      <div className={footerLine}>
    <p className={footercontent}><Icon icon={ic_copyright} className={copyrighticon}/>
<a href="http://www.acsestech.com" id={link}>
    Acsestech
    </a>

     {' '}|  Privacy Policy
<span className={footerSpan}>
<Link to="/Contactus" id={link}>
Contact Us
</Link>

</span>
     </p>
      </div>
    );
  }
}