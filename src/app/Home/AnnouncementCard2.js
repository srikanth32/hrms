import React from "react";
import {Card,CardTitle,CardText} from "reactstrap";
import {cardTitle1,cardText1,cardStyle7,imgStyle,timeText} from "./CardStyling.css";


export class AnnouncementCard2 extends React.Component{
  render(){
    return(
      <Card className={cardStyle7} >

           <CardTitle className={cardTitle1}>{this.props.title}</CardTitle>
          <CardText className={cardText1}>{this.props.text}</CardText>
          <CardText className={timeText}>{this.props.time}</CardText>
          </Card>
    );
  }
}
