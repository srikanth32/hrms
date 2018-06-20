import React from "react";
import { render } from "react-dom";
import {cardHeaderStyle} from "../Layout.css";
import Icon from 'react-icons-kit';
import {anouncementStyle,linkmore} from "./Home.css";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {MuiThemeProvider} from "material-ui";
import {Link} from "react-router-dom";
import {imgStyle1,inputstyle,dropitem,eventSelect,right} from "./CardStyling.css";
const styles = {
  customWidth: {
    width: 110,
  },
};
export class CardHeaderEvents extends React.Component {
  state = {
  value: 1,
};
handleChange = (event, index, value) => this.setState({value});
  render() {
    return(
<p className={cardHeaderStyle}>Events
<span className={right} ><Link to="/EventsList" className={linkmore}>View More ></Link></span>
</p>
);
}
}
