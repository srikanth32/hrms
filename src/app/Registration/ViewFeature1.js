import React from "react";
import {containerRegistration,content,cardStyle2,rowStyle,featureHeading,featuretext,list,back,imgStyle} from "./LayoutRegistration.css";
import {LogoHeader} from "./LogoHeader";
import {Row,Col,Card} from "reactstrap";
import Icon from 'react-icons-kit';
import { thinLeft } from 'react-icons-kit/entypo/thinLeft';
import {Link} from "react-router-dom";
import {FooterText} from "./FooterText";
import { fadeInLeft,fadeInRight,fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {

fadeInLeft: {

    animationName: 'fadeInLeft',
    animationDuration: '2s'
  },
  fadeInRight: {
    animationName: 'fadeInRight',
    animationDuration: '2s'

  },
  fadeInUp: {
    animationName: 'fadeInUp',
    animationDuration: '2s'
  }
}

export class ViewFeature1 extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <Row className={rowStyle}>
        <Col xs="4">
        <img  src={require('../timeandattendance.jpg')} id={imgStyle} style={styles.fadeInUp} />
        </Col>
      <Col>
      <p id={featureHeading}  style={styles.fadeInRight}>
      Time and Attendance
      </p>
      <p id={featuretext}  style={styles.fadeInLeft}>
      Streamline your end-to-end processes and productivity
      <ul className={list}>
  <li> Automate your rules and calculations to reduce compliance risks</li>
  <li> Eliminate manual time entries and redundant processes</li>
  <li> Avoid costly, time-consuming integrations</li>
</ul>
      </p>
      </Col>
      </Row>
        <Link to="ViewFeatures"><p className={back}><Icon icon={thinLeft} size={20} style={{position:'relative',top:'0.4vw'}} />Back</p></Link>
      </div>

      </div>
<FooterText/>
</div>
    );
  }
}