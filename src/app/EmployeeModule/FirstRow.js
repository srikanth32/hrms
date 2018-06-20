import React from "react";
import {Row,Col,Card,CardText} from "reactstrap";
import {cardTextStyle,linkStyle,cardStyle,firstrowstyle} from "../Layout.css";
import {Link} from "react-router-dom";

import {imgStyle} from "../employee/LayoutSettings.css";
import { users } from 'react-icons-kit/icomoon/users';




export class FirstRow extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isStart: false,
      elapsed: 0,
      diff: 0,
      laps: []
    }
  }
  componentWillUnmount() { // clear timer
    clearInterval(this.state.timer);
    this.setState({timer: undefined});
  }
  tick() {
    var elapsed = Date.now() - this.state.start + this.state.diff;
    this.setState({elapsed: elapsed});
  }
  onClick() {
    if(!this.state.isStart) { // start
      var timer = setInterval(this.tick.bind(this), 33);
      this.setState({
        isStart: true,
        timer: timer,
        start: new Date(),
      });
    } else { // pause
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
        isStart: false,
        diff: this.state.elapsed,
      });
    }
  }
  getTimeSpan(elapsed) { // 754567(ms) -> "12:34.567"
    var h = String(Math.floor(elapsed/(1000*60*60)%24)+100).substring(1);
    var m = String(Math.floor((elapsed/1000/60)%60)+100).substring(1);
    var s = String(Math.floor((elapsed/1000)%60+100)).substring(1);
    var ms = String(elapsed % 1000 + 1000).substring(1);
    return h+":"+m+":"+s;
  }
  reset() {
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined,
      isStart: false,
      elapsed: 0,
      diff: 0,
      laps: [],
    });
  }

  render() {
    return(
      <Row className={firstrowstyle}>
       <Col style={{marginRight:'-1vw'}}>
        <Card body inverse className={cardStyle} style={{ backgroundColor: '#A992E2',cursor:'pointer'}} onClick={this.onClick.bind(this)}>
        <CardText className={cardTextStyle} >
         {this.state.isStart ?  <p style={{fontSize:'1.7vw',float:'left',position:'relative',left:'3vw'}}>{this.getTimeSpan(this.state.elapsed)}</p> :
          <span style={{color:'lime',fontSize:'1.5vw'}}>CHECK IN</span>}


        </CardText>
        <CardText>
        {this.state.isStart ?
          <span style={{color:'red',fontSize:'0.7vw',position:'relative',bottom:'1.3vw',left:'4.3vw'}}>CHECK OUT</span> :
           null}
           </CardText>
        </Card>
        </Col>
       <Col style={{marginRight:'-1vw'}}>
       <Link to="/EmployeeAttendance">
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#EC6F59' }}>
           <CardText className={cardTextStyle}>Attendance</CardText>

         </Card>
         </Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}>
       <Link to="/EmployeeLeaves">
           <Card body inverse className={cardStyle} style={{ backgroundColor: '#54BAE0'}}>
           <CardText className={cardTextStyle}>Leaves <p><b>1</b></p></CardText>
         </Card>
         </Link>
         </Col>
       <Col style={{marginRight:'-1vw'}}>
       <Link to="/EmployeeProjects">
         <Card body inverse className={cardStyle} style={{ backgroundColor: '#F7C65F'}}>
         <CardText className={cardTextStyle}>Projects</CardText>
       </Card>
       </Link>
       </Col>

     </Row>
    );
  }
}
