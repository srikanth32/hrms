
import React from "react";
import {render} from "react-dom";
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router-dom";
import {LogoHeader} from "./LogoHeader";
import {FooterText} from "./FooterText";
import {containerRegistration,logo,text,hrStyle,content,floatingtext1,insidefloating1,pagetext,viewfeatures,hyperlink }from "./LayoutRegistration.css";
export class LandingPage extends React.Component{
  render()
  {
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
<LogoHeader/>
<p className={text}>Human Resource Management</p>

<hr className={hrStyle} />
<p className={pagetext}>
An easy to use and time-saving mechanism for an overview of your HR Management....</p>
<Link to="/ViewFeatures"><button id={viewfeatures} class="btn btn-light">View Features</button></Link>
</div>

      </div>
      <FooterText/>
      </div>

    );
  }
}
