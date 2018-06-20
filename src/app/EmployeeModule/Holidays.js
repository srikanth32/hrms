import React from "react";
import {holidaysCard,holidayTextR,holidayTitleR,holidayDayR,cardStyle,linkDepartment} from "../home/Home.css";
import {item} from "../Layout.css";
import {CardHeader} from "../home/CardHeader";
import {Card,CardText,Col} from "reactstrap";
import { thinRight,thinLeft } from 'react-icons-kit/entypo';
import {holidaysLeft,holidaysRight} from "../home/Home.css";
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { angleLeft,angleRight } from 'react-icons-kit/fa';
 import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
 import {cardstyle1} from "./Employee.css";

 export class Holidays extends React.Component{

   render() {
     return(

         <Card body inverse className={cardstyle1}>
         <Link to="HolidayPage" className={linkDepartment}>
         <CardHeader text={"Holidays"}/>
         </Link>
           <div id="carouselExampleIndicators" class="carousel slide" data-interval="false" style={{marginTop:'3vw'}} >
             <div class="carousel-inner" >
               <div class="carousel-item active" style={{textAlign:'center'}} id={item} >
               <Card className={holidaysCard}>
               <CardText className={holidayTitleR}>30</CardText>
               <CardText className={holidayDayR}>Friday,March</CardText>
               <CardText className={holidayTextR}>Good Friday</CardText>
               </Card>
               </div>
               <div class="carousel-item" style={{textAlign:'center'}} id={item}>
               <Card className={holidaysCard}>
               <CardText className={holidayTitleR}>14</CardText>
               <CardText className={holidayDayR}>Saturday,April</CardText>
               <CardText className={holidayTextR}>Ambedkar Jayanthi</CardText>
               </Card>
               </div>
               <div class="carousel-item" style={{textAlign:'center'}} id={item}>
               <Card className={holidaysCard}>
               <CardText className={holidayTitleR}>20</CardText>
               <CardText className={holidayDayR}>Tuesday,May</CardText>
               <CardText className={holidayTextR}>Holiday</CardText>
               </Card>
               </div>
             </div>
             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">

                  <Icon icon={angleLeft} id={holidaysLeft} size={50} />
               <span class="sr-only">Previous</span>
             </a>
             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <Icon icon={angleRight} id={holidaysRight} size={50} />
             </a>
           </div>
           </Card>


     );
   }
 }
