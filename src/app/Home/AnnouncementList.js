import React from "react";
import {displayContainer,orange,exampletable} from "../Layout.css";
import {hrStyle,pageHeading} from "../Layout.css";
import Icon from 'react-icons-kit';
import { ic_create,ic_delete  } from 'react-icons-kit/md';
import {Header} from "../Header";
import {Footer} from "../Footer";
import {labelStylepopup,savebtn1,btnstyle} from "../Layout.css";
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../admin/LayoutAdmin.css";
import styles from "../Layout.css";
export class AnnouncementList extends React.Component{
  render(){
    return(
      <div>
      <Header/>
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
      <td>
      <Icon icon={ic_create} size={20}/>
          <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={18} />
</td>
</tr>
</tbody>
</table>
<span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter" id={styles.modal}>
Add Announcemnt
   </span>
   <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLongTitle" className={orange}>Add Announcemnt</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
         <div class="form-row">
           <div class="col-md-6 mb-3">
             <label className={labelStylepopup}>Announcement Title</label>
             <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
           </div>
           <div class="col-md-6 mb-3">
             <label className={labelStylepopup}>Date</label>
             <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
           </div>
           <div class="col-md-12 mb-3">
             <label className={labelStylepopup}>Description</label>
             <input type="textarea" class="form-control" id={inputstyle} placeholder="" />
           </div>
           </div>
           </div>
             <button type="button" class="btn btn-outline-warning" data-dismiss="modal" style={{marginLeft:'30vw',marginBottom:'3vw',width:'46%'}}>Save</button>
           </div>
           </div>
           </div>




      </div>
      <Footer/>
      </div>
    );

  }
}
