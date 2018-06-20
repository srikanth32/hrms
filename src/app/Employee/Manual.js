import React from "react";
import {displayContainer,contentStyle1} from "../Layout.css";
import Icon from 'react-icons-kit';
import { cross } from 'react-icons-kit/entypo/cross';
export class Manual extends React.Component{
  render(){
    return(
      <div>
      <table class="table table-bordered table-responsive-md" id={contentStyle1}>
      <thead>
          <tr style={{backgroundColor:'#496FA0',color:'white',textAlign:'center'}}>
                <th>Salary & Allowances</th>
                <th>Per Month</th>
                <th>Annually</th>

            </tr>
        </thead>
        <tbody>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>Basic Salary</td>
               <td>11,250</td>
               <td>1,35,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>House Rent Allowance</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>Lunch Allowance</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>Conveyance Allowance</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>Medical</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>Personal Pay</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>Other Allowance</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'black',backgroundColor:'#EFF9FC'}}>
               <td>Total Earnings</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>Provident Fund</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'gray'}}>
               <td>ESI</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'black',backgroundColor:'#EFF9FC'}}>
               <td>Total Deductions</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'black',backgroundColor:'#EFE4B0'}}>
               <td>Total Pay</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           <tr style={{textAlign:'center',color:'black',backgroundColor:'#7092BE'}}>
               <td>Cost To Company(CTC)</td>
               <td>4,000</td>
               <td>48,000</td>
           </tr>
           </tbody>
           </table>
      </div>


    );
  }
}
