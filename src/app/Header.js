import React from 'react';
import Icon from 'react-icons-kit';
import {NavLink,Link} from "react-router-dom";
import { userCircle,angleDown, bell } from 'react-icons-kit/fa';
import { arrowLeft2,spinner11 } from 'react-icons-kit/icomoon';
import {menu} from "react-icons-kit/entypo";
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {dropDownStyle,hyperLink,hyperLinkLogo,dropdown,upperNav,dropItem,upperNavIcon1,settingsIcon1,dropNotify,
  dropDownLeaves,dropDownClaims,dropDownPayroll,
  notificationIcon1,dropdownContent,floatRight,cardimgleft,navitemStyle1,navitemStyleHome1,navspace,
  navStyle1,downIcon,linkStyle1,dropDownStyleProfile,settingsIcon} from "./Layout.css";
import {cardStyle,cardText,cardTitle,imgStyle} from "./NotificationLayout.css";
import {iconcolor,mainmenu,rightnav,logoright,settingsIconright,notificationIconright,upperNavIconright,btnclose} from "./Header.css";
import {Card,CardTitle,CardText} from "reactstrap";
import { fadeInRight,fadeInLeft } from "react-animations";
import Radium,{StyleRoot} from "radium";
import {SideNav1} from "./SideNav1";
import styles1 from "./Header.css";
import {dropDownStyle1,dropDownLeaves1,dropDownClaims1,dropDownPayroll1,dropDownStyleProfile1,dropDownStyleProfileright} from "./Header.css";

const styles={
  fadeInRight: {
    animation: 'x 0.5s',
    animationName: 'fadeInRight'
  },
  fadeInLeft: {
    animation: 'x 0.5s',
    animationName: 'fadeInLeft'
  }
}
export class Header extends React.Component {
  constructor(props){
    super(props);
      this.state={
        open:false,
        close:true
      }
  }
  openfunc(){
    if(this.state.open){
      return <div className={styles1.sidenav} style={styles.fadeInRight}>
      <p id={btnclose} class="btn-close" onClick={this.closestate.bind(this)}>&times;</p>
      <SideNav1/>
      </div>;
    }
  }
  openstate(){
this.setState({
  open:true,
  close:false
})
}

  closestate(){
    this.setState({
      open:false,
      close:true
    })
  }

render() {
  var open = this.openfunc();

  return (
    <div>
      <Navbar color="faded" light  style={{backgroundColor:'#1768C0'}}>
      <span class={styles1.openslide}>
        <Icon icon={menu} size={40} style={{color:'white'}}  onClick={this.openstate.bind(this)}/>
        <Nav className={rightnav}>

          <NavLink className={logoright} to="/Home">
          <span style={{color:'red'}}>H</span>
          <span style={{color:'white'}}>rms</span></NavLink>

        <UncontrolledDropdown >
        <DropdownToggle nav className={notificationIconright}><Icon icon={bell} size={18} style={{color:'white'}}/></DropdownToggle>
            <DropdownMenu className={dropdownContent}>
            <DropdownItem id={dropNotify}>
               <Icon icon={arrowLeft2}/><span className={floatRight}><Icon icon={spinner11} size={12} style={{color:'black'}}/></span><br/><br/>
            <Card className={cardStyle}>
              <div class="row">
                 <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
                 <div class="col-md-6" style={{marginTop:'1vw'}}>
                 <CardTitle className={cardTitle}>Jane Smith</CardTitle>
                <CardText className={cardText}>Requested for Leave</CardText>
                <CardText className={cardText}>New</CardText> </div>
                </div></Card>
            <Card className={cardStyle}>
            <div class="row">
            <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
            <div class="col-md-6" style={{marginTop:'1vw'}}>
            <CardTitle className={cardTitle}>Jane Smith</CardTitle>
            <CardText className={cardText}>Requested for Leave</CardText>
            <CardText className={cardText}>New</CardText></div>
            </div></Card>
            <Card className={cardStyle}>
            <div class="row">
            <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
            <div class="col-md-6" style={{marginTop:'1vw'}}>
            <CardTitle className={cardTitle}>Jane Smit</CardTitle>
            <CardText className={cardText}>Requested for Leave</CardText>
            <CardText className={cardText}>New</CardText></div>
            </div></Card>
           </DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className={upperNav}>
            <DropdownToggle nav style={{color:'white'}}><Icon icon={userCircle} size={18} style={{color:'white'}} className={upperNavIconright}/></DropdownToggle>
            <DropdownMenu className={dropDownStyleProfileright}>
              <DropdownItem  className={dropItem}><NavLink to="/Profile" id={hyperLink}>Profile</NavLink></DropdownItem>
              <DropdownItem  className={dropItem}><NavLink to="/Login" id={hyperLink}>Logout</NavLink></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown  className={settingsIconright}>
          <DropdownToggle nav style={{color:'white'}}>
          <Link to="/CompanyDetails" className={iconcolor}><Icon icon={ic_settings} size={21} style={{color:'white'}}/></Link>
          </DropdownToggle>
          </UncontrolledDropdown>
          </Nav>
        </span>

        <NavbarBrand href="/#/Home" style={{color:'red',position:'relative',right:'85.9vw',top:'1.45vw',
          fontSize:'2.5vw',fontWeight:'bold',fontFamily:'sanserif'}} className={hyperLinkLogo}>

          <span style={{color:'red'}}>H</span>
          <span style={{color:'white'}}>rms</span>
        </NavbarBrand>
            <Nav className={mainmenu}   id={navStyle1}>
            <UncontrolledDropdown  className={navitemStyleHome1} id={navspace}>
            <DropdownToggle nav style={{color:'white'}}>
            <Link to="/Home" className={iconcolor}>HOME</Link>
            </DropdownToggle>
            </UncontrolledDropdown>

          <UncontrolledDropdown  className={navitemStyle1} id={navspace}>
            <DropdownToggle nav  style={{color:'white'}}>EMPLOYEES<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
              <DropdownMenu className={dropDownStyle1}>
                <DropdownItem id={dropItem}><Link to="/AddEmployee" id={hyperLink}>Add Employee</Link></DropdownItem>
                <DropdownItem id={dropItem}><Link to="/ViewEmployee" id={hyperLink}>Employees List</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          <UncontrolledDropdown className={navitemStyle1} id={navspace}>
                <DropdownToggle nav style={{color:'white'}}>LEAVES & TIME<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
              <DropdownMenu className={dropDownLeaves1}>
                <DropdownItem id={dropItem}><Link to="/Leaves" id={hyperLink}>Leave List</Link></DropdownItem>
            <DropdownItem id={dropItem}><Link to="/Attendance" id={hyperLink}>Attendance List</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          <UncontrolledDropdown  className={navitemStyle1} id={navspace}>
              <DropdownToggle nav  style={{color:'white'}} >CLAIMS<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
              <DropdownMenu className={dropDownClaims1} >
                <DropdownItem id={dropItem}><Link to="/AddClaims" id={hyperLink}>Add Claims</Link></DropdownItem>
                <DropdownItem id={dropItem}><Link to="/ClaimList" id={hyperLink}>Claims List</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown  className={navitemStyle1}>
              <DropdownToggle nav style={{color:'white'}}>PAYROLL<Icon icon={angleDown} className={downIcon}/></DropdownToggle>
            <DropdownMenu className={dropDownPayroll1}>
              <DropdownItem id={dropItem}><Link to="/Payments" id={hyperLink}>Payments</Link></DropdownItem>
              <DropdownItem id={dropItem}><Link to="/Process" id={hyperLink}>Process</Link></DropdownItem>
              <DropdownItem id={dropItem}><Link to="/Statement" id={hyperLink}>Statement</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown  >
          <DropdownToggle nav className={notificationIcon1}><Icon icon={bell} size={18} style={{color:'white'}}/></DropdownToggle>
              <DropdownMenu className={dropdownContent}>
              <DropdownItem id={dropNotify}>
            <Icon icon={arrowLeft2}/><Icon icon={spinner11} className={floatRight} size={12} style={{color:'black'}}/><br/><br/>
              <Card className={cardStyle}>
                <div class="row">
                   <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
                   <div class="col-md-6" style={{marginTop:'0.5vw'}}>
                   <CardTitle className={cardTitle}>Jane Smith</CardTitle>
                  <CardText className={cardText}>Requested for Leave</CardText>
                  <CardText className={cardText}>New</CardText> </div>
                  </div></Card>
              <Card className={cardStyle}>
              <div class="row">
              <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
              <div class="col-md-6" style={{marginTop:'0.5vw'}}>
              <CardTitle className={cardTitle}>Jane Smith</CardTitle>
              <CardText className={cardText}>Requested for Leave</CardText>
              <CardText className={cardText}>New</CardText></div>
              </div></Card>
              <Card className={cardStyle}>
              <div class="row">
              <div class="col-md-6"><img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/></div>
              <div class="col-md-6" style={{marginTop:'0.5vw'}}>
              <CardTitle className={cardTitle}>Jane Smit</CardTitle>
              <CardText className={cardText}>Requested for Leave</CardText>
              <CardText className={cardText}>New</CardText></div>
              </div></Card>
             </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown  className={settingsIcon1} id={navspace}>
            <DropdownToggle nav style={{color:'white'}}>
            <Link to="/CompanyDetails" className={iconcolor}><Icon icon={ic_settings} size={21} style={{color:'white'}}/></Link>
            </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown  className={upperNav}>
              <DropdownToggle nav style={{color:'white'}}><Icon icon={userCircle} size={18} style={{color:'white'}} className={upperNavIcon1}/></DropdownToggle>
              <DropdownMenu className={dropDownStyleProfile1}>
                <DropdownItem  id={dropItem}><NavLink to="/Profile" id={hyperLink}>Profile</NavLink></DropdownItem>
                <DropdownItem  id={dropItem}><NavLink to="/Login" id={hyperLink}>Logout</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


            </Nav>
        </Navbar>
        <span>{open}</span>
      </div>
    );
  }
}
