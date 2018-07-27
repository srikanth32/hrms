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

type AddJobHistory struct {
	CompanyName      string `json:"companyname,omitempty"`
	Department       string `json:"department,omitempty"`
	Designation      string `json:"designation,omitempty"`
	ReportingManager string `json:"reportmanager,omitempty"`
	DOJ              string `json:"doj,omitempty"`
	DOR              string `json:"dor,omitempty"`
}

func jobHistory(res http.ResponseWriter, req *http.Request) {
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

	var js AddJobHistory
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into job_history values('%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.CompanyName, js.Department, js.Designation,
		js.ReportingManager, js.DOJ, js.DOR)
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
