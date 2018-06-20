import React from "react";
import {EventCard} from "./EventCard";
import {CardHeaderEvents} from "./CardHeaderEvents";
import {Col,Card,Row} from "reactstrap";
import {buttonStyle,buttonStyleL,right,eventSelect} from "./CardStyling.css";
import {cardStyle1,giftIcon} from "./Home.css";
import {orange} from "../Layout.css";
import Icon from 'react-icons-kit';
import { gift,birthdayCake,graduationCap  } from 'react-icons-kit/fa';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {MuiThemeProvider} from "material-ui";
const styles = {
  customWidth: {
    width: 130,
  },
};
export class Events extends React.Component{
  state = {
  value: 1,
};
handleChange = (event, index, value) => this.setState({value})
  render(){
    return(
      <Col style={{marginRight:'-1vw'}}>
          <Card body inverse className={cardStyle1} >
          <CardHeaderEvents text={"EVENTS"}/>

          <EventCard title={"David"} text={"Completes 6 years"} time={"27th April 2018"}/>
          <EventCard title={"Carol"} text={"Farewell Party"}  time={"30th April 2018"}/>

        </Card>
        </Col>
    );
  }
}
