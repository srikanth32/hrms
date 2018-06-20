import React from "react";
import {Col,Row,Card} from "reactstrap";
import {CardHeader} from "./CardHeader";
import {cardStyle3} from "./Home.css";
import PieChart from 'react-simple-pie-chart';
import {Rectangle,Circle} from 'react-shapes';
import {Link} from "react-router-dom";
import {linkDepartment} from "./Home.css";
import styles from "../Layout.css";
export class Departments extends React.Component{
  render() {
    return(
      <Col style={{marginRight:'-1vw'}}>
      <Link to="/DepartmentsPage" className={linkDepartment}>
          <Card body inverse className={cardStyle3} >
          <CardHeader text={"Departments"}/>
          <div className={styles.piechartStyle}>
            <PieChart
                  slices={[

                         {
                                color: '#FFC000',
                                value: 18,
                          },
                          {
                                color: '#A5A5A5',
                                value: 14,
                          },
                          {
                               color: '#5B9BD5',
                               value: 6,

                            },
                          {
                                color: '#ED7D31',
                                value: 4,
                          },
                        ]}
              /></div>
          <div className={styles.pieChartTextStyle}>
              <div className={styles.rectangleStyle}><Rectangle width={7.5} height={7.5}
               fill={{color:'#5B9BD5'}} /><span className={styles.timeSheetStyle}>HR</span></div>
               <div className={styles.rectangleStyle}><Rectangle width={7.5} height={7.5}
                fill={{color:'#FFC000'}} /><span className={styles.timeSheetStyle}>IT</span></div>
               <div className={styles.rectangleStyle}><Rectangle width={7.5} height={7.5}
               fill={{color:'#ED7D31'}} /><span className={styles.timeSheetStyle}>Finance</span></div>
               <div className={styles.rectangleStyle}><Rectangle width={7.5} height={7.5}
               fill={{color:'#A5A5A5'}} /><span className={styles.timeSheetStyle}>Accounts</span></div>
        </div>
        </Card>
        </Link>
        </Col>
    );
  }
}
