import React from "react";
import {EmployeeHeader} from "./EmployeeHeader";
import {Footer} from "../Footer";
import {displaycontainer,leavesdiv,linestyle} from "./Employee.css";
import Icon from 'react-icons-kit';

import {plus} from 'react-icons-kit/entypo/';
import { filter } from 'react-icons-kit/fa/filter';
import { bin,search  } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import { ic_delete,ic_create  } from 'react-icons-kit/md';
import {displayContainer,pageHeading,hrStyle,activeStyle,orange,floatRight1,exampletable,buttonStyle} from "../Layout.css";
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";
import {labelStylepopup,savebtn1,btnstyle,savebtn} from "../Layout.css";
import {RequestedLeaves} from "./RequestedLeaves";
import {AddNewLeave} from "./AddNewLeave";
import {Balance} from "./Balance";

export class EmployeeLeaves extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      balance:false,
      addnew:false,
      requested:false
    }
  }
  balancefunc(){
    if(this.state.balance){
      return <div><Balance/></div>;
    }
  }
  addnewfunc(){
    if(this.state.addnew){
      return <div><AddNewLeave/></div>;

    }
  }

  requestedfunc(){
    if(this.state.requested){
      return <div><RequestedLeaves/></div>;
    }
  }
  balanceState(){
    this.setState({
      balance:true,
      addnew:false,
      requested:false
    });

  }
  addnewState(){
    this.setState({
      addnew:true,
      balance:false,
      requested:false
    });
  }
  requestedState(){
    this.setState({
      requested:true,
      balance:false,
      addnew:false
    })
  }
  render(){
    var balance = this.balancefunc();
    var requested = this.requestedfunc();
    var addnew = this.addnewfunc();
    return(
      <div>
      <EmployeeHeader/>
<div className={displaycontainer}>
<p>
{this.state.requested ?
  <span  onClick={this.requestedState.bind(this)} id={savebtn} style={{borderBottom:'2px solid #4AD496'}}>Leave List</span> :
  <span  onClick={this.requestedState.bind(this)} id={savebtn} style={{color:'grey'}}>Leave List</span>
  }
  {this.state.balance ?
    <span  onClick={this.balanceState.bind(this)} id={savebtn} style={{borderBottom:'2px solid #4AD496'}}>Balance</span> :
    <span  onClick={this.balanceState.bind(this)} id={savebtn} style={{color:'grey'}}>Balance</span>
    }
    {this.state.addnew ?
      <span  onClick={this.addnewState.bind(this)} id={savebtn} style={{borderBottom:'2px solid #4AD496'}}>Request</span> :
      <span  onClick={this.addnewState.bind(this)} id={savebtn} style={{color:'grey'}}>Request</span>
      }





<span><button type="button" class="btn" id={btnstyle}>
<Icon icon={plus} style={{position:'relative',top:'0.2vw',paddingRight:'0.3vw'}}/>
APPLY LEAVE</button></span>
</p>
<hr className={linestyle}/>
     {balance}
     {addnew}
     {requested}
 </div>
 <Footer/>
 </div>


    );
  }
}
