package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/pborman/uuid"
)

//var db *sql.DB
//var err error
//var tpl *template.Template

type RegisterProfessional struct {
	FirstName        string `json:"firstname,omitempty"`
	LastName         string `json:"lastname,omitempty"`
	Email            string `json:"email,omitempty"`
	EmployeeID       string `json:"empid,omitempty"`
	Designation      string `json:"designation,omitempty"`
	Department       string `json:"department,omitempty"`
	EmployeeType     string `json:"emptype,omitempty"`
	ReportingManager string `json:"reportingmanager,omitempty"`
	DateOfJoining    string `json:"doj,omitempty"`
	Location         string `json:"location,omitempty"`
	OvertimePay      string `json:"overtime,omitempty"`
}

func professionalDetails(res http.ResponseWriter, req *http.Request) {
	status := "true"
	//msg := "Registration Successful"
	code := 0
	check, err := getDBConnectivity(db)
	if !check {
		fmt.Println(err)
		status = "fail"
		code = 1
		//msg = "error connecting to db"
	}

	var js RegisterProfessional
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into professional_details values('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.FirstName, js.LastName, js.Email,
		js.EmployeeID, js.Designation, js.Department, js.EmployeeType, js.ReportingManager, js.DateOfJoining, js.Location, js.OvertimePay)
	_, err = db.Exec(q)
	if err != nil {
		fmt.Println(err)
		status = "fail"
		//msg = "error while while inserting data"
	}

	w := Response{Status: status, Code: code}
	resp, err := json.Marshal(w)
	if err != nil {
		fmt.Println("error:", err)
	}

	//fmt.Println(string(resp))
	fmt.Fprintf(res, string(resp))

}
