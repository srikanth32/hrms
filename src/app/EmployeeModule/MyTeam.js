import React from "react";
import {imgStyle} from "../employee/LayoutSettings.css";
import {teamname,teamdesign} from "./Employee.css";

export class MyTeam extends React.Component{
  render(){
    return(
      <div class="card" style={{width:'13.24rem',border:'none',position:'relative',bottom:'0.9vw'}}>
      <img class="card-img-top" src={this.props.image} id={imgStyle}
      style={{borderRadius:'80%'}}
      />
      <div class="card-body">
      <h5 class="card-title" className={teamname}>{this.props.name}</h5>
      <p class="card-text" className={teamdesign}>{this.props.designation}</p>
      </div>
      </div>
    );
  }
}
