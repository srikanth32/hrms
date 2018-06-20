import React from "react";
import {empDesign,empPhone,empId,pagination,paginationtext,paginationtrue,paginationfalse,searchstyle,paginationarrow} from "./LayoutEmployee.css";
import Icon from 'react-icons-kit';
import { angleDown } from 'react-icons-kit/fa';
import { search } from 'react-icons-kit/icomoon/search';
import { filter } from 'react-icons-kit/fa/filter';
import { smallRight } from 'react-icons-kit/entypo/';
import {pageHeading,hrStyle,arrow,orange,floatRight1,buttonStyle,displayContainer,btnstyle,downIcon} from "../Layout.css";
import {dropitem} from "../Home/Home.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";
import {EmployeeList} from "./EmployeeList";
import {EmployeeList1} from "./EmployeeList1";
import {EmployeeList2} from "./EmployeeList2";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class ViewEmployee extends React.Component{
  constructor(props){
    super(props);
    this.second = this.second.bind(this);
    this.first = this.first.bind(this);
    this.third = this.third.bind(this);
    this.state={
      first:true,
      second:false,
      third:false
    };
  }
  second(){
    this.setState({
    first:false,
      second:true,
      third:false
    });
  }
  first(){
    this.setState({
      first:true,
      second:false,
      third:false
    })
  }
  third(){
    this.setState({
      first:false,
      second:false,
      third:true
    })
  }
  displayEmployees(){
    if(this.state.first){
      return <EmployeeList/>;
    }
  }
  displaySecond(){
    if(this.state.second){
      return <EmployeeList1/>;
    }
  }
  displayThird(){
    if(this.state.third){
      return <EmployeeList2/>;
    }
  }
  render() {
    var first=this.displayEmployees();
    var second = this.displaySecond();
    var third = this.displayThird();
    var page = 1;
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
<p className={pageHeading}>
Employee List

</p>
<hr className={hrStyle}/>
<p>
<Link to="/AddEmployee"><button className="btn btn-outline-warning" id={buttonStyle}>
Add New Employee</button></Link>
<span  className={floatRight1}>
<form class="form-row">

	<input type="search"  placeholder="Search" />
  <div class="dropdown" style={{position:'relative',left:'-1vw'}} >
    <button class="btn  btn-outline-light" type="button" id={btnstyle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <Icon icon={filter} />
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item">New Joinees</a>
      <a class="dropdown-item">Department Manager</a>
      <a class="dropdown-item">Present Employees</a>
      <a class="dropdown-item">On Leave</a>
    </div>
  </div>
</form>
</span>
</p>

{first}
{second}
{third}

<p className={pagination}>
<span onClick={this.first.bind(this)}>{this.state.first?<span id={paginationtrue}>1</span>:<span id={paginationfalse}>1</span>}  </span>
<span onClick={this.second.bind(this)}>{this.state.second?<span id={paginationtrue}>2</span>:<span id={paginationfalse}>2</span>} </span>
<span onClick={this.third.bind(this)}>{this.state.third?<span id={paginationtrue}>3</span>:<span id={paginationfalse}>3</span>}  </span>
<span id={paginationarrow}>></span></p>
  </div>
  <Footer/>
  </div>
    );
  }
}
