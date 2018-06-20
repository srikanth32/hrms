import React from "react";
import {displayContainer,contentStyle1,tableinput,square,right} from "../Layout.css";
import Icon from 'react-icons-kit';
import { plusSquareO,minusSquareO } from 'react-icons-kit/fa';
import { cross } from 'react-icons-kit/entypo/cross';

export class Auto extends React.Component{
  render(){
    return(
      <div>
      <table class="table table-bordered table-responsive-md" data-toggle="toggle" id={contentStyle1}>
      <thead>
          <tr style={{backgroundColor:'#496FA0',color:'white',textAlign:'center'}}>
                <th>Components</th>
                <th>Monthly</th>
                <th>Annually</th>
                <th>Curency</th>
                <th>Component Type</th>
                <th>
                 </th>


            </tr>
        </thead>
        <tbody>
           <tr>
               <td  ><input type="text" placeholder="Basic Pay" class="form-control" id={tableinput} /></td>
               <td ><input type="text" placeholder="5,000" class="form-control" id={tableinput}/></td>
               <td ><input type="text" placeholder="60,000" class="form-control" id={tableinput} /></td>
               <td ><select class="form-control" id={tableinput} >
               <option>INR-INDIA</option>
               </select></td>
               <td ><select class="form-control" id={tableinput}>
               <option>EARNINGS</option>
               </select></td>
               <td>    <Icon icon={minusSquareO} />    </td>
           </tr>
           <tr>
               <td  ><input type="text" placeholder="PF" class="form-control" id={tableinput}/></td>
               <td><input type="text" placeholder="1,000" class="form-control" id={tableinput}/></td>
               <td ><input type="text" placeholder="12,000" class="form-control" id={tableinput}/></td>
               <td ><select class="form-control" id={tableinput}>
               <option>INR-INDIA</option>
               </select></td>
               <td ><select class="form-control" id={tableinput}>
               <option>DEDUCTIONS</option>
               </select></td>
               <td>  <Icon icon={plusSquareO} />  </td>

           </tr>
           <tr style={{position:'relative',top:'3vw'}}>
           <td>Total CTC</td>
           <td ><input type="text" placeholder="4,000" class="form-control" id={tableinput}/></td>
           <td ><input type="text" placeholder="48,000" class="form-control" id={tableinput}/></td>
           <td></td>
      <td></td>
           <td className={right}><button class="btn  btn-outline-warning">Save</button></td>

           </tr>
           </tbody>
           </table>
      </div>
    );
  }
}
