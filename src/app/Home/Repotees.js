import React from "react";
import { Container,Row,Col, Card, CardTitle,CardText } from "reactstrap";
import Icon from 'react-icons-kit';
import {repoteesCardStyle1} from "../Layout.css";
import {circleAlignment} from "./Home.css";

import {Circle} from 'react-shapes';
export class Repotees extends React.Component {
  render() {
    return(

         <Col>
          <Card body  className={repoteesCardStyle1} >

            <CardText className={circleAlignment}>{this.props.text}</CardText>

          </Card>
       </Col>

    );

}
}
