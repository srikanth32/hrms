import React from "react";
import {render} from "react-dom";
import {HashRouter as Router, Route,Link} from "react-router-dom";
import {Profile} from "./Profileicon/Profile";
import {Logout} from "./Profileicon/Logout";
import {Home} from "./Home/Home";
import {AddComponent} from "./Settings/AddComponent";
import {CompanyDetails} from "./Settings/CompanyDetails";
import {AddLeave} from "./Settings/AddLeave";
import {AttendanceSettings} from "./Settings/AttendanceSettings";
import {AddEmployee} from "./Employee/AddEmployee";
import {PersonalDetails} from "./Employee/PersonalDetails";
import {ProfessionalDetails} from "./Employee/ProfessionalDetails";
import {BankDetails} from "./Employee/BankDetails";
import {LoginInfo} from "./Employee/LoginInfo";
import {EmpDocs} from "./Employee/EmpDocs";
import {JobHistory} from "./Employee/JobHistory";
import {ViewEmployee} from "./Employee/ViewEmployee";
import {EditLeave} from "./Leaves/EditLeave";
import {LeaveList} from "./Leaves/LeaveList";
import {Attendance} from "./Leaves/Attendance";
import {AddClaims} from "./Claims/AddClaims";
import {ClaimList} from "./Claims/ClaimList";
import {Payments} from "./Payroll/Payments";
import {Process} from "./Payroll/Process";
import {Statement} from "./Payroll/Statement";
import {LandingPage} from "./Registration/LandingPage";
import {ViewFeatures} from "./Registration/ViewFeatures";
import {ViewFeature1} from "./Registration/ViewFeature1";
import {ViewFeature2} from "./Registration/ViewFeature2";
import {ViewFeature3} from "./Registration/ViewFeature3";
import {ViewFeature4} from "./Registration/ViewFeature4";
import {SignUp} from "./Registration/SignUp";
import {VerifyAccount} from "./Registration/VerifyAccount";
import {CreatePassword} from "./Registration/CreatePassword";
import {Login} from "./Registration/Login";
import {EmploymentStatus} from "./Home/EmploymentStatus";
import {DepartmentsPage} from "./Home/DepartmentsPage";
import {HolidayPage} from "./Home/HolidayPage";
import {AnnouncementList} from "./Home/Announcementlist";
import {EventsList} from "./Home/EventsList";
import {EmployeeHome} from "./EmployeeModule/EmployeeHome";
import {EmployeeAttendance} from "./EmployeeModule/EmployeeAttendance";
import {EmployeeLeaves} from "./EmployeeModule/EmployeeLeaves";
import {EmployeeProjects} from "./EmployeeModule/EmployeeProjects";
import {EmployeePayroll} from "./EmployeeModule/EmployeePayroll";
import {EmployeeClaims} from "./EmployeeModule/EmployeeClaims";
import {ContactUs} from "./ContactUs";
import {Page} from "./Page";


export class App extends React.Component{
  render(){
    return(
      <Router>
      <div>
      <Route path="/LandingPage" component={LandingPage}/>
      <Route path="/CreatePassword" component={CreatePassword}/>
<Route path="/ViewFeatures" component={ViewFeatures}/>
<Route path="/ViewFeature1" component={ViewFeature1}/>
<Route path="/ViewFeature2" component={ViewFeature2}/>
<Route path="/ViewFeature3" component={ViewFeature3}/>
<Route path="/ViewFeature4" component={ViewFeature4}/>
<Route path="/SignUp" component={SignUp}/>
<Route path="/VerifyAccount" component={VerifyAccount}/>
<Route path="/Login" component={Login}/>
<Route path="/AddComponent" component={AddComponent}/>
<Route path="/AddLeave" component={AddLeave}/>
<Route path="/AttendanceSettings" component={AttendanceSettings}/>
<Route path="/CompanyDetails" component={CompanyDetails}/>
<Route path="/AddEmployee" component={AddEmployee}/>
<Route path="/PersonalDetails" component={PersonalDetails}/>
<Route path="/ProfessionalDetails" component={ProfessionalDetails}/>
<Route path="/BankDetails" component={BankDetails}/>
<Route path="/LoginInfo" component={LoginInfo}/>
<Route path="/JobHistory" component={JobHistory}/>
<Route path="/EmpDocs" component={EmpDocs}/>
<Route path="/ViewEmployee" component={ViewEmployee}/>
<Route path="/EditLeave" component={EditLeave}/>
<Route path="/Leaves" component={LeaveList}/>
<Route path="/Attendance" component={Attendance}/>
<Route path="/ClaimList" component={ClaimList}/>
<Route path="/AddClaims" component={AddClaims}/>
<Route path="/Payments" component={Payments}/>
<Route path="/Process" component={Process}/>
<Route path="/Statement" component={Statement}/>
<Route path="/Home" component={Home}/>
<Route path="/EmploymentStatus" component={EmploymentStatus}/>
<Route path="/DepartmentsPage" component={DepartmentsPage}/>
<Route path="/HolidayPage" component={HolidayPage}/>
<Route path="/EventsList" component={EventsList}/>
<Route path="/AnnouncementList" component={AnnouncementList}/>
<Route path="/EmployeeHome" component={EmployeeHome}/>
<Route path="/EmployeeAttendance" component={EmployeeAttendance}/>
<Route path="/EmployeeLeaves" component={EmployeeLeaves}/>
<Route path="/EmployeeProjects" component={EmployeeProjects}/>
<Route path="/EmployeePayroll" component={EmployeePayroll}/>
<Route path="/EmployeeClaims" component={EmployeeClaims}/>
<Route path="/ContactUs" component={ContactUs}/>
<Route path="/Profile" component={Profile}/>
<Route path="/Logout" componennt={Logout}/>
      <Route path="/Page" component={Page}/>
      </div>
      </Router>
    );
  }
}
render(<App/>, window.document.getElementById("app"));
