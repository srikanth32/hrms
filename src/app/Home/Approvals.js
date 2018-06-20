import React from "react";
import {displayContainer,orange,exampletable} from "../Layout.css";
import {hrStyle,pageHeading} from "../Layout.css";
import Icon from 'react-icons-kit';
import { ic_create,ic_delete  } from 'react-icons-kit/md';
import {Header} from "../Header";
import {Footer} from "../Footer";
export class AnnouncementList extends React.Component{
  render(){
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
      <p><span className={pageHeading}>Announcements</span></p>
      <hr className={hrStyle}/>
      <table class="table table-bordered table-responsive-md" id={exampletable}>
      <thead className={orange}>
      <tr>
      <th>Announcemnt Title</th>
      <th>Description</th>
      <th>Date</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Thursday Concession Day Ticket</td>
      <td>Allows admission on Thursday 12 July to students (with a valid student card), children 14 to 17 and customers 60 and over...</td>
      <td>09/04/2018</td>
      <td><Icon icon={ic_create} size={20}/>
          <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={18} /> </td>
      </tr>
      <tr>
      <td>Thursday Concession Day Ticket</td>
      <td>Allows admission on Thursday 12 July to students (with a valid student card), children 14 to 17 and customers 60 and over...</td>
      <td>09/04/2018</td>
      <td><Icon icon={ic_create} size={20}/>
          <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={18} /> </td>
      </tr>
      </tbody>

      </table>

      </div>
      <Footer/>
      </div>
    );

  }
}
