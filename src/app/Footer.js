import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import {Link} from "react-router-dom";
import {footerlogo,footerSpan,copyrighticon,link} from "./Layout.css";
import Icon from 'react-icons-kit';
import { ic_copyright } from 'react-icons-kit/md/ic_copyright';



export class Footer extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    return (

         <Navbar style={{backgroundColor:'#1768C0',height:'5vw',marginBottom:'0vw',marginLeft:'0vw'}}>
           <div className={footerlogo}>
           <Icon icon={ic_copyright} className={copyrighticon}/>
            <a href="http://www.acsestech.com" id={link}>
           Acsestech
            </a>
            {' '}|  Privacy Policy<span className={footerSpan}>
           <Link to="Contactus" id={link}>Contact Us</Link></span></div>
         </Navbar>

    );
  }
}
