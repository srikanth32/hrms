import React from "react";
import {displayContainer,orange,exampletable,floatRight} from "../Layout.css";
import {hrStyle,pageHeading,searchfilter} from "../Layout.css";
import {inputstyle1} from "./CardStyling.css";
import Icon from 'react-icons-kit';

  import { filter,search  } from 'react-icons-kit/fa';
import { ic_create,ic_delete  } from 'react-icons-kit/md';
import {Header} from "../Header";
import {Footer} from "../Footer";
import styles from "../Layout.css";
import {labelStylepopup,savebtn1,btnstyle} from "../Layout.css";
import {inputstyle,modalbutton,labelStyle1,labelStyle2} from "../Admin/LayoutAdmin.css";

export class EventsList extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <div className={displayContainer}>

      <p className={pageHeading}>Events
  </p>
      <hr className={hrStyle}/>
      <table class="table table-bordered table-responsive-md" id={exampletable}>
      <thead className={orange}>
      <tr>
      <th>Event Name</th>
      <th>Description</th>
      <th>Date</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>David</td>
      <td> Completes 6 years</td>
      <td>09/04/2018</td>
      <td><Icon icon={ic_create} size={20}/>
          <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={18} /> </td>
      </tr>
      <tr>
      <td>Carol</td>
      <td>Farewell Party</td>
      <td>09/04/2018</td>
      <td><Icon icon={ic_create} size={20}/>
          <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
      </tr>
      </tbody>
      </table>
     <span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter" id={styles.modal}>
    Add Event
        </span>
        <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle" className={orange}>Add Event</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label className={labelStylepopup}>Event Name</label>
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
