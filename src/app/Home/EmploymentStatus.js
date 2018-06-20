import React from "react";
import {displayContainer,buttonStyle} from "../Layout.css";
import {dropitem,droptoggle} from "./Home.css";
import {Present} from "./Present";
import {Absent} from "./Absent";
import {OnLeave} from "./OnLeave";
import {Late} from "./Late";
import {Overtime} from "./Overtime";
import {All} from "./All";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class EmploymentStatus extends React.Component{
  constructor(props) {
    super(props);

    this.state= {
      present:false,
      absent:false,
      onleave:false,
      late:false,
      overtime:false,
      all:true
    }
  }
  presentfunc(){
      if(this.state.present){
      return(
        <div><Present/></div>
      );
    }
  }
  absentfunc(){
    if(this.state.absent){
      return(
        <div> <Absent/></div>
      );
    }
  }
  onleavefunc(){
    if(this.state.onleave){
      return(
        <div> <OnLeave/></div>
      )
    }
  }
  latefunc(){
    if(this.state.late){
      return(
        <div> <Late/></div>
      )
    }
  }
  overtimefunc(){
    if(this.state.overtime){
      return(
        <div> <Overtime/></div>
      )
    }
  }
  allfunc(){
    if(this.state.all){
      return(
        <div> <All/></div>
      )
    }
  }
  absentstate(){
    this.setState({
      absent:!this.state.absent,
      present:false,
      onleave:false,
      late:false,
      overtime:false,
      all:false
    });
  }
  presentstate(){
    this.setState({
      present:!this.state.present,
      absent:false,
      onleave:false,
      late:false,
      overtime:false,
      all:false
    });
  }
  onleavestate(){
    this.setState({
      onleave:!this.state.onleave,
      present:false,
      absent:false,
      late:false,
      overtime:false,
      all:false
    })
  }
  latestate(){
    this.setState({
      late:!this.state.late,
      present:false,
      absent:false,
     onleave:false,
      overtime:false,
      all:false
    })
  }
  overtimestate(){
    this.setState({
      overtime:!this.state.overtime,
        late:false,
        present:false,
        absent:false,
       onleave:false,
       all:false

    })
  }
  allstate(){
    this.setState({
      overtime:false,
        late:false,
        present:false,
        absent:false,
       onleave:false,
       all:true
    })
  }
  render(){
    var present = this.presentfunc();
    var absent = this.absentfunc();
    var onleave = this.onleavefunc();
    var late = this.latefunc();
    var overtime = this.overtimefunc();
    var all = this.allfunc();
    return(
      <div>
      <Header/>
  <div className={displayContainer}>Employee status
  <div class="dropdown">
    <button class="btn  dropdown-toggle" type="button" id={buttonStyle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Employee status
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" id={dropitem} onClick={this.presentstate.bind(this)} >Present</a>
      <a class="dropdown-item" id={dropitem} onClick={this.absentstate.bind(this)} >Absent</a>
      <a class="dropdown-item" id={dropitem} onClick={this.onleavestate.bind(this)} >On Leave</a>
      <a class="dropdown-item" id={dropitem} onClick={this.latestate.bind(this)} >Late</a>
      <a class="dropdown-item" id={dropitem} onClick={this.overtimestate.bind(this)} >Overtime</a>
      <a class="dropdown-item" id={dropitem} onClick={this.allstate.bind(this)} >All</a>

    </div>
  </div>
  {present}
  {absent}
  {onleave}
  {late}
  {overtime}
  {all}
  </div>
  <Footer/>
  </div>
    );
  }
}
