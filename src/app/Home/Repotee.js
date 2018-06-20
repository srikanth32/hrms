import React from "react";
import {imgStyle} from "../employee/LayoutSettings.css";
import styles from "./Home.css";
import {Col} from "reactstrap";

export class Repotee extends React.Component{
  render(){
    return(
<Col>
    <div className={styles.repoteediv}>
    <img src={this.props.img} id={styles.repoteeimg}/>
      <p className={styles.circleAlignment}>{this.props.text}</p>
      </div>
      </Col>
    );

  }
}
