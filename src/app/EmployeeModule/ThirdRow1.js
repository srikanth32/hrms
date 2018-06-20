import React from "react";
import {Holidays} from "./Holidays";
import {Row,Col,Card,CardText} from "reactstrap";
import {RowStyle,cardstyle1,imgstyle,cardheading,myteamLeft,myteamRight,teamrow} from "./Employee.css";
import {imgStyle} from "../employee/LayoutSettings.css";
import {item} from "../Layout.css";
import {CardHeader} from "../home/CardHeader";
import {Link} from "react-router-dom";
import {holidaysLeft,holidaysRight} from "../home/Home.css";
import {MyTeam} from "./MyTeam";
import Icon from 'react-icons-kit';
import { angleLeft,angleRight } from 'react-icons-kit/fa';

export class ThirdRow1 extends React.Component{
  render(){
    return(
      <Row id={RowStyle}>

<Col xs="4">
<Holidays/>
</Col>

      <Col xs="8" className={cardstyle1}>
      <p className={cardheading}>My Team</p>

      <div id="myteam" class="carousel slide" data-interval="false"  >
        <div class="carousel-inner" >
          <div class="carousel-item active" style={{textAlign:'center'}} id={item} >
          <Row className={teamrow}>
          <MyTeam image={require('../user1.png')} name={"Niha"} designation={"Manager"}/>
          <MyTeam image={require('../user1.png')} name={"David"} designation={"Team Mate"}/>
          <MyTeam image={require('../user1.png')} name={"Niha Fatima"} designation={"Reporting Manager"}/>
          </Row>

          </div>


          <div class="carousel-item" style={{textAlign:'center'}} id={item}>
           <Row className={teamrow}>
          <MyTeam image={require('../user1.png')} name={"David"} designation={"Team Mate"}/>
          <MyTeam image={require('../user1.png')} name={"Niha Fatima"} designation={"Reporting Manager"}/>
            <MyTeam image={require('../user1.png')} name={"Kate"} designation={"Manager"}/>
            </Row>
          </div>


        </div>
        <a class="carousel-control-prev" href="#myteam" role="button" data-slide="prev">

             <Icon icon={angleLeft} id={myteamLeft} size={50} />
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myteam" role="button" data-slide="next">
             <Icon icon={angleRight} id={myteamRight} size={50} />
        </a>
      </div>


      </Col>
      </Row>
    );
  }
}
