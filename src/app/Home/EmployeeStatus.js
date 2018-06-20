import React from "react";
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { calendar } from 'react-icons-kit/entypo/calendar';
import {CardHeader} from "./CardHeader";
import {Col,Card,CardText,Row} from "reactstrap";
import styles from  "./Home.css";
import style1 from "../Layout.css";

export class EmployeeStatus extends React.Component{
  render(){
    return(
      <Col xs="6" style={{marginRight:'-1vw'}}>
      <Link to="EmploymentStatus" className={styles.linkDepartment}>
       <Card body inverse className={styles.cardStyle2} >
        <CardHeader text={"Employee Status"}/>
        <CardText  className={styles.empicons}>
        <i aria-hidden="true" class="calendar huge icon" id={styles.empCalendar}></i>{'   '}
        <span className={styles.calendarText}>04-APR-18</span>
        </CardText>
        <Row style={{marginRight:'0.5vw',marginTop:'2vw'}}>
         <Col style={{marginRight:'-1vw',textAlign:'justify'}}>
          <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#EAE7F5'}}>
          <CardText className={style1.cardtextstyle1}>80 </CardText>
          </Card>

          </Col>
         <Col style={{marginRight:'-1vw'}}>
             <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#DFDAEF' }}>
             <CardText className={style1.cardtextstyle1}>10</CardText>
           </Card>
           </Col>
         <Col style={{marginRight:'-1vw'}}>
             <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#D5CDE9'}}>
             <CardText className={style1.cardtextstyle1}>5 </CardText>
           </Card>
           </Col>
         <Col style={{marginRight:'-1vw'}}>
           <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#CBC1E3'}}>
           <CardText className={style1.cardtextstyle1}>2</CardText>
         </Card>
         </Col>
         <Col style={{marginRight:'-1vw'}}>
           <Card body inverse className={styles.cardStyle} style={{ backgroundColor: '#C7BCE0'}}>
           <CardText className={style1.cardtextstyle1}>3</CardText>
         </Card>
         </Col>
       </Row>
       <Row className={styles.empRow}>
       <p className={styles.empTextP}>Present</p>
        <p className={styles.empTextA}>Absent</p>
          <p className={styles.empTextOL}>On Leave</p>
            <p className={styles.empTextL}>Late</p>
              <p className={styles.empTextOT}>Overtime</p>
       </Row>
        </Card>
        </Link>
        </Col>
    );
  }
}
