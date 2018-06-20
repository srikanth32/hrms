import React from "react";
import {Row,Col,Card} from "reactstrap";
import {CardHeader} from "./CardHeader";
import {Repotees} from "./Repotees";
import styles from "../Layout.css";
import style1 from "./Home.css";
import {Circle} from 'react-shapes';
import Icon from 'react-icons-kit';
import { thinRight,thinLeft } from 'react-icons-kit/entypo';
import {Repotee} from "./Repotee";




export class FourthRow extends React.Component{

  render(){
    return(
      <Row className={styles.rowStyle}>
       <Col>
           <Card  className={styles.repoteesCardStyle}>
           <CardHeader text={"My Repotees"}  />
           <div id="carouselExampleIndicators1" class="carousel slide" data-interval="false" >

             <div class="carousel-inner" >
               <div class="carousel-item active" style={{textAlign:'center'}} id={styles.item1} >
               <Row className={styles.repoteesStyle}>


                     <Repotee img={require('../user1.png')}
                     text={<Circle r={5} fill={{color:'#FEC835'}}  />}
                     />
                     <Repotee img={require('../profile2.png')}
                     text={<Circle r={5} fill={{color:'#EF462E'}}  />}
                     />
                     <Repotee img={require('../user1.png')}
                     text={<Circle r={5} fill={{color:'#29A751'}}  />}
                     />
                     <Repotee img={require('../profile2.png')}
                     text={<Circle r={5} fill={{color:'#FEC835'}}  />}
                     />
                     <Repotee img={require('../profile.jpg')}
                     text={<Circle r={5} fill={{color:'#FEC835'}}  />}
                     />

               </Row>
               </div>
               <div class="carousel-item" style={{textAlign:'center'}} id={styles.item2}>

                    <Row  className={styles.repoteesStyle}>
                          <Repotees text={<Circle r={5} fill={{color:'#29A751'}}  />}/>
                          <Repotees text={<Circle r={5} fill={{color:'#EF462E'}}  />}/>
                          <Repotees text={<Circle r={5} fill={{color:'#FEC835'}}  />}/>
                          <Repotees/>
                          <Repotees/>

                    </Row>
               </div>
             </div>

           <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev" >
               <Icon icon={thinLeft} id={style1.repoteesLeft} size={40}/>
             <span class="sr-only">Previous</span>
           </a>
           <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
             <Icon icon={thinRight} id={style1.repoteesRight} size={40}/>
             <span class="sr-only">Next</span>
           </a>
         </div>
            <Row className={styles.repoteesRowStyle}>
                <div> <Circle r={5} fill={{color:'#29A751'}}  />
               <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>Present</span></div>
                 <div> <Circle r={5} fill={{color:'#EF462E'}}  />
                 <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>Absent</span></div>
                 <div><Circle r={5} fill={{color:'#FEC835'}}  />
                 <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>On Leave</span></div>
          </Row>
         </Card>
         </Col>
     </Row>
    );
  }
}
