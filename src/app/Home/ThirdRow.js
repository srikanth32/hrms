import React from "react";
import {Row} from "reactstrap";
import {Announcement} from "./Announcement";
import {Events} from "./Events";
import {Approvals} from "./Approvals";
import styles from "../Layout.css";
export class ThirdRow extends React.Component{
  render(){
    return(
      <Row className={styles.rowStyle} id={styles.thirdrowstyle}>
       <Announcement/>
       <Events/>

     </Row>
    );
  }
}
