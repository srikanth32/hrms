import React from "react";
import { render } from "react-dom";
import {cardHeaderStyle} from "../Layout.css";


export class CardHeader extends React.Component {
  render() {
    return(
<p className={cardHeaderStyle}>{this.props.text}</p>

);
}
}
