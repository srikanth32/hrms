import React from "react";
import {AnnouncementCard} from "./AnnouncementCard";
import {AnnouncementCard2} from "./AnnouncementCard2";

import {CardHeaderAnnounce} from "./CardHeaderAnnounce";
import {Col,Card,CardText} from "reactstrap";

import {cardStyle1,pagination} from "./Home.css";

export class Announcement extends React.Component{
  render() {
    return(
      <Col style={{marginRight:'-1vw'}} >

       <Card body  className={cardStyle1}>

          <CardHeaderAnnounce  />

          <AnnouncementCard2 title={"Thursday Concession Day Ticket"}
          text={"Allows admission on Thursday 12 July to students (with a valid student card), children 14 to 17 and customers 60 and over..."} time={"1 Hour ago"}/>
          <AnnouncementCard2 />
        </Card>
        </Col>
    );
  }
}
