import React from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";
import Icon from 'react-icons-kit';
import { ic_create,ic_delete  } from 'react-icons-kit/md';
import {displayContainer,pageHeading,hrStyle,exampletable,orange} from "../Layout.css";

export class HolidayPage extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <div className={displayContainer}>
      <p className={pageHeading}>List of Holidays</p>
      <hr className={hrStyle}/>
      <table class="table table-bordered  table-responsive-md" id={exampletable}>
      <thead>
      <tr className={orange}>
          <th>Holiday</th>
          <th>Date</th>
          <th>Day</th>
          <th>Actions</th>

      </tr>
      </thead>
      <tbody>
         <tr>
             <td>Good Friday</td>
             <td>12/04/18</td>
             <td>Friday</td>
             <td><Icon icon={ic_create} size={20}/>
                  <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /></td>

         </tr>
         <tr>
             <td>Ambedkar Jayanti</td>
             <td>14/04/18</td>
             <td>Saturday</td>
             <td><Icon icon={ic_create} size={20}/>
                  <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /></td>

         </tr>
         <tr>
             <td>Holi</td>
             <td>14/05/18</td>
             <td>Tuesday</td>
             <td><Icon icon={ic_create} size={20}/>
                  <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={19} /></td>

         </tr>
         </tbody>
         </table>
      </div>
      <Footer/>
      </div>
    );
  }
}
