import React from "react";
import {Card,CardTitle,CardText} from "reactstrap";
import {cardTitle,cardText,cardStyle6,imgStyle,timeText1} from "./CardStyling.css";
import {cardimgleft} from "../Layout.css";

export class EventCard extends React.Component{
  render(){
    return(
      <Card className={cardStyle6}>
        <div class="row">
           <div class="col-md-2"><img className={cardimgleft} src={require('../profile2.png')} id={imgStyle}/></div>
           <div class="col-md-6" >
           <CardTitle className={cardTitle}>{this.props.title}</CardTitle>
           <CardText className={cardText}>{this.props.text}</CardText></div>
           <CardText className={timeText1}>{this.props.time}</CardText>
           </div></Card>
    );
  }
}
