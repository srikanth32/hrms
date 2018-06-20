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

export class ViewFeature3 extends React.Component{
  render(){
    return(
      <div>

      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <Row className={rowStyle}>
        <Col xs="4">
        <img class="animated slideInUp" src={require('../leave.jpg')} id={imgStyle} style={styles.fadeInUp}/>
        </Col>
      <Col>
      <p id={featureHeading} class="animated slideInRight" style={styles.fadeInRight}>
      Leave Management
      </p>
      <p id={featuretext} class="animated fadeInLeft" style={styles.fadeInLeft}>
    Leave tracking online.
      <ul className={list}>
  <li> Managing your Leave status online</li>
  <li> Eliminate manual Leave entries and redundant processes</li>
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
