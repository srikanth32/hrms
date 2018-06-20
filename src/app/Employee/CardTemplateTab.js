import React from "react";
import {imgStyletab,cardStyletab,cardTitletab,cardText} from "./LayoutSettings.css";
import {empName} from "./LayoutEmployee.css";

export class CardTemplateTab extends React.Component{
  render() {
    return(
      <div class="card" id={cardStyletab} style={{marginRight:'2vw'}}>
      <img class="card-img-top" src={require('../user1.png')} id={imgStyletab}
   />
       <div class="card-body">
         <h5 class="card-title" id={cardTitletab} className={empName}>
           {this.props.text}
           </h5>
         <div class="card-text" id={cardText}>
          {this.props.children}
          </div>

       </div>
      </div>
    );
  }
}
