import React from "react";
import { render } from "react-dom";
import {cardHeaderStyle} from "../Layout.css";
import Icon from 'react-icons-kit';
import { bullhorn } from 'react-icons-kit/icomoon/bullhorn';
import {anouncementStyle,linkmore} from "./Home.css";
import {inputstyle,right} from "./CardStyling.css";
import {Link} from "react-router-dom";


export class CardHeaderAnnounce extends React.Component {
  render() {
    return(
<p className={cardHeaderStyle}>Announcements
<span className={right} ><Link to="/AnnouncementList" className={linkmore}>View More ></Link></span>
</p>

);
}
}
