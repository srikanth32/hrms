import React from "react";
import {exampletable,orange,example1} from "../Layout.css";
import {divider} from "./Employee.css";

export class Balance extends React.Component{
  render(){
    return(
      <div>
      <table class="table" id={example1}>




      <thead>
      <tr>
        <th>SNo <span id={divider}></span></th>

        <th>LEAVE TYPE <span id={divider}></span></th>
        <th>AVAILABLE <span id={divider}></span></th>
        <th>PENDING <span id={divider}></span></th>
        <th>APPROVED<span id={divider}></span></th>
        <th>REJECTED<span id={divider}></span></th>
        <th>BALANCE</th>

      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Casual</td>
          <td>11</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>12</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Medical</td>
          <td>5</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>5</td>
        </tr>





      </tbody>

      </table>








      </div>


    );
  }
}
