import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import Icon from 'react-icons-kit';
import {filter} from "react-icons-kit/fa/filter";
import { pencil,bin,search } from 'react-icons-kit/icomoon';
import { ic_delete, ic_create  } from 'react-icons-kit/md';
import {Link} from "react-router-dom";
import {activeStyle} from "../projects/Projects.css";
import {orange,contentStyle,displayContainer,pageHeading,hrStyle,buttonStyle,floatRight1,exampletable,savebtn1,bankdiv,btnstyle} from "../Layout.css";
import {hyperLink} from "../settings/LayoutSettings.css";
import {Header} from "../Header";
import {Footer} from "../Footer";
import $ from 'jquery';

var result = [];
var URL = 'http://localhost:3033/';
var parsed="";
function searchingFor(term){
    return function(x){
      return x.ID.toLowerCase().includes(term.toLowerCase()) || x.ExpenseName.toLowerCase().includes(term.toLowerCase()) ;
    }
  }
export class ClaimList extends React.Component{
    constructor(){
        super() 
        this.state = {
            //data: []
            term: '',
            result: []
        };
        this.searchHandler = this.searchHandler.bind(this)
        
      }
      searchHandler(event){
        this.setState({
          term: event.target.value
        })
      }
  componentDidMount(){
   this.Claimlist();
    
    
}
Claimlist(){
//alert("called")
$.ajax({
  
    url: URL + '/ClaimList',
    type: "GET",
    dataType: 'json',
    ContentType: 'application/json',
    success: function(parsed) {
         parsed = JSON.stringify(parsed);
         console.log(parsed)
         var vals = Object.values(parsed);
        //  for(var x in parsed){
        //     result.push(parsed[x]);
        //   }
        //result = $.parseJSON(parsed);
          
        //data = JSON.stringify(data);
      this.setState(vals);
      console.log(vals)
      
    }.bind(this),
    error: function(jqXHR) {
      console.log(jqXHR);
    }.bind(this)
 }) 





}//$.ajax({
    //     url: URL + '/ClaimList',
    //     type: 'GET',
    //     cache: false,
    //     success: function (ClaimResult) {
    //         ClaimResult = JSON.parse(ClaimResult);
    //         //console.log(ClaimResult)
    //         this.setState({ClaimResult:ClaimResult});
    //         if (ClaimResult.Status === 'true') {
    //             result=Json.parse(Json.stringify(ClaimResult))
    //             // ClaimResult.Message.map(r =>{
    //             //     result.push(r)
    //             }
    //             // result.map(r =>{
    //             //    // console.log(r.ID)
    //             // })
    //          else {
    //             alert(result);
    //         }
    //     },
    //     error: function () {
    //         alert('Unable to update job details !!!');
    //     },
    //     complete: function () {
    //         alert()
    //     }
    // });

// MyTableGrid(){
//   render: {
//       return (
//           result.map(r =>
//               //<li key={post.id}>{post.title}</li>
//               <tr key ={r.ID}>
//               <td>{r.ID}</td>
//               <td>{r.ExpenseName}</td>
//               <td>{r.Amount}</td>
//               <td>{r.Date}</td>
//               <td>{r.Description}</td>
//               <td className={activeStyle}></td>
//               <td>  <Link to="/AddExpenses" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
//      <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
//           </tr>
//             )
//       )
//   }
// }

// renderProducts() {
//      this.state.result.map(product => {
//         return (
//             <tr>
//                 <td>{product.ID}</td>
//                 <td>{product.ExpenseName}</td>
//                 <td>{product.Amount}</td>
//             </tr>
//         );
//     })
// }
render(){ 
    return(
        <div>
            {/* <table>
        <tbody>
        {this.state.result.map(function(item, key) {

return (

    <tr key = {key.id}>
        <td>{item.ID}</td>
        <td>{item.ExpenseName}</td>
        <td>{item.Amount}</td>
        <td>{item.Description}</td>
    </tr>

        )

})}
        </tbody>
          </table> */}
      
      <Header/>
      <div className={displayContainer}>
    <p className={pageHeading}>Claims</p>

<hr className={hrStyle}/>
<span  className={floatRight1}>
<form class="form-row" method="GET" >

    <input type="search"  placeholder="Search" onChange={this.searchHandler} />
  <div class="dropdown" style={{position:'relative',left:'-1vw'}} >
    <button class="btn  btn-outline-light" type="button" id={btnstyle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <Icon icon={filter} />
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item">Employee ID</a>
      <a class="dropdown-item">Expense Title</a>
      <a class="dropdown-item">Date</a>
      <a class="dropdown-item">Amount</a>
    </div>
  </div>
</form>
</span>
<table class="table table-bordered table-striped table-responsive-md" >
<thead>
    <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Expense Title</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
      </tr>
      {
this.state.result.filter(searchingFor(this.state.term)).map(function(key){
    return (
      <tr  key={key}>
      <td>{person.ID}</td>
      <td> {person.EmployeeName} </td>
      <td>{person.ExpenseName}</td>
      <td> {person.Description} </td>
      <td> {person.Amount} </td>
      <td> {person.Date} </td>
      </tr>
    )
  })
}
  </thead>
  <tbody>
       {/* {this.MyTableGrid()} */}
       
       {/* {this.renderProducts()} */}
       
  

     </tbody>
     </table>
     <div className={bankdiv} style={{marginTop:'7vw',marginLeft:'-7.7vw'}}>
       <Link to="/AddClaims"><button className="btn btn-outline-warning" >

       Add New Claim</button></Link>
       </div>
       </div>
      <Footer/>
      </div>

);

}
}