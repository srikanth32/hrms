import React from "react";
import {Container} from "reactstrap";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Logout extends React.Component {
  yes(){
  alert("Hey! You are logged out now!");

  }
  no(){
  alert("Hey! You are still logged In.");
  }
  render() {

    return(
      <div>
      <Header/>
      <Container style={{height:'32.7vw'}}>
       <p style={{margin:'12vw 20vw -12vw 27vw'}}>Do you want to Log out??</p>
   <button onClick={this.yes} type="button" class="btn btn-success" style={{margin:'15vw 0vw 0vw 27vw'}}>Yes</button>
   <button onClick={this.no} type="button" class="btn btn-danger" style={{margin:'15vw 0vw 0vw 5vw'}}>No</button>
    </Container>
      <Footer/>
      </div>
    );
  }
}
